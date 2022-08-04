import React from "react";
import Card from "./components/card";
import styled from "styled-components";
const Items = [
  { type: "Ui/Ux", name: "Chul urina", image: "./work-img.jpg" },
  { type: "Web Design", name: "Aura Dione", image: "./work-img-2.jpg" },
  { type: "Logo", name: "Chul urina", image: "./work-img-3.jpg" },
  { type: "Video", name: "Chul urina", image: "./work-img-4.jpg" },
];
function Works() {
  return (
    <>
      <Card title="Portfolio">
        <Works1>
          <div className="work-heading">
            <p className="heading">All</p>
            <p className="heading">Videos</p>
            <p className="heading">Web Design</p>
            <p className="heading">Logo</p>
            <p className="heading">Graphic Design</p>
          </div>
          <div className="work-card">
            {Items.map((item) => {
              return (
                <>
                  <div className="work-card2" key={item.name}>
                    <div className="">
                      <img className="work-image" src={item.image} alt="Loading..." style={{height:'auto',width:'100%'}}  />
                    </div>
                    <p className="work-type">{item.type}</p>
                    <h3 className="work-name">{item.name}</h3>
                  </div>
                </>
              );
            })}
          </div>
        </Works1>
      </Card>
    </>
  );
}

export default Works;

const Works1 = styled.div`
  .work-heading {
    display: flex;
    gap: 10px;
    padding: 10px;
    justify-content: end;
    font-family: "Poppins", sans-serif;
  }
  .heading:hover {
    color: #fa5252;
  }
  .work-card {
    display:grid;
    grid-template-columns: auto auto ;
    gap:20px;
    padding:20px;
  }
  .work-card2{
    background-color: #F7EAEA;
    border-radius:15px;
    padding: 20px;
  }
  .work-image{
    border-radius:15px;
  }
  .work-type{
    font-family: "Poppins", sans-serif;
    color:gray
  }
  .work-name{
    font-family: "Roboto Slab", sans-serif;
    font-weight:700;
  }

  .work-name:hover{
    color: #fa5252;
  }



  @media only screen and (max-width: 1242px) {
    .work-card{
     
    }
  
    }


  @media only screen and (max-width: 760px) {
    .work-card{
      display:grid;
      grid: unset;
      justify-content: center;
    }
  
    }
`;
