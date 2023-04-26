const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const port = 8080;

const app = express();
const client_id = process.env.REACT_APP_CLIENT_ID;
const client_secret = process.env.REACT_APP_CLIENT_SECRET;
const redirect_uri = 'http://localhost:8080/callback';

// Middleware pour parser les données de requête HTTP POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Endpoint pour obtenir un jeton d'accès
app.post('/token', (req, res) => {
  // Options de requête pour obtenir un jeton d'accès
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    headers: {
      'Authorization': 'Basic ' + (new Buffer.from(client_id + ':' + client_secret).toString('base64'))
    },
    form: {
      grant_type: 'client_credentials'
    },
    json: true
  };

  // Faire une requête HTTP POST pour obtenir un jeton d'accès
  axios.post(authOptions.url, null, {
    params: authOptions.form,
    headers: authOptions.headers
  }).then(response => {
    if (response.status === 200) {
      // Envoyer le jeton d'accès dans la réponse HTTP
      res.json({ token: response.data.access_token });
    } else {
      // Envoyer un code d'erreur HTTP si la requête a échoué
      res.status(response.status).send(response.statusText);
    }
  }).catch(error => {
    console.log(error)
    // Envoyer un code d'erreur HTTP si la requête a échoué
    res.status(error.response.status).send(error.response.statusText);
  });
});

// Lancer le serveur sur le port 8080
app.listen(8080, () => {
  console.log('Serveur lancé sur le port 8080');
});
function getToken() {
  axios.post('http://localhost:8080/token')
    .then(response => {
      console.log(response.data.token); // Affiche le jeton d'accès dans la console
    })
    .catch(error => {
      console.log(error.response.status + ' ' + error.response.statusText); // Affiche le code d'erreur HTTP dans la console
    });
}
getToken();