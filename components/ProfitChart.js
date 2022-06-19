import styled from "styled-components";
import moment from "moment";

const StyledProfitChart = styled.div`
    
    flex: 0 0 25%;
    `

const ProfitChart = ({credit, date}) => {
    return (
        <StyledProfitChart>
            <h2>
                {date == moment().format('YYYY-MM-DD') ? "Today's Profit" : `${date}'s Profit`}
                
            </h2>
            <h3>
                {credit}C
            </h3>
        </StyledProfitChart>
    )
}


export default ProfitChart;