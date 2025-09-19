const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// ✅ Ruta API que genera la acción para Bland.ai
app.post('/api/audio', (req, res) => {
  const { audio_url, duration } = req.body;

  // Validación básica
  if (!audio_url || typeof audio_url !== 'string' || !audio_url.startsWith('http')) {
    return res.status(400).json({ error: 'La URL del audio es inválida o falta.' });
  }

  const audioDuration = Number(duration) || 30; // Valor por defecto si no se pasa duración

  res.json({
    actions: [
      {
        type: "play_audio",
        params: {
          url: "https://obscure-springs-43753-1cfbe8e7624d.herokuapp.com/sound.mp3",
          duration: audioDuration
        }
      }
    ]
  });
});

// ✅ Ruta raíz opcional
app.get('/', (req, res) => {
  res.send('🎧 API de reproducción de audio para Bland.ai');
});

app.listen(port, () => {
  console.log(`🚀 API escuchando en http://localhost:${port}`);
});
