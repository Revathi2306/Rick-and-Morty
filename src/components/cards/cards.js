import React from "react";
import styles from "./cards.scss";
const cards = ({ page, results }) => {
    let display;
  
    if (results) {
      display = results.map((x) => {
        let { id, image, name, status, location } = x;
  
        return (
          <>
            <div key={id} className="col-lg-4 col-md-6 col-12 mb-4 position-relative">
              <div className={`${styles.card} card mb-2`}>
              <img className={`${styles.img} img img-fluid`} src={image} alt="" />
              <div className={`${styles.content} content`}>
                <div className="fs-5 fw-bold mb-4">{name}</div>
                <div className="">
                  <div className="fs-6 fw-normal">Last Location</div>
                  <div className="fs-5">{location.name}</div>
                </div>
              </div>
              
  
            {(() => {
              if (status === "Dead") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-danger`}
                  >
                    {status}
                  </div>
                );
              } else if (status === "Alive") {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-success`}
                  >
                    {status}
                  </div>
                );
              } else {
                return (
                  <div
                    className={`${styles.badge} position-absolute badge bg-secondary`}
                  >
                    {status}
                  </div>
                );
              }
            })()}
            </div>
            </div>
          </>
        );
      });
      return <>{display}</>;
    } else {
      display = "No Characters Found :/";
      return <><div className="fs-5 fw-bold greentext" style={{color:"#fff"}} >{display}</div></>;
    }
  };
export default cards