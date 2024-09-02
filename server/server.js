// const app = require('./app');
// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const path = require('path');
const app = express();

// Your existing server code here

// Serve static files from the React build
app.use(express.static(path.join(__dirname, '../client/build')));

// Handle any requests that don't match the above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});