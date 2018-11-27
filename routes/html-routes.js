/**
 * @author Maryam Keshavarz
 */
const path = require('path');

module.exports = (app) => {
  
  app.get('/', (req, res) => {res.sendFile(path.join(__dirname, '../public/html/todotable.html'));});

  app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/html/todotable.html'));});
};
