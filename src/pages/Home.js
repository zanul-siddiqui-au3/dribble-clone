import React from "react";
import DescriptionContainer from "../containers/Description/Description";
import UserDetail from "../containers/Detail/UserDetail";
import TopNavbar from "../containers/NavBar/Navbar";

function Home() {
  return (
    <React.Fragment>
      <TopNavbar></TopNavbar>
      <DescriptionContainer></DescriptionContainer>
      <UserDetail></UserDetail>
    </React.Fragment>
  );
}

export default Home;
