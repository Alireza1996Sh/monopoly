require('./config/checkEnv');
const app = require('./server');

app.listen(app.get('port'), () => console.log(`server is listening to port ${app.get('port')}`));
