'use client';
import { useEffect } from 'react'
import { useRef } from 'react';
import Landing from './components/Landing';

export default function Home() {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  
useEffect(() => {
  (async () => {
    const LocomotiveScroll = (await import('locomotive-scroll')).default;
    new LocomotiveScroll()
  })()
}, [])


  return (
    
    <main>
      <Landing />
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
