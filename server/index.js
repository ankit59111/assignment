import express from 'express';
import React from 'react';
import axios from 'axios';

import template from '../browser/template';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from "../react/components/app/app";
import {getUrl,getAllData} from "../controller/apiList";

const server = express();

const PORT = 8001;
server.use('/assets', express.static('assets'));

server.get('/*', (req, res) => {
    const url = getUrl(req.url);
    //axios.get('https://node-sample-api.herokuapp.com/api/home').then(res=>console.log(res))
    getAllData(url).then(response=>{
        const context = response || {};
        const appHtml = renderToString(
            <StaticRouter location={req.url} context={context}>
                <App />
            </StaticRouter>
        );
        res.send(template({
            body:appHtml,
            preloadState:JSON.stringify(context),
            title:'Server Side Rendering started'
        }))
    }).catch(result=>console.log(result))

});

server.listen(PORT, () => {
    console.log('listening at ', PORT)
})