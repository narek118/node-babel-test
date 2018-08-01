import app from './lib/express';
import config from './config';

app.listen(config.port, (err) => {
  console.log('Server listening on port 3000');
});
