import React from 'react';
import './Programs.css';
import Program1 from '../../assets/Program-1.png';
import Program2 from '../../assets/Program-2.png';
import Program3 from '../../assets/Program-3.png';
import ProgramIcon1 from '../../assets/Program-icon-1.png';
import ProgramIcon2 from '../../assets/Program-icon-2.png';
import ProgramIcon3 from '../../assets/Program-icon-3.png';

const Programs = () => {
  return (
    <div className='Programs'>
      <div className='Program'>
        <img src={Program1} alt="Graduation Degree Program" />
        <div className="caption">
          <img src={ProgramIcon1} alt="Graduation Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='Program'>
        <img src={Program2} alt="Master's Degree Program" />
        <div className="caption">
          <img src={ProgramIcon2} alt="Master's Icon" />
          <p>Master's Degree</p>
        </div>
      </div>

      <div className='Program'>
        <img src={Program3} alt="Postgraduate Degree Program" />
        <div className="caption">
          <img src={ProgramIcon3} alt="Postgraduate Icon" />
          <p>Postgraduate Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;