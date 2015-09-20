angular.module('ifocus.visualDirectives', [])
  .directive('flowGraph', [flowGraph]);

function flowGraph() {

  function link($scope, $element, $attrs) {

    var margin = {top: 1, right: 1, bottom: 6, left: 1};
    window.width = 800 - margin.left - margin.right; // export as the global object
    var height = 500 - margin.top - margin.bottom;

    var formatNumber = d3.format(",.0f");
    var format = function (d) {
      return formatNumber(d) + " Times";
    };
    var color = d3.scale.category20();

    var svg = d3.select($element[0]).append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var sankey = d3.sankey().nodeWidth(15).nodePadding(10).size([width, height]);
    var path = sankey.link();

    var graphFilePath = $attrs.data; // 传入一个文件路径

    d3.json(graphFilePath, callback);

    function callback(err, data) {
      if (err) throw err;

      function dragmove(d) {
        d3.select(this).attr("transform", "translate(" + d.x + "," + (d.y = Math.max(0, Math.min(height - d.dy, d3.event.y))) + ")");
        sankey.relayout();
        links.attr("d", path);
      }

      // 你可以指定属性name来指定节点的名字，否则默认使用name
      var nodeName = $attrs.name || 'name';

      sankey.nodes(data.nodes).links(data.links).layout(32);

      var links = svg.append("g")
        .selectAll(".link")
        .data(data.links)
        .enter()
        .append("path")
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
          return d.source[nodeName] + " -> " + d.target[nodeName] + "\n" + format(d.value);
        });

      var nodes = svg.append("g")
        .selectAll(".node")
        .data(data.nodes)
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", function (d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
        .call(d3.behavior
          .drag()
          .origin(function (d) {
            return d;
          })
          .on("dragstart", function () {
            this.parentNode.appendChild(this);
          })
          .on("drag", dragmove)
      );

      nodes.append("rect")
        .attr("height", function (d) {
          return d.dy;
        })
        .attr("width", sankey.nodeWidth())
        .style("fill", function (d) {
          return (d.color = color(d[nodeName].replace(/ .*/, "")));
        })
        .style("stroke", function (d) {
          return d3.rgb(d.color).darker(2);
        })
        .append("title")
        .text(function (d) {
          return d.name + "\n" + format(d.value);
        });

      nodes.append("text")
        .attr("x", -6)
        .attr("y", function (d) {
          return d.dy / 2;
        })
        .attr("dy", ".35em")
        .attr("text-anchor", "end")
        .attr("transform", null)
        .text(function (d) {
          return d[nodeName];
        })
        .filter(function (d) {
          return d.x < width / 2;
        })
        .attr("x", 6 + sankey.nodeWidth())
        .attr("text-anchor", "start");

      nodes.on('click', nodeClickListener);

      function nodeClickListener(d) {
        $scope.$apply(function () {
          $scope.clickedPoint = d;
        });
      }

    }

  }

  return {
    link: link,
    restrict: 'E',
    scope: {data: '=', clickedPoint: '='}
  };
}