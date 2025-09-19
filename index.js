const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// ✅ Ruta del webhook
app.post('/webhook', (req, res) => {
  res.json({
    actions: [
      {
        type: "play_audio",
        params: {
          url: `https://${req.headers.host}/Elevatormusic.mp3`, // 💡 Usa el mismo dominio del webhook
          duration: 30
        }
      }
    ]
  });
});

// ✅ Servir archivos estáticos como sound.mp3
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${port}`);
});
