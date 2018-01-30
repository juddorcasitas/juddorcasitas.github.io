(function(){
  var home = angular.module("home");
  home.controller("homeCtrl",[ "homeSvc","$location", function homeCtrl(homeSvc, $location){
    var self = this;
    self.projects = [];
    self.modal = false;
    console.log("fetching projects");
    homeSvc.getProjects()
      .then(function(data) {
          self.projects = data.projects;
      });

    self.selectProject = function(index) {
      self.selectedProject = self.projects[index];
      self.modal = true;
      // $location.path("project/" + this.selectedProject.id).replace();
      // console.log("Project chosen" + $location.path());
    }
    self.modalOff = function(){
      self.modal = false;
    }
  }]);


})();
