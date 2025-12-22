"use client"
import { useEffect } from "react"
import Description from "../components/description"

export default function AboutPage() {
  useEffect(() => {
    ;(async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    })()
  }, [])

  return (
    <main>
      <div style={{ minHeight: "100vh", paddingTop: "100px" }}>
        <Description />
      </div>
    </main>
  )
}
