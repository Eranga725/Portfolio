"use client"
import { useEffect } from "react"
import Projects from "../components/Projects"

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
      </div>
    </main>
  )
}
