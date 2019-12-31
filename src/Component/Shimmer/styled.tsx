import styled, { keyframes } from 'styled-components';


export const skeleton = keyframes`
  from {
    background-position: -468px 0;
  }

  to {
    background-position: 468px 0;
  }
`;
export const Shimmer: any = styled.div`
    background: #f2f2f2;
    display: inline-block;
    background-image: linear-gradient(to right, #F0F0F0 10%, #E5E5E5 80%, #F0F0F0 80%, #F0F0F0 100%);
    background-size:  100% ;
    background-repeat: no-repeat;
    animation: ${skeleton} 2s infinite linear;
    width: ${(props: any) => props.width || '200px'} ;
    height: ${(props: any) => props.height || '15px'};
    border-radius: ${(props: any) => props.radius || '3px'};
`;