angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {

    function newCard (_name, _age) {  return { name: _name, age: _age }; }
    
    $scope.cards = [
      { name: 'chris', age: 33 },
      { name: 'john', age: 34 }
    ];

    $scope.cardDestroyed = function(index) {
      $scope.cards.splice(index, 1);
    };
    
    var i = 0;

    $scope.cardSwiped = function(index) {
      var name = 'abc' + i++;
      var age = 1 + i;
      var newCard = newCard(name, age);
      $scope.cards.push(newCard);
    };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
