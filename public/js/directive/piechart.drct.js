/**
 * @example <div pie-chart></div>
 */
angular.module('chart.pie', []).directive('pieChart', pieChart);

function pieChart() {
    // todo: implementation detail
    function link(scope, element, attrs) {
        element.text('Hello world');
    }

    return {
        link: link
    };
}