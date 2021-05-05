import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry";
//      importing Images
import Image1 from "../../Assests/Images/1.jpg";
import Image2 from "../../Assests/Images/2.jpg";
import Image3 from "../../Assests/Images/3.jpg";
import Image4 from "../../Assests/Images/4.jpg";
//      importing css files
import "./responsiveMasonry.css";
const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
    Image1,
    Image2,
    Image3,
    Image4,
]
class ResponsiveManosry extends Component {
    state = { 
        oddNumber:false,
        evenNumber:false
     }
    handleProvideStyle=(index)=>{
        let toggle = false;
        if(index%2===0)
        {
            if(this.state.oddNumber===false){
                this.state.oddNumber=true;
                return {width: "100%",height:"150px", display: "block",borderRadius:"10px"};
            }
            else{
                this.state.oddNumber=false;
                return {width: "100%",height:"120px", display: "block",borderRadius:"10px"};
            }
        }
        else{
            if(this.state.evenNumber===false){
                this.state.evenNumber=true;
                return {width: "100%",height:"120px", display: "block",borderRadius:"10px"};
            }
            else{
                this.state.evenNumber=false;
                return {width: "100%",height:"150px", display: "block",borderRadius:"10px"};
            }
        }
    }
    render() { 
        return ( 
            <React.Fragment>
            <div className="masonry-container">
                <p style={{textAlign:"left",fontWeight:"600",color:"#404043",marginTop:"10px"}}>Main Public album</p>
                <Masonry gutter="8px" columnsCount={2}>
                    {images.map((image, i) => (
                        <div>
                        <img
                            id="imageid"
                            key={i}
                            src={image}
                            style={this.handleProvideStyle(i)}
                            alt=""
                        />
                        </div>
                     ))} 
                </Masonry>
            </div>
            </React.Fragment>
         );
    }
}
 
export default ResponsiveManosry;