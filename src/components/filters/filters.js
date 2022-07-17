import React from 'react';
import Gender from './category/gender';
import Status from './category/status';
import Species from './category/species'

const filters = ({setStatus, setSpecies, setGender, setPageNumber}) => {
  let clear = () => {
    setGender("");
    setSpecies("");
    setStatus("");
    setPageNumber("");
    window.location.reload();
  };
  return (
    <div className='col-lg-3 col-12 mb-4'>
    <div className="text-center fw-bold fs-3 mb-2 greentext" style={{ fontFamily:"'Raleway', sans-serif;" }}>Filters</div>
    <div onClick={clear} className="text-center mb-4 greentext" style={{cursor:"pointer",textDecoration:"underline"}}>Clear Filters</div>
    <div className="accordion" id="accordionExample">
    <Status setPageNumber={setPageNumber} setStatus={setStatus}/>
    <Species setPageNumber={setPageNumber} setSpecies={setSpecies}/>
    <Gender setPageNumber={setPageNumber} setGender={setGender} />
</div>
    </div>
  )
}

export default filters
