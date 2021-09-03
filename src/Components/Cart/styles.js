import styled from 'styled-components';

export const Box = styled.div`
  width:480px;
  border: 1px solid #efefef;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 3px 12px 0 #cecece;
  position: absolute;
  right: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  
  border-bottom: 1px solid #cecece;
  font: 600 1.8rem Poppins;
`
export const Body = styled.div`
  min-height: 150px;
  max-height: 550px;
  height: auto;
  overflow-y: auto;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 5px;
  padding-bottom: 5px;
`

export const StyledTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  font: 600 1.8rem Poppins;

  border-top: 1px solid #cecece;
  height: 70px;
`

export const Footer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
  padding-bottom: 20px;

  border-top: 1px solid #cecece;
  height: 80px;
`

export const FreeDelivery = styled.div`
  font: 500 1.5rem Poppins, sans-serif;
  width: 75%;
  border-radius: 25px;
  text-align: center;
  padding: 10px 10px;
  background-color:#c7ffa6;
  color: #4d7d00;
  margin: 0 auto 20px auto;
`