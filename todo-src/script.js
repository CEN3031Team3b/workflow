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

  $scope.todos = [defineString("try", "fail")];
  $scope.newItem = "";


  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      var newItem = defineString($scope.newItem, "fail");
      $scope.todos.push(newItem);
      $scope.newItem = "";
    }
  }
  $scope.changePriority = function(item){
    console.log("in changePriority");
    var priority = prompt("What is the priority of this event?");
    var index = $scope.todos.indexOf(item);
    $scope.todos[index] = redefineString($scope.todos[index], priority);
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }
    
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/