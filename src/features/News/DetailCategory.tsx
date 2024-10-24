import Banner from '@/components/Banner'
import React, { useState } from 'react'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from '@/components/ui/separator'
import * as Models from '@/interfaces/news-response';
import { useAppSelector } from '@/app/hooks';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useLocation, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react'

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'Desember',
]

const DUMMY_DATA = {
    tabeleHead: [
        'Country',
        'Date',
        'National Holiday',
    ],
    tableBody: [
        {
            country: 'Canada',
            Date: 'Oct 9, 2023',
            nationalHoliday: 'Thanksgiving Day',
        },
        {
            country: 'Japan',
            Date: 'Oct 9, 2023',
            nationalHoliday: 'Thanksgiving Day',
        },
        {
            country: 'United States',
            Date: 'Oct 9, 2023',
            nationalHoliday: 'Thanksgiving Day',
        },
        {
            country: 'New Zealand',
            Date: 'Oct 9, 2023',
            nationalHoliday: 'Thanksgiving Day',
        },
    ]
}

const filterByPostId = (data: Models.NewsResponse.PostListEntity[] | null | undefined, postId: string | undefined) => {
    if (data && data.length > 0) {
        return data.filter(item => item.postId === postId)[0];
    }

    return {
        postId: '',
        postTitle: '',
        description: '',
        slug: '',
        postCategoryIds: [],
        postTagIds: [],
        mediaPath: '',
        seoTitle: null,
        metaDescription: null,
        publishDate: '',
    }
}

const DetailCategory = () => {
    const { postId } = useParams();
    const { state } = useLocation();
    const news = useAppSelector(state => state.announcement.news);
    const [value, setValue] = useState('');
    const detail: Models.NewsResponse.PostListEntity = filterByPostId(news?.data?.postList, postId);
    const publishDate = detail?.publishDate ? new Date(detail.publishDate).toLocaleDateString() : '-';

    return (
        <div className='dark:bg-veryDarkBlueTertiary'>
            <Banner title='Announcement' description='Get the latest Company News here are important between you and me.' />
            <div className='px-4 py-7 md:px-44 md:py-9'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='font-poppins text-base md:text-lg font-normal text-yellow-400' href="/announcement">{state?.categoryName || '-'}</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='font-poppins text-base md:text-lg font-normal text-darkGrey line-clamp-1 dark:text-white'>{detail?.slug}</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Separator className='bg-black/10 my-4 md:my-7 dark:bg-white/10' />
                <div>
                    <span className='font-poppins font-normal text-darkGrey text-base md:text-xl dark:text-grayishCyan'>{publishDate}</span>
                    <h1 className='font-poppins text-veryDarkGreySecond font-semibold text-2xl md:text-4xl dark:text-white'>{detail?.postTitle}</h1>
                    <Select value={value} onValueChange={setValue}>
                        <div className='flex md:justify-end'>
                            <SelectTrigger className="w-full md:w-1/3 my-6 dark:bg-white dark:text-veryDarkGrey">
                                <SelectValue placeholder="Select a Month" />
                            </SelectTrigger>
                        </div>
                        <SelectContent className='dark:bg-white'>
                            <SelectGroup>
                                {MONTHS.map((item, index) => (
                                    <SelectItem key={index} value={item}>{item}</SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Table className='border'>
                        <TableHeader className='bg-darkBlueSecondary'>
                            <TableRow>
                                {DUMMY_DATA.tabeleHead.map((item, index) => (
                                    <TableHead key={index.toString()} className='text-white'>{item}</TableHead>
                                ))}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {DUMMY_DATA.tableBody.map((item, index) => (
                                <TableRow className={cn(index % 2 ? "bg-white border-b border-veryLightGray" : "bg-veryLightGray border-b border-veryLightGray")} key={index.toString()}>
                                    <TableCell className='w-1/4 dark:text-veryDarkGrey'>{item.country}</TableCell>
                                    <TableCell className='w-1/4 dark:text-veryDarkGrey'>{item.Date}</TableCell>
                                    <TableCell className='w-1/4 dark:text-veryDarkGrey'>{item.nationalHoliday}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className='px-4 py-7 md:px-20 md:py-9'>
                <Separator className='bg-black/10 my-4 md:my-7 dark:bg-white/10' />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6'>
                    <Card className='shadow-xl dark:bg-veryDarkBlue'>
                        <CardHeader>
                            <p className='font-poppins font-normal text-base md:text-lg text-darkGrey dark:text-grayishCyan'>JAN 10, 2023</p>
                            <CardTitle className='font-poppins font-semibold text-base text-veryDarkGreySecond line-clamp-2 md:text-4xl dark:text-white'>Aut dolor fugit eos similique aut galisum iusto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='font-poppins font-normal text-base md:text-2xl text-darkGrey line-clamp-3 dark:text-white'>Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates voluptas et expedita accusantium.</p>
                        </CardContent>
                        <CardFooter>
                            <p className='dark:text-yellow-400'>Read More</p>
                            <ChevronRight className='dark:text-yellow-400' />
                        </CardFooter>
                    </Card>
                    <Card className='shadow-xl dark:bg-veryDarkBlue'>
                        <CardHeader>
                            <p className='font-poppins font-normal text-base md:text-lg text-darkGrey dark:text-grayishCyan'>JAN 10, 2023</p>
                            <CardTitle className='font-poppins font-semibold text-base text-veryDarkGreySecond line-clamp-2 md:text-4xl dark:text-white'>Aut dolor fugit eos similique aut galisum iusto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='font-poppins font-normal text-base md:text-2xl text-darkGrey line-clamp-3 dark:text-white'>Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates voluptas et expedita accusantium.</p>
                        </CardContent>
                        <CardFooter>
                            <p className='dark:text-yellow-400'>Read More</p>
                            <ChevronRight className='dark:text-yellow-400' />
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default DetailCategory
