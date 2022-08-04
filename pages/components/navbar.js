import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";

const Items = [
  { icon: <FaRegUser />, name: "About", path: "/" },
  { icon: <CgList />, name: "Resume", path: "/resume" },
  { icon: <GiPerspectiveDiceOne />, name: "Works", path: "/works" },
  { icon: <ImBlogger2 />, name: "Blogs", path: "/blog" },
  { icon: <RiContactsBookLine />, name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <>
      <div className="nav">
        <Navbar1 >
          <div className="navbar">
            <div className="navbar-section">
              {Items.map((item) => {
                return (
                  <Link href={item.path} key={item.path}>
                    <div className="item-icon">
                      {" "}
                      {item.icon}
                      <div className="item-name"> {item.name}</div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </Navbar1>
      </div>
      <div />
    </>
  );
}

export default Navbar;

const Navbar1 = styled.div`

  .navbar {
    background-color: white;
    border-radius: 20px;
    padding: 20px;
    padding-right: 10px;
    display: inline-flex;
   
  }
  .navbar-section {
    display: flex;
    gap: 5px;
    justify-content: space-around;
  }
  .item-icon:hover {
    background-color: #ef4060;
    color: white;
  }
  .item-icon {
    border-radius: 10px;
    padding: 10px;
    text-align: center;

    background-color: #f3f6f6;
    font-size: 20px;
    color: gray;
  }
  @media only screen and (max-width: 1020px) {
    .navbar {
      display: none;
    }
  }
`;
