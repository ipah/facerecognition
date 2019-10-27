import React from 'react';



const Navigation = ({onRouteChange, isSignedIn}) =>{

  return(
  <div>
  {isSignedIn ?
    <nav>
      <p onClick = {() => onRouteChange('signout')} className= 'pr3 flex justify-end f3 link dim pointer'>Sign Out </p>
    </nav>
    :
    <nav className='flex justify-end '>
      <p onClick = {() => onRouteChange('signin')} className= 'pr3 flex justify-end f3 link dim pointer'>Sign In </p>
      <p onClick = {() => onRouteChange('register')} className= 'pr3 flex justify-end f3 link dim pointer'>Register </p>
    </nav>
  }
  </div>
);


}

 export default Navigation;
