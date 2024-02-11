import ReactSpeedometer from "react-d3-speedometer";
import { useInterval } from "./useInterval.js";
import { useState } from "react";

export default function Gauge() {
  const [value, setValue] = useState(0);
  useInterval(() => {
    setValue(Math.round(Math.random() * 100));
  }, 3000);

  return (
    <div className="gaugeContainer">
      <ReactSpeedometer
        value={value}
        minValue={0}
        maxValue={100}
        segmentColors={["#5BE12C", "#f0f059", "#EA4228"]}
        textColor="#000"
        customSegmentStops={[0, 85, 95, 100]}
        valueTextFontSize="20px"
        fluidWidth={true}
        paddingVertical={10}
        needleHeightRatio={0.75}
        ringWidth={20}
      />
    </div>
  );
}
