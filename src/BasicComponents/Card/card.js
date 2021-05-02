import React from 'react';
//    importing css file
import "./card.css";
export const Card = (props) =>{
    return(
        <div className="cards">
            {props.children}
        </div>
    )
}
export const CardHeader = (props) =>{
    return(
        <div className="cards-headers">
            {props.children}
        </div>
    )
}
export const CardTitle = (props) =>{
    return(
        <div className="cards-title">
            {props.children}
        </div>
    )
}
export const CardContent = (props) =>{
    return(
        <div className="cards-content">
            {props.children}
        </div>
    )
}
export const CardBody = (props) =>{
    return(
        <div className="cards-body">
            {props.children}
        </div>
    )
}

export const CardBodyContent = (props) =>{
    if(props.editing===true && props.radio==="radio"){
        return(
            <div className="body-content-container">
                <div className="body-icon">
                    {props.children}
                </div>
                <div className="body-content">
                    <div className="body-lebel">
                        {props.bodyLabel}
                    </div>
                    <div className="body-sub-label">
                        {props.SubLabel}
                    </div>
                </div>
                {props.check?<div style={{textAlign:"right",position:"absolute",width:"100%"}}>
                <label className="containers">
                <input type="radio" name="radio"/>
                <span className={props.editing===false?"checkmark":"checkmarks"}></span>
                </label>
                </div>:""}
    
            </div>
        )}
    if(props.editing===true){
        return(
        <div className="body-content-container" style={props.style}>
            {props.check?<div style={{textAlign:"right",position:"absolute",width:"100%"}}>
            </div>:""}
            <div className="body-icon">
                {props.children}
            </div>

        </div>
        )
    }
    
    else{
    return(
        <div className="body-content-container">
            <div className="body-icon">
                {props.children}
            </div>
            <div className="body-content">
                <div className="body-lebel">
                    {props.bodyLabel}
                </div>
                <div className="body-sub-label">
                    {props.SubLabel}
                </div>
            </div>
            {props.check?<div style={{textAlign:"right",position:"absolute",width:"100%"}}>
            <label className="containers">
            <input type="radio" name="radio"/>
            <span className="checkmark"></span>
            </label>
            </div>:""}

        </div>
    )}
}