import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
import Topbar from "./Components/Topbar";


export default function Home() {
  return (
    <div className='relative'>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Hero></Hero>
    </div>
  )
}
