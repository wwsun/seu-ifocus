angular.module('ifocus.audience')

    .controller('AudienceEventCtrl', ['AudienceService', 'StatusService', function (AudienceService, StatusService) {
        var vm = this;

        // vm.overviewDistribution = {
        //     labels: ['product price', 'product gallery', 'product comment', 'product detail'],
        //     data: [135, 70, 150, 170]
        // };

        // vm.clickDistribution = {
        //     labels: ['product price', 'product gallery', 'product comment', 'product detail'],
        //     data:[45, 30, 60, 70]
        // };

        // vm.mouseDistribution = {
        //     labels: ['product price', 'product gallery', 'product comment', 'product detail'],
        //     data:[50, 20, 30, 60]
        // };

        // vm.scrollDistribution = {
        //     labels: ['product price', 'product gallery', 'product comment', 'product detail'],
        //     data:[40, 20, 60, 40]
        // };

        //Add heatmap by semantics
        AudienceService.getHeatmapBySemantics()
            .success(function (data) {

                var heatmapSemantic = {labels: [], series: ['heatmap semantics'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    heatmapSemantic.labels.push(data[i].semantic);
                    heatmapSemantic.data.push(data[i].dup);
                }

                vm.heatmapSemantic = heatmapSemantic;

            });

        AudienceService.getClickDistribution("223.3.68.141:8080/html/HongMiNote.html")
            .success(function (data) {

                var clickDistribution = {labels: [], series: ['Click Distribution'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    clickDistribution.labels.push(data[i].semantics);
                    clickDistribution.data.push(data[i].length);
                }

                vm.clickDistribution = clickDistribution;

            });

        AudienceService.getMousemoveDistribution("223.3.68.141:8080/html/HongMiNote.html")
            .success(function (data) {

                var mousemoveDistribution = {labels: [], series: ['Mousemove Distribution'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    mousemoveDistribution.labels.push(data[i].semantics);
                    mousemoveDistribution.data.push(data[i].length);
                }

                vm.mousemoveDistribution = mousemoveDistribution;

            });

        AudienceService.getScrollDistribution("223.3.68.141:8080/html/HongMiNote.html")
            .success(function (data) {

                var scrollDistribution = {labels: [], series: ['Scroll Distribution'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    scrollDistribution.labels.push(data[i].semantics);
                    scrollDistribution.data.push(data[i].length);
                }

                vm.scrollDistribution = scrollDistribution;

            });

        // AudienceService.getFormChange()
        //     .success(function (data) {

        //         var formChange = {labels: [], series: ['Form Change'], data: []}; // pie

        //         var i,
        //             n;

        //         for (i = 0, n = data.length; i < n; i++) {
        //             formChange.labels.push(data[i].type);
        //             formChange.data.push(data[i].nums);
        //         }

        //         vm.formChange = formChange;

        //     });

        // AudienceService.getFormEmpty()
        //     .success(function (data) {

        //         var formEmpty = {labels: [], series: ['Form Empty'], data: []}; // pie

        //         var i,
        //             n;

        //         for (i = 0, n = data.length; i < n; i++) {
        //             formEmpty.labels.push(data[i].type);
        //             formEmpty.data.push(data[i].nums);
        //         }

        //         vm.formEmpty = formEmpty;

        //     });

        // AudienceService.getFormAvgTimeCost()
        //     .success(function (data) {

        //         vm.formAvgTimeCost = data; // data format

        //     });

        AudienceService.getOverallDistribution("223.3.68.141:8080/html/HongMiNote.html")
            .success(function (data) {

                var overallDistribution = {labels: [], series: ['Overall Distribution'], data: []}; // pie

                var i,
                    n;

                for (i = 0, n = data.length; i < n; i++) {
                    overallDistribution.labels.push(data[i].semantics);
                    overallDistribution.data.push(data[i].length);
                }

                vm.overallDistribution = overallDistribution;

            });


        // vm.getHotPagesBySemantics = function(semantic) {
        //     console.log(semantic);
        //     return [
        //         {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5332.html', dup: 40},
        //         {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5335.html', dup: 30},
        //         {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5132.html', dup: 22},
        //         {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5333.html', dup: 11},
        //         {url:'http://shjtig.en.made-in-china.com/product/QoMmbBauYwpY/China-Fleetguard-Element-Fuel-Filter-Ff5332.html', dup: 8}
        //     ];
        // };

        // todo: semantics为两级联动下拉列表

        // vm.hotPages = vm.getHotPagesBySemantics('oil');

        //Add hotpages by semantics
        AudienceService.getHotpagesBySemantics('评价')
            .success(function (data) {
                vm.hotPages = data;
            });

        //Add hotpages of click
        AudienceService.getHotpagesOfClick()
            .success(function (data) {
                vm.clickHotPages = data;
            });

        //Add hotpages of mousemove
        AudienceService.getHotpagesOfMousemove()
            .success(function (data) {
                vm.mousemoveHotPages = data;
            });

        //Add hotpages of scroll
        AudienceService.getHotpagesOfScroll()
            .success(function (data) {
                vm.scrollHotPages = data;
            });

    }]);