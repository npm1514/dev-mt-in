angular.module("devMtIn").controller("homeCtrl", function($scope, profileService, friendService){
	$scope.myProfile = {
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	};

	$scope.sortOptions = [{
	    display: 'Ascending',
	   	value: false
	},
	{
	    display: 'Descending',
	  	value: true
	}];

	$scope.editing = false;

	$scope.saveProfile = function(profile) {
		$scope.myProfile = profileService.saveProfile(profile);
		$scope.editing = false;
	};

	$scope.checkForProfile = function() {
	  var profileId = JSON.parse(localStorage.getItem('profileId'));

	  if (profileId) {
	    profileService.checkForProfile(profileId.profileId)
	    .then(function(profile) {
	      $scope.myProfile = profile.data;
	    })
	    .catch(function(err) {
	      console.error(err);
	    });
	  }
	};
	$scope.checkForProfile();

	$scope.deleteProfile = function() {
	  profileService.deleteProfile()
	  .then(function(deletedProfile) {
	    localStorage.removeItem('profileId');
	    $scope.myProfile = {};
	  })
	  .catch(function(err) {
	    console.error(err);
	  });
	};

	$scope.findFriends = function(query){
		friendService.findFriends($scope.myProfile._id, query)
		.then(function(response) {
			$scope.potentialFriends = response;
		});
	};

	$scope.addFriend = function(friendId){
		friendService.addFriend($scope.myProfile._id, friendId)
		.then(function(response){
			$scope.checkForProfile();
		});
	};

	$scope.removeFriend = function(friendId){
		friendService.removeFriend($scope.myProfile._id, friendId)
		.then(function(response){
			$scope.checkForProfile();
		});
	};

});
