import React from 'react'
import getMoodMessage from '../utils/getMoodMessage'

export default function MoodMessage({ weather }) {
  const { condition, description, temp } = weather
  const { emoji, message, musicQuery } = getMoodMessage(condition, description, temp)

  function openMusic() {
    // Abre busca do YouTube com a query — alternativa simples e sem precisar de OAuth.
    const url = `https://www.youtube.com/results?search_query=${encodeURIComponent(musicQuery)}`
    window.open(url, '_blank', 'noopener')
  }

  return (
    <div className="p-6 bg-white rounded-2xl shadow">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-2xl">{emoji} <span className="font-semibold">Mood</span></div>
          <div className="text-sm text-gray-600 mt-1">{message}</div>
        </div>
        <div>
          <button onClick={openMusic} className="px-4 py-2 bg-primary text-white rounded-lg">Ouvir música</button>
        </div>
      </div>
    </div>
  )
}