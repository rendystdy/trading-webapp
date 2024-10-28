import React from 'react'
import styles from './tradingGuide.module.css'
import { cn } from '@/lib/utils'

function LoginLiveAccount() {
  return (
    <div className="flex flex-col gap-y-6 py-6">
      <p className="font-poppins font-normal text-base text-justify text-veryDarkGrey dark:text-white">
        Before being able to start trading, Prospective Customers are required to simulate transactions on the MT5 platform, as evidenced by ownership of a demo account and transaction history.
      </p>
      <div className="flex flex-col gap-y-4 md:flex-row items-start gap-x-4">
        <img src="/assets/images/login-live-1.png" className="md:w-1/4 md:h-auto" alt="tutorial_1" />
        <div className="flex h-full flex-col justify-around">
          <div>
            <h2 className="font-poppins font-normal text-lg text-veryDarkBlue mb-4 dark:text-mainBlue">
              For <span className="font-semibold text-lg">Android:</span>
            </h2>
            <ul className="flex flex-col gap-y-4">
              <li className={cn(styles.li_login_live, "dark:text-white")}>1.Open MetaTrader5 application.</li>
              <li className={cn(styles.li_login_live, "dark:text-white")}>2.Tap the + icon in the upper right corner and enter the merchant name <span>HII</span> into the search, then select it.</li>
              <li className={cn(styles.li_login_live, "dark:text-white")}>3.Enter your trading account number, trading account password and the proper server, then tap Login.</li>
              <li className={cn(styles.li_login_live, "dark:text-white")}>4.The trading account will be added to the Accounts tab.</li>
            </ul>
          </div>
          <div>
            <h2 className="font-poppins font-normal text-lg text-veryDarkBlue mb-4 dark:text-mainBlue">
              For <span className="font-semibold text-lg">Ios:</span>
            </h2>
            <ul>
              <li className={cn(styles.li_login_live, "dark:text-white")}>1. Open MetaTrader5 and select Settings.</li>
              <li className={cn(styles.li_login_live, "dark:text-white")}>2. Tap New Account and enter <span>"HII"</span> in the search bar. Choose the trading server that suits your trading account.</li>
              <li className={cn(styles.li_login_live, "dark:text-white")}>3. Enter your trading account number and trading account password, then tap Login.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 md:flex-row items-start gap-x-4">
        <img src="/assets/images/login-live-2.png" className="md:w-1/2 md:h-auto" alt="tutorial_2" />
        <div className='md:pt-6'>
          <div className='flex flex-row items-center text-justify'>
            <p className='font-poppins font-normal text-base text-justify text-veryDarkGrey h-10 dark:text-white'>To view your accounts, tap the icon</p>
            <img className='h-10 w-10 mx-2' src="/assets/images/icon-humberger.png" alt="icon-humberger" />
            <p className='font-poppins font-normal text-base text-veryDarkGrey h-10 dark:text-white'>on the</p>
          </div>
          <p className='font-poppins font-normal text-base text-veryDarkGrey text-justify dark:text-white'>corner which will open a side panel as follows. Click "Manage accounts", and you will be able to see your accounts, customer names, trading servers, amount of leverage and balance. To change the trading account, click on the account you want to use. To delete an account, hold it down with your finger and tap "Delete".</p>
        </div>
      </div>
    </div>
  )
}

export default LoginLiveAccount