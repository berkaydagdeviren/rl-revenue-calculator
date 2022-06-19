import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    background: url('/kapak.jpg');
    height: 350px;
    width: 100%;
    background-size: cover;
    background-position-y: 55%;
    
    `

const Header = () => {
    return (
        <a href='https://rocket-league.com/trades/Jadeite' target='_blank' rel="noreferrer">
        <StyledDiv>
        </StyledDiv>
        </a>
    );
}


export default Header;
