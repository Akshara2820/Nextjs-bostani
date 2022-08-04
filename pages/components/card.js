import React from "react";
import styled from "styled-components";

function Card(props) {
  return (
    <>
      <div>
        <Card1>
          <div className="card">
            <div>
              <div className="">
                <h3 className="tittle">{props.title} </h3>
              </div>
              <div>{props.children}</div>
            </div>
          </div>
        </Card1>
      </div>
    </>
  );
}

export default Card;

const Card1 = styled.div`
  .card {
    display: flex;
    background-color: white;
    margin-top: 50px;
    border-radius: 20px;
    padding: 20px;
  
  }
  .tittle {
    font-family: "Roboto Slab", sans-serif;
    font-weight: 900;
    font-size: 35px;
  }
`;
