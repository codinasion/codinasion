// Note: requires axios package.

const axios = require('axios');
// Enter tinyurl token here
const token = 'Your token here';
let url = 'Url here';

async function generateTinyurl(token, url){
// Axios request
    return axios({
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        url: url,
        data: {
            url: 'https://github.com',
            domain: 'tiny.one',
            'expires_at':null,
        }
    })
}

generateTinyurl(token, url)
// Output tinyurl
.then(responce=>console.log(responce.data['data']['tiny_url'])).catch(err=>console.log(err.message));