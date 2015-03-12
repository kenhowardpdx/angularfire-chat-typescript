module app.services
{
    export class UserService implements IService
    {
        public loggedUser = null;

        username:string;
        uid:string;

        userRef;

        public set = (profile) => {
            this.username = profile[profile.provider].username;
            this.uid = profile.uid;
            this.userRef = this.DB.child('users').child(profile.uid);
            this.$firebaseObject(this.userRef).$loaded(this.setUser);
        }

        public setUser = (user) => {
            if(user.$value === null) {
                // Create User
                user.username = this.username;
                user.$save();
            }
            user.uid = this.uid;
            this.loggedUser = user;
            this.$rootScope['user'] = this.loggedUser;
        }

        public getUser = (uid) => {
            return this.$firebaseObject(this.DB.child('users').child(uid));
        }

        public logCurrentUserOut = () => {
            this.$rootScope['user'] = this.loggedUser = null;
        }

        constructor (private $rootScope: ng.IRootScopeService, private DB: Firebase, private $firebaseObject)
        {
        }

        public static $inject = ['$rootScope', 'firebaseFactory', '$firebaseObject'];
    }
    angular.module('app.services').service('userService', UserService);
}
