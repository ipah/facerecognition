import React,{Component} from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import FaceRecog from './components/FaceRecog/FaceRecog';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';


import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';




const app = new Clarifai.App({
 apiKey: '6ba3605892fa4c8196461afcb9f1c08a'
});

const particlesOptions =
{
              particles: {
                number:{
                  value: 100,
                  density:{
                    enable: true,
                    value_area: 400,
                  }
                },

              }
  }

class App extends Component{

  constructor(){
    super();
    this.state = {
      input:'',
      imageUrl:'',
      box: {
        top:'',
        left:'',
        bottom:'',
        right:''
      },
      route: 'signin',
      isSignedIn: false,
    }
  }

  calculateFaceLoc = (data) =>{
    const bounding_box = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);



    console.log(width,height);

      return {
        left:bounding_box.left_col * width,
        right:width - (bounding_box.right_col * width),
        top:bounding_box.top_row * height,
        bottom: height - (bounding_box.bottom_row*height),
      }
  }


  displayFaceBox = (box) =>{
    console.log(box)
    this.setState({box:box})
  }
  onInputChange = (event) =>{
    this.setState({input:event.target.value})
  }

  onButtonSubmit = () =>{
    console.log('click');
    // app.models.initModel({id: Clarifai.COLOR_MODEL, version: "6ba3605892fa4c8196461afcb9f1c08a"})
    //   .then(generalModel => {
    //     return generalModel.predict("https://samples.clarifai.com/face-det.jpg");
    //   })
    //   .then(response => {
    //     console.log(response)
    //     var concepts = response['outputs'][0]['data']['concepts']
    //   })
    this.setState({imageUrl:this.state.input})
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => {
      console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      this.displayFaceBox(this.calculateFaceLoc(response));
    })
    .catch(err => {
      console.log(err);
    });


    // app.models.predict(COLOR_MODEL, "https://samples.clarifai.com/face-det.jpg").then(
    //   function(response) {
    //     // do something with response
    //     console.log(response)
    //   },
    //   function(err) {
    //     // there was an error
    //   }
    // );
  }

  onRouteChange = (route) =>{
    if(route === 'signout'){
      this.setState({isSignedIn:false})
    }
    else if(route === 'home'){
      this.setState({isSignedIn:true})
    }
    this.setState({route:route});
  }


  render(){

    const {isSignedIn ,imageUrl ,route , box} = this.state;

    return(
      <div className="App">
        <Particles className='particles' params={particlesOptions} />
        <Navigation onRouteChange = {this.onRouteChange} isSignedIn={isSignedIn}/>

        { route === 'home'
          ?
          <div>
            <Logo />
            <Rank />
            <ImageLinkForm onInputChange = {this.onInputChange} onButtonSubmit ={this.onButtonSubmit}/>
            <FaceRecog imageUrl = {imageUrl} box={box}/>
          </div>
          :(
            route === 'signin' || route ==='signout'?

          <SignIn onRouteChange = {this.onRouteChange}/>
          :
          <Register onRouteChange = {this.onRouteChange}/>
        )




      }
      </div>
    )
  }

}

export default App;
