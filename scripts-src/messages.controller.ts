module app.controllers
{

    export class MessagesCtrl
    {
        message: string;

        public saveMessage = (message: string) : void =>
        {
            if (message) {
                this.messages.$add({ userid: this.user.loggedUser.uid, message: message });
                this.message = null;
            }
        }

        constructor (private messages: any, private user)
        {
        }

        public static $inject = ['messagesFactory', 'userService'];
    }
    angular.module('app.controllers').controller('messagesCtrl', MessagesCtrl);
}
