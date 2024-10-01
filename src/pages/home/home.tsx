import HomeContent from "@/components/pages/home/home-content"
import HomeHeader from "@/components/pages/home/home-header"
import "@styles/pages/home/home.scss"

const Home = () => {
  return (
    <div className="home-page">
        <HomeHeader />
        <HomeContent />
    </div>
  )
}

export default Home
