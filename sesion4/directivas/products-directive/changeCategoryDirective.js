angular.module("changeCategoryDirective", [])
    .directive("changeCategory", function () {
        return {
            restrict: "E",
            scope: {
                item: "=item",
                property: "@propertyName"
            },
            link: function (scope, element, attrs) {
                var button = angular.element("<button>").text("change category");
                button.addClass("btn btn-primary btn-xs");
                element.append(button);
                button.on("click", function () {
                    scope.$apply(function () {
			scope.item[scope.property]='default_category';
                    })
                })
            },
        }
    });
