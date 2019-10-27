import React from 'react';
import './faceRecog.css';

const FaceRecog = ({imageUrl,box}) =>{

  return(
    <div className= "flex justify-center ma">
      <div className = 'absolute mt2'>
        <img  id='inputimage' width='500px' height='auto' alt='detect' src = {imageUrl}/>
        <div className = 'bounding-box' style={{top:box.top,left:box.left, right:box.right, bottom:box.bottom}}></div>
      </div>

    </div>
  );
}

 export default FaceRecog;
