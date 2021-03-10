require('./config/checkEnv');
const mongooseConnection = require('./config/mongoose');
const app = require('./server');

const start = async () => {
    await mongooseConnection();
    app.listen(app.get('port'), () => {
        // eslint-disable-next-line no-console
        console.log(`server is listening to port ${app.get('port')}.`);
    });
};

start();
