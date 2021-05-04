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
    //...
    Image3,
    Image4,
    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,    Image1,
    Image2,
    //...
    Image3,
    Image4,

    
]
class ResponsiveManosry extends Component {
    state = {  }
    componentDidMount(){
        if(images%2==0){
            document.getElementsByTagName("img").className="masonry-containerss"
        }
        else{
            
        }
    }
    render() { 
        return ( 
            <React.Fragment>
            <div className="masonry-container">
                <p style={{textAlign:"left",fontWeight:"600",color:"#404043",marginTop:"10px"}}>Main Public album</p>
            {/* <ResponsiveMasonry
                columnsCountBreakPoints={{0: 1, 10: 2}}
                columnsCount={2}
            > */}
                <Masonry gutter="8px" columnsCount={2}>
                    {images.map((image, i) => (
                        <div>
                            {i}
                        <img
                            id="image"
                            key={i}
                            src={image}
                            style={i%2?
                                {width:"100%",height:"150px", display: "block",borderRadius:"10px"}
                                :
                                i%3?
                                {width:"100%",height:"120px", display: "block",borderRadius:"10px"}
                                :
                                i%4?
                                {width:"100%",height:"150px", display: "block",borderRadius:"10px"}
                                :
                                i==0?
                                {width:"100%",height:"120px", display: "block",borderRadius:"10px"}
                                :
                                {}
                                }
                            alt=""
                        />
                        </div>
                     ))} 
                </Masonry>
                {/* <Masonry gutter="auto" columnsCount={2}>
                    {images.map((image, i) => (
                        <div>
                            <div >
                            {
                            i%2===0?
                            <div >
                            <img
                            id="image"
                            key={i}
                            src={image}
                            style={{width: "100%",margin:"10px 2px 0px -10px",height:"120px", display: "block",borderRadius:"10px"}}
                            alt=""
                            />
                            </div>
                            :
                            <img
                            id="image"
                            key={i}
                            src={image}
                            style={i%2?{width: "100%",height:"149px",margin:"10px 2px 0px 0px", display: "block",borderRadius:"10px"}:{width: "100%",height:"120px",marginTop:"auto", display: "block",borderRadius:"10px"}}
                            alt=""
                            />
                        }
                            </div>
                        </div>

                     ))}
                      
                </Masonry> */}
            {/* </ResponsiveMasonry> */}
            </div>
            </React.Fragment>
         );
    }
}
 
export default ResponsiveManosry;