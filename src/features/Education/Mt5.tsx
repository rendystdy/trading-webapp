import { cn } from '@/lib/utils'
import React from 'react'

const DUMMY_FEATURES = [
  {
    title: 'Quotes',
    description: 'Real-time prices of tradable financial instruments',
    sourceUrl: '/assets/images/feature-1.png',
    icon: '/assets/images/quotes.png'
  },
  {
    title: 'Charts',
    description: 'Price Chart',
    sourceUrl: '/assets/images/feature-2.png',
    icon: '/assets/images/charts.png'
  },
  {
    title: 'Trade',
    description: 'View account state and manage trading positions and pending orders',
    sourceUrl: '/assets/images/feature-3.png',
    icon: '/assets/images/trade.png'
  },
  {
    title: 'History',
    description: 'Transactions history',
    sourceUrl: '/assets/images/feature-4.png',
    icon: '/assets/images/history.png'
  },
  {
    title: 'News',
    description: 'News',
    sourceUrl: '/assets/images/feature-5.png',
    icon: '/assets/images/news.png'
  },
  {
    title: 'Message',
    description: 'Message and push notification',
    sourceUrl: '/assets/images/feature-6.png',
    icon: '/assets/images/message.png'
  },
]

function Mt5() {
  return (
    <div className='grid grid-col-1 pt-8 gap-y-6 md:gap-y-0 md:grid-cols-3'>
      {DUMMY_FEATURES.map((item, index) => {
        return (
          <div className={cn('p-5', (index === 1 || index === 4) ? 'border-b md:border-b-0 md:border' : 'border-b md:border-b-0 md:border-t')}>
            <img src={item.sourceUrl} className='w-full h-auto' alt={item.title} />
            <div className='flex flex-col items-center'>
              <img src={item.icon} className='w-28 h-28' alt='icon' />
              <h1 className='font-poppins font-bold text-2xl text-center text-veryDarkBlue'>{item.title}</h1>
              <p className='font-poppins font-normal text-xl text-center text-veryDarkGrey'>{item.description}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Mt5