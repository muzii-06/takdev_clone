// import React from 'react'
// import Text from './Text'

// const Solving = () => {
//   return (
//     <>
//     <div className="col-lg-6 col-md-10 mx-auto py-5 mt-5">
//         <Text text_data={"How we do"} />
//         <h4 className="display-5 fw-bold mt-5">Solving IT challenges in every industry, every day.</h4>
//         <div className="row">

//         </div>
//     </div>
//     </>
//   )
// }

// export default Solving
import React from "react";

import "./Solving.css";
import Text from "./Text";
import Line from "./Line";

const Solving = () => {
    const industries = [
        { name: "Industry & Manufacturing", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/photo-1581091878591-4f0714c6f32f-300x300.jpg" },
        { name: "Transportation & Logistics", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/gettyimages-1385683178-612x612-1-300x300.jpg" },
        { name: "Healthcare", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/gettyimages-1156457427-2048x2048-1-300x300.jpg" },
        { name: "Banks & Insurance", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/gettyimages-173289625-2048x2048-1-300x300.jpg" },
        { name: "Consulting Providers", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/gettyimages-1375143131-2048x2048-1-300x300.jpg" },
        { name: "Non-Profit", img: "https://cdn-ilcopaj.nitrocdn.com/SqdrBQtjNUbxctBlqRexKvFrKgjWTcTG/assets/images/optimized/rev-1ceca6e/takdevs.com/wp-content/uploads/2023/03/gettyimages-1429906360-2048x2048-1-300x300.jpg" }
      ];
    
      return (
        <div className="col-lg-7 col-md-11  mx-auto my-5">
          <h1 className="fw-bold text-center">Solving IT challenges in every industry, every day.</h1>
          <div className="d-flex flex-wrap justify-content-start mt-4 ">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card-wrapper  ">
                <div className="industry-card d-flex align-items-center  rounded-pill">
                  <img width={70} src={industry.img} alt={industry.name} className="rounded-circle me-3 card-image" />
                  <span className="fw-bold">{industry.name}</span>
                </div>
              </div>
            ))}
          </div>
          <Line content={"View All industries"} />
        </div>
      );
    };
    

export default Solving;
