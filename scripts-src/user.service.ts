module app.services
{
    export class UserService implements IService
    {
        public loggedUser = null;

        provider:string;
        username:string;
        uid:string;

        userRef;

        public set = (profile) => {
            this.provider = profile.provider;
            this.username = profile[profile.provider].username;
            this.uid = profile.uid;
            this.userRef = this.DB.child('users').child(profile.uid);
            this.$firebaseObject(this.userRef).$loaded(this.setUser);
        }

        public setUser = (user) => {
            if(user.$value === null) {
                // Create User
                user.provider = this.provider;
                user.username = this.username;
                user.uid = this.uid;
                user.$save();
            }
            this.loggedUser = user;
            this.$rootScope['user'] = this.loggedUser;
        }

        public getUser = (uid) => {
            this.userRef = this.DB.child('users').child(uid);
            return this.$firebaseObject(this.userRef).$loaded(function (data) {
                return data;
            });
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
