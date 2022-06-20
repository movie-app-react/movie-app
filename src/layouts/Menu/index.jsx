import React, { useState } from "react";
import classNames from "classnames/bind";
import { Link, Route, Routes } from "react-router-dom";

import styles from "./Menu.module.scss";
import { menuConfig } from "./menuConfig";
import Home from "../../page/Home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const cn = classNames.bind(styles);
const Menu = ({ showMenu }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(showMenu);
  const handleClick = (index) => {
    if (index === activeIndex) {
      setActiveIndex(0);
      return;
    }
    setActiveIndex(index);
  };
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
      <div
        className={cn("Menu-mobile", `${showMenu ? "show-Menu-Mobile" : ""}`)}
      >
        <div className={cn("container-fluid")}>
          <div className={cn("menu-mobile-item")}>
            <ul className={cn("menu-mobile-lists")}>
              {menuConfig.map((item, index) => {
                return (
                  <li className={cn("menu-mobile-list-item")} key={index}>
                    {(item.link && (
                      <Link to={item.link} onClick={() => handleClick(item.id)}>
                        {item.name}
                      </Link>
                    )) || (
                      <span className={cn("child-menu-mobile")}>
                        {item.name}
                        <span
                          className={cn(
                            "icon-plus-mobile",
                            `${activeIndex === item.id ? "active-icon" : ""}`
                          )}
                          onClick={() => handleClick(item.id)}
                        >
                          {(activeIndex === item.id && (
                            <FontAwesomeIcon icon={faMinus} />
                          )) || <FontAwesomeIcon icon={faPlus} />}
                        </span>
                      </span>
                    )}
                    <div
                      className={cn(
                        "child-item-menu-mobile",
                        `${activeIndex === item.id ? "show" : "hide"}`
                      )}
                    >
                      <ul>
                        {item.children &&
                          item.children.map((item_child, i) => (
                            <li key={i}>
                              <Link to={item_child.link} key={item_child.name}>
                                {item_child.name}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </li>
                );
              })}
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
