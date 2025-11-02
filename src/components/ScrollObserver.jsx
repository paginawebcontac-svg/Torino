"use client"

import { useEffect } from "react"

export function useScrollObserver() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible")
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const cards = document.querySelectorAll(".service-card, .inventory-card")
    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])
}
