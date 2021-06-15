/* eslint-disable no-debugger */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import fetch from 'node-fetch';
import btoa from 'btoa';
import GetApiKey from './GetApiKey.js';

const { Headers } = fetch;

const url = 'https://sonarqube.thehartford.com/api/project_analyses/search?project=acoe_component_library&ps=500';

export default async function indexJson() {
    let headers = new Headers();
    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', `Basic ${btoa(`${GetApiKey()}:`)}`);

    const promise = fetch(url, {
        method: 'GET',
        headers
    });
    const json = await promise.then(res => res.json());

    debugger;
}
