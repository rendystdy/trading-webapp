import { useFetch } from '@/app/hooks';
import Banner from '@/components/Banner';
import Tabs from '@/components/Tabs';

import { fetchNewsAsync } from './newsSlice';

function Announcement() {
  useFetch(fetchNewsAsync);

  return (
    <div>
      <Banner title='Announcement' description='Get the latest Company News here are important between you and me.' />
      <Tabs />
    </div>
  )
}

export default Announcement