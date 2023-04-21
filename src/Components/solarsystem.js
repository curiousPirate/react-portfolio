import React from "react";

const SolarSystem = () => {
  return (
    <div className="solar-system">
      <div className="sun"></div>
      <div className="mercury-orbit">
        <div className="mercury"></div>
      </div>
      <div className="venus-orbit">
        <div className="venus"></div>
      </div>
      <div className="earth-orbit">
        <div className="earth">
          <div className="moon-orbit">
            <div className="moon"></div>
          </div>
        </div>
      </div>
      <div className="mars-orbit">
        <div className="mars"></div>
      </div>
      <div className="jupiter-orbit">
        <div className="jupiter"></div>
      </div>

      <div className="saturn-orbit">
        <div className="saturn-ring">
          <div className="saturn"></div>
        </div>
      </div>
      <div className="uranus-orbit">
        <div className="uranus"></div>
      </div>
      <div className="neptune-orbit">
        <div className="neptune"></div>
      </div>
    </div>
  );
};

export default SolarSystem;

