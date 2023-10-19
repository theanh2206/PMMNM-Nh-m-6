const { createClient } = require('redis');
const config = require('./config');

const client = createClient({
  ...(config.env === 'production' && { url: 'redis://localhost:6379' }),
});

client.on('connect', () => console.log(`Redis connected`));

client.on('error', (err) => console.log('Redis Client Error', err));

client.connect();

module.exports = client;
