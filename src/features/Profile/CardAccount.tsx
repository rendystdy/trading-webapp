import { cn } from '@/lib/utils'
import React from 'react'
import * as Models from '@/interfaces/account-live-response'
import { EllipsisVertical } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { User2Icon, CreditCard, Banknote, LockKeyhole, FileMinus } from 'lucide-react'

const LIST_DROPDOWN_MENU = [
    {
        id: 1,
        label: 'Deposit',
        icon: <CreditCard />,
    },
    {
        id: 2,
        label: 'Withdrawal',
        icon: <Banknote />,
    },
    {
        id: 3,
        label: 'Investor Password',
        icon: <LockKeyhole />,
    },
    {
        id: 4,
        label: 'Account Details',
        icon: <User2Icon />,
    },
    {
        id: 1,
        label: 'Documents',
        icon: <FileMinus />,
    },
    {
        id: 1,
        label: 'Change Password',
        icon: <LockKeyhole />,
    },
]

interface ICardAccountProps extends Models.AccountLive.IAccountLiveResponse { }

const CardAccount: React.FC<ICardAccountProps> = ({ accountNumber, platform, type, balance, equity, leverage, status }) => {
    const handleBgColour = () => {
        if (status === 'KYC DRAFT') {
            return 'bg-statusDraft';
        } else if (status === 'KYC PENDING') {
            return 'bg-statusPending';
        } else if (status === 'KYC REJECTED') {
            return 'bg-statusRejected';
        } else if (status === 'STANDARD - INACTIVE') {
            return 'bg-statusInactive';
        } else if (status === 'STANDARD - ACTIVE') {
            return 'bg-gradient-to-r from-standardActiveFrom to-standardActiveTo'
        } else if (status === 'ULTRA LOW - ACTIVE') {
            return 'bg-gradient-to-r from-standardActiveFromSecondary to-standardActiveToSecondary'
        }
        return 'bg-black'
    }
    return (
        <div className={cn('flex flex-row items-center rounded-xl px-2 py-3', handleBgColour())}>
            <div className='flex flex-col gap-y-4 w-1/2 md:hidden'>
                <div>
                    <h3 className='font-poppins font-bold text-xs text-white'>123456789</h3>
                    <p className='font-poppins font-light text-xs text-white'>KYC Draft</p>
                </div>

                <div>
                    <p className='font-poppins font-light text-[9px] text-white'>Balance</p>
                    <p className='font-poppins font-semibold text-base text-white'>IDR 100,000.00</p>
                </div>
            </div>
            <div className='flex w-1/2 flex-col gap-y-4 md:hidden'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Platform</p>
                        <p className='font-poppins font-semibold text-base text-white'>MT5</p>
                    </div>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Leverage</p>
                        <p className='font-poppins font-semibold text-base text-white'>1:100</p>
                    </div>
                </div>
                <div>
                    <p className='font-poppins font-light text-[9px] text-white'>Equity</p>
                    <p className='font-poppins font-semibold text-base text-white'>IDR 100,000.00</p>
                </div>
            </div>
            <div className='hidden flex-row gap-x-2 items-center justify-between w-full md:flex'>
                <div>
                    <h3 className='font-poppins font-bold text-xs text-white'>{accountNumber}</h3>
                </div>
                <div className='flex items-start gap-x-2'>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Platform</p>
                        <p className='font-poppins font-semibold text-sm text-white'>{platform}</p>
                    </div>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Leverage</p>
                        <p className='font-poppins font-semibold text-sm text-white'>{leverage}</p>
                    </div>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Balance</p>
                        <p className='font-poppins font-semibold text-sm text-white'>{balance}</p>
                    </div>
                </div>
                <div>
                    <p className='font-poppins font-light text-[9px] text-white'>Equity</p>
                    <p className='font-poppins font-semibold text-sm text-white'>{equity}</p>
                </div>
                <div className='flex items-center'>
                    <p className='font-poppins font-light text-xs text-white'>{status}</p>
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="link" className="h-8 w-8 p-0">
                                <span className="sr-only">Open menu</span>
                                <EllipsisVertical className="h-4 w-4 text-white" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className='px-0' align="end">
                            {LIST_DROPDOWN_MENU.map(item => {
                                return (
                                    <>
                                        <DropdownMenuLabel className='flex items-center gap-x-2 hover:bg-darkBlueSecondary font-poppins font-medium text-base text-black hover:text-white'>{item.icon}{item.label}</DropdownMenuLabel>
                                        <DropdownMenuSeparator />
                                    </>
                                )
                            })}
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    )
}

export default CardAccount
