const nextApp = require('../nextApp').nextApp;
const handle = require('../nextApp').handle;

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.get('/index', (req, res) => {
    return nextApp.render(req, res, '/index', req.query);
  });

  app.use('*', (req, res) => {
    return handle(req, res);
  });
};
