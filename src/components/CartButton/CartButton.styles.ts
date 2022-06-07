import styled from 'styled-components';

export const ContainerCartButton = styled.button`
    width: 58px;
    height: 62px;
    border-radius: 15px;
    border: none;
    background-color: ${({theme}) => theme.colors['brand-colors']['brand-burnt-yellow']};
    transition: filter 0.2s;

    svg {
        path {
            fill: ${({theme}) => theme.colors['ui-colors']['ui-white']};
        }
    }

    &:hover {
        filter: brightness(0.90)
    }
`;