import React from 'react'
import Filterbtn from '../filterbtn'

const status = ({setStatus, setPageNumber}) => {
  let status = ["Dead" , "Alive", "Unknown"];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        Status
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse show" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-2">
      {status.map(( items,index)=>(
        <Filterbtn key={index} name="status"  input={items} index={index} setPageNumber={setPageNumber} task={setStatus}/>
      ))}
         </div>
    </div>
  </div>
  );
};
export default status;
// import React from "react";
// import FilterBTN from "../Filterbtn";

// const Status = ({ updateStatus, updatePageNumber }) => {
//   let status = ["Alive", "Dead", "Unknown"];
//   return (
//     <div className="accordion-item">
//       <h2 className="accordion-header" id="headingOne">
//         <button
//           className="accordion-button"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#collapseOne"
//           aria-expanded="true"
//           aria-controls="collapseOne"
//         >
//           Status
//         </button>
//       </h2>
//       <div
//         id="collapseOne"
//         className="accordion-collapse collapse show"
//         aria-labelledby="headingOne"
//         data-bs-parent="#accordionExample"
//       >
//         <div className="accordion-body d-flex flex-wrap gap-3">
//           {status.map((item, index) => (
//             <FilterBTN
//               key={index}
//               index={index}
//               name="status"
//               task={updateStatus}
//               updatePageNumber={updatePageNumber}
//               input={item}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Status;
