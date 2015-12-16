angular.module("devMtIn").controller("homeCtrl", function($scope, profileService){
	$scope.myProfile = {
		friends: [{name: 'Ryan'}, {name: 'Bryan'}, {name: 'Sarah'}, {name: 'Zac'}, {name: 'Erin'}]
	};

	$scope.sortOptions = [{
	    display: 'Ascending'
	  , value: false
	},
	{
	    display: 'Descending'
	  , value: true
	}];

	$scope.editing = false;

	$scope.saveProfile = function(profile) {
		profileService.saveProfile(profile);
		$scope.editing = false;
	};

	$scope.myProfile = profileService.checkForProfile();

	$scope.deleteProfile = function(profile) {
		profileService.deleteProfile(profile);
		$scope.myProfile = profileService.checkForProfile();
	};	


});