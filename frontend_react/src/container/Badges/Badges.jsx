import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './Badges.scss';
import { AiFillEye } from 'react-icons/ai';

const Badges = () => {
    const [badges, setBadges] = useState([]);
  
    useEffect(() => {
      const query = '*[_type == "badges"]';
  
      client.fetch(query).then((data) => {
        setBadges(data);
      });
    }, []);
  
    return (
      <>
      <h2 className="head-text" data-tippy="Tooltip">Badges <span>&</span> Acknowledgments</h2>
      <div className="app__badges-container">
        <motion.div
        className="app__badges-list">
          {badges.map((badge) => (
            <motion.div
            transition={{ duration: 0.5 }}
            className="app__badges-item app__flex"
            key={badge.name}>
              <div className="app__flex" style={{ backgroundColor: badge.bgColor }}>
                <img src={urlFor(badge.icon)} alt={badge.name} />
                <motion.div
                whileHover={{ opacity: [0, 1]}}
                transition={{ duration: 0.25, ease: 'easeInOut', stageChildren: 0.5 }}
                className="app__flex">
                  <a href={badge.badgeLink} target="_blank" rel="noreferrer" title="See Badge"> 
                    <motion.div
                    whileHover={{ scale: [1, 0.9] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex">
                      <AiFillEye />
                    </motion.div>
                  </a>
                </motion.div>
              </div>
              <h4 className="bold-text">{badge.name}</h4>
              <h6 className="p-text">{badge.company}</h6>
              <p className="p-text">{badge.expedicion}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </>
    )
  }

export default AppWrap(
    MotionWrap(Badges, 'app__badges'), 'badges', "app__primarybg");