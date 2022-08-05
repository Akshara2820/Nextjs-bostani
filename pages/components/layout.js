import styled from "styled-components";
import Header from "./header";
import Profile from "./profile";
import Navbar from "./navbar";

import React, { useEffect, useState } from "react";
import Router, { useRouter } from "next/router";

function Layout({ children }) {
  const route = useRouter();
  const [showprofile, setShowProfile] = useState(false);

  useEffect(() => {
    if (route.pathname === "/") {
      setShowProfile(true);
    } else {
      setShowProfile(false);
    }
  }, [route.pathname]);
  console.log("O", showprofile);

  const value = false;

  return (
    <>
      <Layout1>
        <div className="layout">
          <div className="header">
            <Header />
          </div>
          <div className="card-profile">
            <div className={`${!showprofile ? "profile" : ""} profile_`}>
              <Profile />
            </div>
            <div className="card">
              <Navbar />
              {children}
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
}

export default Layout;

const Layout1 = styled.div`
.layout{
  max-width: 1300px;
  margin: auto;
}
  .card-profile {
    display: flex;
    justify-content: space-between;
    margin-top: 12rem;
    gap:34px
  }
  .card {
    flex: 1;
    display:flex;
    flex-direction:column;
  }
  

  @media only screen and (max-width: 1020px) {
    .card-profile {
      flex-direction: column;
    }
  }
`;
