import React, { useState, useEffect,useContext } from "react";
import "./style.scss";
import { FiUsers } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { Context } from "../../context/Context";

const index = () => {
  const [post, setPost] = useState([]);
  const {apiValue} = useContext(Context);

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
    <div style={{ zIndex: "5", position: "relative" }}>
      <div className="">
        <div className="sidebar">
          <div className="sidwrap">
            <div className="position-relative ">
              <img
                src={post.avatar_url}
                alt="avatar"
                className="sidebar__img"
              />
            <button className="stikr position-absolute">🙃</button>

            </div>
            <div className="sidwww">
              <h2 className="sidebar__title">{post.name}</h2>
              <p className="sidebar__text">{post.login}</p>
            </div>
          </div>

          <button className="stikrr">🙃 Edit status</button>

          <div className="sidebar__das">{post.bio}</div>
          <button className="w-100 sidebar__btn">Edit profile</button>
          <ul className="sidebar__ul">
            <li className="sidebat__ul_list">
              <NavLink to="/followers" className="sidebar__ul_list--link">
                <FiUsers size={`1.5em`} />
                <span className="sidebar__ul_list--link-span">
                  {post.followers}
                </span>
                followers
              </NavLink>
            </li>
            <li>·</li>
            <li className="sidebat__ul_list">
              <NavLink to="/following" className="sidebar__ul_list--link">
                <span className="sidebar__ul_list--link-span">
                  {post.following}
                </span>
                following
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default index;
