import Menu from '../components/Menu'
import Tweeets from '../components/Tweets'
import Trends from '../components/Trends'
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
