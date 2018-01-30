(function(){
var home = angular.module("home");
home.service("homeSvc",['$http', '$sce', function($http, $sce){
  var self = this;
  self.getProjects = function(){
        var url = "projects.json";
        var projectData = $http.get(url);
        var homeResponse = projectData.then(function(response){
          console.log(url);
          console.log(response);
          return response.data;
        }, function(reason){
          self.error = reason.data;
        });
        return homeResponse;
  }

}]);
})();
