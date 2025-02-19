import React from 'react';
import './Programs.css';
import program1 from '../../assets/program-1.png';
import program2 from '../../assets/program-2.png';
import program3 from '../../assets/program-3.png';
import programIcon1 from '../../assets/program-icon-1.png';
import programIcon2 from '../../assets/program-icon-2.png';
import programIcon3 from '../../assets/program-icon-3.png';

const Programs = () => {
  return (
    <div className='Programs'>
      <div className='Program'>
        <img src={program1} alt="Graduation Degree Program" />
        <div className="caption">
          <img src={programIcon1} alt="Graduation Icon" />
          <p>Graduation Degree</p>
        </div>
      </div>

      <div className='Program'>
        <img src={program2} alt="Master's Degree Program" />
        <div className="caption">
          <img src={programIcon2} alt="Master's Icon" />
          <p>Master's Degree</p>
        </div>
      </div>

      <div className='Program'>
        <img src={program3} alt="Postgraduate Degree Program" />
        <div className="caption">
          <img src={programIcon3} alt="Postgraduate Icon" />
          <p>Postgraduate Degree</p>
        </div>
      </div>
    </div>
  );
}

export default Programs;