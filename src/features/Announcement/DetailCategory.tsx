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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

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

const DetailCategory = () => {
    const news = useAppSelector(state => state.announcement.news);
    const [value, setValue] = useState('');
    const detail: Models.NewsResponse.PostListEntity = news.data?.postList ? news.data?.postList[0] : {
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
    };
    const publishDate = new Date(detail.publishDate).toLocaleDateString();
    return (
        <div>
            <Banner />
            <div className='px-4 py-7 md:px-44 md:py-9'>
                <Breadcrumb>
                    <BreadcrumbList>
                        <BreadcrumbItem>
                            <BreadcrumbLink className='font-poppins text-base md:text-xl font-normal text-yellow-400' href="/">Holidays Schedule</BreadcrumbLink>
                        </BreadcrumbItem>
                        <BreadcrumbSeparator />
                        <BreadcrumbItem>
                            <BreadcrumbPage className='font-poppins text-base md:text-xl font-normal text-darkGrey'>Market holidays list for 2023 -</BreadcrumbPage>
                        </BreadcrumbItem>
                    </BreadcrumbList>
                </Breadcrumb>
                <Separator className='bg-black/10 my-4 md:my-7' />
                <div>
                    <span className='font-poppins font-normal text-darkGrey text-base md:text-xl'>{publishDate}</span>
                    <h1 className='font-poppins text-veryDarkGreySecond font-semibold text-2xl md:text-4xl'>{detail.postTitle}</h1>
                    <Select value={value} onValueChange={setValue}>
                        <div className='flex md:justify-end'>
                            <SelectTrigger className="w-full md:w-1/3 my-6">
                                <SelectValue placeholder="Select a Month" />
                            </SelectTrigger>
                        </div>
                        <SelectContent>
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
                                <TableRow className={cn(index % 2 ? "bg-white" : "bg-veryLightGray")} key={index.toString()}>
                                    <TableCell className='w-1/4'>{item.country}</TableCell>
                                    <TableCell className='w-1/4'>{item.Date}</TableCell>
                                    <TableCell className='w-1/4'>{item.nationalHoliday}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </div>
            <div className='px-4 py-7 md:px-20 md:py-9'>
                <Separator className='bg-black/10 my-4 md:my-7' />
                <div className='grid grid-cols-1 md:grid-cols-2 gap-y-6 md:gap-x-6'>
                    <Card className='shadow-xl'>
                        <CardHeader>
                            <p className='font-poppins font-normal text-base md:text-lg text-darkGrey'>JAN 10, 2023</p>
                            <CardTitle className='font-poppins font-semibold text-base text-veryDarkGreySecond line-clamp-2 md:text-4xl'>Aut dolor fugit eos similique aut galisum iusto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='font-poppins font-normal text-base md:text-2xl text-darkGrey line-clamp-3'>Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates voluptas et expedita accusantium.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Read More</p>
                        </CardFooter>
                    </Card>
                    <Card className='shadow-xl'>
                        <CardHeader>
                            <p className='font-poppins font-normal text-base md:text-lg text-darkGrey'>JAN 10, 2023</p>
                            <CardTitle className='font-poppins font-semibold text-base text-veryDarkGreySecond line-clamp-2 md:text-4xl'>Aut dolor fugit eos similique aut galisum iusto</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='font-poppins font-normal text-base md:text-2xl text-darkGrey line-clamp-3'>Non exercitationem omnis et nihil quidem ut dolorem officia rem quis sunt aut voluptates voluptas et expedita accusantium.</p>
                        </CardContent>
                        <CardFooter>
                            <p>Read More</p>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default DetailCategory
