// import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link, Route, Routes } from "react-router-dom";

import styles from "./Menu.module.scss";
import { menuConfig } from "./menuConfig";
// import ButtonCpn from "../../components/Button";
import Home from "../../page/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const cn = classNames.bind(styles);
const Menu = () => {
  // const [showChildMenu,setShowChildMenu] = useState(false)
  // const handleClick = ()=> {
  //   setShowChildMenu(prev=>!prev)
  // }
  return (
    <div className={cn("wrap")}>
      <div className={cn("Menu")}>
        <div className={cn("container")}>
          <div className={cn("menu-item")}>
            <ul className={cn("menu-lists")}>
              {menuConfig.map((item, index) => (
                <li className={cn("list-tem")} key={index}>
                  {(item.link && <Link to={item.link}>{item.name}</Link>) || (
                    <span>
                      {item.iconLeft && (
                        <FontAwesomeIcon
                          className={cn("icon-left")}
                          icon={item.iconLeft}
                        />
                      )}

                      {item.name}

                      {item.iconRight && (
                        <FontAwesomeIcon
                          className={cn("icon-right")}
                          icon={item.iconRight}
                        />
                      )}
                    </span>
                  )}
                  <div className={cn("child-menu")}>
                    <ul className={cn("child-menu-list")}>
                      {item.children &&
                        item.children.map((child, i) => (
                          <li className={cn("child-list")} key={i}>
                            <Link to={child.link}>{child.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={cn("Menu-mobile")}>
        <div className={cn("container-fluid")}>
          <div className={cn("menu-mobile-item")}>
            <ul className={cn("menu-mobile-lists")}>
              <li>
                <Link to="/">Trang chu</Link>
              </li>
              <li>
                The loai
                <ul className={cn('child-menu-mobile')}>
                  <li>Dam my</li>
                  <li>Hai huoc</li>
                  <li>Hanh dong</li>
                  <li>Hoat hinh</li>
                  <li>Kinh di</li>
                  <li>Tam ly</li>
                  <li>Thieu nhi</li>
                  <li>Tinh cam</li>
                </ul>
              </li>
              <li>Quoc gia</li>
              <li>Phim theo nam</li>
              <li>Anime</li>
              <li>Khac</li>
              <li>
                <Link to="/">Lien he</Link>
              </li>
              {/* {menuConfig.map((item, index) => (
                <li className={cn("menu-mobile-list-tem")} key={index} onClick={handleClick}>
                  {(item.link && <Link to={item.link}>{item.name}</Link>) || (<span>{item.name}</span>)}
                  <div className={cn("child-menu-mobile",`${showChildMenu? "active-item-list" :""}`)}>
                    <ul className={cn("child-menu-mobile-list")}>
                      {item.children &&
                        item.children.map((child, i) => (
                          <li className={cn("mobile-child-list")} key={i}>
                            <Link to={child.link}>{child.name}</Link>
                          </li>
                        ))}
                    </ul>
                  </div>
                </li>
              ))} */}
            </ul>
          </div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default Menu;
