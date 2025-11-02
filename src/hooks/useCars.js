"use client"

import { useState, useEffect } from "react"

export function useCars() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/cars")
        if (!response.ok) throw new Error("Error al cargar los vehículos")
        const data = await response.json()
        setCars(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  const addCar = async (carData) => {
    try {
      const response = await fetch("/api/cars", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      })
      if (!response.ok) throw new Error("Error al agregar vehículo")
      const newCar = await response.json()
      setCars([...cars, newCar])
      return newCar
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const updateCar = async (id, carData) => {
    try {
      const response = await fetch(`/api/cars/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(carData),
      })
      if (!response.ok) throw new Error("Error al actualizar vehículo")
      const updated = await response.json()
      setCars(cars.map((car) => (car._id === id ? updated : car)))
      return updated
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  const deleteCar = async (id) => {
    try {
      const response = await fetch(`/api/cars/${id}`, { method: "DELETE" })
      if (!response.ok) throw new Error("Error al eliminar vehículo")
      setCars(cars.filter((car) => car._id !== id))
    } catch (err) {
      setError(err.message)
      throw err
    }
  }

  return { cars, loading, error, addCar, updateCar, deleteCar }
}

export function useFeaturedCars() {
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch("/api/featured")
        if (!response.ok) throw new Error("Error al cargar destacados")
        const data = await response.json()
        setCars(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return { cars, loading, error }
}
