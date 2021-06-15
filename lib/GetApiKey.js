/* eslint-disable no-console */
import fs from 'fs';

export default function GetApiKey() {
    const key = process.env.API_KEY;
    const exampleEnv = `
    NODE_TLS_REJECT_UNAUTHORIZED=0
    API_KEY=
    `;
    console.log(`key ${key}`);
    if (!key || !key.length) {
        if (!fs.existsSync('../.env')) {
            console.log('Creating a .end file in this format');
            console.log(exampleEnv);
        }
        throw Error('Key not found probably an issue with a missing .env file. Or in production an misconfigured env varible');
    }
    return key;
}

