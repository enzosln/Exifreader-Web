const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const {resolve} = require('path');
const router = require('./Router/router');

if (process.env.NODE_ENV === 'prod'){
    app.use(helmet());
    app.disable('x-powered-by');
    app.use(cors({
            origin:"*",
        })
    )}

app.use('/public',express.static(resolve(__dirname+'../../../../FRONT')))
app.enable('trust proxy');
app.use(router);
app.use()

app.listen('3007',()=>{
    console.log(`En écoute sur 3007`)
})