module app.filters {
    export function UserNameFilter (user) {

        var username;

        function filter (input) {
            return user.getUser(input).then(function (data) {
                return data.username;
            });
        }

        filter['$stateful'] = true;

        return filter;
    }

    UserNameFilter.$inject = ['userService'];

    angular.module('app.filters').filter('userNameFilter', UserNameFilter);
}
