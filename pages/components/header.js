import React, { useState } from "react";
import { FiMoon } from "react-icons/fi";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { CgList } from "react-icons/cg";
import { GiPerspectiveDiceOne } from "react-icons/gi";
import { ImBlogger2 } from "react-icons/im";
import { RiContactsBookLine } from "react-icons/ri";
import styled from "styled-components";
import Link from "next/link";

function Header() {
  const [isMenu, setIsMenu] = useState(false);
  console.log(isMenu, "menu.....");

  const menuItems = [
    {
      href: "/",
      title: "About",
      icon: <FaRegUser />,
    },
    {
      href: "/resume",
      title: "Resume",
      icon: <CgList />,
    },
    {
      href: "/works",
      title: "Works",
      icon: <GiPerspectiveDiceOne />,
    },
    {
      href: "/blog",
      title: "Blogs",
      icon: <ImBlogger2 />,
    },
    {
      href: "/contact",
      title: "Contact",
      icon: <RiContactsBookLine />,
    },
  ];

  return (
    <>
      <div>
        <Header1>
          <div className="header">
            <h1>𝕭𝖔𝖘𝖙𝖆𝖒𝖎</h1>
            <div className="header-side-bar">
              <div className="header-dark">
                <div>
                  <h2 className="darkmode">
                    <FiMoon />
                  </h2>
                </div>
                <div>
                  <button
                    className="menu-bar"
                    onClick={() => {
                      isMenu ? setIsMenu(false) : setIsMenu(true);
                    }}
                  >
                    <AiOutlineMenu />
                  </button>
                </div>
              </div>

              <div className={`${isMenu ? "" : "view_menu"} menu-bar bar`}>
                <div className="">
                  {menuItems.map((item, index) => (
                    <div className="m-2" key={index}>
                      <Link href={item.href}>
                        <div className="">
                          <div className="">{item.icon}</div>
                          <div className=""> {item.title}</div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Header1>
      </div>
    </>
  );
}

export default Header;

const Header1 = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
    color: #ef4060;
  }
  .header-side-bar {
    display: flex;
    justify-content: space-between;
    gap: 5%;
  }
  .header-dark {
    display: flex;
  }
  .darkmode {
    padding: 10px;
    color: black;
    background-color: white;
    border-radius: 25px;
    align-items: center;
  }
  .darkmode:hover {
    background-color: #ef4060;
    color: white;
  }

  .menu-bar {
    visibility: hidden;
  }
  .view_menu {
    display: none;
  }

  @media only screen and (max-width: 1020px) {
    .header {
      justify-content: space-between;
      background-color: #f8f8ff;
    }
    .menu-bar {
      visibility: visible;
      padding: 10px;
      background-color: #ef4060;
      border-radius: 25px;
      align-items: center;
      color: white;
      margin-top: 20px;
    }
    .bar{
      background-color:#f8fbfb;
      color:black;
    }

  }
`;
