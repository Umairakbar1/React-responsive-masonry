import React, { Component } from 'react';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image1 from "../../Assests/Images/1.jpg";
import Image2 from "../../Assests/Images/2.jpg";
import Image3 from "../../Assests/Images/3.jpg";
import Image4 from "../../Assests/Images/4.jpg";

const images = [
    Image1,
    Image2,
    //...
    Image3,
    Image4,
    //...
    
]
class ResponsiveManosry extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
            <div  style={{width:"50%",margin:"auto"}}>
                <p style={{textAlign:"left",fontWeight:"600",color:"#404043",marginTop:"10px"}}>Main Public album</p>
            <ResponsiveMasonry
                columnsCountBreakPoints={{10: 1, 400: 2}}

                columnsCount={2}
            >
                <Masonry gutter="10px">
                    {/* {images.map((image, i) => ( */}
                        <img
                            
                            src={Image1}
                            style={{width: "100%",height:"300px", display: "block",borderRadius:"10px"}}
                            alt=""
                        />
                        <img
                            src={Image2}
                            style={{width: "100%", height:"400px",display: "block",borderRadius:"10px"}}
                            alt=""
                        />
                        <img
                            src={Image3}
                            style={{width: "100%",height:"300px", display: "block",borderRadius:"10px"}}
                            alt=""
                        />
                            <img
                            src={Image4}
                            style={{width: "100%",height:"300px", display: "block",borderRadius:"10px"}}
                            alt=""
                        />
                    {/* ))} */}
                </Masonry>
            </ResponsiveMasonry>
            </div>
            </React.Fragment>
         );
    }
}
 
export default ResponsiveManosry;