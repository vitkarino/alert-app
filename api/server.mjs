import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

app.get('/api/alerts', async (req, res) => {
  try {
    const response = await fetch('https://api.ukrainealarm.com/api/v3/alerts', {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'a66f7c78:79610a7e12aa146b8c1b98cbdb8843c2'
      }
    });
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.statusText}`);
    }
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Error fetching data');
  }
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
