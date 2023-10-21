const express = require('express');
const dotenv = require('dotenv');

const port = 5000;

dotenv.config();

var spotify_client_id = process.env.SPOTIFY_CLIENT_ID
var redirect_uri = "http://localhost:3000/callback"
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET

var app = express();

app.get('/auth/login', (req, res) => {
    var state = generateRandomString(16);
    var scope = 'user-read-private user-read-email';

    res.redirect('https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: spotify_client_id,
        scope: scope,
        redirect_uri: redirect_uri,
        state: state
    }));
});

app.get('/auth/callback', (req, res) => {
});

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
})

router.get('/auth/login', (req, res) => {

    var scope = "streaming \
                 user-read-email \
                 user-read-private"
  
    var state = generateRandomString(16);
  
    var auth_query_parameters = new URLSearchParams({
      response_type: "code",
      client_id: spotify_client_id,
      scope: scope,
      redirect_uri: "http://localhost:3000/auth/callback",
      state: state
    })
  
    res.redirect('https://accounts.spotify.com/authorize/?' + auth_query_parameters.toString());
  })

var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };