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

  this.findFriendsFriends = function(profile) {
    var index = 0;
    var deferred = $q.defer();
    function getNextFriend() {
      if (profile.friends[index]) {
        $http({
          method: 'GET',
          url: baseUrl + '/api/friends-friends/' + profile.friends[index]._id
        }).then(function(friends) {
          profile.friends[index].friends = friends.data;
          index++;
          getNextFriend();
        })
        .catch(function(err) {
          return console.error(err);
        });
      } else { // Once we have finished running through our friends array
        deferred.resolve(profile); // Resolve our promise with our updated profile
        return deferred.promise; // Return the promise
      }
    }
    getNextFriend(); // Invoke the inner function for the first time
  };


});
