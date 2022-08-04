import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import { FaGraduationCap } from "react-icons/fa";
import { MdWork } from "react-icons/md";

const Data = [
  {
    name: "Education",
    icon: <FaGraduationCap />,
    items: [
      {
        date: "2021-2023",
        title: "Ph.D in Horriblensess",
        disc: "ABC University, Los Angeles, CA",
      },
      {
        date: "2021-2023",
        title: "Sr. Software Testery",
        disc: "AGoogle Inc.",
        color: "bg-pink-50",
      },
      {
        date: "2021-2023",
        title: "Best Developerr",
        disc: "University Of Melbourne, NA",
      },
    ],
  },
  {
    name: "Experience",
    icon: <MdWork />,
    items: [
      {
        date: "2021-2023",
        title: "Computer Science",
        disc: "Imperialize Technical Institute",
      },
      {
        date: "2021-2023",
        title: "Cr. Web Developer",
        disc: "ib-themes ltd.",
        color: "bg-purple-50",
      },
      {
        date: "2021-2023",
        title: "Best Writter",
        disc: "Online Typodev Soluation Ltd.",
      },
    ],
  },
];

function Resume() {
  return (
    <>
      <Card title="Resume">
        <Resume1>
          <div className="resume-card">
            {Data.map((i) => {
              return (
                <>
                  <div key={i.name}>
                    <div className="resume-head">
                      <div className="resume-heading" >{i.name}</div>
                      <div className="resume-icon">{i.icon}</div>
                    </div>
                    {i.items.map((k) => {
                      return (
                        <div className="resume-card2"  key={k.title}>
                        <div >
                          <div className="date">{k.date}</div>
                          <div className="resume-title">{k.title}</div>
                          <div className="resume-paragraph">{k.disc}</div>
                        </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              );
            })}
          </div>
        </Resume1>
      </Card>
    </>
  );
}

export default Resume;

const Resume1 = styled.div`
.resume-card{
display:grid;
grid-template-columns: auto auto ;
gap:20px;
padding:20px;

}
.resume-head{
  display:flex;
  gap:10px;
  font-size:25px;
}
.resume-card2{
  background-color: #EAF7F7;
border-radius:20px;
padding: 20px;
margin-top:1rem;

}
.resume-heading{
  font-family: "Roboto Slab", sans-serif;
}
.resume-icon{
  color: #ef4060;
}
.date{
  color:gray;
  font-size:15px
}
.resume-title{
  font-family: "Roboto Slab", sans-serif;
  font-weight:700;
  margin-top:12px;
}
.resume-paragraph{
  font-family: "Poppins", sans-serif;
  margin-top:12px;
}

@media only screen and (max-width: 760px) {
  .resume-card{
    display:grid;
    grid-template-columns: auto;
    gap: 2%;
  }
  }

`