module app.services
{
    export class AuthFactory implements IService
    {
        constructor (private DB : Firebase, public $firebaseAuth : AngularFireAuthService)
        {
            this.$firebaseAuth(DB);
        }
    }
    app.registerService('AuthFactory', ['FirebaseService', '$firebaseAuth']);
}
