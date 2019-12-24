import express from 'express';
import template from '../browser/template';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from "../react/components/app/app";
const server = express();

const PORT = 8001;
server.use('/assets', express.static('assets'));

server.get('/', (req, res) => {
    const appHtml = renderToString(
        <StaticRouter location={req.url} context={{}}>
            <App />
        </StaticRouter>
    );
    res.send(template({
        body:appHtml,
        preloadState:{},
        title:'Server Side Rendering started'
    }))
})
server.listen(PORT, () => {
    console.log('listening at ', PORT)
})