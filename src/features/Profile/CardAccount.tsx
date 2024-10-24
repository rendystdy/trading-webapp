import { cn } from '@/lib/utils'
import React from 'react'
import * as Models from '@/interfaces/account-live-response'
import { EllipsisVertical } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { User2Icon, CreditCard, Banknote, LockKeyhole, FileMinus } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LIST_DROPDOWN_MENU = [
    {
        id: 1,
        label: 'Deposit',
        icon: <CreditCard />,
        href: '/profile'
    },
    {
        id: 2,
        label: 'Withdrawal',
        icon: <Banknote />,
        href: '/profile'
    },
    {
        id: 3,
        label: 'Investor Password',
        icon: <LockKeyhole />,
        href: '/profile'
    },
    {
        id: 4,
        label: 'Account Details',
        icon: <User2Icon />,
        href: '/profile/details'
    },
    {
        id: 1,
        label: 'Documents',
        icon: <FileMinus />,
        href: '/profile'
    },
    {
        id: 1,
        label: 'Change Password',
        icon: <LockKeyhole />,
        href: '/profile'
    },
]

interface ICardAccountProps extends Models.AccountLive.IAccountLiveResponse {
    onModalChangePassword: () => void;
}

const CardAccount: React.FC<ICardAccountProps> = ({ accountNumber, platform, onModalChangePassword, balance, equity, leverage, status }) => {
    const navigate = useNavigate();
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
                    <h3 className='font-poppins font-bold text-xs text-white'>{accountNumber}</h3>
                    <p className='font-poppins font-light text-xs text-white'>{status}</p>
                </div>

                <div>
                    <p className='font-poppins font-light text-[9px] text-white'>Balance</p>
                    <p className='font-poppins font-semibold text-base text-white'>{balance}</p>
                </div>
            </div>
            <div className='flex w-1/2 flex-col gap-y-4 md:hidden'>
                <div className='flex items-center justify-between'>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Platform</p>
                        <p className='font-poppins font-semibold text-base text-white'>{platform}</p>
                    </div>
                    <div>
                        <p className='font-poppins font-light text-[9px] text-white'>Leverage</p>
                        <p className='font-poppins font-semibold text-base text-white'>{leverage}</p>
                    </div>
                </div>
                <div>
                    <p className='font-poppins font-light text-[9px] text-white'>Equity</p>
                    <p className='font-poppins font-semibold text-base text-white'>{equity}</p>
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
                        <DropdownMenuContent className='px-0 dark:bg-white dark:border-white' align="end">
                            {LIST_DROPDOWN_MENU.map((item, index) => {
                                return (
                                    <div key={index} className='dark:bg-white'>
                                        <DropdownMenuLabel onClick={index === LIST_DROPDOWN_MENU.length-1 ? onModalChangePassword : () => navigate(item.href)} className='flex items-center gap-x-2 hover:bg-darkBlueSecondary font-poppins font-medium text-base text-black hover:text-white'>{item.icon}{item.label}</DropdownMenuLabel>
                                        <DropdownMenuSeparator className='dark:border-b-black/10' />
                                    </div>
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
