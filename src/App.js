import './App.css'
import Hero from './Component/home/Home'
import Program from './Component/programs/Programs'
import Reasons from './Component/reasons/Reasons'
import Plans from './Component/plans/Plans'
import Testimonials from './assets/testimonial/Testimonial'
import Join from './Component/join/Join'
export default function App(){

  return(
    <>
    <div className='App'>
    <Hero />
    <Program />
    <Reasons />
    <Plans />
    <Testimonials />
    <Join />
  </div>

    </>
  )
}

