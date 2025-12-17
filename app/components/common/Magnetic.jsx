'use client';

import React, { useEffect, useRef } from 'react'
import gsap from 'gsap';

export default function Magnetic({children}) {
    const magnetic = useRef(null);

    useEffect(() => {
        if (!magnetic.current) return;

        const el = magnetic.current;
        const xTo = gsap.quickTo(el, "x", {duration: 1, ease: "elastic.out(1, 0.3)"})
        const yTo = gsap.quickTo(el, "y", {duration: 1, ease: "elastic.out(1, 0.3)"})

        const onMouseMove = (e) => {
            const { clientX, clientY } = e;
            const {height, width, left, top} = el.getBoundingClientRect();
            const x = clientX - (left + width/2)
            const y = clientY - (top + height/2)
            xTo(x * 0.35);
            yTo(y * 0.35)
        }

        const onMouseLeave = () => {
            xTo(0);
            yTo(0)
        }

        el.addEventListener("mousemove", onMouseMove)
        el.addEventListener("mouseleave", onMouseLeave)

        return () => {
            el.removeEventListener("mousemove", onMouseMove)
            el.removeEventListener("mouseleave", onMouseLeave)
        }
    }, [])

    return (
        <div ref={magnetic} style={{ display: 'inline-block' }}>
            {children}
        </div>
    )
}