// Code goes here

(function () {
    var app = angular.module("myContext", []);

    var MainController = function ($scope, $http) {
        $scope.name = "World";
        // Evento de Sucesso
        var onUserComplete = function (response) {
            $scope.myData = response.data;
        };

        // Evento de Erro
        var onError = function (reason) {
            $scope.error = "Could not fetch the user";
        };

        // Testando Botão Pesquisa
        $scope.search = function (username) {
            $http.get("http://www.w3schools.com/angular/customers.php")
             .then(onUserComplete, onError);
        };

        $http.get("http://localhost:29555/api/values")
         .then(onUserComplete, onError);
    };

    app.controller("MainController", ["$scope", "$http", MainController]);

}());