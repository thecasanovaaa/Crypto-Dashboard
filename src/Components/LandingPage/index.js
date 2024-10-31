import React from 'react';
import "./styles.css";
import Button from '../Common/Button';
import phone from "../../Assets/phone.png";
import gradient from "../../Assets/gradient.png";
import {delay,Opacity, motion,duration} from "framer-motion";
import { Link } from 'react-router-dom';

function MainComponent() {
  return (
  <div className='flex-info'>
    <div className='left-copmonent'>
        <motion.h1 className='track-crypto-heading'
        initial={{ opacity: 0, y:50}}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 0.8}}
        >Track Crypto</motion.h1>
        <motion.h1 className='real-time-heading'
        initial={{ opacity: 0, y:50}}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 0.8,delay:0.5}}
        > Real Time</motion.h1>
        <motion.p className='info-text'
        initial={{ opacity: 0, y:50}}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 0.8,delay:1}}
        > Track crypto through a public api in real time. Visit the dashboard to do so!</motion.p>
        <motion.div className='btn-flex'
        initial={{ opacity: 0, y:50}}
        animate={{ opacity: 1, y:0}}
        transition={{ duration: 0.8,delay:1.5}}
        >
        <Link to="/dashboard">
            <Button 
              text={"Dashboard"} 
              outlined={false}
              onClick ={()=>console.log("Btn Fucked")}
            />
        </Link>
            <Button text={"Share"} outlined={true} />
        </motion.div>
    </div>
    <div className='phone-container'>
      <motion.img src={phone} className='phone'
      initial={{ y: -10}}
      animate={{ y: 10}}
      transition={{
        type: "smooth",
        repeatType: "mirror",
        duration: 2,
        repeat: Infinity,
      }}
      />
      <img src={gradient} className='gradient'/>
    </div>
  </div>
  )
}
export default MainComponent
