// Hook simples para buscar o clima via OpenWeatherMap API.
import { useState } from 'react'

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY
const BASE = 'https://api.weatherapi.com/v1/current.json'

export default function useWeather() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  async function fetchWeather(city) {
    try {
      setLoading(true)
      setError(null)
      setData(null)

      const url = `${BASE}?key=${API_KEY}&q=${encodeURIComponent(city)}&lang=pt`
      const res = await fetch(url)
      if (!res.ok) {
        const body = await res.json().catch(() => ({}))
        throw new Error(body.message || 'Erro ao buscar clima')
      }
      const json = await res.json()

      // Normaliza os dados úteis
      const payload = {
        city: `${json.location.name}, ${json.location.country}`,
        temp: Math.round(json.current.temp_c),
        feels_like: Math.round(json.current.feelslike_c),
        condition: json.current.condition.text,
        icon: json.current.condition.icon,
        raw: json
    }


      setData(payload)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return { data, loading, error, fetchWeather }
}