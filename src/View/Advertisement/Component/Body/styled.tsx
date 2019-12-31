import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    max-width: 1024px;
    margin: 0 auto;
`;
export const Info = styled.div`
    text-align: left;
    p {
        text-align: left;
        line-height: 25px
    }
    a {
        color: black;
        text-decoration: none;
    }
    li {
        line-height: 25px;
    }
    @media (min-width: 640px) {
        width: 80%;
        margin-right: 80px;
     }
`;
export const Aside = styled.aside`
    display: none;
    @media (min-width: 640px) {
        display: block;
        width: 20%;
        margin-top: 20px;
     }
`;
export const Item = styled.aside`
    text-align:left;
    margin-bottom: 10px;
`;
export const Title = styled.aside`
    font-weight: bold;
    margin-bottom: 5px;
`;
export const Span = styled.aside`
`;
