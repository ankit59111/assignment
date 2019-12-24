export default ({body, preloadState, title}) => {

    return `<!doctype html>
     <html lang="en">
        <head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
        <meta name="description" content="Description about page" />
            <title>${title}</title>
        </head>
        <body>
       
        <div id="root">  ${body}</div>  
        </body>
        <script src="/assets/vendors.bundle.js"></script>
        <script src="/assets/bundle.js"></script>
     </html>
`
}