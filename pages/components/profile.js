import React from "react";
import styled from "styled-components";
import Link from "next/link";

import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLocationSharp } from "react-icons/io5";
import { ImLinkedin2 } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineMailOpen } from "react-icons/hi";
import { GoCalendar } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";

function Profile() {
  return (
    <>
      <div>
        <Profile1>
          <div className="profile">
            <div className="image">
              <img
                className="profile-image"
                src="./profile.jpg"
                alt="loading..."
              />
            </div>
            <div className="">
              <h2 className="profile-name">Akshara Mishra</h2>
              <p className="profile-designer">Ui/Ux Designer</p>
              <div className="profile-contain">
                <Link href="https://www.facebook.com/akshra.mishra.18">
                  <div className="contain">
                    <RiFacebookFill
                      className="social-icon"
                      style={{ color: "#1E90FF" }}
                    />
                  </div>
                </Link>

                <div className="contain">
                  <AiOutlineTwitter
                    className="social-icon"
                    style={{ color: "#00BFFF" }}
                  />
                </div>
                <Link href="https://www.instagram.com/akshara.mishra0603/">
                  <div className="contain">
                    <GrInstagram
                      className="social-icon"
                      style={{ color: " #fa5252" }}
                    />
                  </div>
                </Link>

                <div className="contain">
                  <ImLinkedin2
                    className="social-icon"
                    style={{ color: "#1E90FF" }}
                  />
                </div>
              </div>

              <div className="profile-details">
                <div className="details">
                  <div className="phone-icon">
                    <MdOutlinePhoneIphone
                      className="icon-phone"
                      style={{ color: "#4B0082" }}
                    />
                  </div>
                  <div className="phone-">
                    <p className="phone">Phone</p>
                    <h4 className="phone-no">+91 9696535808</h4>
                  </div>
                </div>

                <div className="details">
                  <div className="phone-icon">
                    <HiOutlineMailOpen
                      className="icon-phone"
                      style={{ color: "#20B2AA" }}
                    />
                  </div>
                  <div className="phone-">
                    <p className="phone">Email</p>
                    <h4 className="phone-no">ak@gmail.com</h4>
                  </div>
                </div>

                <div className="details">
                  <div className="phone-icon">
                    <IoLocationSharp
                      className="icon-phone"
                      style={{ color: "#FF7F50" }}
                    />
                  </div>
                  <div className="phone-">
                    <p className="phone">Location</p>
                    <h4 className="phone-no"> Uttar Pradesh</h4>
                  </div>
                </div>

                <div className="details">
                  <div className="phone-icon">
                    <GoCalendar
                      className="icon-phone"
                      style={{ color: "#8A2BE2" }}
                    />
                  </div>
                  <div className="phone-">
                    <p className="phone">Birthday</p>
                    <h4 className="phone-no">Nov 28, 2002</h4>
                  </div>
                </div>
              </div>
              <button className="download-button">
                <FiDownload /> Download CV
              </button>
            </div>
          </div>
        </Profile1>
      </div>
    </>
  );
}

export default Profile;

const Profile1 = styled.div`
  .profile {
    background-color: white;
    border-radius: 20px;
    padding: 40px;
  }

  .profile-image {
    width: 240px;
    padding: 10px;
    border-radius: 50px;
    margin-top: -180px;
    filter: drop-shadow(0 0.3rem 0.2rem rgba(0, 0, 0, 0.2));
  }
  .profile-name {
    font-size: 25px;
    display: flex;
    justify-content: center;
  }
  .profile-designer {
    color: #808080;
    display: flex;
    justify-content: center;
    margin-top: -10px;
  }

  .profile-contain {
    display: flex;
    justify-content: center;
    gap: 5%;
    margin-top:15px
  }
  .contain {
    background-color: #f3f6f6;
    font-size: 20px;
    padding: 10px;
    border-radius: 10px;
    color: #4169e1;
  }
  .contain:hover {
    background-color: #dd2476;
  }

  .profile-details {
    background-color: #f3f6f6;
    margin-top: 20px;
    border-radius: 10px;
    padding: 20px 10px;
  }
  .details {
    display: flex;
    gap: 5%;
    padding:10px
   
   
  }
  .phone-icon {
    display: flex;
    align-items: center;
    background-color: white;
    font-size: 20px;
    padding: 15px;
    border-radius: 10px;
    filter: drop-shadow(0 0.3rem 0.2rem rgba(0, 0, 0, 0.2));
  }

  .phone-icon:hover {
    background-color: #ef4060;
    color: white;
  }
  .phone- {
    padding-left: 20px;
  }
  .phone {
    color: #808080;

    font-size: 12px;
  }
  .phone-no {
    margin: auto;
    font-size: 16px;
    color: #4a4949;
  }
  .icon-phone:hover {
    color: white;
  }
  .download-button {
    display: flex;
    align-items: center;
    margin: auto;
    background: linear-gradient(-60deg, #fa5252, #dd2476);
    color: white;
    font-size: 18px;
    padding: 10px;
    border-radius: 20px;
    border: none;
    margin-top: 25px;
  }
  .download-button:hover {
    background: linear-gradient(-60deg, #dd2476, #fa5252);
  }

  /* ******************************** media query *************************************/
  @media only screen and (max-width: 1020px) {
    .image {
      display: flex;
      justify-content: center;
    }
  }
`;
