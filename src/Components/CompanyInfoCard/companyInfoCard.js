import React, { Component } from 'react';
//    importing Components
import {Card,CardBody,CardHeader,CardContent,CardTitle,CardBodyContent} from "../../BasicComponents/Card/card";
//    importing Icons
import {BiBuildings} from "react-icons/bi";
import {GoLocation} from "react-icons/go";
import {FaNewspaper, FaRegNewspaper} from "react-icons/fa";
//    importing css files
import "./companyInfo.css";
class CompanyInfoCard extends Component {
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
                        <p>Company info</p>
                    </CardTitle>
                    <CardContent>
                            {this.state.editing===false?<p onClick={()=>this.EditingTrue()}>Edit</p>:<p className="save-button" onClick={()=>this.Savedata()}>Save</p>}
                    </CardContent>
                </CardHeader>
                <CardBody>
                    {this.state.editing===false?
                    <div>
                    <CardBodyContent editing={this.state.editing}  bodyLabel="Beer pub" SubLabel="Buisness name">
                        <BiBuildings/>
                    </CardBodyContent>

                    <CardBodyContent editing={this.state.editing} bodyLabel="United States,Pasadena 2235 Avondale Ave undefined" SubLabel="Full address">
                        <GoLocation/>
                    </CardBodyContent>

                    <CardBodyContent editing={this.state.editing} bodyLabel="382340092" SubLabel="VAT number">
                        <FaRegNewspaper/>
                    </CardBodyContent>
                    </div>
                    :
                    <div>
                    <CardBodyContent editing={this.state.editing} style={{display:"block"}}>
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto 10px auto 0px"}}>
                            <BiBuildings/>
                            </div>
                            <input type="text" placeholder="Beer pub srl" className="edit-input"/>
                        </div>
                    </CardBodyContent>

                    <CardBodyContent editing={this.state.editing}>
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto 10px auto 0px"}}>
                            <GoLocation/>
                            </div>
                            <div>
                                <input type="text" placeholder="via Americo, 14" className="edit-input"/>
                                <div style={{display:"flex"}}>
                                <input type="text" placeholder="20124" className="edit-input-date"/>
                                <input type="text" placeholder="Milano" className="edit-input-date edit-input-city" style={{margin:"10px"}}/>
                                <select type="date"  className="edit-input-date">
                                    <option>ITA</option>
                                </select>
                                </div>
                            </div>
                        </div>
                    </CardBodyContent>

                    <CardBodyContent editing={this.state.editing} style={{display:"block"}}>
                        <div style={{display:"flex"}}>
                            <div style={{margin:"auto 10px auto 0px"}}>
                            <FaNewspaper/>
                            </div>
                            <input placeholder="38346582934" type="text" className="edit-input"/>
                        </div>
                    </CardBodyContent>
                    </div>
                    }
                </CardBody>
            </Card>
        </React.Fragment>
        );
}
}

export default CompanyInfoCard;