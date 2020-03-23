const {createProxyMiddleware} = require('http-proxy-middleware')

module.exports = function(app) {
    app.use('/hd', 
    createProxyMiddleware({ 
              target: 'http://localhost:4000',
              changeOrigin: true,
              pathRewrite:{
                  "^/hd":""
              } 
            }
         ));
}