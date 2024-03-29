import React from 'react';
import styled from 'styled-components';
import { AppContext } from '../App/AppProvider';
import {fontSize1, greenBoxShadow, color3} from '../Shared/Styles';

const ConfirmButtonStyled = styled.div`
    margin: 20px;
    color: ${color3};
    ${fontSize1};
    -webkit-text-stroke-width: thick;
    cursor: pointer;
    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;
        ${greenBoxShadow};
    }
`

export const CenterDiv = styled.div`
    display: grid;
    justify-content: center;
`

export default function ConfirmButton(){
    return <AppContext.Consumer>
        {({confirmFavourites}) => 
            <CenterDiv>
                <ConfirmButtonStyled onClick ={confirmFavourites}>
                    Confirm Favourites
                </ConfirmButtonStyled>
            </CenterDiv>
        }
    </AppContext.Consumer>
}