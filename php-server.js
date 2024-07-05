import phpServer from 'php-server';

const server = await phpServer({
    port: 3002,
    base: "./site"  
});