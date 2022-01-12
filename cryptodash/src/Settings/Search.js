import React from 'react';
import styled from 'styled-components';
import {backgroundColor2, fontSize2} from '../Shared/Styles';

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 200px 1fr;
    margin-left: 40%;
`

const SearchInput = styled.input`
    ${backgroundColor2};
    ${fontSize2};
    border: 1px solid;
    height: 25px;
    place-self: center left;
    color: white;
`

export default function(){
    return (
           <SearchGrid> <h2>Search All Coins</h2>
                <SearchInput />
           </SearchGrid> 
    )
}