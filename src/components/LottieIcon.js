import React from "react";
import Lottie from "react-lottie";
import move from "./lotties/move";
import waypointMove from "./lotties/waypointMove";
import charging from "./lotties/charging";
import waitUser from "./lotties/waitUser";
import buzzer from "./lotties/buzzer";
import conveyor from "./lotties/conveyor";
import lifter from "./lotties/lifter";
import missionTarget from "./lotties/missionTarget";
import manipulator from "./lotties/manipulator";
import qrMarker from "./lotties/qrMarker";
import turnTable from "./lotties/turnTable";
import easyToManage from "./lotties/easyToManage";
import developerFriendly from "./lotties/developerFriendly";
import enhancedSafetyMeasures from "./lotties/enhancedSafetyMeasures";
import realTimeInsights from "./lotties/realTimeInsights";
import scalableSolution from "./lotties/scalableSolution";

const defaultOptions = (data) => {
  return {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
};

const icons = {
  move: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0, marginBottom: "7px" }}
      options={defaultOptions(move)}
      isClickToPauseDisabled={true}
      height={75}
      width={25}
    />
  ),
  multiWaypoint: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(waypointMove)}
      isClickToPauseDisabled={true}
      height={45}
      width={25}
    />
  ),
  qrMarker: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(qrMarker)}
      isClickToPauseDisabled={true}
      height={23}
      width={23}
    />
  ),
  charging: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(charging)}
      isClickToPauseDisabled={true}
      height={75}
      width={25}
    />
  ),
  lifter: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(lifter)}
      isClickToPauseDisabled={true}
      height={40}
      width={25}
    />
  ),
  conveyor: (
    <Lottie
      title="lottie-icon"
      style={{ margin: -5, marginTop: -15 }}
      options={defaultOptions(conveyor)}
      isClickToPauseDisabled={true}
      height={40}
      width={35}
    />
  ),
  turnTable: (
    <Lottie
      title="lottie-icon"
      options={defaultOptions(turnTable)}
      isClickToPauseDisabled={true}
      height={30}
      width={30}
    />
  ),
  manipulator: (
    <Lottie
      title="lottie-icon"
      style={{ margin: -2 }}
      options={defaultOptions(manipulator)}
      isClickToPauseDisabled={true}
      height={35}
      width={35}
    />
  ),
  waitUser: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(waitUser)}
      isClickToPauseDisabled={true}
      height={35}
      width={25}
    />
  ),
  buzzer: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0, marginBottom: "5px" }}
      options={defaultOptions(buzzer)}
      isClickToPauseDisabled={true}
      height={25}
      width={25}
    />
  ),
  docking: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(missionTarget)}
      isClickToPauseDisabled={true}
      height={32}
      width={25}
    />
  ),
  undocking: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(missionTarget)}
      isClickToPauseDisabled={true}
      height={32}
      width={25}
    />
  ),
};
const featureIcons = {
  easyToManage: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(easyToManage)}
      isClickToPauseDisabled={true}
      height={50}
      width={50}
    />
  ),
  focusOnWhatMatters: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(missionTarget)}
      isClickToPauseDisabled={true}
      height={50}
      width={50}
    />
  ),
  developerFriendly: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(developerFriendly)}
      isClickToPauseDisabled={true}
      height={50}
      width={50}
    />
  ),
  enhancedSafetyMeasures: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(enhancedSafetyMeasures)}
      isClickToPauseDisabled={true}
      height={60}
      width={60}
    />
  ),
  realTimeInsights: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(realTimeInsights)}
      isClickToPauseDisabled={true}
      height={50}
      width={50}
    />
  ),
  scalableSolution: (
    <Lottie
      title="lottie-icon"
      style={{ margin: 0 }}
      options={defaultOptions(scalableSolution)}
      isClickToPauseDisabled={true}
      height={45}
      width={45}
    />
  ),
};
export const FeatureLottieIcon = ({ icon }) => featureIcons[icon];

export const MissionTaskChip = ({ icon, label }) => {
  return (
    <div className="task-chip">
      {icons[icon]}
      <h5 className="lottie-icon-label">{label}</h5>
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path>
      </svg>
    </div>
  );
};
export const MissionTaskList = ({ icon, label, data }) => {
  return (
    <div className="task-list">
      {icons[icon]}
      <h5 className="lottie-icon-label">{label}</h5>
      <hr />
      <div className="data">
        {data ? (
          <h5 className="lottie-icon-label">{data}</h5>
        ) : (
          <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path>
          </svg>
        )}
      </div>
      <svg focusable="false" aria-hidden="true" viewBox="0 0 24 24">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
      </svg>
    </div>
  );
};

const LottieIconWithLabel = ({ icon, label }) => {
  return (
    <div className="lottie-title-wrapper">
      {icons[icon]}
      <h1 className="lottie-icon-label">{label}</h1>
    </div>
  );
};
export default LottieIconWithLabel;
