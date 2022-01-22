import React from "react";
import { DefaultAvatar } from "../../../components/Avatar/Avatar";
import { SecondaryLightButton } from "../../../components/Buttons/Buttons";
import { IconCard } from "../../../components/IconCard/IconCard";
import { sideBarIconSvgPath } from "../../../utils/descriptionUtils";
import { BoldHeading, DefaultLink } from "../../../components/styles";
import style from "./Description.module.css";

function DescriptionHeader() {
  return (
    <React.Fragment>
      <div className="d-flex  justify-content-between ">
        {/* ------------------ Highlight Container */}
        <div className={style["ml-15"] + " d-flex"}>
          {/* --------------- Avatar  */}
          <DefaultAvatar
            imgSrc="https://cdn.dribbble.com/users/5536359/avatars/small/98f58e195bee567d87746a3a0c99d76f.png?1640801645"
            alt="Eren ✦  "
          ></DefaultAvatar>
          {/* ------------ Details */}
          <div className={"d-flex flex-column " + style["ml-15"]}>
            <div>
              <BoldHeading>Onboarding #Exploration</BoldHeading>
              <DefaultLink>Eren ✦ </DefaultLink>
              <span className="dot"> •</span>
              <DefaultLink> Follow </DefaultLink>
              <span className="dot"> •</span>
              <DefaultLink textcolor="#ea4c89"> Hire Me </DefaultLink>
            </div>
          </div>
        </div>

        {/* -------------------- Highlight Action Buttons */}
        <div className="highLightAction d-none d-xl-block d-lg-block">
          <SecondaryLightButton>Save</SecondaryLightButton>
          <SecondaryLightButton className={style["ml-15"]}>
            Like
          </SecondaryLightButton>
        </div>
      </div>
      {/* ----------------------- Side Bar Icon on small Screens */}
      <div className="d-lg-none d-xl-none d-flex justify-content-between">
        <div className="side-bar-items-first ">
          {/* ------------------- Side Bar Icons first 2 items*/}
          {sideBarIconSvgPath
            .slice(sideBarIconSvgPath.length - 2, sideBarIconSvgPath.length)
            .map((ele, i) => (
              <IconCard key={i} className={style["ml-15"] + " mt-3"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox={i == 1 ? "0 0 24 24" : "0 0 16 16"}
                >
                  <path d={ele} fill="#0D0C22"></path>
                </svg>
              </IconCard>
            ))}
        </div>
        <div className="side-bar-items-second  d-flex flex-xl-column flex-lg-column">
          {/* ------------------- Side Bar Icons last 3 items*/}
          {sideBarIconSvgPath.slice(0, 3).map((ele, i) => (
            <IconCard key={i} className={style["ml-15"] + " mt-3"}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="none"
                viewBox={i == 2 ? "0 0 24 24" : "0 0 16 16"}
              >
                <path d={ele} fill="#0D0C22"></path>
              </svg>
            </IconCard>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default DescriptionHeader;
