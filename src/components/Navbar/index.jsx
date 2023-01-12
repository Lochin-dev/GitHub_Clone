import { useContext, useState, useEffect } from "react";
import "./style.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import Card from "../../UI/Card";
import { Context } from "../../context/Context";




const index = () => {

  const {apiValue} = useContext(Context);

  const { state, setState, setApiValue } = useContext(Context);
  const [value, setValue] = useState(
    localStorage.getItem("key") || "web-developer001"
  );

  const menuClick = () => {
    setState((state) => !state);
    console.log(state);
  };

  const Clicked = (e) => {
    e.preventDefault();
    setApiValue(value);
  };


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
    <div>
      <header className="header">
        <nav className="nav">
          <div className="nav__wrapper">
            <RxHamburgerMenu size={"2em"} onClick={() => menuClick()} />
            <a className="nav__one_link" href="https://github.com">
              <i className="fa-brands fa-github fs-2 text-white"></i>
            </a>
            <span className="qongiroq">
              
              <i className="fa-regular fa-bell text-white "></i>
              <span className="qspan"></span>
            </span>
          </div>

          <div className="nav__one">
            <a className="nav__one_link" href="https://github.com/">
              <i className="fa-brands fa-github fs-2 text-white"></i>
            </a>

            <form style={{position: "relative"}} action="#" onSubmit={(e) => Clicked(e)}>
              <input
                className="nav__one_input"
                type="text"
                placeholder="Search or jump to…"
                value={value}
                onChange={(e) => {
                  setValue(e.target.value);
                  localStorage.setItem("key", e.target.value);
                }}
              />
              <button className="form_btn" style={{position: "absolute" , right:"0" , marginRight:"5px"}} type="submit">/</button>
            </form>

            <ul className="nav__one_ul text-white">
              <li className="nav__one_ul--list">
                <a className="nav__one_ul--list-link" href="#">
                  Pul request
                </a>
              </li>
              <li className="nav__one_ul--list">
                <a className="nav__one_ul--list-link" href="#">
                  Issues
                </a>
              </li>
              <li className="nav__one_ul--list">
                <a className="nav__one_ul--list-link" href="#">
                  Codespaces
                </a>
              </li>
              <li className="nav__one_ul--list">
                <a className="nav__one_ul--list-link" href="#">
                  Marketplace
                </a>
              </li>
              <li className="nav__one_ul--list">
                <a className="nav__one_ul--list-link" href="#">
                  Explore
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__two">
            <div className="qongiroq">
              <i className="fa-regular fa-bell text-white "></i>
              <span className="qspan"></span>
            </div>
            <i className="fa-regular fa-plus text-white "></i>
            <i className="fa-sharp fa-solid fa-caret-down text-white "></i>
            <img
              className="nav__two_img rounded-circle"
              src={post.avatar_url}
              alt="rasm"
            />
            <i className="fa-sharp fa-solid fa-caret-down text-white"></i>
          </div>
        </nav>
      </header>

      <Card />
    </div>
  );
};

export default index;
