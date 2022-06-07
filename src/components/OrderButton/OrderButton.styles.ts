import styled from 'styled-components';

export const ContainerOrderButton = styled.button`
    width: 176px;
    height: 62px;
    border-radius: 15px;
    border: none;
    background-color: ${({theme}) => theme.colors['brand-colors']['brand-burnt-yellow']};
    transition: filter 0.2s;

    color: ${({theme}) => theme.colors['ui-colors']['ui-white']};
    font-size: 1.125rem;
    font-weight: ${({theme}) => theme.fontsSize.Semibold};

    &:hover {
        filter: brightness(0.90)
    }

`;