import Menu from '../components/menu/Menu'
import Tweeets from '../components/tweets/Tweets'
import Trends from '../components/trends/Trends'
import '../App.css'
import { useParams } from 'react-router-dom'
const Home = () => {
  const { apikey } = useParams();
  let newapikey = apikey.substr(1, apikey.length - 1);
  console.log(newapikey);
  return (
    <>
      <div className='container'>
        <Menu />
        <Tweeets />
        <Trends />
      </div >
    </>
  )
}

export default Home
