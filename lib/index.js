/* eslint-disable import/extensions */
/* eslint-disable no-console */
import fetch from 'node-fetch';
import btoa from 'btoa';
import GetApiKey from './GetApiKey.js';

const { Headers } = fetch;
export default function index() {
    let headers = new Headers();
    headers.set('Authorization', `Basic ${btoa(`${GetApiKey()}:`)}`);
    const url = 'https://sonarqube.thehartford.com/api/languages/list';
    // headers.set('Authorization', `Basic ${base64.encode(`${username}:${password}`)}`);
    fetch(url, {
        method: 'GET',
        headers
    })
        // .then(res => res.json())
        .then(json => console.log(json))
        .catch(console.error);
}
