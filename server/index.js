import express from 'express';

const server = express();

const PORT = 8001;
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    res.send('<h1>Server Started</h1>')
})
server.listen(PORT, () => {
    console.log('listening at ', PORT)
})