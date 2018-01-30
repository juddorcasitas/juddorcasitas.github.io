(function(){
var project = angular.module("project");
project.service("projectSvc",['$http', '$sce', function($http, $sce){
  var self = this;
  self.getProjects = function(){
        var url = "projects.json";
        var projectData = $http.get(url);
        var projectResponse = projectData.then(function(response){
          console.log(url);
          console.log(response);
          return response.data;
        }, function(reason){
          self.error = reason.data;
        });
        return projectResponse;
  }
}]);
})();
