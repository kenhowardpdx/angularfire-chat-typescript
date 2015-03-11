module app.controllers {
    export class LogoutCtrl {

        constructor(private auth, private user, private $location) {
            this.unauth();
            $location.path('/login');
        }

        unauth = () => {
            this.auth().$unauth();
            this.user.logCurrentUserOut();
        }

        public static $inject = ['authFactory', 'userService', '$location'];
    }
    angular.module('app.controllers').controller('logoutCtrl', LogoutCtrl);
}
