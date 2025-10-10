// Retorna uma mensagem e uma query de música baseada na condição do tempo.
export default function getMoodMessage(condition, description, temp) {
  // Garante que estamos lidando com string
  const cond = (typeof condition === 'string' ? condition : '').toLowerCase();
  const desc = (typeof description === 'string' ? description : '').toLowerCase();

  const weatherMap = [
    {
      keywords: ['clear', 'sun', 'sunny'],
      emoji: '🌞',
      message: 'Dia de luz! Pega aquela playlist animada e aproveita o sol.',
      musicQuery: 'sunny upbeat playlist'
    },
    {
      keywords: ['cloud', 'cloudy', 'overcast', 'few clouds', 'partly cloudy'],
      emoji: '⛅',
      message: 'Meio nublado — clima ótimo pra foco e produtividade.',
      musicQuery: 'chill indie playlist'
    },
    {
      keywords: ['rain', 'drizzle', 'shower', 'storm', 'thunderstorm'],
      emoji: '🌧️',
      message: 'Chuva no ar — perfeito pra um café e uma playlist aconchegante.',
      musicQuery: 'rainy day playlist'
    },
    {
      keywords: ['snow', 'sleet'],
      emoji: '❄️',
      message: 'Neve! Tempo de cobertor e músicas quentinhas.',
      musicQuery: 'cozy winter playlist'
    },
    {
      keywords: ['thunder', 'thunderstorm', 'storm'],
      emoji: '⛈️',
      message: 'Tempestade chegando — fica seguro e curte uma trilha intensa.',
      musicQuery: 'intense cinematic playlist'
    },
    {
      keywords: ['mist', 'fog', 'haze'],
      emoji: '🌫️',
      message: 'Neblina no ar — um clima introspectivo pede uma playlist suave.',
      musicQuery: 'calm ambient playlist'
    }
  ];

  // Tenta casar condition primeiro, depois description
  for (const weather of weatherMap) {
    if (weather.keywords.some(k => cond.includes(k) || desc.includes(k))) {
      return {
        emoji: weather.emoji,
        message: weather.message,
        musicQuery: weather.musicQuery
      };
    }
  }

  // fallback seguro usando temperatura se disponível
  let fallbackMessage = 'Escolhe a vibe que tu quiser!';
  let fallbackEmoji = '🌤️';
  let fallbackMusic = 'relaxing playlist';

  if (typeof temp === 'number') {
    if (temp <= 10) {
      fallbackMessage = 'Tá friozinho — pega uma playlist aconchegante.';
      fallbackEmoji = '🧣';
      fallbackMusic = 'cozy playlist';
    } else if (temp >= 25) {
      fallbackMessage = 'Tá quente — bora animar com uma playlist solar!';
      fallbackEmoji = '🔥';
      fallbackMusic = 'summer upbeat playlist';
    }
  }

  return {
    emoji: fallbackEmoji,
    message: fallbackMessage,
    musicQuery: fallbackMusic
  };
}
