import React, { Ref, useEffect, useRef } from "react";
import * as d3 from "d3";

const timeLineChart = () => {};

const data = [
  { name: "one", size: 1 },
  { name: "two", size: 2 },
  { name: "three", size: 3 },
  { name: "four", size: 4 },
];

function MakeSvg(graphRef: React.MutableRefObject<null>) {
  const svg = d3
    .select(graphRef.current)
    .append("svg")
    .attr("width", 400)
    .attr("height", 400)
    .style("top", "50px") // Position the SVG element
    .style("left", "50px");
  svg
    .append("g")
    .attr("cx", 200)
    .attr("cy", 200)
    .attr("r", 100)
    .attr("fill", "red");
}

function MakeGraph(graphRef: React.MutableRefObject<null>) {
  
}

const LoginGraph = () => {
  const graphRef = useRef(null);
  useEffect(() => {
    MakeSvg(graphRef);
  }, []);

  return (
    <div className="relative">
      <div ref={graphRef} />
    </div>
  );
};

export default LoginGraph;
