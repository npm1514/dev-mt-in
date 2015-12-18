angular.module("app").service("friendService", function($http, $q) {

  var baseURL = "--bASEURL FIXME--";

  this.findFriends = function(userId, query) {
    console.log(userId);
    return $http({
      method: 'GET',
      url: baseUrl + '/api/friends/' + userId + '?name=' + query
    }).then(function(response) {
      console.log(response);
      return response;
    });
  };

  this.addFriend = function(userId, friendId) {
    console.log(userId);
    return $http({
      method: 'PUT',
      url: baseUrl + '/api/friends/' + userId,
      data: {friendId: friendId}
    }).then(function(response) {
      console.log(response);
      return response;
    });
  };

  this.removeFriend = function(userId, friendId) {
    console.log(userId);
    return $http({
      method: 'PUT',
      url: baseUrl + '/api/friends/remove/' + userId,
      data: {friendId: friendId}
    }).then(function(response) {
      console.log(response);
      return response;
    });
  };


});
