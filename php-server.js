import phpServer from 'php-server';

const server = await phpServer({
    port: 3001,
    base: "./site"  
});