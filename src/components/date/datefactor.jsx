import "./datefactor.css";

import React from 'react'

 function DateFactor() {
    return (
        <div className="datefactor">
             <div className="datefactorWrapper">
 
              <select className="selectOption" name="" id="selectOption">
                 <option value="Current Year">Current Year</option>
                 <option value="Last Year">Last Year</option>
                 <option value="2018">2018 </option>
                 <option value="2017">2017 </option>
              </select>
 
              <select className="selectOption" name="" id="">
                 <option value="Current Week">Current Year</option>
                 <option value="Last Week">Last Year</option>
                 <option value="week-20-04/19-04/25">week-20-04/19-04/25 </option>
                 <option value="week-19-04/19-04/25">week-19-04/19-04/25 </option>
              </select>
 
             </div>
           
         </div>
     )
 }

export default DateFactor;
