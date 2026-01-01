"use client"
import { useEffect } from "react"
import Projects from "../components/WorkSec"
import Contact from "../components/Contact"

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
        <Projects />
        <Contact />
      </div>
    </main>
  )
}
