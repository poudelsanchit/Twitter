import Menu from '../components/menu/Menu'
import Tweeets from '../components/tweets/Tweets'
import Trends from '../components/trends/Trends'
import '../App.css'
const Home = () => {

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
