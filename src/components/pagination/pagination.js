import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
const Pagination = ({ info, pageNumber, setPageNumber}) => {

let [width, setwidth] = useState(window.innerWidth);
let updateDimension = () =>{
    setwidth(window.innerWidth);
};
useEffect(() => {
    window.addEventListener("resize",updateDimension);
    return ()=> window.removeEventListener("resize",updateDimension);
}, []);


    return (
        <>
        <style jsx>
        {`
          @media (max-width: 768px) {
            .pagination {
              font-size: 12px;
            }
            .next,
            .prev {
              display: none;
            }
          }
          @media (max-width: 768px) {
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
        <ReactPaginate 
        className="pagination justify-content-center mb-0 py-4 gap-4" 
        //style={{margin: "0px"}}
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        previousLabel="Prev" 
        nextLabel="Next" 
        nextClassName="btn btn-primary"
        previousClassName="btn btn-primary"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeClassName="active btn-primary"
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
        onPageChange={(data)=>{
            setPageNumber(data.selected+1);
        }}
        pageCount={info?.pages}/>
        </>
    );
    
    };
export default Pagination;