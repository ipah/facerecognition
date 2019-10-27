import React from 'react';
import '../main.css'



const ImageLinkForm = ({onInputChange, onButtonSubmit}) =>{

  return(
    <div class= "">
      <p class="f3  ">
        {'This magic brain will detect faces! Give it a try.'}
      </p>
      <div class='flex justify-center'>
        <div class='pa4 br3 shadow-2 flex justify-center form-container'>
          <input type='text' class='f4 w-70  pa2  ' onChange = {onInputChange}/>
          <button class='w-30 link grow pointer ph3 dib pv2 ml2 bg-light-purple' onClick= {onButtonSubmit}>Detect </button>
        </div>
      </div>
    </div>
  );
}

 export default ImageLinkForm;
