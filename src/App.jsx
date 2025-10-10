import React, { useEffect, useState } from 'react'
import WeatherCard from './components/WeatherCard'
import MoodMessage from './components/MoodMessage'
import useWeather from './hooks/useWeather'
import { motion } from 'framer-motion'

export default function App() {
  const [city, setCity] = useState('')
  const [query, setQuery] = useState('')
  const { data, loading, error, fetchWeather } = useWeather()

  useEffect(() => {
    const last = localStorage.getItem('lastCity')
    if (last) {
      setCity(last)
      fetchWeather(last)
    }
  }, [])

  function handleSearch(e) {
    e.preventDefault()
    if (!query) return
    setCity(query)
    localStorage.setItem('lastCity', query)
    fetchWeather(query)
    setQuery('')
  }

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <div className="max-w-xl w-full">
        <motion.header
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 text-center"
        >
          <h1 className="text-3xl font-bold">Weather & Mood</h1>
          <p className="text-sm text-gray-600">Clima atual + sugestão de humor/música</p>
        </motion.header>

        <form onSubmit={handleSearch} className="flex gap-2 mb-4">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Digite uma cidade (ex: São Paulo)"
            className="flex-1 p-3 rounded-lg shadow-sm border border-gray-200"
          />
          <button className="px-4 py-3 bg-primary text-white rounded-lg">Buscar</button>
        </form>

        <div className="space-y-4">
          {loading && (
            <div className="p-6 bg-white rounded-xl shadow">Carregando...</div>
          )}

          {error && (
            <div className="p-6 bg-red-50 text-red-700 rounded-xl">{error}</div>
          )}

          {data && (
            <motion.div
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.25 }}
            >
              <WeatherCard weather={data} />
              <MoodMessage weather={data} />
            </motion.div>
          )}

          {!data && !loading && (
            <div className="p-6 bg-white rounded-xl shadow text-gray-600">Pesquise uma cidade para começar.</div>
          )}
        </div>

        <footer className="mt-6 text-xs text-gray-500 text-center">Feito com ♥ </footer>
      </div>
    </div>
  )
}