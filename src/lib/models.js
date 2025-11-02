export const carSchema = {
  title: String,
  brand: String,
  year: Number,
  transmission: String,
  km: String,
  fuel: String,
  price: String,
  image: String,
  description: String,
  featured: Boolean,
  createdAt: Date,
  updatedAt: Date,
}

// Función para validar datos de vehículos
export function validateCar(car) {
  const required = ["title", "brand", "year", "transmission", "km", "fuel", "price", "image", "description"]

  for (const field of required) {
    if (!car[field]) {
      throw new Error(`Campo requerido faltante: ${field}`)
    }
  }

  return true
}
