import React from 'react';
import Tilt from 'react-tilt';




const Logo = () =>{

  return(
    <div class="ma4 mt0  ">
      <Tilt className="Tilt br2 shadow-1 bg-silver flex items-center justify-center" options={{ max : 25 }} style={{ height: 250, width: 250 }} >
        <div className="Tilt-inner ">
          <img src='./img/brain.png'/>
        </div>
      </Tilt>
    </div>
  );
}

 export default Logo;
