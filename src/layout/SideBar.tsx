import * as React from 'react';
import { Link } from 'react-router-dom';
import { LINKS } from '../constants/index';


export const SideBar = (props) => {
  return(
    <div className="side-bar">
      <div className="logo">
        <h1>Report</h1>
      </div>
      <div className="divider" ></div>
      <div className="items">
        <ul>
          {
            LINKS.map((l, i) => {
              let { pathname } = location;
              let { path, title } = l;
              let className = path == pathname ? "active" : "";
              return  <li className={className} key={i}>
                        <a href={path}>{title}</a>
                      </li>
            })
          }
        </ul>
      </div>
    </div>
  )
}