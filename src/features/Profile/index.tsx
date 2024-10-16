import Header from '@/components/Header'
import React from 'react'
import { User2Icon, CreditCard, Banknote, UserPen, Plus } from 'lucide-react'
import Button from '@/components/Button'

import * as Models from '@/interfaces/account-live-response'
import * as ModelDemo from '@/interfaces/account-demo-response'
import accountLiveJson from '@/json/account-live.json';
import accountDemoJson from '@/json/account-demo.json';
import CardAccount from './CardAccount'

function Profile() {

    const accountLiveResponse: Models.AccountLive.IAccountLiveResponse[] = accountLiveJson;
    const accountDemoResponse: ModelDemo.AccountDemo.IAccountDemoResponse[] = accountDemoJson;
    return (
        <div className='bg-lightGrayishBlueSecondary'>
            <div className='flex flex-col md:flex-row'>
                <div className='hidden w-1/3 flex-col md:items-stretch bg-veryDarkBlue px-6 py-7 md:flex'>
                    <h1 className='font-poppins font-extrabold text-2xl text-white mb-12'>Account Info</h1>
                    <ul className='flex flex-col gap-y-7 px-2'>
                        <li><button className='flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400'><User2Icon className='mr-3' /> Akun MT5</button></li>
                        <li><button className='flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400'><CreditCard className='mr-3' /> Deposit</button></li>
                        <li><button className='flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400'><Banknote className='mr-3' /> WithDrawal</button></li>
                        <li><button className='flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400'><UserPen className='mr-3' /> Profile</button></li>
                    </ul>
                </div>
                <div className='flex w-full gap-y-4 flex-col px-7 py-3'>
                    <div className='flex w-full flex-col rounded-xl px-3 py-4 bg-white md:py-6 md:px-7'>
                        <div className='flex items-center justify-between mb-6'>
                            <h1 className='font-poppins font-semibold text-base text-veryDarkBlue'>Live Accounts</h1>
                            <Button className='flex bg-veryDarkBlue items-center font-poppins font-bold text-sm text-center text-white' >
                                <Plus className='text-white' /> ADD
                            </Button>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                           {accountLiveResponse.map(item => (
                            <CardAccount {...item} />
                           ))} 
                        </div>
                    </div>
                    <div className='flex w-full flex-col rounded-xl px-3 py-4 bg-white md:py-6 md:px-7'>
                        <div className='flex items-center justify-between mb-6'>
                            <h1 className='font-poppins font-semibold text-base text-veryDarkBlue'>Demo Account</h1>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                           {accountDemoResponse.map(item => (
                            <CardAccount {...item} />
                           ))} 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
