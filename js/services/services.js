'use strict';

async function postData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: data
    });
    if (!response.ok) {
        throw new Error(`Could not fetch: ${response.url}, status: ${response.status}`);
    }
    return await response.json();
}

async function getResource(url) {
    const response = await fetch(url);
    return await response.json();
}

export {postData};
export {getResource};