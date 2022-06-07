import styled, { css } from 'styled-components';

type NavLinkProps = {
    activate?: boolean;
}

export const ContainerHeader = styled.header`
    height: 6.25rem;
    border-bottom: 1px solid ${({theme}) => theme.colors['ui-colors']['ui-white']};   
    background-color: ${({theme}) => theme.colors['ui-colors']['ui-black']};
`;

export const ContainerContent = styled.div`
    height: 6.25rem;
    margin: 0 auto;
    padding: 0 6.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
        font-weight: ${({theme}) => theme.fontsSize.Bold};
        font-size: 2.25rem;
        color: white;
    }

    nav {
        margin-left: 5rem;
        height: 6.25rem;

        padding: 0 0.5rem;
        
        & > a {
            margin-left: 6.25rem;
        }

        a {
            height: 6.25rem;
            line-height: 6.25rem;
            color: ${({theme}) => theme.colors['ui-colors']['ui-white']};

            transition: color 0.2s;
            font-size: 1.25rem; 

            &:hover {
                color: ${({theme}) => theme.colors['brand-colors']['brand-burnt-yellow']};
            }

            &.activate {
                color: ${({theme}) => theme.colors['brand-colors']['brand-burnt-yellow']};
                font-weight: ${({theme}) => theme.fontsSize.Bold};
            }
        }

    }

    div {
        button {
            margin-left: 2.938rem;
        }
    }

/* 
    button {
        margin-left: auto;
    } */
`;