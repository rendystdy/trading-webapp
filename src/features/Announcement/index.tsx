import { useAppDispatch } from '@/app/hooks';
import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs';

import newsJson from '@/json/news-json.json'
import { useEffect } from 'react';
import { fetchNewsAsync } from './announcementSlice';

function Announcement() {

  const dispatch = useAppDispatch();
  useEffect(() => {
    // dispatch(fetchNewsAsync());
  });
  return (
    <div>
      <Banner />
      <Tabs {...newsJson} />
    </div>
  )
}

export default Announcement