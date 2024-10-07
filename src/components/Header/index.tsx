import React from 'react'
import { ChevronDown, Download, Phone, Moon, Sun, } from "lucide-react"
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import SideMenu from '@/components/SideMenu'

import { LIST_MENU } from '@/components/Header/list-menu'
import Button from '@/components/Button';

interface ListSubMenuProps {
  title: String;
  subMenu?: {
    title: string,
    href: string
  }[] | null
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <a
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="font-poppins text-darkGrey text-sm font-normal leading-none hover:text-mainBlue">{title}</div>
      </a>
    </li>
  )
})


const ListMenuItem = ({ title, subMenu = [] }: ListSubMenuProps) => {
  return (
    <li className='flex h-10 relative group items-center font-poppins text-base font-medium text-darkGrey hover:text-darkBlue hover:font-semibold'>
      <button className='flex items-center'>
        {title}
        {subMenu && (
          <ChevronDown
            className="relative -rotate-180 top-[1px] ml-1 h-4 w-4 transition duration-200 group-hover:rotate-0"
            aria-hidden="true"
          />
        )}
      </button>
      {subMenu && (
        <ul className="hidden z-10 bg-white shadow-2xl top-10 -left-5 w-auto gap-3 p-2 md:grid-cols-1 group-hover:block group-hover:absolute ">
          {subMenu?.map((component) => (
            <ListItem
              key={component.title}
              title={component.title}
              href={component.href}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

function Header() {
  return (
    <div className='fixed z-20 top-0 w-full'>
      <div className='hidden md:flex w-full bg-gradient-to-r from-[#256EA5] to-darkBlue flex-row items-center justify-between py-2 px-8 mx-auto'>
        <div className='flex flxe-row items-center'>
          <div className='flex items-center'>
            <Download color='white' className='mr-2 w-4 h-4' />
            <span className='text-white text-sm font-medium font-poppins'>Download App</span>
          </div>
          <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
          <div className='flex items-center'>
            <Phone color='white' className='mr-2 w-4 h-4' />
            <span className='text-white text-sm font-medium font-poppins'>(+60) 1234 5678</span>
          </div>
        </div>
        <div className='flex flxe-row items-center'>
          <div className='flex items-center'>
            <img src="english_logo.png" alt="english-logo" />
            <ChevronDown
              color='white'
              className="h-4 w-4"
            />
          </div>
          <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
          <div className="flex items-center space-x-2">
            <Switch id="dark-mode" />
          </div>
        </div>
      </div>
      <header className='w-full bg-white/60 px-5 py-2'>
        <div className='flex items-center justify-between mx-auto'>
          <img src='Logo.png' alt='logo-company' className='' />
          <div className='hidden md:flex items-center'>
            <ul className='w-auto flex items-center md:mr-2 md:gap-2 lg:mr-4 lg:gap-10'>
              {LIST_MENU.map((item) => {
                return <ListMenuItem title={item.title} subMenu={item?.subMenu || null} />
              })}
            </ul>
            <div>
              <Button title='OPEN ACCOUNT' className='text-sm' />
            </div>
          </div>
          <div className='md:hidden'>
            <SideMenu />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
