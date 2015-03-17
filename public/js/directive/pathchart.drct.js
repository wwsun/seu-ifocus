angular.module('chart.path', []).directive('pathChart', pathChart);

// todo: handle the click event
// todo: resize to change the view level

function pathChart() {
    function link(scope, el, attr) {

        var energy = {"nodes":[{"url":"2837","name":0},{"url":"6030","name":1},{"url":"2582","name":2},{"url":"418","name":3},{"url":"486","name":4},{"url":"7633","name":5},{"url":"1195","name":6},{"url":"5380","name":7},{"url":"1775","name":8},{"url":"3718","name":9},{"url":"4382","name":10},{"url":"6624","name":11},{"url":"7633","name":12}],"links":[{"value":25,"source":0,"target":1},{"value":1,"source":1,"target":2},{"value":1,"source":1,"target":3},{"value":1,"source":1,"target":4},{"value":20,"source":1,"target":5},{"value":1,"source":2,"target":6},{"value":1,"source":3,"target":7},{"value":1,"source":4,"target":8},{"value":1,"source":5,"target":9},{"value":1,"source":5,"target":10},{"value":2,"source":5,"target":11},{"value":8,"source":5,"target":12}]};

        var margin = {top: 1, right: 1, bottom: 6, left: 1},
            width = 800,
            height = 700;

        var formatNumber = d3.format(",.0f"),
            format = function (d) {
                return "weight " + formatNumber(d);
            },
            color = d3.scale.category20();

        var svg = d3.select(el[0]).append("svg")
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var sankey = d3.sankey()
            .nodeWidth(15)
            .nodePadding(10)
            .size([width, height]);

        var path = sankey.link();

        sankey
            .nodes(energy.nodes)
            .links(energy.links)
            .layout(16);

        var links = svg.append("g").selectAll(".link")
            .data(energy.links)
            .enter().append("path")
            .attr("class", "link")
            .attr("d", path)
            .style("stroke-width", function (d) {
                return Math.max(1, d.dy);
            })
            .sort(function (a, b) {
                return b.dy - a.dy;
            });

        links.append("title")
            .text(function (d) {
                return d.source.url + " → " + d.target.url + "\n" + format(d.value);
            });

        var node = svg.append("g").selectAll(".node")
            .data(energy.nodes)
            .enter().append("g")
            .attr("class", "node")
            .attr("transform", function (d) {
                return "translate(" + d.x + "," + d.y + ")";
            })
            .call(d3.behavior.drag()
                .origin(function (d) {
                    return d;
                })
                .on("dragstart", function () {
                    this.parentNode.appendChild(this);
                })
                .on("drag", dragmove));

        node.append("rect")
            .attr("height", function (d) {
                return d.dy;
            })
            .attr("width", sankey.nodeWidth())
            .style("fill", function (d) {
                return (d.color = color(d.url.replace(/ .*/, "")));
            })
            .style("stroke", function (d) {
                return d3.rgb(d.color).darker(2);
            })
            .append("title")
            .text(function (d) {
                return d.url + "\n" + format(d.value);
            });

        node.append("text")
            .attr("x", -6)
            .attr("y", function (d) {
                return d.dy / 2;
            })
            .attr("dy", ".35em")
            .attr("text-anchor", "end")
            .attr("transform", null)
            .text(function (d) {
                return d.title;
            })
            .filter(function (d) {
                return d.x < width / 2;
            })
            .attr("x", 6 + sankey.nodeWidth())
            .attr("text-anchor", "start");

        node.on('click', nodeClickHandler);

        function nodeClickHandler(d) {
            // d is the data item for the current data/element pair
            console.log("url id: " + d.url);
        }

        function dragmove(d) {
            d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
            sankey.relayout();
            links.attr("d", path);
        }
    }

    return {
        link: link
    };
}