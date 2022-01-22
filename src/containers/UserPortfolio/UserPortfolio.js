import React from "react";
import { PortfolioCard, PortFolioCardBody } from "../../components/Card/Card";
import { IconCard } from "../../components/IconCard/IconCard";
import { DefaultText } from "../../components/styles";
import { sideBarIconSvgPath } from "../../utils/descriptionUtils";

function UserPortfolio() {
  const getIntials = (str) => {
    return str.slice(0, 4) + "...";
  };

  return (
    <React.Fragment>
      <PortfolioCard>
        <PortFolioCardBody>
          <div class="card_image">
            <img src="https://i.redd.it/b3esnz5ra34y.jpg" />
          </div>
          <div class="card_title title-white d-flex justify-content-around ">
            <DefaultText textcolor="white">
              {getIntials("sdfsdfsdfsd")}
            </DefaultText>
            {sideBarIconSvgPath
              .slice(sideBarIconSvgPath.length - 2, sideBarIconSvgPath.length)
              .map((ele, i) => (
                <IconCard iconheight="40px" iconwidth="40px">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="none"
                    viewBox={i == 1 ? "0 0 24 24" : "0 0 16 16"}
                  >
                    <path d={ele} fill="#6e6d7a"></path>
                  </svg>
                </IconCard>
              ))}
          </div>
        </PortFolioCardBody>
      </PortfolioCard>
    </React.Fragment>
  );
}

export default UserPortfolio;
