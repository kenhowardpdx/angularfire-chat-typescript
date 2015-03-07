(function () {

    /* User Service */
    angular.module('app')
        .factory('User', UserFactory);

    UserFactory.$inject = ['DB', '$firebaseObject'];

    function UserFactory (DB, $firebaseObject) {
        return function (twitterId) {
            var self = this;
        };
    }

})();
