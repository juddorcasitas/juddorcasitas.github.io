(function(){
  var project = angular.module("project");
  project.controller("projectCtrl",[ "projectSvc","$stateParams",
  function projectCtrl(projectSvc, $stateParams){
    var self = this;
    self.projects = [];
    console.log("fetching projects");
    projectSvc.getProjects()
      .then(function(data) {
          self.projects = data.projects;
      });
      var param = parseInt($stateParams.id);
      self.currProj =  self.projects[param];
  }]);
})();
