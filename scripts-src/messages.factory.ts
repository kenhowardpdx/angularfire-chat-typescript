module app.services
{
    export function MessagesFactory (DB: Firebase, $firebaseArray: AngularFireArrayService)
    {
        return $firebaseArray(DB.child('messages'));
    }

    MessagesFactory.$inject = ['firebaseFactory', '$firebaseArray'];

    angular.module('app.services').factory('messagesFactory', MessagesFactory);
}
