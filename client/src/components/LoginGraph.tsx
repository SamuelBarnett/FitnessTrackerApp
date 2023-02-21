import React, { Ref, useEffect, useRef } from "react";
import * as d3 from "d3";

const dataset1: [number, number][] = [
  [1, 0],
  [2, 20],
  [3, 36],
  [4, 50],
  [5, 70],
  [6, 100],
  [7, 106],
  [8, 123],
  [9, 130],
  [10, 134],
  [11, 136],
  [12, 138],
  [13, 140],
];

// functions of a graph

function MakeSvg(graphRef: React.MutableRefObject<null>) {
  //============================
  // set size of container and margins
  const margin = { top: 50, right: 50, bottom: 50, left: 100 };
  const width = 600 - margin.left - margin.right;
  const height = 800 - margin.top - margin.bottom;

  const svg = d3
    .select(graphRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // set up scale
  let xScale = d3.scaleLinear().domain([0, 13]).range([0, width]);
  let yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

  // add text for x and y label
  svg
    .append("text")
    .attr("x", width / 2 + 10)
    .attr("y", height + 40)
    .attr("text-anchor", "middle")
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text("Time");

  svg
    .append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "translate(-40," + 300 + ")rotate(-90)")
    .style("font-family", "Helvetica")
    .style("font-size", 12)
    .text("Barbell Squat");

  svg
    .append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(xScale));

  svg.append("g").call(d3.axisLeft(yScale));

  // svg
  //   .append("g")
  //   .selectAll("dot")
  //   .data(dataset1)
  //   .enter()
  //   .append("circle")
  //   .attr("cx", (d) => {
  //     return xScale(d[0]);
  //   })
  //   .attr("cy", (d) => {
  //     return yScale(d[1]);
  //   })
  //   .attr("r", 2)
  //   // .attr("transform", "translate(" + 100 + "," + 100 + ")")
  //   .style("fill", "#CC0000");
  // plot the line
  const line = d3
    .line<[number, number]>()
    .x((d) => xScale(d[0]))
    .y((d) => yScale(d[1]))
    .curve(d3.curveMonotoneX);
  // () => line(dataset1) || ""
  svg
    .append("path")
    .datum(dataset1)
    .attr("class", "line")
    // .attr("transform", `translate(10, 10)`)
    .attr("d", line)
    .style("fill", "none")
    .style("stroke", "red")
    .style("stroke-width", "2");
}

const LoginGraph = () => {
  const graphRef = useRef(null);
  useEffect(() => {
    MakeSvg(graphRef);
  }, []);

  return (
    <div className="relative">
      <div id="graph" ref={graphRef} className="ml-20" />
      <label htmlFor="graph" className="text-xl"> Visualize your progress over time </label>
    </div>
  );
};

export default LoginGraph;
