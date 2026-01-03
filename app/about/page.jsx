"use client"
import { useEffect } from "react"
import Header from "../components/about_header"
import INTRO from "../components/about_hero"
import Grid from "../components/content_grid"
import Contact from "../components/Contact"
import NEXT from "../components/image_devider"


export default function WorkPage() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    })()
  }, [])

  return (
    <main>

      <div style={{ minHeight: "100vh", paddingTop: "100px" }}>
      <Header />
      <INTRO />
      <Grid />
      <NEXT />
      <Contact />
      </div>
    </main>
  )
}
