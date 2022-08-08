import React from "react";
import { useState } from "react";
import Model from "./components/modelbox";
import Card from "./components/card";
import styled from "styled-components";
const Items = [
  { type: "Ui/Ux", name: "Chul urina", image: "./work-img.jpg" },
  { type: "Web Design", name: "Aura Dione", image: "./work-img-2.jpg" },
  { type: "Logo", name: "Chul urina", image: "./work-img-3.jpg" },
  { type: "Video", name: "Chul urina", image: "./work-img-4.jpg", },
];
function Works({}) {
  const [modalIndex, setModalIndex] = useState(-1);
  return (
    <>
  
      <Card title="Portfolio">
        <Works1>
          <div className="work-heading">
            <p className="heading">All</p>
            <p className="heading">Videos</p>
            <p className="heading">Web Design</p>
            <p className="heading">Logo</p>
          </div>
          <div className="work-card">
            {Items.map((item,indx) => {
              return (
                <>
                  <div className="work-card2" key={item.name} onClick={() => { setModalIndex(indx) }}  >
                    <div className="ul">
                      <img className="work-image grow" src={item.image} alt="Loading..." style={{height:'auto',width:'100%'}}  />
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
      <Model  onClose={() => setModalIndex(-1)} show={modalIndex !== -1} {...Items[modalIndex]} val={'work'}/>
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
  }
  .heading:hover {
    color: #fa5252;
  }
  .work-card {
    display:grid;
    grid-template-columns: 45% 45%;
  gap:2rem;
  justify-content:center ;
    gap:20px;
    padding:20px;
  }
  .work-card2{
    background-color: #F7EAEA;
    border-radius:15px;
    padding: 20px;
  }
  .ul{
    overflow: hidden;
      border-radius: 15px;
      aspect-ratio:1.2; 
  }
    .work-image{
    
      &.grow{
        transition: all .3s ease-in-out;
        &:hover {
          cursor:pointer;
          transform: scale(1.2);
        }
      }
    }
  .work-type{
    color:gray
  }
  .work-name{
    font-weight:700;
  }
  .work-name:hover{
    color: #fa5252;
  }
  @media only screen and (max-width: 760px) {
    .work-card{
      display:grid;
      grid: unset;
      justify-content: center;
    }
  
    }
`;