import styled from 'styled-components';

export const Wrapper = styled.div`
    background: linear-gradient(to right, rgb(241, 188, 248), rgb(242, 228, 140));
    padding-top: 60px;
    text-align: left;
    padding-left: 20px;
`;
export const Span = styled.span`
`;
export const Company = styled.span`
    font-weight: bold;
`;
export const Title = styled.h1`
    font-size: 28px;
    margin: 5px 0;
    @media (min-width: 640px) {
        font-size: 64px;
     }
`;
export const Location = styled.div`
    @media (min-width: 640px) {
        display: none;
     }
`;
export const City = styled.div`
`;
