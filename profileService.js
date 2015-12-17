angular.module('devMtIn').service('profileService', function($http) {

  var baseURL = "--bASEURL FIXME--";

  this.saveProfile = function(profile) {
    $http({ // Requests that your profile be added to the database
        method: 'POST',
        url: baseUrl + '/api/profiles',
        data: profile
      })
      .then(function(profileResponse) {
        localStorage.setItem('profileId', JSON.parse({
          profileId: profileResponse.data._id
        }));
        console.log(profileResponse);
      })
      .catch(function(err) {
        console.error(err);
      });
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

});
