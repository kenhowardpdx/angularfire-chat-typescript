module app.services
{
    export class MessagesFactory
    {
        static $inject = [
            'app.services.FirebaseService',
            '$firebaseAuth'
        ];
        constructor (private DB : Firebase, public $firebaseArray : AngularFireArrayService)
        {
            this.$firebaseArray(DB);
        }
    }
    app.registerService('MessagesFactory', ['firebaseService', '$firebaseAuth']);
}
