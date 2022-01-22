import React from "react";
import { DefaultLink, DefaultText } from "../../../components/styles";

function DescriptionBody() {
  return (
    <React.Fragment>
      <DefaultText>Yo, what's up guys! 🥳 </DefaultText>
      <DefaultText>
        It's tiring to write a different description for each shot, just like
        the shot and move on, love ya! 😘
      </DefaultText>
      <DefaultText>
        Let's create something amazing together! 🧑‍🎨 Feel free to contact me -
        <DefaultLink textcolor="#f082ac" fontsize="1em">
          ertuken@gmail.com
        </DefaultLink>
      </DefaultText>
    </React.Fragment>
  );
}

export default DescriptionBody;
