// Instala express si no lo tienes: npm install express
const express = require('express');
const app = express();
const port = 3000; // Puedes cambiar este puerto si usas otro

app.use(express.json());

app.post('/webhook', (req, res) => {
  console.log('📞 Webhook recibido de Bland.ai');

  // Opcional: puedes imprimir lo que manda bland
  console.log(req.body);

  // Respuesta al bot para que reproduzca el audio
  res.json({
    actions: [
      {
        type: "play_audio",
        params: {
          url: "https://obscure-springs-43753-1cfbe8e7624d.herokuapp.com/sound.mp3",
          duration: 30
        }
      }
    ]
  });
});

app.listen(port, () => {
  console.log(`🚀 Webhook escuchando en http://localhost:${port}/webhook`);
});
