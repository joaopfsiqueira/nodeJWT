const usuariosControlador = require('./usuarios-controlador');
const middlewaresAutenticacao = require('./middlewaresAutenticacao')

module.exports = app => {
  app
    .route('/usuario')
    .post(usuariosControlador.adiciona)
    .get(usuariosControlador.lista);

  app.route('/usuario/:id').delete(middlewaresAutenticacao.bearer, usuariosControlador.deleta);

  app
  .route('/usuario/login')
  .post(middlewaresAutenticacao.local, usuariosControlador.login);
};
