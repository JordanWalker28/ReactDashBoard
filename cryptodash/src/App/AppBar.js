import React from 'react';
import styled, {css} from 'styled-components';

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`

const Logo = styled.div`
    font-size: 1.5em;
`

const ControlButtonElem = styled.div`
    cursor: pointer; 

    ${props => props.active && css`
        color: #03ff03;
    `}
`

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.substr(1);
}

function ControlButton({name, active}){
    return (
        <ControlButtonElem active = {active}>
            {toProperCase(name)}
        </ControlButtonElem>
    )
}

export default function AppBar(){
    return <Bar> 
        <Logo> CryptoDash</Logo>
        <div/>
        <ControlButton active name = {"Dashboard"}/> 
        <ControlButton name = {"Settings"}/> 
     </Bar>
}




