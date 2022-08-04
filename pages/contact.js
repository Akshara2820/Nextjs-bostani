import React from "react";
import styled from "styled-components";
import Card from "./components/card";
function Contact() {
  return (
    <>
      <Card title="Contact">
        <Contact1>
          <div className="contact-div">
            <div className="form">
              <h3 className="contact-head">
                I'm always open to discussing product
              </h3>
              <h3 className="contact-heading">
                {" "}
                design work or partnerships.{" "}
              </h3>

              <form>
                <div className="">
                  <label className="label">Name *</label>
                  <input type="text" name="name" className="input" required />
                </div>

                <div className="">
                  <label className="label">Email *</label>
                  <input type="text" name="name" className="input" required />
                </div>

                <div className="">
                  <label className="label">Message *</label>
                  <input type="text" name="name" className="input" required />
                </div>

                <button className="submit">Submit </button>
              </form>
            </div>
          </div>
        </Contact1>
      </Card>
    </>
  );
}

export default Contact;

const Contact1 = styled.div`
  .contact-div {
    background-color: #f8fbfb;
    padding: 20px;
    border-radius: 20px;
  }
  .contact-head {
    color: gray;
    font-size: 22px;
    font-family: "Poppins", sans-serif;
  }

  .contact-heading {
    font-size: 25px;
    font-family: "Poppins", sans-serif;
    margin-top: -10px;
  }
  .form {
    z-index: 0;
    position: relative;
  }
  .label {
    font-size: 18px;
  }
  .input {
    background-color: transparent;
    border-width: 0px;
    border-bottom-width: 2px;
    outline: 2px solid transparent;
    outline-offset: 2px;
    width: 100%;
    display: block;
    color: gray;
    font-size: medium;
    margin-top: 10px;
  }
  .submit {
    font-size: 20px;
    padding: 10px;
    padding-left: 24px;
    padding-right: 24px;
    margin-top: 15px;
    border-radius: 10px;
   border:none
  }
  .submit:hover{
    background: linear-gradient(-60deg, #FA5252, #DD2476);
  
    color:white;
  }
`;
