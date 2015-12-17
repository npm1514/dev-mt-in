angular.module("devMtIn").controller("homeCtrl", function($scope, profileService){
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

	$scope.checkForProfile = function(){
		$scope.myProfile = profileService.checkForProfile();
	};
	$scope.checkForProfile();

	$scope.deleteProfile = function(profile) {
		profileService.deleteProfile(profile);
		$scope.myProfile = profileService.checkForProfile();
	};


});
