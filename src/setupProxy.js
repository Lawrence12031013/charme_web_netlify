const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/auth/register',
    createProxyMiddleware({
      target: 'https://charme-api-vercel.vercel.app/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite:{
        '^':''
      }
    })
  );
  app.use(
    '/auth/login',
    createProxyMiddleware({
      target: 'https://charme-api-vercel.vercel.app/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite:{
        '^':''
      }
    })
  );
  app.use(
    '/order/user',
    createProxyMiddleware({
      target: 'https://charme-api-vercel.vercel.app/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite:{
        '^':''
      }
    })
  );
  app.use(
    '/time',
    createProxyMiddleware({
      target: 'https://charme-api-vercel.vercel.app/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite:{
        '^':''
      }
    })
  );
  app.use(
    '/order',
    createProxyMiddleware({
      target: 'https://charme-api-vercel.vercel.app/api/v1',
      changeOrigin: true,
      secure: false,
      pathRewrite:{
        '^':''
      }
    })
  );
  
};