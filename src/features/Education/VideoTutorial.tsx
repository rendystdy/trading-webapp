import Banner from '@/components/Banner'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import * as Models from '@/interfaces/videos-response'
import { cn } from '@/lib/utils'
import { useAppSelector, useFetch } from '@/app/hooks'
import { fetchVideoAsync } from './educationSlice'
import debounce from 'lodash/debounce';

const filterVideoByCategory = (videoList: Models.VideosResponse.VideoListEntity[] | null | undefined, categoryIdToFilter: string) => {
    if (categoryIdToFilter === 'all') {
        return videoList;
    }

    if (videoList) {
        return videoList.filter(video => video.videoCategory.videoCategoryId?.includes(categoryIdToFilter));
    }

    return [];
}

function VideoTutorial() {
    const [value, setValue] = useState('all');
    const [currentPage, setCurrentPage] = useState(0);
    const [query, setQuery] = useState('');
    const perPage = 6;
    const [offset, setOffset] = useState(0);
    const videos = useAppSelector(state => state.education.videos);
    const status = useAppSelector(state => state.education.status);
    const filteredVideo = filterVideoByCategory(videos.data?.videoList, videos.data?.categoryList ? videos.data?.categoryList[0]?.videoCategoryId : '');
    const [data, setData] = useState<Models.VideosResponse.VideoListEntity[]>(filteredVideo || []);
    let categoryList = videos.data?.categoryList;
    const categoryById = categoryList?.filter(item => item.videoCategoryId.includes(value || ''));
    const categoryName = categoryById && categoryById?.length > 0 ? categoryById[0].categoryName : '-';
    const categoryDescription = categoryById && categoryById?.length > 0 ? categoryById[0].descriptionEnglish : '-';
    useFetch(fetchVideoAsync);

    useEffect(() => {
        setData(filteredVideo || [])
    }, [status]);

    const handleNext = (currPage: number) => {
        const pageCount = Math.ceil(data ? data.length / perPage : 0);
        if (currPage !== (pageCount - 1)) {
            const offset = (currPage += 1) * perPage;
            setCurrentPage(prevCurrPage => prevCurrPage += 1);
            setOffset(offset);

            const newData = data ? data : [];

            return setData(newData);
        }

        return;
    }

    const handlePrev = (currPage: number) => {
        if (currPage !== 0) {
            const offset = (currPage -= 1) * perPage;
            setCurrentPage(prevCurrPage => prevCurrPage -= 1);
            setOffset(offset);

            const newData = data ? data : [];

            return setData(newData);
        }

        return;
    }

    const onValueChange = (val: string) => {
        if (val !== 'all') {
            const filteredCategoryId = videos.data?.categoryList?.filter(item => item.videoCategoryId === val);
            const filteredVideo = filterVideoByCategory(videos.data.videoList ? videos.data.videoList : [], filteredCategoryId ? filteredCategoryId[0].videoCategoryId : '');
            setData(filteredVideo || []);
            setCurrentPage(0);
            setOffset(0);
            setQuery('');
            return setValue(val);
        } else {
            const filteredVideo = filterVideoByCategory(videos.data.videoList ? videos.data.videoList : [], videos.data.categoryList ? videos.data.categoryList[0].videoCategoryId : '');
            setData(filteredVideo || []);
            setCurrentPage(0);
            setOffset(0);
            setQuery('');
            return setValue(val);
        }

    }

    const handleSearch = useCallback(
        debounce((valueQuery) => {
            if (valueQuery.trim().length === 0) {
                return onValueChange('all');
            } else {
                if (value !== 'all') {
                    const filteredCategoryId = videos.data?.categoryList?.filter(item => item.videoCategoryId === value);
                    const filteredVideo = filterVideoByCategory(videos.data.videoList ? videos.data.videoList : [], filteredCategoryId ? filteredCategoryId[0].videoCategoryId : '');
                    // Add your API call or search logic here
                    const query = filteredVideo?.filter(item => item.titleSummary.toLowerCase().includes(valueQuery.toLowerCase()));
                    setData(query || [])
                } else {
                    const filteredVideo = filterVideoByCategory(videos.data.videoList ? videos.data.videoList : [], videos.data.categoryList ? videos.data.categoryList[0].videoCategoryId : '');
                    // Add your API call or search logic here
                    const query = filteredVideo?.filter(item => item.titleSummary.toLowerCase().includes(valueQuery.toLowerCase()));
                    setData(query || [])
                }
            }

        }, 1000), // Adjust the delay as needed
        []
    );

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        setQuery(value);
        handleSearch(value);
    };

    return (
        <div className='dark:bg-veryDarkBlueTertiary'>
            <Banner title='Video Tutorial' description='Explore our latest video tutorials designed to refine and improve your trading skills' />
            <div className='flex flex-col md:flex-row md:gap-2 md:items-start md:justify-between px-5 py-7'>
                <div className='w-full md:w-1/4'>
                    <Input value={query} onChange={handleChange} className='bg-veryLightGraySecondary rounded-xl mb-4' type='text' placeholder='Search...' />
                    <Select defaultValue='all' value={value} onValueChange={onValueChange}>
                        <SelectTrigger className="md:hidden w-full gap-x-4 bg-darkBlue text-white justify-center">
                            <img src="/assets/images/icon_folder.png" className='object-contain' alt="icon" />
                            <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {status === 'loading' ? [1, 2, 3, 4, 5, 6]?.map((_, index) => (
                                    <SelectItem className='text-wrap' key={index} value={`cat-${index}`}>-</SelectItem>
                                )) : categoryList?.map(category => (
                                    <SelectItem className='text-wrap' key={category.videoCategoryId} value={category.videoCategoryId}>{category.categoryName.substring(0, 38)}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className='hidden md:block'>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <img className='h-7 w-5 object-contain' src="/assets/images/icon_folder_yellow.png" alt="icon" />
                            <h1 className='font-poppins font-bold text-xl text-yellow-400'>Categories</h1>
                        </div>
                        <ul className={cn('flex flex-col gap-y-4', status === 'loading' ? 'animate-pulse' : 'animate-none')}>
                            {status === 'loading' ? [1, 2, 3, 4, 5, 6]?.map((_, index) => (
                                <li className='bg-gray px-7 py-2 h-6 w-full rounded-full' key={index} />
                            )) : categoryList?.map(item => (
                                <li onClick={() => onValueChange(item.videoCategoryId)} className={cn('font-poppins font-bold px-7 py-2 rounded-full text-base text-veryDarkGrey cursor-pointer hover:bg-yellow-400 hover:text-white', value === item.videoCategoryId ? 'bg-yellow-400 text-white' : 'bg-transparent text-veryDarkGrey dark:text-white')} key={item.videoCategoryId}>{item.categoryName.substring(0, 38)}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <div className='hidden md:flex mb-10 flex-col gap-y-6 justify-center bg-open-account bg-cover bg-center bg-no-repeat w-full h-full rounded-xl px-24 py-16'>
                        <h1 className='font-poppins font-bold text-5xl text-white'>{categoryName}</h1>
                        <p className='font-poppins font-normal text-xl text-white line-clamp-4'>{categoryDescription}</p>
                    </div>
                    <div className={cn('grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-4 my-4 md:my-0', status === 'loading' ? 'animate-pulse' : 'animate-none')}>
                        {status === 'loading' ? [1, 2, 3, 4, 5, 6].map((_, index) => (
                            <Card key={index} className='h-48 w-full border-0 shadow-transparent rounded-xl overflow-hidden bg-gray' />
                        )) : data.slice(offset, offset + perPage).map(item => (
                            <Card key={item.videoId} className='border-0 shadow-transparent rounded-xl overflow-hidden dark:bg-transparent'>
                                <CardHeader className='p-0'>
                                    <iframe
                                        src={item.videoUrlEnglish}
                                        frameBorder='0'
                                        className='w-auto h-52 rounded-xl'
                                        // allow='autoplay; encrypted-media'
                                        allowFullScreen
                                    // title='video'
                                    />
                                    <CardDescription className='font-poppins text-sm text-darkBlueSecondary font-bold dark:text-mainBlue'>{categoryName}</CardDescription>
                                    <CardTitle className='font-poppins font-bold text-xl text-veryDarkBlue line-clamp-2 md:text-2xl dark:text-white'>{item.titleSummary}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-0'>
                                    <p className='font-poppins font-normal text-base md:text-lg text-veryDarkGrey line-clamp-4 dark:text-white'>{item.descriptionEnglish}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    {(status !== 'loading' && data.length > perPage) && (
                        <div className="flex items-center justify-center gap-x-6 my-9">
                            <ChevronLeftCircle onClick={() => handlePrev(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer", currentPage === 0 ? "text-gray" : "text-darkBlueSecondary dark:text-white")} />
                            <ChevronRightCircle onClick={() => handleNext(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer dark:text-white")} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default VideoTutorial
