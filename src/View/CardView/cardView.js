import React, { Component } from 'react';
//    importing components
import {Row,Container,Col} from "react-bootstrap";
import CompanyInfoCard from "../../Components/CompanyInfoCard/companyInfoCard";
import SourcesCard from "../../Components/SourcesCard/sourcesCard";
import WalletCard from "../../Components/WalletCard/walletCard";
class CardView extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <Container  style={{backgroundColor:"#F7F8FA",padding:"30px"}}>
                    <Row>
                        <Col md={4}>
                            <CompanyInfoCard/>
                        </Col>

                        <Col md={4}>
                            <WalletCard/>
                        </Col>

                        <Col md={4}>
                            <SourcesCard/>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
         );
    }
}
 
export default CardView;