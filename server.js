const express = require('express');
const mongoose = require('mongoose');
// Connect mongoose
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-network', {
  //useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Log mongoose queries
mongoose.set('debug', true);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use(require('./routes'));

app.listen(PORT, () => console.log(` Connect to localhost:${PORT}`));