// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
   var defineString = function (firstString, secondString) {
    var string = firstString + " Priority: " + secondString;
    return string;
  }  
  var redefineString = function ( originalString, secondString) {
    var endIndex = originalString.search(" Priority");
    var string = originalString.substring(0, endIndex);
    string = string + " Priority: " + secondString;
    return string
  }

  $scope.todos = [defineString("try", "Insert a Priority")];
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.isComplete = [false, false] ;
  $scope.newItem = "";


  $scope.count = 2;
  $scope.toDelete = [] ;
  $scope.completedTasks = [];
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      var newItem = defineString($scope.newItem, "Insert a Priority");
      $scope.todos.push(newItem);
      $scope.newItem = "";
      $scope.isComplete.push(false);
      $scope.count+=1;
    }
  }
  $scope.changePriority = function(item){
    console.log("in changePriority");
    var priority = prompt("What is the priority of this event?");
    var index = $scope.todos.indexOf(item);
    $scope.todos[index] = redefineString($scope.todos[index], priority);

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