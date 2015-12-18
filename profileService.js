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

  this.checkForProfile = function(profileId) {
    return $http({
      method: 'GET',
      url: baseUrl + 'api/profiles/' + profileId
    });
  };

  this.deleteProfile = function() {
    var profileId = JSON.parse(localStorage.getItem('profileId')).profileId;

    return $http({
      method: 'DELETE',
      url: baseUrl + 'api/profiles/' + profileId
    });
  };

});
