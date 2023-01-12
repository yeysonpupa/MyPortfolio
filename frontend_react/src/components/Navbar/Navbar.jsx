import React, { useState } from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { BsFileEarmarkPersonFill, BsLinkedin } from 'react-icons/bs';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.Esteban} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'badges', 'contact'].map((item) => (
          <li key={`link-${item}`} className="app__flex p-text">
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
      <div className="app__navbar-menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {
            toggle && (
              <div>
                  <HiX onClick={() => setToggle(false)} />
                  <ul>
                    {['home', 'about', 'work', 'skills', 'badges', 'contact',].map((item) => (
                    <li key={item} className="app__flex p-text">
                      <a href={`#${item}`} onClick={() => setToggle(false)}>{item}</a>
                    </li>
                    ))}
                  </ul>
                
                  <a href="http://www.linkedin.com/in/yeyson-esteban-pulido-parra" title="LinkedIn Profile"><BsLinkedin /></a>
                  <a href="https://www.canva.com/design/DAFSPevxb6A/DpW_9JhzD4FeUvml77xuOg/view?utm_content=DAFSPevxb6A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" title="My CV"><BsFileEarmarkPersonFill /></a>
                  <a href="https://github.com/yeysonpupa?tab=repositories" title="GitHub Repositories"><AiFillGithub /></a>
                  <a href="https://www.youtube.com/@estebanpulido1607/featured" title="My Channel"><AiFillYoutube /></a>
              </div>
            )}
      </div>
    </nav>
  )
}

export default Navbar