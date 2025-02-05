"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface HoverTextEffectProps {
  text: string
  radius: number
  hoverColor: string
}

const HoverTextEffect: React.FC<HoverTextEffectProps> = ({ text, radius, hoverColor }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener("mousemove", handleMouseMove)
    }

    return () => {
      if (container) {
        container.removeEventListener("mousemove", handleMouseMove)
      }
    }
  }, [])

  useEffect(() => {
    const letters = containerRef.current?.querySelectorAll("span")
    if (letters) {
      letters.forEach((letter) => {
        const rect = letter.getBoundingClientRect()
        const letterCenterX = rect.left + rect.width / 2
        const letterCenterY = rect.top + rect.height / 2
        const distance = Math.sqrt(
          Math.pow(mousePos.x - (letterCenterX - (containerRef.current?.getBoundingClientRect().left ?? 0)), 2) +
          Math.pow(mousePos.y - (letterCenterY - (containerRef.current?.getBoundingClientRect().top ?? 0)), 2),
        )

        if (distance <= radius) {
          const opacity = 1 - distance / radius
          letter.style.color = hoverColor
          letter.style.opacity = opacity.toString()
        } else {
          letter.style.color = ""
          letter.style.opacity = "1"
        }
      })
    }
  }, [mousePos, radius, hoverColor])

  return (
    <div ref={containerRef} className="p-4 text-2xl leading-relaxed  text-white">
      {text.split("").map((char, index) => (
        <span key={index} className="transition-colors duration-150 ease-in-out text-red">
          {char}
        </span>
      ))}
    </div>
  )
}

export default HoverTextEffect

