(function(){
  var navbar = angular.module("navbar");
  navbar.controller("navbarCtrl",function navbarCtrl() {
    var self = this;
    self.menuOpen = false;

    self.toggleMenu = function(){
      self.menuOpen = !self.menuOpen;
    };

  });
  navbar.component('navbar', {
      bindings: {
        nav: '='
      },
      templateUrl: '/templates/navbar.html',
      controller: 'navbarCtrl',
  });
})();
