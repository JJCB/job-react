import styled from 'styled-components';

export const Wrapper = styled.div`
    padding: 10px;
    font-family: sans-serif;
    border-bottom: 1px solid #ccc;
    padding: 30px 10px 15px;
    background: linear-gradient(to right, rgb(231, 142, 243), rgb(237, 217, 94));
`;
export const Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-width: 500px;
    margin: 0 auto;
`;
export const Title = styled.div`
    font-family: sans-serif;
    font-weight: bold;
    font-size: 24px;
    margin-bottom: 10px;
    @media (min-width: 640px) {
        font-size: 37px;
     }
`;
export const Span = styled.span`
    font-size: 24px;
    color: white;
    @media (min-width: 640px) {
        font-size: 37px;
    }
`;
export const Label = styled.div`
    display: flex;
    position: relative;
    width: 100%;
`;
export const Input = styled.input`
    border-radius:  8px;
    font-family: sans-serif;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;
    padding: 7px;
    border: none;
    width: 100%;
    height: 29px;
`;
export const WrapperInput = styled.div`
    width: 100%;
    position: relative;
`;

export const List = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 50px;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px;
    border-radius: 5px;
`;

export const Item = styled.div`
    padding: 10px;
    cursor: pointer;
    &:hover{
        background: #f3f3f3;
        border-radius: 5px;
    }
`;