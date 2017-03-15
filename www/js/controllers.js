angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, Login) {
  $scope.email = '';
  $scope.senha = '';

  $scope.fazerLogin = function(email, senha) {
    alert(email + senha);
  }

  $scope.novoCadastro = function(email, senha) {
    Login.novo(email, senha, function(erro) {
      alert(erro);
    });
  }
})

.controller('TarefasCtrl', function($scope) {
  $scope.tarefas = [
    {
      nome: 'Bruno'
    },
    {
      nome: 'Ferreira'
    },
    {
      nome: 'Ravanhani'
    }
  ];
})