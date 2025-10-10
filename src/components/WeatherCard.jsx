import React from 'react'

export default function WeatherCard({ weather }) {
  const { city, temp, feels_like, condition, description } = weather

  // Map simples para emoji — poderia trocar por ícones SVG
  const mapEmoji = {
    Clear: '🌞',
    Clouds: '☁️',
    Rain: '🌧️',
    Drizzle: '🌦️',
    Snow: '❄️',
    Thunderstorm: '⛈️'
  }

  const emoji = mapEmoji[condition] || '🌤️'

  return (
    <div className="p-6 bg-white rounded-2xl shadow flex items-center gap-4">
      <div className="text-5xl">{emoji}</div>
      <div>
        <div className="text-sm text-gray-500">{city}</div>
        <div className="flex items-end gap-3">
          <div className="text-4xl font-bold">{temp}°C</div>
          <div className="text-xs text-gray-500">sente como {feels_like}°C</div>
        </div>
        <div className="text-sm text-gray-600 capitalize">{description}</div>
      </div>
    </div>
  )
}