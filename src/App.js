import React from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Clarifai from 'clarifai';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';


const app = new Clarifai.App({
 apiKey: '825aa54c2d8047baa2792408e047b7dd'
});

const ParticlesOptions = {
                particles: {
                  line_linked: {
                    shadow: {
                      enable: true,
                      color: "#3CA9D1",
                      blur: 5
                    }
                  }
                }
              } 

class App extends React.Component {
  state = {
      input:'',
      imageUrl:'',
      box:{},
      route:'signin'
    }
  
calculateFaceLocation = (data)=>{
const clarifaiFace =data.outputs[0].data.regions[0].region_info.bounding_box;
const image = document.getElementById('inputimage');
const width = Number(image.width);
const height = Number(image.height);
//console.log(image.width);
return{
  leftCol: clarifaiFace.left_col*width,
  topRow: clarifaiFace.top_row*height,
  rightCol: width-(clarifaiFace.right_col*width),
  bottomRow: height-(clarifaiFace.bottom_row*height)
  }

}
displayFaceBox = (box) => {
  console.log(box);
  this.setState({box:box});
}
onInputChange = (event) => {
  this.setState({input:event.target.value});
 }

 onButtonSubmit = () => {
  this.setState({imageUrl:this.state.input});
  app.models.predict(
    Clarifai.FACE_DETECT_MODEL,
    this.state.input)
  .then(response=> this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch((err)=>console.log(err));
 }

 onRouteChange = (route)=>{
  this.setState({route:route})
 }
  render() {
    return(
    <div className="App">
     <Particles className='particles'
                params={ParticlesOptions}
               
              />
        <Navigation onRouteChange={this.onRouteChange}/>
        <Logo />
        {this.state.route === 'home' 
        ? <div>
          <Rank />
          <ImageLinkForm 
            onInputChange={this.onInputChange}
            onButtonSubmit={this.onButtonSubmit} /> 
          <FaceRecognition 
            box={this.state.box}
            imageUrl={this.state.imageUrl}/>
        </div> 
      :(this.state.route ==='signin' 
        ? <Signin onRouteChange={this.onRouteChange}/>
        : <Register onRouteChange={this.onRouteChange}/>)}
    </div>);
  }
}
 
export default App;
