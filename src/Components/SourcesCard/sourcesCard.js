import React, { Component } from 'react';
//    importing Components
import {Card,CardBody,CardHeader,CardContent,CardTitle,CardBodyContent} from "../../BasicComponents/Card/card";
//    importing Icons
import {RiVisaLine} from "react-icons/ri";
import {GoLocation} from "react-icons/go";
import {ImPaypal} from "react-icons/im";
import MasterCardImage from "../../Assests/Images/masterCard.png";
import VisaImage from "../../Assests/Images/visa.png";
import PayPalImage from "../../Assests/Images/payPal.png";
//     importing css files
import "./sourcesCard.css";
class SourcesCard extends Component {
    state = { 
        editing:false
     }
    
EditingTrue=()=>{
    this.setState({editing:true})
}
Savedata=()=>{
    this.setState({editing:false})
}
    render() { 
        return ( 
            <React.Fragment>
                    <Card>
                    <CardHeader>
                        <CardTitle>
                            <p>Sources</p>
                        </CardTitle>
                        <CardContent>
                        {this.state.editing===false?<p onClick={()=>this.EditingTrue()}>Edit</p>:<div><button className="add-new-button">Add new</button><button className="source-save-button" onClick={()=>this.Savedata()}>Save</button></div>}
                        </CardContent>
                    </CardHeader>
                    <CardBody>
                        <CardBodyContent radio="radio" editing={this.state.editing} check="check" bodyLabel="****3253" SubLabel="Name Surname">
                            <img src={MasterCardImage} width="20px"/>
                        </CardBodyContent>
                        <hr style={{marginTop:"12px",marginBottom:"5px"}}/>
                        <CardBodyContent radio="radio" editing={this.state.editing} check="check" bodyLabel="****1240" SubLabel="Name Surname">
                            <img src={VisaImage} width="25px"/>
                        </CardBodyContent>
                        <hr style={{marginTop:"12px",marginBottom:"5px"}}/>
                        <CardBodyContent radio="radio" editing={this.state.editing} check="check" bodyLabel="Add paypal account" >
                            <img src={PayPalImage} width="22px"/>
                        </CardBodyContent>

                    </CardBody>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default SourcesCard;