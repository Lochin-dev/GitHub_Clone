import { useEffect, useState, useContext } from "react";
import { AiOutlineStar } from "react-icons/ai";
import Loading from "../../assets/images/Loding.gif";
import "./style.scss";

import Githubimg from "../../assets/images/github.png";

import { Context } from "../../context/Context";

const index = () => {
  const { apiValue } = useContext(Context);

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    post.splice(0, 6);
    const response = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const resolt = await response.json();
    setPost(resolt);
  };

  useEffect(() => {
    fetchPost();
  }, [apiValue]);

  return (
    <div style={{ width: "100%" }}>
      <div className="over">
        <div className="over__div d-flex ">
          <h2 className="over__div_title">Popular repositories</h2>
          <p className="over__div_text">Customize your pins</p>
        </div>

        <ul className="m-0 over__ul">
          {post.length > 0 ? (
            post.slice(10, 16).map((el) => {
              return (
                <li className=" over__ul_list p-3" key={el.id}>
                  <div className="over__ul_list--div">
                    <a href={el.html_url} className="over__ul_list--div-link">
                      {el.name}
                    </a>
                    <button className="over__ul_list--div-btn">
                      {el.visibility}
                    </button>
                  </div>
                  <ul className="ulo p-0 d-flex align-items-center w-100">
                    <li
                      className={`ulo__list ranglar  ${
                        el.language === "JavaScript"
                          ? "yellow"
                          : el.language === "HTML"
                          ? "red"
                          : el.language === "CSS"
                          ? "purple"
                          : el.language === "SCSS"
                          ? "binafsha"
                          : ""
                      }`}
                    >
                      {el.language}
                    </li>
                    <li className="ulo__list d-flex align-items-center">
                      <AiOutlineStar size={`1.6em`} /> 1
                    </li>
                  </ul>
                </li>
              );
            })
          ) : (
            <div>
              <img src={Loading} alt="loding" />
            </div>
          )}
        </ul>

        <img src={Githubimg} alt="github" />
      </div>
    </div>
  );
};

export default index;
