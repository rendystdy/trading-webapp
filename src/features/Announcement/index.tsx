import { useAppDispatch } from '@/app/hooks';
import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs';

// import { useEffect } from 'react';
// import { fetchNewsAsync } from './announcementSlice';

function Announcement() {
  return (
    <div>
      <Banner title='Announcement' description='Get the latest Company News here are important between you and me.' />
      <Tabs />
    </div>
  )
}

export default Announcement