import React from 'react'

const input = ({total, name, setID}) => {
  return (
    <div><div class="input-group mb-3">
    <select 
    onChange={e=>setID(e.target.value)}
    class="form-select" id={name}>
      <option selected>Choose...</option>
      {[...Array(total).keys()].map((x, index) => {
          return (
            <option value={x + 1}>
               {name}-{x + 1}
            </option>
          );
        })}
    </select>
  </div></div>
  )
}

export default input