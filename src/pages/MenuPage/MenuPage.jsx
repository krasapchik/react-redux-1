import React from 'react'
import  classes from './MenuPage.module.css'
const MenuPage = () => {
  return (
    <div className={classes.photo}> 
    <div className={classes.ttt}>
      <div className={classes.lala}>
      <img className={classes.img} src= "/images/logo.png" alt='horse'/>
      </div>
      <div className={classes.content}>
    <p>lololo</p>
  </div>
    </div>
    <div className={classes.ttt}>
      <div className={classes.lala}>
      <img className={classes.img} src= "/images/logo3.png" alt='horse'/>
      </div>
      <div className={classes.content}>
    <p>lololo</p>
  </div>
    </div>
    <div className={classes.ttt}>
      <div className={classes.lala}>
      <img className={classes.img} src= "/images/logo.png" alt='horse'/>
      </div>
      <div className={classes.content}>
    <p>lololo</p>
  </div>
    </div>
   
  
    </div>
  )
}

export default MenuPage