import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    font-family: sans-serif;
    border-bottom: 1px solid #ccc;
    padding: 30px 10px 15px;
    cursor: pointer;
    &:hover{
        background: #f3f3f3;
    }
`;
export const Img = styled.img`
    border-radius: 4px;
`;
export const Info = styled.div`
    flex:1;
    text-align: left;
    margin-left: 10px;
`;

export const SubTitle = styled.div`
    font-size: 14px;
`;
export const Title = styled.div`
    font-size: 20px;
    color: #045584;
`;
export const Tags = styled.div`
    display: none;
     @media (min-width: 768px) {
       display: flex;
        margin: 0 15px;
     }
`;
export const Tag = styled.div`
    border: 2px solid rgb(0, 85, 255);
    color: rgb(0, 85, 255);
    padding: 2px;
    margin: 0 5px;
    border-radius: 4px;
`;
export const Location = styled.div`
    display: none;
    @media (min-width: 640px) {
        display: flex;
     }
`;

export const Flag = styled.img`
    width: 20px;
    margin-right: 5px;
`;
export const Country = styled.div`
`;


