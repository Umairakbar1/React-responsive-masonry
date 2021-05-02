import React, { Component } from 'react';
//    importing Components
import {Card,CardBody,CardHeader,CardTitle,CardContent} from "../../BasicComponents/Card/card";
//     importing icons
import {CgBox} from "react-icons/cg";
import {RiSettings3Fill} from "react-icons/ri";
import {IoMdArrowDropdown} from "react-icons/io";
//     importing css files
import "./walletCard.css";
class WalletCard extends Component {
    state = { 
        createAccount:false
     }
     EditingTrue=()=>{
        this.setState({createAccount:true})
    }
    Savedata=()=>{
        this.setState({createAccount:false})
    }
    render() { 
        return ( 
            <React.Fragment>
                <Card>
                    <CardHeader>
                                <CardTitle>
                                    <p>Wallet</p>
                                </CardTitle>
                                {this.state.createAccount===true?
                                <CardContent>
                                    <RiSettings3Fill className="setting-icon"/><IoMdArrowDropdown className="setting-icon"/>
                                </CardContent>:""}
                    </CardHeader>
                    <CardBody>
                        {this.state.createAccount===false?<div>
                        <div>
                            <CgBox class="wallet-icon-container"/>
                            </div>
                            <p class="wallet-paragraph">Its madatory for a buisness to open a wallet here in the SQUARE ecosystem to start</p>
                            <button class="create-button" onClick={()=>this.EditingTrue()}>Create new account</button>
                        </div>
                        :
                        <div style={{textAlign:"center"}}>
                            <p className="balance-ammount"><span className="dollar-sign">$</span>450.00</p>
                            <p className="actual-balance">Actual balance</p>
                            <hr/>
                            <p className="charge-date"><span className="charge-ammount">$500.00 </span>will be charged in 24.06.2020.</p>
                            <p className="take-action">Please,take  action now</p>
                            <div>
                                <button className="withdraw-button">Withdraw funds</button>
                                <button className="topup-button" onClick={()=>this.Savedata()}>Top up</button>
                            </div>
                        </div>
                        }

                    </CardBody>
                </Card>
            </React.Fragment>
         );
    }
}
 
export default WalletCard;