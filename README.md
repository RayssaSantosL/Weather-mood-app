# Weather & Mood App

Um app leve que mostra o clima atual de uma cidade e sugere um "mood" (frase + sugestão de música) baseado nas condições do tempo. Ideal para postar no LinkedIn como projeto de portfólio.

## Principais features
- Busca por cidade (OpenWeatherMap)
- Exibe temperatura, condicao e emoji
- Mensagem de "mood" baseada no clima
- Salva última cidade no localStorage
- Design responsivo com Tailwind
- Pequena animação com Framer Motion

## Tech stack
- React + Vite
- TailwindCSS
- Fetch API (sem axios)
- Framer Motion (animação)

## Pré-requisitos
- Node.js (>=16 recomendado)
- npm ou yarn
- Chave da OpenWeatherMap: https://openweathermap.org/api

## Rodando localmente
1. Clone o repositório
2. `npm install`
3. Copie `.env.example` para `.env` e preencha `VITE_OPENWEATHER_API_KEY`
4. `npm run dev`

## Build e deploy
- `npm run build` cria a build para produção
- Deploy simples no Vercel/Netlify — apenas conecte o repositório e configure a variável de ambiente `VITE_OPENWEATHER_API_KEY`

