'use strict';

(function () {
    var module = angular.module('app.books', []);

    module.factory('BooksService', function () {

        var books = [
            createBook('AngularJS', 'Packit', '2016'),
            createBook('ReactJS', 'Anaya', '2015')
        ];

        function createBook(title, editorial, year) {
            return {
                title: title,
                editorial: editorial,
                year: year
            };
        }

        function getBooks() {
            return books;
        }

        return {
            getAll: getBooks
        };
    });

    module.controller('BooksController', ['$scope', 'BooksService', function ($scope, BooksService) {
            $scope.books = BooksService.getAll();
        }]);        
})();
