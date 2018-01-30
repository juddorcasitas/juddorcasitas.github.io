var app = angular.module("app",[ 'navbar', 'home', 'ui.router']);
(function(){
app.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('home', {
      url: "/",
      templateUrl: 'templates/home.html',
      controller: 'homeCtrl',
      controllerAs: 'hCtrl'
    })
    .state('projectDetail', {
      url: "/project/{id:int}",
      templateUrl: 'templates/projects.html',
      controller: 'projectCtrl',
      controllerAs: 'pCtrl'
    });
    $urlRouterProvider.otherwise("/");
});
})();
