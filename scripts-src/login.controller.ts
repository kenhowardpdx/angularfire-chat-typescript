module app.controllers
{
    export class LoginCtrl implements IController
    {
        private login = () : void => {
            this.auth().$authWithOAuthPopup('twitter').then(this.setUser);
        }

        private setUser = (profile) : void => {
            this.user.set(profile);
            this.$location.path('/');
        }

        constructor (private $rootScope : ng.IRootScopeService, private $location: ng.ILocationService, private auth, private user)
        {
        }

        public static $inject = ['$rootScope', '$location', 'authFactory', 'userService'];
    }
    angular.module('app.controllers').controller('loginCtrl', LoginCtrl);
}
