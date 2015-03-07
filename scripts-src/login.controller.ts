module app.controllers
{
    export class LoginCtrl implements IController
    {
        private login () : void {
            this.auth.$authWithOAuthPopup('twitter').then(function () {
                // logged in
                this.$rootScope.profile = this.auth.$getAuth.twitter;
                this.$location.path('/');
            });
        }
        constructor (private $rootScope : ng.IRootScopeService, private $location: ng.ILocationService, private auth : AngularFireAuth ) {
        }
    }
    app.registerController('LoginCtrl', ['$rootScope', '$location', 'authFactory']);
}
