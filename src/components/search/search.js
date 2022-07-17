import React from 'react';
import styles from './search.scss';

const search = ({setPageNumber, setSearch}) => {
  return (
        <form
        className={`${styles.search} d-flex flex-sm-row justify-content-center gap-4 mb-5`}
        >
        <input
            onChange={(e) => {
            setPageNumber(1);
            setSearch(e.target.value);
            }}
            placeholder="Search for characters"
            className={styles.input}
            type="text"
        />
        <button
            onClick={(e)=>{
                e.preventDefault();
            }}
            className={`${styles.btn} btn btn-primary fs-5`}
        >
            Search
        </button>
        </form>
  )
}

export default search
