import React, { Component } from 'react'
import { motion } from 'framer-motion'
import './src.scss'
export default class Motion extends Component {
  constructor(){
    super();
    this.state={
      key:false
    }
  }

  render() {
    return (
     <div style={{margin:"100px"}}>
          <div>hello</div>
      <motion.div className='test' animate={{x:[-300,100]}}  whileHover={{scale:1.1}} whileTap={{scale:0.8}} drag="y" dragConstraints={{top:10, bottom:"200px"}}
       transition={{duration:0.5 }} style={{margin:'100px', background:"#ccc",textAlign:"center",width:"30%",height:"200px"}} ><div></div><div></div><div></div></motion.div>

      <div>hello</div>



     </div>
    )
  }
}
