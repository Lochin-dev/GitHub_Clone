import { useEffect, useState , useContext } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { RiGitRepositoryLine } from "react-icons/ri";
import ItemPost from "./ItemPost";
import "./style.scss";

import { Context } from "../../context/Context";

const index = () => {
  const {apiValue} = useContext(Context);

  const [post, setPost] = useState([]);

  const fetchPost = async () => {
    const response = await fetch(
      `https://api.github.com/users/${apiValue}/repos`
    );
    const resolt = await response.json();
    setPost(resolt);
  };

  useEffect(() => {
    fetchPost();
  }, [apiValue]);

  const [limt, setLimt] = useState(10);
  const [point, setPoint] = useState(1);

  const firstPoint = limt * point;
  const lastPoint = firstPoint - limt;

  const lastPage = post.slice(lastPoint, firstPoint);
 

  const paginate = (pageNumber) => {
    setPoint(pageNumber);
  };

  return (
    <div style={{zIndex:"1"}} className="w-100">
      <div className="repos">
        <input
          className="repos__input"
          type="text"
          placeholder="Find a repository…"
        />
        <div className="repos__div repos_one">
          <button className="repos__div_btn">
            <p>Type</p> <MdArrowDropDown />
          </button>
          <button className="repos__div_btn">
            <p>Lenguage</p> <MdArrowDropDown />
          </button>
          <button className="repos__div_btn">
            <p> Sort</p> <MdArrowDropDown />
          </button>
        </div>

        <button className="repos__btn">
          <RiGitRepositoryLine
            style={{ marginRight: "1px", paddingBottom: "1px" }}
            color="#fff"
            size={`1.5em`}
          />
          <p>New</p>
        </button>
      </div>

      <div className="repos__div repos_two">
        <button className="repos__div_btn">
          <p>Type</p> <MdArrowDropDown />
        </button>
        <button className="repos__div_btn">
          <p>Lenguage</p> <MdArrowDropDown />
        </button>
        <button className="repos__div_btn">
          <p> Sort</p> <MdArrowDropDown />
        </button>
      </div>

      <hr />

      <ItemPost
        post={post}
        limt={limt}
        lastPage={lastPage}
        active={point}
        paginate={paginate}
      />
    </div>
  );
};

export default index;
