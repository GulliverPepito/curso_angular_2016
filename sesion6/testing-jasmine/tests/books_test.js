'use strict';

describe('Modulo app.books', function () {

    beforeEach(function () {
        module('app.books');
    });

    describe('Books service', function () {

        var booksService;

        beforeEach(function () {
            inject(['BooksService', function (service) {
                    booksService = service;
                }
            ]);
        });

        it('debe devolver una lista de dos libros', function () {
            var books = booksService.getAll();
            expect(books).toBeDefined();
            expect(books.length).toBe(2);
        });
    });

    describe('Books controller', function () {

        var $scope, BooksService;

        beforeEach(function () {
            module(function ($provide) {
                $provide.value('MockedBooksService', {'getAll': function () {
                        return [];
                    }});
            });
        });

        beforeEach(inject(function ($rootScope) {
            $scope = $rootScope.$new();
        }));

        it('debe exponer la lista de libros', inject(function ($controller, MockedBooksService) {
            $controller('BooksController', {'$scope': $scope, 'BooksService': MockedBooksService});
            expect($controller).toBeDefined();
            expect($scope.books.length).toBe(MockedBooksService.getAll().length);

        }));

    });

});
