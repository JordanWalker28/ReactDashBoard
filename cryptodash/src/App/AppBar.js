import React from 'react';
import styled, {css} from 'styled-components';
import {AppContext} from './AppProvider';

const Bar = styled.div`
    display: grid;
    grid-template-columns: 180px auto 100px 100px;
    margin-bottom: 40px;
`

const Logo = styled.div`
    font-size: 1.5em;
    cursor: pointer; 
    color: #484848;
    font-size: 50px;
    font-weight: bold;
    font-family: monospace;
    letter-spacing: 7px;
    cursor: pointer

    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;  
    }
`

const ControlButtonElem = styled.div`
    cursor: pointer; 

    ${props => props.active && css`
        color: #03ff03;
    `}

    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;
    }
`

function toProperCase(name){
    return name.charAt(0).toUpperCase() + name.substr(1);
}

function ControlButton({name}){
    return (
        <AppContext.Consumer>
            {({page, setPage}) =>  (
                <ControlButtonElem 
                    active = {page === name }
                    onClick ={() => setPage(name)}>
                    {toProperCase(name)}
                </ControlButtonElem>
            )}
        </AppContext.Consumer>
    )
}

export default function AppBar(){
    return <Bar> 
        <Logo>CryptoDash</Logo>
        <div/>
        <ControlButton active name = {"Dashboard"}/> 
        <ControlButton name = {"Settings"}/> 
     </Bar>
}




