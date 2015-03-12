module app.controllers
{

    export class MessagesCtrl
    {
        message: string;
        users = {};
        currentUid;

        public saveMessage = (message: string) : void =>
        {
            if (message) {
                this.messages.$add({ author: this.user.loggedUser.uid, message: message });
                this.message = null;
            }
        }

        public getUsername = (uid: string) =>
        {
            this.currentUid = uid;
            if (!this.users[this.currentUid]) {
                this.user.getUser(this.currentUid).$loaded(this.userLoaded);
            } else {
                return this.users[this.currentUid];
            }
        }

        private userLoaded = (data) =>
        {
            this.users[this.currentUid] = data.username;
        }

        constructor (private messages: any, private user)
        {
        }

        public static $inject = ['messagesFactory', 'userService'];
    }
    angular.module('app.controllers').controller('messagesCtrl', MessagesCtrl);
}
