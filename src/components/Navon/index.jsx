import React, { useState, useEffect , useContext} from "react";
import "./style.scss";
import { RiGitRepositoryLine } from "react-icons/ri";
import { BiBookOpen } from "react-icons/bi";
import { AiOutlineLayout } from "react-icons/ai";
import { BsBox } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { MdMoreHoriz } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

const index = () => {

  const {apiValue} = useContext(Context);

  const [scrollY, setScrollY] = useState(0);

  function logit() {
    setScrollY(window.pageYOffset);
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  });

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://api.github.com/users/${apiValue}`
    );
    const resolt = await response.json();
    setPost(resolt);
  };

  useEffect(() => {
    fetchPost();
  }, [apiValue]);

  return (
    <div
      className={!(scrollY > 370) ? "navonn zindexx" : "navonn zindex"}
      style={{
        position: "sticky",
        top: "0",
        background: "#fff",
      }}
    >
      <div className="container">
        <div className="navon">
          <div className="navon__div">
            <img
            style={{width:"35px"}}
              className={
                !(scrollY > 380)
                  ? "navon__div_img d-none"
                  : "navon__div_img d-block"
              }
              src={post.avatar_url}
              alt="rasm"
            />
            <p
              className={
                !(scrollY > 380)
                  ? "navon__div_text d-none"
                  : "navon__div_text d-block"
              }
            >
              {post.login}
            </p>
          </div>
          <ul className="navon__div_ul">
            <li className="navon__div_ul--list">
              <NavLink to="/" className="navon__div_ul--list-link">
                <BiBookOpen
                  style={{ marginRight: "7px", paddingBottom: "5px" }}
                  color="#555E68"
                  size={`1.8em`}
                />
                Overview
              </NavLink>
            </li>
            <li className="navon__div_ul--list">
              <NavLink to="/repositories" className="d-flex align-items-center navon__div_ul--list-link">
                <RiGitRepositoryLine
                  style={{ marginRight: "8px", paddingBottom: "5px" }}
                  color="#555E68"
                  size={`1.8em`}
                />
                Repositories
                <span
                  className="ms-1  rounded-pill"
                  style={{
                    background: "#EFF1F3",
                   
                    textAlign: "center",
                    padding:"0px 6px 0px 6px"
                  }}
                >
                  {post.public_repos}
                </span>
              </NavLink>
            </li>
            <li className="navon__div_ul--list">
              <NavLink to="/project" className="navon__div_ul--list-link">
                <AiOutlineLayout
                  style={{ marginRight: "7px", paddingBottom: "5px" }}
                  color="#555E68"
                  size={`1.8em`}
                />
                Project
              </NavLink>
            </li>
            <li className="navon__div_ul--list one">
              <NavLink to="/packages" className="navon__div_ul--list-link">
                <BsBox
                  style={{ marginRight: "7px", paddingBottom: "5px" }}
                  color="#555E68"
                  size={`1.8em`}
                />
                Packages
              </NavLink>
            </li>
            <li className="navon__div_ul--list two">
              <NavLink to="/btars" className="navon__div_ul--list-link">
                <AiOutlineStar
                  style={{ marginRight: "7px", paddingBottom: "5px" }}
                  color="#555E68"
                  size={`1.8em`}
                />
                Stars
              </NavLink>
            </li>

            <li className="end">
              <MdMoreHoriz />
            </li>
          </ul>
        </div>
      </div>
      <hr style={{ margin: "0px" }} />
    </div>
  );
};

export default index;
