import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-content: center;
  height: 120px;
  gap: 1rem;

  &:hover {
    box-shadow: 0 5px 10px -10px #ccc;
  }
`;

export const ImageItem = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-top: 10px;
  border: 2px solid #cdcdcd;
`

export const TitleItem = styled.h3`
  margin-top: 20px;
  font: 600 1.6em 'Poppins', sans-serif;
`

export const OldPriceItem = styled.p`
  font: 400 1.2em 'Poppins', sans-serif;
  color: #aaa;
  /* line-height: 0.5; */
`

export const NewPriceItem = styled.p`
  font: 600 1.4em 'Poppins', sans-serif;
  /* line-height: 0.5; */
`
