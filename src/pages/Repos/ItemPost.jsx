import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";
import Loading from "../../assets/images/Loding.gif";

const ItemPost = ({ post, limt, lastPage, active, paginate }) => {
  const point = [];
  for (let i = 0; i < Math.ceil(post.length / limt); i++) {
    point.push(i + 1);
  }

  return (
    <div className="wrapper">
      {post.length > 0 ? (
        lastPage.map((el, index) => (
          <div className="wrapper__wrap border-bottom" key={index}>
            <div className="wrapper__wrap_one">
              <span className="wrapper__wrap_one--span">
                <a href={el.html_url} className="wrapper__wrap_one--span-link">
                  {el.name}
                </a>
                <button className="wrapper__wrap_one--span-btn">
                  {el.visibility}
                </button>
              </span>
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
                <li className="ulo__list_text">{el.created_at}</li>
              </ul>
            </div>

            <div className="wrapper__wrap_two">
              <button className="wrapper__wrap_two--btn ">
                <AiOutlineStar style={{ marginRight: "14px" }} size={`1.3em`} />
                Star <hr className="star_hr " />
                <MdArrowDropDown
                  style={{ marginLeft: "15px" }}
                  size={`1.7em`}
                />
              </button>
              <div className="wrapper__wrap_two--span"></div>
            </div>
          </div>
        ))
      ) : (
        <div
          style={{ display: "flex", justifyContent: "center" }}
          className="w-100"
        >
          <img src={Loading} alt="loding" />
        </div>
      )}

      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination d-flex justify-content-center gap-2 mt-4">
            {point.map((item, id) => {
              return (
                <li
                  key={id}
                  className={`page-item ${active === item ? "active" : ""}`}
                  onClick={() => paginate(item)}
                >
                  <a className="page-link" href="#">
                    {item}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default ItemPost;
