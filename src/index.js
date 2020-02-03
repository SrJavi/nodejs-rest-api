require('dotenv').config();

import '@babel/polyfill';
import app from './app'
import './config/database'

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();