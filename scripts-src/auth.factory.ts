module app.services
{
    export function AuthFactory (DB: Firebase, $firebaseAuth : AngularFireAuthService)
    {
        return function () {
            return $firebaseAuth(DB);
        }
    }

    AuthFactory.$inject = ['firebaseFactory', '$firebaseAuth'];

    angular.module('app.services').factory('authFactory', AuthFactory);
}
