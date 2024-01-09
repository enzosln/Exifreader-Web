const app = require('express')();
const helmet = require('helmet');
const cors = require('cors');
const router = require('./Router/router');

if (process.env.NODE_ENV === 'prod'){
    app.use(helmet());
    app.disable('x-powered-by');
    app.use(cors({
            origin:"*",
        })
    )}

app.enable('trust proxy');
app.use(router);

app.listen('3007',()=>{
    console.log(`En écoute sur 3007`)
})