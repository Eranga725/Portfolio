'use client';
import { useEffect } from 'react'
import Landing from './components/Landing';
import Projects from './components/Projects';
import Description from './components/description';

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
