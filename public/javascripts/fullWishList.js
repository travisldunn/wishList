angular.module('test', []).controller('myCtrl', function ($scope, $http) {

    function WishList(name, description) {
        var self = this;

        self.name = name;
        self.description = description;
    }

    $http.get(
        '/db/find',
        null, null
    ).then(function successCallback(response) {
        console.log('in success call back: ');
        console.log(response);
        if (response.status === 200) {

            $scope.wishListArray = [];


            for (var pos in response.data) {

                var obj = response.data[pos];

                $scope.wishListArray.push(new WishList(obj.name, obj.description))

            }


        }
    }, function errorCallback(response) {
        console.log('in error call back: ' + response);
    });



    $scope.createWishList = function () {
        $http.post(
            '/db/insert', {
                name: $scope.name,
                description: $scope.description
            }, null
        ).then(function successCallback(response) {
            console.log('in success call back: ');
            console.log(response);

            $scope.wishListArray.push(new WishList($scope.name, $scope.description));
        }, function errorCallback(response) {
            console.log('in error call back: ' + response);
        });



    };






});
