import React from 'react'
import { ChevronDown, Download, Phone, User2Icon, LogOut } from "lucide-react"
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'
import { Switch } from '@/components/ui/switch'
import SideMenu from '@/components/SideMenu'

import { LIST_MENU, LIST_MENU_PROFILE } from '@/components/Header/list-menu'
import Button from '@/components/Button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/app/hooks'
import { openModalLogin, openModalLogout, selectOpenModalLogin } from '@/features/Register/registerSlice'

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
        <div className="font-poppins text-nowrap text-darkGrey dark:text-grayishCyan text-xs font-normal leading-none hover:text-mainBlue dark:hover:text-white">{title}</div>
      </Link>
    </li>
  )
})


const ListMenuItem = ({ title, subMenu = [], href }: ListSubMenuProps) => {
  return (
    <li className='flex h-10 relative group items-center font-poppins text-base md:text-sm font-medium text-darkGrey dark:text-grayishCyan hover:text-darkBlue dark:hover:text-white hover:font-semibold'>
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
        <ul className="hidden z-10 bg-white border-t-2 border-mainBlue dark:border-t dark:border-yellow-400 dark:bg-darkBlueSecondary shadow-2xl top-10 -left-5 w-auto gap-3 p-2 md:grid-cols-1 group-hover:block group-hover:absolute ">
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
  const themeStorage = localStorage.getItem('theme');
  const [theme, setTheme] = React.useState(themeStorage === 'false' ? false : true);
  const accountDetails = useAppSelector(state => state.profile.accountDetails)
  const navigate = useNavigate();
  let location = useLocation();
  const dispatch = useAppDispatch();

  const handleLogin = () => {
    if (onLogin) {
      onLogin();
    }
    dispatch(openModalLogin(!selectOpenModalLogin));
  }

  if (location.pathname.includes('register')) {
    variant = 'LOGIN'
  } else if (location.pathname.includes('profile')) {
    variant = 'PROFILE'
  } else {
    variant = 'DEFAULT'
  }

  React.useEffect(() => {
    if (theme) {
      document.querySelector('html')?.classList.add("dark");
    } else {
      document.querySelector('html')?.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    localStorage.setItem('theme', themeStorage === 'true' ? 'false' : 'true');
    setTheme((currTheme) => !currTheme);
  };

  const SideRightByVariant = () => {
    if (variant === 'LOGIN') {
      return (
        <>
          <Button className='py-1 text-center bg-hover rounded-xl font-poppins font-semibold text-xs text-white' onClick={handleLogin} title='Login' />
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
            <span>{accountDetails?.username}</span>
            <User2Icon className='w-4 h-4' />
          </div>
          <button onClick={() => dispatch(openModalLogout(true))}>
            <LogOut className='text-white w-4 h-4' />
          </button>
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
          <Switch id="dark-mode" checked={theme} onCheckedChange={handleThemeSwitch} />
        </div>
      </>
    )
  }

  return (
    <div className={cn(variant === 'DEFAULT' ? 'fixed z-20 top-0 w-full' : 'w-full')}>
      <div className='hidden md:flex w-full bg-gradient-to-r from-[#256EA5] to-darkBlue flex-row items-center justify-between py-2 px-8 2xl:px-40 mx-auto'>
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
                <Switch id="dark-mode" checked={theme} onCheckedChange={handleThemeSwitch} />
              </div>
            </div>
          )}
        </div>
        <div className='flex flxe-row items-center'>
          <SideRightByVariant />
        </div>
      </div>
      <header className='w-full min-h-32 md:min-h-24 bg-white/60 px-8 py-5 md:py-4 dark:bg-veryDarkBlue/60'>
        <div className='flex items-center justify-between mx-auto'>
          {themeStorage === 'true' ? <img src='/assets/images/Logo-white.png' className='w-fit md:w-1/5 xl:w-fit' alt='logo-company' /> : <img src='/assets/images/Logo.png' className='w-fit md:w-1/5 xl:w-fit' alt='logo-company' />}
          <div className='hidden md:flex items-center'>
            <ul className='w-auto flex items-center md:mr-2 md:gap-2 md:gap-x-2 lg:mr-4 lg:gap-6'>
              {variant === 'DEFAULT' ? LIST_MENU.map((item, index) => {
                return <ListMenuItem key={index.toString()} title={item.title} subMenu={item?.subMenu || null} />
              }) : LIST_MENU_PROFILE.map((item, index) => {
                return <ListMenuItem key={index.toString()} title={item.title} subMenu={item?.subMenu || null} />
              })}
            </ul>
            {(variant === 'DEFAULT' || variant === 'LOGIN') && (
              <div>
                <Button title='OPEN ACCOUNT' onClick={() => navigate('/register')} className='md:text-xs dark:text-veryDarkBlueSecondary' />
              </div>
            )}
          </div>
          <div className='md:hidden'>
            <SideMenu value={theme} onCheckedChange={handleThemeSwitch} variant={variant} />
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header
