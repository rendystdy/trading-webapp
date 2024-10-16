import React from 'react'
import { ChevronDown, Download, Phone, User2Icon, LogOut } from "lucide-react"
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import SideMenu from '@/components/SideMenu'

import { LIST_MENU, LIST_MENU_PROFILE } from '@/components/Header/list-menu'
import Button from '@/components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface ListSubMenuProps {
  title: String;
  href?: string;
  subMenu?: {
    title: string,
    href: string
  }[] | null
}

interface IHeaderProps {
  variant?: 'DEFAULT' | 'LOGIN' | 'PROFILE';
  onLogin?: () => void;
  onRegister?: () => void;
}

export const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, href, children, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        to={href || '/'}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        {...props}
      >
        <div className="font-poppins text-nowrap text-darkGrey text-sm font-normal leading-none hover:text-mainBlue">{title}</div>
      </Link>
    </li>
  )
})


const ListMenuItem = ({ title, subMenu = [], href }: ListSubMenuProps) => {
  return (
    <li className='flex h-10 relative group items-center font-poppins text-base font-medium text-darkGrey hover:text-darkBlue hover:font-semibold'>
      <button className='flex items-center'>
        {title.toLowerCase() === 'home' ? <Link to={href || '/'}>{title}</Link> : title}
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

const Header: React.FC<IHeaderProps> = ({ variant = 'DEFAULT', onLogin, onRegister }) => {
  const [theme, setTheme] = React.useState("light");
  const navigate = useNavigate();
  let location = useLocation();

  if (location.pathname.includes('register')) {
    variant = 'LOGIN'
  } else if (location.pathname.includes('profile')) {
    variant = 'PROFILE'
  } else {
    variant = 'DEFAULT'
  }

  React.useEffect(() => {
    if (theme === "dark") {
      document.querySelector('html')?.classList.add("dark");
    } else {
      document.querySelector('html')?.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme((currTheme) => (currTheme === "dark" ? "light" : "dark"));
  };

  const SideRightByVariant = () => {
    if (variant === 'LOGIN') {
      return (
        <>
          <Button className='py-1 text-center bg-hover rounded-xl font-poppins font-semibold text-xs text-white' onClick={onLogin} title='Login' />
          <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
          <Button className='py-1 text-center bg-yellow-400 rounded-xl font-poppins font-semibold text-xs text-white' onClick={onRegister} title='Register' />
        </>
      )
    }
    if (variant === 'PROFILE') {
      return (
        <div className='flex items-center gap-x-4'>
          <div className='flex items-center bg-white rounded-xl overflow-hidden'>
            <span className='text-white bg-gradient-to-r from-userLiveFrom to-userLiveTo py-1 px-3 font-poppins font-bold text-xs'>1948533758</span>
            <span className='font-poppins font-bold text-xs text-darkBlue py-1 px-3'>LIVE</span>
          </div>
          <div className='flex items-center bg-hover rounded-xl py-1 px-3 font-poppins font-bold text-xs text-white'>
            <span>user1234</span>
            <User2Icon className='w-4 h-4' />
          </div>
          <LogOut className='text-white w-4 h-4' />
        </div>
      )
    }

    return (
      <>
        <div className='flex items-center'>
          <img src="/assets/images/english_logo.png" alt="english-logo" />
          <ChevronDown
            color='white'
            className="h-4 w-4"
          />
        </div>
        <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
        <div className="flex items-center space-x-2">
          <Switch id="dark-mode" value={theme} onCheckedChange={handleThemeSwitch} />
        </div>
      </>
    )
  }

  return (
    <div className={cn(variant === 'DEFAULT' ? 'fixed z-20 top-0 w-full' : 'w-full')}>
      <div className='hidden md:flex w-full bg-gradient-to-r from-[#256EA5] to-darkBlue flex-row items-center justify-between py-2 px-8 mx-auto'>
        <div className='flex flxe-row items-center'>
          <div className='flex items-center'>
            <Download color='white' className='mr-2 w-4 h-4' />
            <span className='text-white text-sm font-medium font-poppins dark:bg-bgDarkMode4q'>Download App</span>
          </div>
          <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
          <div className='flex items-center'>
            <Phone color='white' className='mr-2 w-4 h-4' />
            <span className='text-white text-sm font-medium font-poppins'>(+60) 1234 5678</span>
          </div>
          {(variant === 'LOGIN' || variant === 'PROFILE') && (
            <div className='flex items-center mx-9'>
              <div className='flex items-center'>
                <img src="/assets/images/english_logo.png" alt="english-logo" />
                <ChevronDown
                  color='white'
                  className="h-4 w-4"
                />
              </div>
              <Separator orientation='vertical' className=' mx-3 bg-white h-4' />
              <div className="flex items-center space-x-2">
                <Switch id="dark-mode" value={theme} onCheckedChange={handleThemeSwitch} />
              </div>
            </div>
          )}
        </div>
        <div className='flex flxe-row items-center'>
          <SideRightByVariant />
        </div>
      </div>
      <header className='w-full bg-white/60 px-5 py-2'>
        <div className='flex items-center justify-between mx-auto'>
          <img src='/assets/images/Logo.png' alt='logo-company' className='' />
          <div className='hidden md:flex items-center'>
            <ul className='w-auto flex items-center md:mr-2 md:gap-2 lg:mr-4 lg:gap-10'>
              {variant === 'DEFAULT' ? LIST_MENU.map((item, index) => {
                return <ListMenuItem key={index.toString()} title={item.title} subMenu={item?.subMenu || null} />
              }) : LIST_MENU_PROFILE.map((item, index) => {
                return <ListMenuItem key={index.toString()} title={item.title} subMenu={item?.subMenu || null} />
              })}
            </ul>
            {(variant === 'DEFAULT' || variant === 'LOGIN') && (
              <div>
                <Button title='OPEN ACCOUNT' onClick={() => navigate('/register')} className='text-sm' />
              </div>
            )}
          </div>
          <div className='md:hidden'>
            <SideMenu variant={variant} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
