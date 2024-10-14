import React from 'react'
import styles from './tradingGuide.module.css'

function LoginLiveAccount() {
  return (
    <div className='flex flex-col gap-y-4 pt-5'>
      <p className='font-poppins font-normal text-veryDarkGrey'>Before being able to start trading, Prospective Customers are required to simulate transactions on the MT5 platform, as evidenced by ownership of a demo account and transaction history.</p>
      <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-4 border-b md:border-b-0 pb-5'>
        <img className='w-full md:w-1/3' src="/assets/images/login-live-1.png" alt="login-live-1" />
        <div className='flex flex-col gap-y-6 md:pt-6'>
          <div>
            <h3 className='font-poppins font-normal mb-4 text-xl text-veryDarkBlue'>For <span className='font-semibold'>Android</span>:</h3>
            <ul className='flex flex-col gap-y-6'>
              <li className={styles.li_login_live}>1.Open MetaTrader5 application.</li>
              <li className={styles.li_login_live}>2.Tap the + icon in the upper right corner and enter the merchant name <span>HII</span> into the search, then select it.</li>
              <li className={styles.li_login_live}>3.Enter your trading account number, trading account password and the proper server, then tap Login.</li>
              <li className={styles.li_login_live}>4.The trading account will be added to the Accounts tab.</li>
            </ul>
          </div>
          <div>
            <h3 className='font-poppins font-normal mb-4 text-xl text-veryDarkBlue'>For <span className='font-semibold'>IOS</span>:</h3>
            <ul className='flex flex-col gap-y-6'>
              <li className={styles.li_login_live}>1. Open MetaTrader5 and select Settings.</li>
              <li className={styles.li_login_live}>2. Tap New Account and enter <span>"HII"</span> in the search bar. Choose the trading server that suits your trading account.</li>
              <li className={styles.li_login_live}>3. Enter your trading account number and trading account password, then tap Login.</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-x-4 gap-y-4 pt-5'>
        <img className='w-full md:w-1/2' src="/assets/images/login-live-2.png" alt="login-live-2" />
        <div className='md:pt-6'>
          <div className='flex flex-row items-center text-justify'>
            <p className='font-poppins font-normal text-base text-justify text-veryDarkGrey h-10'>To view your accounts, tap the icon</p>
            <img className='h-10 w-10 mx-2' src="/assets/images/icon-humberger.png" alt="icon-humberger" />
            <p className='font-poppins font-normal text-base text-veryDarkGrey h-10'>on the</p>
          </div>
          <p className='font-poppins font-normal text-base text-veryDarkGrey text-justify'>corner which will open a side panel as follows. Click "Manage accounts", and you will be able to see your accounts, customer names, trading servers, amount of leverage and balance. To change the trading account, click on the account you want to use. To delete an account, hold it down with your finger and tap "Delete".</p>
        </div>
      </div>
    </div>
  )
}

export default LoginLiveAccount