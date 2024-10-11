import Banner from '@/components/Banner'
import React, {useState} from 'react'
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

import videos from '@/json/videos-json.json'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { ChevronLeftCircle, ChevronRightCircle } from 'lucide-react'
import * as Models from '@/interfaces/videos-response'
import { cn } from '@/lib/utils'

function VideoTutorial() {
  const [tabIndex, setTabIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [perPage, setPerPage] = useState(6);
  const [offset, setOffset] = useState(0);
//   const news = useAppSelector(state => state.announcement.news);
  const videosResponse = videos;
  const [data, setData] = useState<Models.VideosResponse.VideoListEntity[]>(videos.data.videoList ? videos.data.videoList.slice(offset, offset + perPage) : []);

    const handleNext = (currPage: number) => {
        const pageCount = Math.ceil(videos.data.videoList ? videos.data.videoList.length / perPage : 0);
        if (currPage !== (pageCount - 1)) {
            const offset = (currPage += 1) * perPage;
            setCurrentPage(prevCurrPage => prevCurrPage += 1);
            setOffset(offset);

            const newData = videos.data.videoList ? videos.data.videoList?.slice(offset, offset + perPage) : [];

            return setData(newData);
        }

        return;
    }

    const handlePrev = (currPage: number) => {
        if (currPage !== 0) {
            const offset = (currPage -= 1) * perPage;
            setCurrentPage(prevCurrPage => prevCurrPage -= 1);
            setOffset(offset);

            const newData = videos.data.videoList ? videos.data.videoList?.slice(offset, offset + perPage) : [];

            return setData(newData);
        }

        return;
    }
    return (
        <div>
            <Banner title='Video Tutorial' description='Explore our latest video tutorials designed to refine and improve your trading skills' />
            <div className='flex flex-col md:flex-row md:gap-2 md:items-start md:justify-between px-5 py-7'>
                <div className='w-full md:w-1/4'>
                    <Input className='bg-veryLightGraySecondary rounded-xl mb-4' type='text' placeholder='Search...' />
                    <Select>
                        <SelectTrigger className="md:hidden w-full gap-x-4 bg-darkBlue text-white justify-center">
                            <img src="/icon_folder.png" className='object-contain' alt="icon" />
                            <SelectValue placeholder="Categories" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                {videosResponse.data.categoryList.map(category => (
                                    <SelectItem className='text-wrap' key={category.videoCategoryId} value={category.categoryName}>{category.categoryName.substring(0, 38)}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <div className='hidden md:block'>
                        <div className='flex items-center gap-x-2 mb-2'>
                            <img className='h-7 w-5 object-contain' src="/icon_folder_yellow.png" alt="icon" />
                            <h1 className='font-poppins font-bold text-xl text-yellow-400'>Categories</h1>
                        </div>
                        <ul className='flex flex-col'>
                            {videosResponse.data.categoryList.map(item => (
                                <li className='font-poppins font-bold px-7 py-2 rounded-full text-base text-veryDarkGrey cursor-pointer hover:bg-yellow-400 hover:text-white' key={item.videoCategoryId}>{item.categoryName.substring(0, 38)}</li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className='w-full md:w-3/4'>
                    <div className='hidden md:flex mb-10 flex-col gap-y-6 justify-center bg-open-account bg-cover bg-center bg-no-repeat w-full h-full rounded-xl px-24 py-16'>
                        <h1 className='font-poppins font-bold text-5xl text-white'>Open Account</h1>
                        <p className='font-poppins font-normal text-xl text-white'>Learn the basics of currency trading in this introduction to the most traded market in the world. Find out how Forex trading works and who the major players are.</p>
                    </div>
                    <div className='grid grid-cols-1 gap-y-4 md:grid-cols-3 md:gap-4 my-4 md:my-0'>
                        {data.map(item => (
                            <Card className='border-0 shadow-transparent rounded-xl overflow-hidden'>
                                <CardHeader className='p-0'>
                                    <iframe
                                        src={item.videoUrlEnglish}
                                        frameBorder='0'
                                        className='w-auto h-52 rounded-xl'
                                        // allow='autoplay; encrypted-media'
                                        allowFullScreen
                                    // title='video'
                                    />
                                    <CardDescription className='font-poppins text-sm text-darkBlueSecondary font-bold'>Open Account</CardDescription>
                                    <CardTitle className='font-poppins font-bold text-xl text-veryDarkBlue line-clamp-2 md:text-2xl'>{item.titleSummary}</CardTitle>
                                </CardHeader>
                                <CardContent className='p-0'>
                                    <p className='font-poppins font-normal text-base md:text-lg text-veryDarkGrey line-clamp-4'>{item.descriptionEnglish}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-x-6 my-9">
                        <ChevronLeftCircle onClick={() => handlePrev(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer", currentPage === 0 ? "text-gray" : "text-darkBlueSecondary")} />
                        <ChevronRightCircle onClick={() => handleNext(currentPage)} className={cn("h-11 w-11 text-darkBlueSecondary cursor-pointer")} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoTutorial
