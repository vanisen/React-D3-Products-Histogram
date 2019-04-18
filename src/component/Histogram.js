import React from 'react';
import { useState, useEffect, useRef } from 'react'
import * as d3 from "d3";

function HistogramComponent(props) {
    const domNode = useRef();
    const svgNode = useRef();
    const [widthProp, setWidth] = useState();
    const margin = ({ top: 40, right: 20, bottom: 40, left: 60 });
    const data = props.data;
    const label = props.label;
    const isMobile = props.isMobile;
    const color = "#69b3a2";
    const binSize = 17;

    //Resize handler added on mount
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(domNode.current.getBoundingClientRect().width)
        });
    }, []);

    //D3 DOM Binding and data joins
    useEffect(() => {
        const width = domNode.current.getBoundingClientRect().width;
        const height = isMobile ? 700 : 450;
        const svg = d3.select(svgNode.current)
            .attr("width", width)
            .attr("height", height);
        svg.selectAll("g").remove();
        let bar;

        if (!isMobile) {
            //Horizontal layout

            //Create axis..
            var yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y))
                .call(g => g.select(".domain").remove())
                .call(g => g.select(".tick:last-of-type text").clone()
                    .attr("x", 0)
                    .attr("y", -34)
                    .attr("text-anchor", "end")
                    .attr("font-weight", "bold")
                    .style("transform", "rotate(-90deg)")
                    .text("Count"))
            var xAxis = g => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x).tickSizeOuter(0))
                .call(g => g.append("text")
                    .attr("x", (width - margin.right) || 0)
                    .attr("y", 28)
                    .attr("fill", "#000")
                    .attr("font-weight", "bold")
                    .attr("text-anchor", "end")
                    .text(label))
            //linear scale for data range to pixel size..
            var x = d3.scaleLinear()
                .domain([0, d3.max(data) + 1]).nice()
                .range([margin.left, width - margin.right])

            //Use D3 histogram layout to create bins based on the binsize..
            var bins = d3.histogram()
                .domain(x.domain())
                .thresholds(x.ticks(binSize))
                (data)
            var y = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)]).nice()
                .range([height - margin.bottom, margin.top])

            //Draw the bars based on the calculated bin sizes
            bar = svg
                .selectAll("rect")
                .data(bins)
                .join("rect")
                .attr("fill", color)
                .attr("x", d => (x(d.x0) + 1) || 0)
                .attr("width", d => (Math.max(0, x(d.x1) - x(d.x0) - 1) || 0))
                .attr("y", height - margin.bottom)
                .attr("height", 0)

            //Animation for the bars..
            bar.transition()
                .duration(500)
                .attr("y", d => y(d.length))
                .attr("height", d => y(0) - y(d.length))
        } else {
            //vertical layout

            //Create axis..
            var yAxis = g => g
                .attr("transform", `translate(${margin.left},0)`)
                .call(d3.axisLeft(y).tickSizeOuter(0))
                .call(g => g.select(".tick:last-of-type text").clone()
                    .attr("x", 0)
                    .attr("y", -44)
                    .attr("text-anchor", "end")
                    .attr("font-weight", "bold")
                    .style("transform", "rotate(-90deg)")
                    .text(label))
            var xAxis = g => g
                .attr("transform", `translate(0,${height - margin.bottom})`)
                .call(d3.axisBottom(x))
                .call(g => g.select(".domain").remove())
                .call(g => g.append("text")
                    .attr("x", (width - margin.right) || 0)
                    .attr("y", 28)
                    .attr("fill", "#000")
                    .attr("font-weight", "bold")
                    .attr("text-anchor", "end")
                    .text("Count"))

            //linear scale for data range to pixel size..
            var y = d3.scaleLinear()
                .domain([0, d3.max(data) + 1]).nice()
                .range([height - margin.bottom, margin.top])

            //Use D3 histogram layout to create bins based on the binsize..
            var bins = d3.histogram()
                .domain(y.domain())
                .thresholds(y.ticks(binSize))
                (data)
            var x = d3.scaleLinear()
                .domain([0, d3.max(bins, d => d.length)]).nice()
                .range([margin.left, width - margin.right])

            //Draw the bars based on the calculated bin sizes
            bar = svg
                .selectAll("rect")
                .data(bins)
                .join("rect")
                .attr("fill", color)
                .attr("y", d => {
                    return y(d.x1) + 1
                })
                .attr("height", d => {
                    return (Math.max(0, y(d.x0) - y(d.x1) - 1) || 0)
                })
                .attr("x", (x(0) || 0))
                .attr("width", 0)

            //Animation for the bars..
            bar.transition()
                .duration(500)
                .attr("width", d => (x(d.length) - x(0) || 0))
        }

        //Tooltip
        bar.selectAll('title').remove();
        bar.append('title').text(function (d) {
            return "(" + d.x0 + "-" + d.x1 + "): " + d.length
        })

        //Add axis to the chart
        svg.append("g").call(xAxis);
        svg.append("g").call(yAxis);
    })

    //React controlled DOM nodes
    //References for the below nodes are used for D3 DOM Manipulations
    return (
        <div ref={domNode}><svg ref={svgNode}></svg></div>
    )
}

//Function to title case a string
function toTitleCase(str) {
    return str.replace(
        /\w\S*/g,
        function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        }
    );
}

export default ({ fetchProductList, selectedMetric, products, isMobile }) => {
    useEffect(() => {
        fetchProductList();
    }, []);

    return <HistogramComponent data={products.map(d => d[selectedMetric])}
        label={toTitleCase(selectedMetric.replace(/_/g, " "))}
        isMobile={isMobile} />;
}
