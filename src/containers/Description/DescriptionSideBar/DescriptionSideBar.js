import React from "react";
import { DefaultAvatar } from "../../../components/Avatar/Avatar";
import { IconCard } from "../../../components/IconCard/IconCard";
import { sideBarIconSvgPath } from "../../../utils/descriptionUtils";

function DescriptionSideBar() {
  return (
    <React.Fragment>
      <div className="iconCardContainer d-flex flex-column w-100 d-none d-xl-block d-lg-block">
        {/* Avatar */}
        <div>
          <DefaultAvatar
            imgSrc="https://cdn.dribbble.com/users/5536359/avatars/small/98f58e195bee567d87746a3a0c99d76f.png?1640801645"
            alt="Eren ✦  "
          ></DefaultAvatar>
        </div>
        {/* ------------ Side Bar list container */}
        <div className="side-bar-item-container d-flex flex-xl-column  flex-lg-column  flex-row-reverse  justify-content-between">
          <div className="side-bar-items-first d-flex flex-xl-column  flex-lg-column">
            {/* ------------------- Side Bar Icons first 3 items*/}
            {sideBarIconSvgPath.slice(0, 3).map((ele, i) => (
              <IconCard key={i} className="mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox={i == 2 || i == 4 ? "0 0 24 24" : "0 0 16 16"}
                >
                  <path d={ele} fill="#0D0C22"></path>
                </svg>
              </IconCard>
            ))}
          </div>
          <div className="side-bar-items-second  d-flex flex-xl-column flex-lg-column">
            {/* ------------------- Side Bar Icons first 2 items*/}
            {sideBarIconSvgPath
              .slice(3, sideBarIconSvgPath.length)
              .map((ele, i) => (
                <IconCard key={i} className="mt-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox={
                      i == sideBarIconSvgPath.length - 1 - 3
                        ? "0 0 24 24"
                        : "0 0 16 16"
                    }
                  >
                    <path d={ele} fill="#0D0C22"></path>
                  </svg>
                </IconCard>
              ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DescriptionSideBar;
