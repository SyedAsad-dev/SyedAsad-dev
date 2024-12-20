import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants';
import { close, menu, logo, logotext, linkedin, github1, medium, linkedin2, emptyImage } from '../assets';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-2 fixed top-0 z-20 bg-flashWhite sm:opacity-[0.97] xxs:h-[12vh]`}>
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}>
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
              } hover:text-taupe text-[21px] font-medium font-mova uppercase tracking-[3px] cursor-pointer nav-links`}
              onClick={() => setActive(nav.title)}>
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="flex flex-row justify-end items-center gap-4">
        
        <Link
               className="hidden sm:flex justify-end items-center">
               <img
                 src={emptyImage}
                 alt="emptyImage"
                 className="w-[200px] h-[80px] object-contain"
               />
             </Link>

        <Link
               className="hidden sm:flex justify-end items-center"
               onClick={() => window.open("https://www.linkedin.com/in/iosdev24/", "_blank")}>
               <img
                 src={linkedin}
                 alt="linkedin"
                 className="w-[200px] h-[80px] object-contain"
               />
             </Link>

        <Link className="hidden sm:flex justify-end items-center"
            onClick={() => window.open("https://github.com/SyedAsad-dev/eCabs_Malta", "_blank")}>
            <img
              src={github1}
              alt="github1"
              className="w-[158px] h-[38px] object-contain"
            />
          </Link>

          <Link className="hidden sm:flex justify-end items-center"
            onClick={() => window.open("https://medium.com/@syed4asad4", "_blank")}>
            <img
              src={medium}
              alt="medium"
              className="w-[145px] h-[28px] object-contain"
            />
          </Link>
        </div>

        {/* mobile */}
        <div className="sm:hidden flex flex-1 w-screen justify-end items-center">
          {toggle ? (
            <div className={`p-6 bg-flashWhite opacity-[0.98] absolute top-0 left-0 w-screen h-[100vh] z-10 menu ${toggle ? 'menu-open' : 'menu-close'}`}>
              <div className="flex justify-end">
                <img
                  src={close}
                  alt="close"
                  className="w-[22px] h-[22px] object-contain cursor-pointer"
                  onClick={() => setToggle(!toggle)}
                />
              </div>
              <ul className="list-none flex flex-col -gap-[1rem] items-start justify-end mt-[10rem] -ml-[35px]">
                {navLinks.map((nav) => (
                  <li
                    id={nav.id}
                    key={nav.id}
                    className={`${
                      active === nav.title ? 'text-french' : 'text-eerieBlack'
                    } text-[88px] font-bold font-arenq uppercase tracking-[1px] cursor-pointer`}
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
