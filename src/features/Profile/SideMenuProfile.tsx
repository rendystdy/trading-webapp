import { cn } from '@/lib/utils';
import { Banknote, CreditCard, User2Icon, UserPen } from 'lucide-react'
import { useState } from 'react'

const LIST_MENU_ACCOUNT_INFO = [
    {
        label: 'Akun MT5',
        icon: <User2Icon className="mr-3" />
    },
    {
        label: 'Deposit',
        icon: <CreditCard className="mr-3" />
    },
    {
        label: 'WithDrawal',
        icon: <Banknote className="mr-3" />
    },
    {
        label: 'Profile',
        icon: <UserPen className="mr-3" />
    },
]

function SideMenuProfile() {
    const [value, setValue] = useState('Akun MT5');
    return (
        <div className="hidden w-1/3 flex-col md:items-stretch bg-veryDarkBlue px-6 py-7 md:flex">
            <h1 className="font-poppins font-extrabold text-2xl text-white mb-12">
                Account Info
            </h1>
            <ul className="flex flex-col gap-y-7 px-2">
                {LIST_MENU_ACCOUNT_INFO.map((item, index) => (
                    <li key={index}>
                        <button onClick={() => setValue(item.label)} className={cn("flex items-center text-white font-poppins font-medium text-xl hover:text-yellow-400", value === item.label ? "text-yellow-400" : "text-white")}>
                            {item.icon} {item.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SideMenuProfile
