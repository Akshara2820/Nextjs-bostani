import React, { useEffect } from "react";
import styled from "styled-components";
import { useState } from "react";
import { FaRegFileExcel } from "react-icons/fa";
import { BsCode, BsBoxArrowUpRight } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

const Items = [
  {
    title: "Ui/Ux Project",
    language: "PhotoShop",
    project: "Website",
    client: "Envoto",
    preview: "www.envoto.com",
    about:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia placeat magnam possimus iusto blanditiis pariatur labore explicabo quo repellat hic dolorum numquam asperiores, voluptatum fugiat reiciendis aspernatur, non, odio aperiam voluptas ex tempora vitae. Dolor, consequatur quidem! Quas magni distinctio dolorum dolore natus, vel numquam accusamus. Nostrum eligendi recusandae qui tempore deserunt!",
    image: "model-work.jpg",
  },

];


const Model = ({show, onClose}) =>{
  const [isWorks, setIsWorks] = useState(false);

  useEffect(() => {
    setIsWorks(true);
  }, []);

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modelContent = show ?(
    <Model1 className="main-model">
        <div className="model-box">
          <div>
            <span onClick={handleCloseClick} className="cross-button">
              X
            </span>
            {Items.map((itm) => {
              return (
                <>
                  <div key={itm.image}>
                    <h3 className="title">{itm.title}</h3>
                    <div>
                      <div>
                        <FaRegFileExcel />
                        Project:{itm.project}
                      </div>
                      <div>
                        <BsCode />
                        Language:{itm.language}
                      </div>
                      <div>
                        <BsBoxArrowUpRight />
                        Preview:{itm.preview}
                      </div>
                      <div>
                        <FiUser />
                        client:{itm.client}
                      </div>
                      <div>{itm.about}</div>
                      <div>{itm.image}</div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </Model1>
  ):null



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
background:#000000bf;
width:100%;
height:100vh;
position:fixed;
z-index:auto;
left:0;
top:0;

.model-box{
  max-width:70%;
  max-height:60%;
  background:white;
  display :flex;
  padding:20px;
  border-radius: 25px;
  margin:auto;
  justify-content:center;
  margin-top:10rem;
  overflow: auto;

  
}
  .cross-button {
   
  }
`;
