import Card from "./components/card";
import styled from "styled-components";

const Items = [
  {
    tittle: "Ui/Ux Design",
    image: "./about-img-1.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
   
  },
  {
    tittle: "App Development",
    image: "./about-img-2.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    color: "#F7F6C8",
  },
  {
    tittle: "Photography",
    image: "./about-img-3.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
    
  },
  {
    tittle: "Photography",
    image: "./about-img-4.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
   
  },
  {
    tittle: "Management",
    image: "./about-img-5.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",

  },
  {
    tittle: "Web Development",
    image: "./about-img-6.svg",
    name: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam euismod volutpat.",
 
  },
];
export default function Home() {
  return (
    <>
      <>
        <Card title="About">
          <About>
            <div>
              <p className="about-paragraph">
                Im Creative Director and UI/UX Designer from Sydney, Australia,
                working in web development and print media. I enjoy turning
                complex problems into simple, beautiful and intuitive designs.
                My aim is to bring across your message and identity in the most
                creative way. I created web design for many famous brand
                companies.
              </p>
            </div>
            <div>
              <h3 className="about-heading">What I DO!</h3>
            </div>
          </About>
          <About_Card>
            <div className="about-card">
              {Items.map((item) => {
                return (
                  <div className="about-card2" key={item.image}>
                  <div className="" >
                    <div className="about-head">
                      <img src={item.image} alt="Loading..." />
                      <h5 className="about-heading">{item.tittle}</h5>
                    </div>
                    <p className="about-paragraph">{item.name}</p>
                  </div>
                  </div>
                );
              })}
            </div>
          </About_Card>
        </Card>
      </>
    </>
  );
}

const About = styled.div`
  .about-paragraph {
   
    color: #808080;
    word-spacing: 2px;
  }
  .about-heading {
   
    font-weight: 900;
    font-size: 30px;
  }


  @media only screen and (max-width: 1020px) {
    .about-paragraph{
      display: none;
    }
  }
`;
const About_Card = styled.div`
.about-card{
  display:grid;
  grid-template-columns: auto auto ;
  gap: 2rem;
}
.about-card2{
  background-color: #F1EAF7;
  border-radius:20px;
  padding: 10px;
}
.about-head{
  display: flex;
  gap: 12px;
}
.about-heading{

  font-weight:700;
  font-size: 18px;
}
.about-paragraph{
    font-size: 15px;
  }

@media only screen and (max-width: 760px) {
  .about-card{
    display:grid;
    grid-template-columns: auto;
    gap: 2%;
  }
  }
  
`;
