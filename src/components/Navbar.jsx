import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext, linkedin, github1 } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-2 fixed 
      top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
          {/* <img
            src={logo} // your logo comes here
            alt="logo"
            className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
          /> */}
          <img
            src={logotext}
            alt="logo"
            className="sm:w-[190px] sm:h-[90px] md:hidden lg:inline-block w-[205px] h-[85px] -ml-[0.6rem] object-contain"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-14 mt-2">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? 'text-french' : 'text-eerieBlack'
              } hover:text-taupe text-[21px] font-medium font-mova 
                uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
        <div className="flex flex-1 w-screen justify-end items-center">
          {
              //    <Link
              //    className="flex items-center gap-2"
              //    onClick={() => window.open("https://www.linkedin.com/in/syedasadalirizvi/", "_blank")}>
              //    <img
              //      src={logo} // your logo comes here
              //      alt="logo"
              //      className="sm:w-[50px] sm:h-[50px] w-[45px] h-[45px] object-contain"
              //    />
              //    <img
              //      src={linkedin}
              //      alt="linkedin"
              //      className="sm:w-[190px] sm:h-[90px] md:hidden lg:inline-block w-[205px] h-[85px] -ml-[0.6rem] object-contain"
              //    />
              //  </Link>
            
          <Link
            className="flex items-center gap-2"
            onClick={() => window.open("https://www.linkedin.com/in/syedasadalirizvi/", "_blank")}>
            <img
              src={linkedin}
              alt="linkedin"
              className="sm:w-[190px] sm:h-[90px] md:hidden lg:inline-block w-[205px] h-[85px] -ml-[0.6rem] object-contain"
            />
          </Link>
          
        } 
      </div>
      <Link className="flex justify-end"
      onClick={() => window.open("https://github.com/SyedAsad-dev/UniversitiesTest/", "_blank")}>
      <img
              src={github1} // your logo comes here
              alt="github1"
              className="sm:w-[148px] sm:h-[38px] md:hidden lg:inline-block w-[158px] h-[38px] -ml-[0.6rem] object-contain"

            />
              </Link>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div
              className={`p-6 bg-flashWhite opacity-[0.98] absolute 
                top-0 left-0 w-screen h-[100vh] z-10 menu ${
                  toggle ? 'menu-open' : 'menu-close'
                }`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul
                className="list-none flex flex-col -gap-[1rem] 
                items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq 
                      uppercase tracking-[1px] cursor-pointer`}
                    onClick={() => {
                      setToggle(!toggle);
                      setActive(nav.title);
                    }}>
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <img
              src={menu}
              alt="menu"
              className="w-[34px] h-[34px] object-contain cursor-pointer"
              onClick={() => setToggle(!toggle)}
            />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
