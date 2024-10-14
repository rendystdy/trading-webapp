import React from 'react'

import styles from './tradingGuide.module.css'
import { cn } from '@/lib/utils'

function Trading() {
  return (
    <div className='flex flex-col gap-y-6 pt-6'>
      <div className='flex flex-col gap-y-4 border-b md:border-b-0 pb-4 md:flex-row md:gap-x-4'>
        <img src="/assets/images/trading-1-1.png" className='w-full md:w-1/3 h-auto' alt="trading-1" />
        <div>
          <h1 className='font-kumbh font-normal text-2xl text-veryDarkBlue mb-4 md:mb-2'><span className='font-bold'>Open</span> Position</h1>
          <ul className='flex flex-col gap-y-6 md:gap-y-2'>
            <li className={styles.li_trading}>1. Go to <span>Quotation</span>.</li>
            <li className={styles.li_trading}>2. Tap the symbol you want to trade, then tap <span>New Order</span>.</li>
            <li className={styles.li_trading}>3. Set parameters of your order (e.g. Stop Loss, Take Profit etc).</li>
            <li className={styles.li_trading}>4. Tap <span>Buy</span> or <span>Sell</span> if you want to open a Market order.</li>
            <li className={styles.li_trading}>5. To set pending orders, tap <span>Instant Execution</span> or <span>Market Execution</span> (based on your account type and trading instrument) to open a list of order types.</li>
            <li className={styles.li_trading}>6. Select one of the pending order types from the dropdown menu and set your order parameters (e.g Price, Stop Loss, Take Profit, etc).</li>
            <li className={styles.li_trading}>7. Tap <span>Place</span>.</li>
            <li className={styles.li_trading}>8. You will receive a notification that the order has been successfully opened.</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col gap-y-4 md:flex-row md:gap-x-4'>
        <img src="/assets/images/Trading-2-1.png" className='w-full md:w-1/3 h-auto' alt="trading-2" />
        <div>
          <h1 className='font-kumbh font-normal text-2xl text-veryDarkBlue mb-2'><span className='font-bold'>Close</span> of <span className='font-bold'>Change</span> Position</h1>
          <ul className='flex flex-col gap-y-2 mb-6'>
            <li className={styles.li_trading}>1. Go to <span>Trading</span>.</li>
            <li className={styles.li_trading}>2. Touch an order to view its details (Price, S/L, T/P, order ID, etc).</li>
            <li className={styles.li_trading}>3. Hold the order with your finger, then tap Change position to modify or Close position.</li>
            <li className={styles.li_trading}>4. Tap Change after modified or Close with Loss/Profit to confirm the appropriate action.</li>
            <li className={styles.li_trading}>5. You will receive a notification when the order is closed.</li>
          </ul>

          <ul className='flex flex-col gap-y-2'>
            <li className={cn('flex items-center gap-x-4 font-bold', styles.li_trading)}>
              <img src="/assets/images/tutup-posisi.png" alt="tutup-posisi" />
              <p>Close position/delete order</p>
            </li>
            <li className={cn('flex items-center gap-x-4 font-bold', styles.li_trading)}>
              <img src="/assets/images/ubah-posisi.png" alt="ubah-posisi" />
              <p>Change position/change order</p>
            </li>
            <li className={cn('flex items-center gap-x-4 font-bold', styles.li_trading)}>
              <img src="/assets/images/tambah-posisi.png" alt="tambah-posisi" />
              <p>Add position/open position</p>
            </li>
            <li className={cn('flex items-center gap-x-4 font-bold', styles.li_trading)}>
              <img src="/assets/images/buka-grafik.png" alt="tambah-posisi" />
              <p>Open the price chart</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Trading