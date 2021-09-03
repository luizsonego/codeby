import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  height: 60px;
  width: ${props => props.width ? props.width : '100%;'};
  background-color: #3b74f2;
  border: none;
  border-radius: 8px;
  color: #f8f9fb;

  font: 700 1.8em Poppins;
  cursor: pointer;
  transition: all 0.35s ease;

  &:hover {
    background-color: #2457ca;
    box-shadow: 0 0 1px 0 #3b74f2;
  }
`;
