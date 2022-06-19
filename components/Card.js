import styled from "styled-components";
import {Button} from 'antd'


const StyledCard = styled.div`
    display: flex;
    justify-content: left;
    
    flex: 0 0 25%;
     
    `


const Card = ({ operation, handleClick, handleChange, credit }) => {

    return (
        <StyledCard>

            {operation === 'Buy' ?
                <div>
                    <label style={{ paddingInlineStart: 20, fontSize: 18, marginRight: 20, letterSpacing: 2 }} > {operation} </label>
                    <input onChange={handleChange} value={-Math.abs(credit)} />
                    </div>
                    
                 :

                <div>
                    <label style={{ paddingInlineStart: 20, fontSize: 18, marginRight: 20, letterSpacing: 2 }} > {operation} </label>
                    <input onChange={handleChange} value={credit} />
                
                
                <button className="button-6" onClick={handleClick}>Add</button>
                </div>
            }

        </StyledCard>
    )
}

export default Card;