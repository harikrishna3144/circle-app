import React from 'react'
import "./index.css"
// import {
//     mainContainer
// } from "./style"

import db from "./db.json"
export const Circle = () => {
    //const [circle, setCircle] = useState(false);

    const onClickChangeColor = (e) => {
        if(e.type === "click"){
            console.log("is clicked circle")
            console.log(db)
            
        }else{
            console.log("User can't clicked circle!")
        }
    }

  return (
    <div className='main-container'  >
        <div onClick={onClickChangeColor} className='circle-list-container1'>
            <div onClick={onClickChangeColor} className='container1'>

            </div>
            <div onClick={onClickChangeColor} className='container2'>

            </div>
        </div>
        <div className='circle-list-container2'>
            <div onClick={onClickChangeColor} className='container11'>

            </div>
            <div onClick={onClickChangeColor} className='container22'>

            </div>
            <div onClick={onClickChangeColor} className='container33'>

            </div>
            <div onClick={onClickChangeColor} className='container44'>

            </div>
            <div onClick={onClickChangeColor} className='container55'></div>
            
        </div>

        <div className='circle-list-container'>
            <div onClick={onClickChangeColor} className='container111'>

            </div>
        </div>

    </div>
  )
}
