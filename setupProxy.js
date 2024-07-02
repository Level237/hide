export default function(app) {
  app.use((req, res, next) => {
    res.set({
        'Content-Security-Policy': "default-src 'self' 'unsafe-eval' 'unsafe-inline' blob:;"
    });
      next();
  });
};