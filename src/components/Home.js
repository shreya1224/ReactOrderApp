import React from "react";
import ImageHolder from "./ImageHolder";
import ImageSlider from "./imageSlider";
import { SliderData } from "./SliderData";
import "./style.css";
function Home() {
  return (
    <div>
     <ImageSlider slides={SliderData} />
      <ImageHolder/>
    </div>
        
       
        );
}

export default Home;