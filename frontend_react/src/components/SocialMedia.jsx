import React from 'react';
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { BsFileEarmarkPersonFill, BsLinkedin } from 'react-icons/bs';

const SocialMedia = () => {
  return (
    <div className="app__social">
        <div>
          <a href="http://www.linkedin.com/in/yeyson-esteban-pulido-parra" title="LinkedIn Profile"><BsLinkedin /></a>
        </div>
        <div>
          <a href="https://www.canva.com/design/DAFSPevxb6A/DpW_9JhzD4FeUvml77xuOg/view?utm_content=DAFSPevxb6A&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink" title="My CV"><BsFileEarmarkPersonFill /></a>
        </div>
        <div>
          <a href="https://github.com/yeysonpupa?tab=repositories" title="GitHub Repositories"><AiFillGithub /></a>
        </div>
        <div>
          <a href="https://www.youtube.com/@estebanpulido1607/featured" title="My Channel"><AiFillYoutube /></a>
        </div>
    </div>
  )
}

export default SocialMedia