import { useEffect } from 'react'
import useFetchData from '../hooks/useFetchData';
import InfiniteScroll from 'react-infinite-scroll-component'; 
import StoreCard from './StoreCard';
import Loader from './Loader';



const StoresPage = () => {
  const {
    data,
    page,
    hasMore,
    fetchData
   } = useFetchData()


  // the API returns an object that contains a 'locations' (arr) and a 'next_page'(str)
  useEffect(() => {
    fetchData(page, 'location')
  }, [])


  // creates a list of Card components that accept a location object as a props
  const locationList = data.map((item, i) => {
    return (
      <StoreCard 
        data={item} 
        key={i}
      /> 
    )
  })

  return (
    <InfiniteScroll
      dataLength={data.length}
      next={() => fetchData(page, 'location')}
      hasMore={hasMore}
      loader={<Loader />}
      className='scroll'
    >
      <ul>
        {locationList}
      </ul>
    </InfiniteScroll>
  )
}

export default StoresPage;