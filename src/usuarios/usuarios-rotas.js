const usuariosControlador = require('./usuarios-controlador');
const passport = require('passport');

module.exports = app => {
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id').delete(passport.authenticate({session:false}), usuariosControlador.deleta);

  app
  .route('/usuario/login')
  .post(passport.authenticate('local', {session: false}), usuariosControlador.login);
};
