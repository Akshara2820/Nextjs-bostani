import React, { useEffect } from "react";
import styled from "styled-components";
import ReactDOM from "react-dom";

import { RiFacebookFill } from "react-icons/ri";
import { AiOutlineTwitter } from "react-icons/ai";
import { GrInstagram } from "react-icons/gr";
import { ImLinkedin2 } from "react-icons/im";
import { useState } from "react";
import { FaRegFileExcel } from "react-icons/fa";
import { BsCode, BsBoxArrowUpRight } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Model = ({ show, onClose, type, image, val, blog_name, blog_img }) => {
  const [isWorks, setIsWorks] = useState(false);
  const [shows, setShows] = useState(val);

  useEffect(() => {
    setIsWorks(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modelContent = show ? (
    <Model1 className="main-model">
      <div className="model-box">
        <div>
          <span onClick={handleCloseClick} className="cross-button">
            X
          </span>

          {shows === "work" ? (
            <>
              {" "}
              <div className="tittle-modelbox">{type} Project </div>
              <div className="model-section">
                <div className="section">
                  <div>
                    <FaRegFileExcel />
                  </div>
                  <div>Project:</div>
                  <div className="website">Website</div>
                </div>

                <div className="section">
                  <div>
                    <FiUser />
                  </div>
                  <div>Client:</div>
                  <div className="website">Envoto</div>
                </div>

                <div className="section">
                  <div>
                    <BsCode />
                  </div>
                  <div>language:</div>
                  <div className="website">Html,CSS</div>
                </div>

                <div className="section">
                  <div>
                    <BsBoxArrowUpRight />
                  </div>
                  <div>preview:</div>
                  <div className="website">www.envoto.com</div>
                </div>
              </div>
              <div className="disc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia placeat magnam possimus iusto blanditiis pariatur
                labore explicabo quo repellat hic dolorum numquam asperiores,
                voluptatum fugiat reiciendis aspernatur, non, odio aperiam
                voluptas ex tempora vitae. tempore deserunt!
                <div>
                  <img
                    className="model-image"
                    style={{ height: "auto", width: "100%" }}
                    src={image}
                    alt="loading..."
                  />
                </div>
              </div>
            </>
          ) : (
            <div>
              <img
                className="blogimg_model"
                style={{ height: "auto", width: "100%", padding: "20px" }}
                src={blog_img}
                alt="Loading..."
              />
              <div className="blog-name">{blog_name}</div>

              <div className="disc">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Mollitia placeat magnam possimus iusto blanditiis pariatur
                labore explicabo quo repellat hic dolorum numquam asperiores,
                voluptatum fugiat reiciendis aspernatur, non, odio aperiam
                voluptas ex tempora vitae. tempore deserunt!
              </div>

              <div className="comment">
                <img
                  className="img-comment"
                  src="./profile1.jpeg"
                  alt="Loading..."
                />
                <div>
                  <h3>Yashika Rai</h3>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nam ad, unde vel aut soluta atque consequatur. Omnis,
                    debitis nihil?
                  </p>
                  <p>Reply</p>
                </div>
              </div>

              <div >
                <p className="icon" >Login with: 
                <RiFacebookFill  className="facebook" style={{ color: "#1E90FF" }}/>
                <AiOutlineTwitter  className="twitter"  style={{ color: "#00BFFF" }} />
                <GrInstagram  className="instagram" style={{ color: " #fa5252" }}/>
                <ImLinkedin2   className="linkdin"   style={{ color: "#1E90FF" }}/>
                </p>
              </div>

              <h2>Leave a Reply</h2>
              <input className="input-box"></input>
              <button className="comment-btn">Comment </button>
            </div>

            
      
          )}
        </div>
      </div>
    </Model1>
  ) : null;

  if (isWorks) {
    return ReactDOM.createPortal(
      modelContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Model;

const Model1 = styled.div`
  background: #000000bf;
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: auto;
  left: 0;
  top: 0;

  .model-box {
    max-width: 40%;
    max-height: 70%;
    background: white;
    display: flex;
    padding: 20px;
    border-radius: 25px;
    margin: auto;
    justify-content: center;
    margin-top: 10rem;
    overflow: auto;
  }
  .tittle-modelbox {
    font-size: 30px;
    color: red;
    font-weight: 700;
    display: flex;
    justify-content: center;
  }
  .cross-button {
    font-size: 30px;
    font-weight: 700;
  }
  .model-section {
    display: grid;
    grid-template-columns: auto auto;
    gap: 15px;
  }
  .section {
    display: flex;
    color: black;
    gap: 5px;
    font-size: 20px;
    font-weight: 400;
  }
  .website {
    font-weight: 700;
  }
  .disc {
    padding: 20px;
  }
  .blog-name {
    font-size: 20px;
    font-weight: 700;
    padding: 20px;
  }
  .comment {
    border-radius: 25px;
    display: flex;
    gap: 15px;
    border: 2px red solid;
 
  }
  .img-comment {
    width: 120px;
    padding: 10px;
    border-radius: 20px;
  }
  .icon {
    display: flex;
    margin-top: 10px;
    justify-content: flex-end;
    font-size: 20px;
    gap:10px
  }
  .facebook{
    background-color: #f3f6f6;
    color: #4169e1;
    font-size: 20px;
  }

  .twitter{
    background-color: #f3f6f6;
    color: #4169e1;
    font-size: 20px;
  }

  .instagram{
    background-color: #f3f6f6;
    color: #4169e1;
    font-size: 20px;
  }

  .linkdin{
    background-color: #f3f6f6;
    color: #4169e1;
    font-size: 20px;
  }
  .input-box{
    width: 100%;
    height: 100px;
    background-color:#f3f6f6 ;
    border: none;
    outline: 2px solid transparent;
    outline-offset: 2px;
  }
  .comment-btn{
    font-size: 20px;
    background: linear-gradient(-60deg, #FA5252, #DD2476);
    padding: 10px;
    margin: auto;
    color: #f3f6f6;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 15px;
    border-radius: 10px;
   border:none
  }


  @media only screen and (max-width: 1224px) {
    .model-section {
      display: grid;
      grid: unset;
      justify-content: center;
    }
    .img-comment {
    width: 100px;
    height: 120px;
    padding: 10px;
    border-radius: 20px;
  }
  }
  @media only screen and (max-width: 700px) {
    .model-box {
      max-width: 100%;
      max-height: 60%;
      background: white;
      display: flex;
      padding: 20px;
      border-radius: 25px;
      margin: auto;
      justify-content: center;
      margin-top: 10rem;
      overflow: auto;
    }
    .model-section {
      display: grid;
      justify-content: center;
    }
    .section {
      font-size: 18px;
      display: flex;
      color: black;
      gap: 5px;
      font-weight: 400;
    }
    .tittle-modelbox {
      font-size: 30px;
      color: red;
      font-weight: 700;
      display: flex;
      justify-content: center;
    }
    .img-comment {
    width: 80px;
    height: 100px;
    padding: 10px;
    border-radius: 20px;
  }
 
  }
`;
