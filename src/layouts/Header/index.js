import React, { useState } from "react";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilm, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import Styles from "./Header.module.scss";
import Menu from "../Menu/";
import { Link } from "react-router-dom";
const cn = classNames.bind(Styles);
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleClickBtn = () => setShowMenu((prev) => !prev);

  // console.log('click:' + showMenu)
  return (
    <div className={cn("wrapper")}>
      <div className={cn("Header")}>
        <div className={cn("container")}>
          <div className={cn("wrap")}>
            <div className={cn("logo-and-menu")}>
              <div className={cn("logo-header")}>
                <Link to="/">
                  <FontAwesomeIcon className={cn("icon-logo")} icon={faFilm} />
                  <h1>Phim mới</h1>
                </Link>
                <p>Xem phim trực tuyến chất lượng cao</p>
              </div>
              {/* --menu-mobile */}
              <div
                className={cn(
                  "Menu_mb",
                  `${showMenu ? "active-menu-mobile" : ""}`
                )}
                onClick={handleClickBtn}
              >
                <div className={cn("btn-menu")}>
                  <div>
                    <span></span>
                  </div>
                  <div>
                    <span></span>
                  </div>
                  <div>
                    <span></span>
                  </div>
                </div>
              </div>
              {/*  */}
            </div>
            <div className={cn("search-header")}>
              <input placeholder="Search..." />
              <button>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <Menu showMenu={showMenu} />
    </div>
  );
};

export default Header;
