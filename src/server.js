import express from 'express';
import App  from '../dist/ssr/app';
import React from 'react';
import { StaticRouter } from 'react-router';
import { renderToString } from 'react-dom/server'

const app  = express();


app.use(express.static('dist'));
app.use("/images", express.static("images"));

app.get('*', (req, res)=>{
    console.log(req.url); 
    const html = renderToString(
        <StaticRouter
            location={req.url}
            context={{name: 'Fabian'}}
        >
            <App/>
        </StaticRouter>
    );
    res.write(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Platzi Viedo</title>
      <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
      <div id="app">${ html }</div>
      <div id="modal-container"></div>
      <!--   <script src="http://localhost:9000/js/app.js"></script>  -->
      <script src="/js/app.js" ></script>
  </body>
  </html>
  `);
  res.end();
})


app.listen(3000);

console.log("se ejecuto en el puerto 3000");