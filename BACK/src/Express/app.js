const express = require('express');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const {resolve} = require('path');

app.use(helmet());
app.disable('x-powered-by');
app.use(cors({
    origin:"*",
}))

app.use('/public',express.static(resolve(__dirname+'../../../../FRONT')))
app.set('trust proxy', 1);
app.use(require('./Router/router'));
app.use('/api/getMetadatas',require('./RateLimiter/ratelimitermiddleware'))
app.disable('x-powered-by');

app.listen('3000',()=>{
    console.log(`En écoute sur 3000`)
})