module app.services
{
    export class FirebaseService
    {
        public $get() {
            return new Firebase('https://crackling-fire-4047.firebaseio.com');
        }
    }
    app.registerService('FirebaseService');
}
