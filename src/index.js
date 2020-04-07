if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = require('./server');

// Starting the server
app.listen(app.get('port'), () => {
  console.log('Server on port ', app.get('port'));
  console.log('Enviroment: ', process.env.NODE_ENV);
});
