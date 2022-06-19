import styled from "styled-components";
import { CreditLogContext } from "../pages";
import React from "react";
import moment from "moment";
const StyledCreditLog = styled.div`
    //flex: 0 0 25%;
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-weight: 600;
    font-size: medium;
    overflow-y: scroll !important;
    height: 250px;
    
    
`

const StyledSection = styled.section`
    display: grid;
    ;
    `

const StyledBuy = styled.div`
    grid-column: 1;
    `
const StyledSell = styled.div`
grid-column: 2;
`

const CreditLog = ({ credit }) => {
    
    return (
       
        <StyledCreditLog>
        <h2 style={{marginRight: 10}}> Credit History </h2>
            <StyledSection key={1}>    
            {
                console.log(credit, 'credit')
            }

            <StyledBuy key={2}>
                    <h4>Sell</h4>
                {
                     
                    credit.map((item, index) => {
                        return (
                            item > 0 ? 
                            React.Children.toArray(

                                <div>
                                
                                <span style={{ color: 'green' }}> +{item}C </span> 
                                
                            </div>
                                )
                            : 
                            null
                            
                            )
                        })
                    }
                </StyledBuy>
                <StyledSell key={3}>
                    <h4>Buy</h4>
                {
                    credit.map((item, index) => {
                        return (
                            item < 0 ? 
                            React.Children.toArray(
                            <div>
                                
                                <span  style={{ color: 'red' }}> {item}C </span> 
                            </div>)
                            : 
                            null
                            
                            )
                        })
                    }
                </StyledSell>
              
                    </StyledSection>
            
        </StyledCreditLog>
        
    
    )
}


export default CreditLog;