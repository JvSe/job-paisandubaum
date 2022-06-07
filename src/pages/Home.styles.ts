import styled, { css } from "styled-components";

export const ContainerHome = styled.div`
    margin: 0 auto;
    padding: 0 6rem 0 12rem;
    height: calc(100vh - 6.25rem);

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({theme}) => theme.colors["ui-colors"]["ui-black"]};
`;

export const ContainerContentHome = styled.section`
    display: flex;
    flex: 1;
    height: 100%;
    flex-direction: column;
    justify-content: center;


    > span {
        color: ${({theme}) => theme.colors["ui-colors"]["ui-white"]};
        font-size: 1.5rem;
        font-weight: ${({theme}) => theme.fontsSize.Semibold};

    }

    h1 {
        /* width: 40%; */
        line-height: 4.0rem;
        color: ${({theme}) => theme.colors["ui-colors"]["ui-white"]};
        font-size: 4.5rem;
        font-weight: ${({theme}) => theme.fontsSize.Black};
        margin-top: 38px;

        span {
            color: ${({theme}) => theme.colors["brand-colors"]["brand-burnt-yellow"]};
        }
    }

    p {
        color: ${({theme}) => theme.colors["ui-colors"]["ui-white"]};
        font-size: 1.5rem;
        /* width: 25%; */
        font-weight: ${({theme}) => theme.fontsSize.Semibold};
        margin: 1.563rem 0;
    }
`;

export const ContainerImgsHome = styled.section`
    display: flex;
    flex: 1;
    height: 100%;

`;

type CircleBlurProps = {
    color: string;
    position: {
        top: string | number;
        right: string | number;
    }
}

export const CircleBlur = styled.div<CircleBlurProps>`
    z-index: 0;
    ${({color, position}) => css`
        width: 500px;
        height: 300px;
        border-radius: 200%;
        position: absolute;
        right: ${position.right};
        top: ${position.top};

        background-color: ${color};

        filter: blur(10.75rem)
    `}
    
`;