// import React from 'react'

// const filterbtn = (name,index,items) => {
//   return (
//     <div>
// <div className="form-check">
//   <input className="form-check-input" type="radio" name={name} id={`${name}-${index}`}/>
//   <label className="btn btn-outline-primary" for={`${name}-${index}`}>
//     {items}
//   </label>
// </div>
//     </div>
//   )
// }

// export default filterbtn
import React from "react";

const FilterBTN = ({ input,index, name ,task, updatePageNumber  }) => {
  return (
    <div>
      <style jsx>
        {`
          input[type="radio"] {
            display: none;
          }
        `}
      </style>

      <div className="form-check">
        <input
          className="form-check-input x"
          type="radio"
          name={name}
          id={`${name}-${index}`}
        />
        <label
          onClick={(x) => {
            task(input);
            updatePageNumber(1);
          }}
          className="btn btn-outline-primary"
          for={`${name}-${index}`}
        >
          {input}
        </label>
      </div>
    </div>
  );
};

export default FilterBTN;