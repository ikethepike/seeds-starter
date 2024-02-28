import React from "react";
import "./_ProgressBar.css";

type ProgressBarProps = {
  progressPercent: number;
};

export default function ProgressBar(props: ProgressBarProps) {
  return (
    <div className="progress-bar">
      <div className="bar" style={{ width: props.progressPercent + "%" }}>
        <div className="slider" />
      </div>
    </div>
  );
}
