module app.controllers
{

    export class MessagesCtrl
    {
        name: string;
        message: string;

        constructor (private messages: any)
        {
            this.name = '';
            this.message = '';
        }

        public saveMessage (name: string, message: string) : void
        {
            if (name && message) {
                this.messages.$add({ name: name, message: message });
                this.message = null;
            }
        }
    }
    app.registerController('MessagesCtrl', ['messagesFactory']);
}
