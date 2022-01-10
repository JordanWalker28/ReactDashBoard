import styled from 'styled-components';
import {subtleBoxShadow, lightBlueBackground, greenBoxShadow, redBoxShadow} from './Styles'

export const Tile = styled.div`
    ${subtleBoxShadow}
    ${lightBlueBackground}
    padding: 10px;
`

export const SelectableTile = styled(Tile)`
    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;
        ${greenBoxShadow};
    }
`

export const DeletableTile = styled(SelectableTile)`
    &:hover {
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;
        ${redBoxShadow};
    }
`

export const DisabledTile = styled(Tile)`
    &:hover {
        pointer-events: none;
        color: #fff;
        text-shadow: 0 0 10px #fff,
                    0 0 20px #fff, 
                    0 0 40px #fff;
        ${redBoxShadow};
    }
`