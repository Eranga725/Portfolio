'use client';
import { useEffect } from 'react'
import Landing from './components/Landing';
import Projects from './components/Projects';
import Description from './components/description';
import Slider from './components/slider';
import Contact from './components/Contact';

export default function Home() {



useEffect(() => {
  (async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    new LocomotiveScroll()
  })()
}, [])


  return (

    <main>
      <Landing />
      <Description />
      <Projects />




      <Slider />
      <Contact />



      {/* <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Landing />
      <Description />
      <Projects />
      <SlidingImages />
      <Contact /> */}
    </main>
  )
}