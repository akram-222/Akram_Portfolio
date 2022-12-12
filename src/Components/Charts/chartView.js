import React from "react";
import useChart from "./useChart";
import { dataSet } from "./data";
import "./chartView.scss";
export function ChartView() {
  const canvasRef = React.useRef(null);
  const [data, setData] = React.useState(dataSet);

  const handleToggleBars = (color) => {
    // canvasRef.height = 100
    setData((prev) => ({
      ...prev,

      [color]: {
        ...prev[color],

        isVisible: !prev[color].isVisible,
      },
    }));
  };

  console.log(
    "re",
    Object.keys(data)
      .filter((key) => data[key].isVisible)
      .map((key) => data[key].value)
  );

  useChart(canvasRef, {
    type: "line",

    data: {
      labels: Object.keys(data).filter((key) => data[key].isVisible),

      datasets: [
        {
          label: "# of Votes",
          data: Object.keys(data)
            .filter((key) => data[key].isVisible)
            .map((key) => data[key].value),

          backgroundColor: Object.keys(data)
            .filter((key) => data[key].isVisible)
            .map((key) => data[key].bgColor),

          borderColor: Object.keys(data)
            .filter((key) => data[key].isVisible)
            .map((key) => data[key].borderColor),

          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      responsive: false,
      legend: {
        display: false,
        labels: {
          fontColor: "#ff0000",
        },
      },

      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              fontSize: 10,
            },
          },
        ],
        xAxes: [
          {
            ticks: {
              minor: {
                fontSize: 10,
              },
            },
          },
        ],
      },
    },
  });

  return (
    <>
      <div className="chartView__controls">
        {Object.keys(dataSet).map((key) => (
          <Button
            key={key}
            handleToggleBars={handleToggleBars}
            options={{
              caption: key,
              bgColor: data[key].bgColor,
              borderColor: data[key].borderColor,
              isVisible: data[key].isVisible,
            }}
          />
        ))}{" "}
      </div>
      <canvas ref={canvasRef} width="185px" height="100px" />
    </>
  );
}

const Button = (props) => (
  <button
    style={{
      marginTop: "5px",
      marginLeft: "5px",
      outline: "none",
      padding: "0.2rem",
      borderColor: props.options.isVisible
        ? props.options.borderColor
        : "#bfbfbf",
      backgroundColor: props.options.isVisible
        ? props.options.bgColor
        : "#efefef",
      color: props.options.isVisible ? "#444" : "#666",
      transitionDuration: ".2s",
      transitionProperty: "box-shadow",
    }}
    onClick={() => props.handleToggleBars(props.options.caption)}
    onFocus={(event) => {
      event.target.style.boxShadow = `0 0 0 2px ${props.options.borderColor}`;
    }}
    onBlur={(event) => {
      event.target.style.boxShadow = "initial";
    }}
  >
    
  </button>
);

