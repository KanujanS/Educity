import React from 'react'
import './Programs.css'
import Program_1 from '../../assets/Program-1.png'
import Program_2 from '../../assets/Program-2.png'
import Program_3 from '../../assets/Program-3.png'
import Program_icon_1 from '../../assets/Program-icon-1.png'
import Program_icon_2 from '../../assets/Program-icon-2.png'
import Program_icon_3 from '../../assets/Program-icon-3.png'

const Programs = () => {
  return (
    <div className='Programs'>
        <div className='Program'>
            <img src={Program_1} alt="" />
            <div className="caption">
            <img src={Program_icon_1} alt="" />
            <p>Graduation degree</p>
            </div>
        </div>
        <div className='Program'>
            <img src={Program_2} alt="" />
            <div className="caption">
            <img src={Program_icon_2} alt="" />
            <p>Masters degree</p>
            </div>
        </div>
        <div className='Program'>
            <img src={Program_3} alt="" />
            <div className="caption">
            <img src={Program_icon_3} alt="" />
            <p>Postgraduation Graduation</p>
            </div>
        </div>
    </div>
  )
}

export default Programs