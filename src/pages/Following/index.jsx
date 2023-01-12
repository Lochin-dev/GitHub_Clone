import { useEffect, useState, useContext } from "react";
import "./style.scss";
import { Context } from "../../context/Context";

const index = () => {
  const { apiValue } = useContext(Context);
  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    post.splice(0, 6);
    const response = await fetch(
      `https://api.github.com/users/${apiValue}/following`
    );
    const resolt = await response.json();
    setPost(resolt);
  };

  useEffect(() => {
    fetchPost();
  }, [apiValue]);

  return (
    <div style={{ width: "100%" }}>
      {post.length > 0 &&
        post.map((el,id) => {
          return (
            <div className="followers border-bottom" key={id}>
              <div className="fol__div">
                <img
                  className="followers__img"
                  src={el.avatar_url}
                  alt="Dilshodbek"
                />
                <div className="followers__div">
                  <a href={el.html_url} className="followers__div_link">
                    {el.login}
                  </a>
                  <p className="followers__div_text">Frontend developer</p>
                </div>
              </div>
              <span>
                <button className="followers__btn">Unfollow</button>
              </span>
            </div>
          );
        })}
    </div>
  );
};

export default index;
