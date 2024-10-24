import { Separator } from '@radix-ui/react-separator'
import React from 'react'

import * as Models from '@/interfaces/account-details'

import styles from './accountDetails.module.css'
import { cn } from '@/lib/utils'
import { useAppSelector, useFetch } from '@/app/hooks'
import { fetchAccountDetailsAsync } from './profileSlice'

function ProfileDetails() {
    const accountDetails = useAppSelector(state => state.profile.accountDetails);
    const accountDetailsResponse: Models.AccountDetails.IAccoundDetailsResponse | null = accountDetails;

    useFetch(fetchAccountDetailsAsync);

    const Details = ({ title, type }: { title: string, type: 'account' | 'financial' | 'so' | 'other' }) => {
        if (type === 'account') {
            return (
                <div className='flex md:w-full flex-col gap-y-3'>
                    <h1 className='font-poppins font-semibold text-base text-veryDarkGrey'>{title}</h1>
                    <Separator orientation='horizontal' className='h-[1px] w-full bg-veryDarkGrey' />
                    <ul className='flex flex-col gap-y-4'>
                        <li className={cn(styles.accountDetailList)}>Status<span className='text-active'>{accountDetailsResponse?.status}</span></li>
                        <li className={cn(styles.accountDetailList)}>Account Type<span>{accountDetailsResponse?.accountType}</span></li>
                        <li className={cn(styles.accountDetailList)}>Live Account Type<span>{accountDetailsResponse?.liveAccountType}</span></li>
                        <li className={cn(styles.accountDetailList)}>Platform<span>{accountDetailsResponse?.platform}</span></li>
                    </ul>
                </div>
            )
        }

        if (type === 'financial') {
            return (
                <div className='flex md:w-full flex-col gap-y-3'>
                    <h1 className='font-poppins font-semibold text-base text-veryDarkGrey'>{title}</h1>
                    <Separator orientation='horizontal' className='h-[1px] w-full bg-veryDarkGrey' />
                    <ul className='flex flex-col gap-y-4'>
                        <li className={cn(styles.accountDetailList)}>Profit<span>{accountDetailsResponse?.profit}</span></li>
                        <li className={cn(styles.accountDetailList)}>Storage<span>{accountDetailsResponse?.storage}</span></li>
                        <li className={cn(styles.accountDetailList)}>Commission<span>{accountDetailsResponse?.commission}</span></li>
                        <li className={cn(styles.accountDetailList)}>Floating<span>{accountDetailsResponse?.floating}</span></li>
                        <li className={cn(styles.accountDetailList)}>Margin<span>{accountDetailsResponse?.margin}</span></li>
                        <li className={cn(styles.accountDetailList)}>Free Margin<span>{accountDetailsResponse?.freeMargin}</span></li>
                        <li className={cn(styles.accountDetailList)}>Margin Level<span>{accountDetailsResponse?.marginLevel}</span></li>
                        <li className={cn(styles.accountDetailList)}>Margin Leverage<span>{accountDetailsResponse?.marginLeverage}</span></li>
                        <li className={cn(styles.accountDetailList)}>Margin Initial<span>{accountDetailsResponse?.marginInitial}</span></li>
                        <li className={cn(styles.accountDetailList)}>Margin Maintenance<span>{accountDetailsResponse?.marginMaintenance}</span></li>
                    </ul>
                </div>
            )
        }

        if (type === 'so') {
            return (
                <div className='flex md:w-full flex-col gap-y-3'>
                    <h1 className='font-poppins font-semibold text-base text-veryDarkGrey'>{title}</h1>
                    <Separator orientation='horizontal' className='h-[1px] w-full bg-veryDarkGrey' />
                    <ul className='flex flex-col gap-y-4'>
                        <li className={cn(styles.accountDetailList)}>SO Time<span>{accountDetailsResponse?.soTime}</span></li>
                        <li className={cn(styles.accountDetailList)}>SO Level<span>{accountDetailsResponse?.soLevel}</span></li>
                        <li className={cn(styles.accountDetailList)}>SO Equity<span>{accountDetailsResponse?.soEquity}</span></li>
                        <li className={cn(styles.accountDetailList)}>SO Margin<span>{accountDetailsResponse?.soMargin}</span></li>
                    </ul>
                </div>
            )
        }

        if (type === 'other') {
            return (
                <div className='flex md:w-full flex-col gap-y-3'>
                    <h1 className='font-poppins font-semibold text-base text-veryDarkGrey'>{title}</h1>
                    <Separator orientation='horizontal' className='h-[1px] w-full bg-veryDarkGrey' />
                    <ul className='flex flex-col gap-y-4'>
                        <li className={cn(styles.accountDetailList)}>Assets<span>{accountDetailsResponse?.assets}</span></li>
                        <li className={cn(styles.accountDetailList)}>Liabilities<span>{accountDetailsResponse?.liabilities}</span></li>
                        <li className={cn(styles.accountDetailList)}>Blocked Commission<span>{accountDetailsResponse?.blockedCommission}</span></li>
                        <li className={cn(styles.accountDetailList)}>Blocked Profit<span>{accountDetailsResponse?.blockedProfit}</span></li>
                    </ul>
                </div>
            )
        }

        return null;
    }
    
    return (
        <div className='flex w-full flex-col bg-lightGrayishBlueSecondary px-7 py-8 dark:bg-veryDarkBlueTertiary'>
            <h1 className='font-poppins font-semibold text-2xl text-veryDarkBlue mb-7 dark:text-white'>Account Details</h1>
            <div className='flex flex-col gap-y-6 bg-gradient-to-r from-standardActiveFrom to-standardActiveTo rounded-t-xl p-5'>
                <div>
                    <h3 className='font-poppins font-bold text-base text-white'>{accountDetailsResponse?.username}</h3>
                    <p className='font-poppins font-normal text-xs text-white'>{accountDetailsResponse?.fullname}</p>
                </div>
                <div className='flex flex-col gap-y-6 md:flex-row md:gap-x-8'>
                    <div className='flex items-center gap-x-24 md:gap-x-8 md:justify-between'>
                        <div className='flex flex-col'>
                            <span className='font-poppins font-normal text-xs text-white'>Balance</span>
                            <span className='font-poppins font-bold text-base text-white text-nowrap'>{accountDetailsResponse?.balance}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-poppins font-normal text-xs text-white'>Equity</span>
                            <span className='font-poppins font-bold text-base text-white text-nowrap'>{accountDetailsResponse?.equity}</span>
                        </div>
                    </div>
                    <div className='flex items-center gap-x-24 md:gap-x-8 md:justify-between'>
                        <div className='flex flex-col'>
                            <span className='font-poppins font-normal text-xs text-white'>Free Margin</span>
                            <span className='font-poppins font-bold text-base text-white text-nowrap'>{accountDetailsResponse?.freeMargin}</span>
                        </div>
                        <div className='flex flex-col'>
                            <span className='font-poppins font-normal text-xs text-white'>Account Type</span>
                            <span className='font-poppins font-bold text-base text-white text-nowrap'>{accountDetailsResponse?.accountType}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between md:gap-x-8 gap-y-6 bg-white rounded-b-xl p-5'>
                <div className='flex flex-col gap-y-6 md:w-full'>
                    <Details title='Account Details' type='account' />
                    <Details title='Financial Details' type='financial' />
                </div>
                <div className='flex flex-col gap-y-6 md:w-full'>
                    <Details title='SO' type='so' />
                    <Details title='Other Details' type='other' />
                </div>
            </div>
        </div>
    )
}

export default ProfileDetails
