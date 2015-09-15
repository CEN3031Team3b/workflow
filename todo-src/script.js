// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.isComplete = [false, false] ;
  $scope.newItem = "";
  $scope.count = 2;
  $scope.toDelete = [] ;
  $scope.completedTasks = [];
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
      $scope.isComplete.push(false);
      $scope.count+=1;
    }
  }

  $scope.completeItem = function(item){
    console.log("in complete");
    var index = $scope.todos.indexOf(item);
    $scope.isComplete[index] = true;
    console.log($scope.isComplete) ;
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
    $scope.isComplete.splice(index, 1);
    $scope.count-=1;
  }

    $scope.clearCompleted = function(){
    console.log("in clearing");
    console.log($scope.isComplete);
    console.log($scope.todos);

    var count_complete = 0;

    angular.forEach($scope.todos, function(todo, index){
      if ($scope.isComplete[index])
      {
        count_complete+=1;
      }
    });

    angular.forEach($scope.isComplete, function(item, index){
      if(!item)
      {
        $scope.completedTasks.push($scope.todos[index]);
      }
    });

    console.log("count complete: " + count_complete) ;
    if ($scope.todos.length > 0 || $scope.isComplete.length >0)
    {
    $scope.todos = [];
    $scope.isComplete = [];      
    }

    console.log("saved tasks:" + $scope.completedTasks);
    angular.forEach($scope.completedTasks, function(eachItem, index){
        $scope.todos.push(eachItem);
        $scope.isComplete.push(false);
    });
    $scope.count-=count_complete;
    $scope.completedTasks.length=0;
    count_complete = 0;

  }

});