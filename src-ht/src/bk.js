const crypto = require('crypto');

const secret = 'xiaobai';
const hash = crypto.createHmac('sha256', secret)
                   .update('hello world')
                   .digest('hex');
console.log(hash);