const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

const getFilmData = require('./api-filmsData');
app.get('/api/films-data', (req, res) => res.send(getFilmData()));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

app.listen(port, () => console.log(`Kodiri-Kodflix app listening on port ${port}!`));
