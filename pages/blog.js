import React from "react";
import { useState } from "react";
import Card from "./components/card";
import styled from "styled-components";
import Model from "./components/modelbox";

const Items = [
  {
   blog_name: "How to Own Your Audience by Creating an Email List.",
    date: "177 April",
    catagory: "Inspiration",
    blog_img: "./blog-img.jpg",
  },
  {
   blog_name: "Everything You Need to Know About Web Accessibility.",
    date: "000 April",
    catagory: "Inspiration",
    blog_img: "./blog-img-2.jpg",
  },
  {
   blog_name: "The window know to say beside you",
    date: "21 April",
    catagory: "Web Design",
    blog_img: "./blog-img-3.jpg",
  },
  {
   blog_name: "Top 10 Toolkits for Deep Learning in 2021.",
    date: "27 Apil",
    catagory: "Inspiration",
    blog_img: "./blog-img-4.jpg",
  },
];
function Blog() {
  const [modalIndex, setModalIndex] = useState(-1);
 
  return (
    <>
      <Card title="Blog">
        <Blog1>
          <div className="blog-card">
            {Items.map((i,indx) => {
              return (
                <div className="blog-card2" key={i.blog_name}  onClick={() => { setModalIndex(indx) }} >
                  <div className="ul">
                    <img className="blog-image grow" src={i.blog_img} alt="loading..." style={{width:'100%'}}  />{" "}
                  </div>
                  <div className="blog-catagory">
                    <p>{i.date} </p>
                    <ul>
                      <li>{i.catagory}</li>
                    </ul>
                  </div>
                  <h3 className="blog-heading">{i.blog_name}</h3>
                </div>
              );
            })}
          </div>
        </Blog1>
      </Card>
      <Model  onClose={() => setModalIndex(-1)} show={modalIndex !== -1} {...Items[modalIndex]}/>
    </>
  );
}

export default Blog;

const Blog1 = styled.div`


.blog-card{
  display: grid;
  
  grid-template-columns: 37% 37%;
  gap:2rem;
  justify-content:center ;

}
.blog-card2{
  background-color: #EAF7F7;
  border-radius:20px;
  padding: 20px;
}
.blog-heading{
  
  font-weight:700;
}
.blog-heading:hover{
  color: #fa5252;
}
.ul{
  overflow: hidden;
    border-radius: 15px;
    aspect-ratio:1.2; 
}
  .blog-image{
  
    &.grow{
      transition: all .3s ease-in-out;
      &:hover {
        cursor:pointer;
        transform: scale(1.2);
      }
    }
  }


.blog-catagory{
  display:flex;

}
@media only screen and (max-width: 760px) {
  .blog-card{
    display:grid;
    grid: unset;
    justify-content: center;
  }

  }
`;
