import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Work Sans', sans-serif;
    padding:0;
    margin:0;
    -webkit-font-smoothing:antialiased;
    text-rendering: optimizeLegibility;
    background-color: #a7e1f8;
  }
`
export const Pill = styled.div`
  background: #a7e158;
  border: 2px solid #000;
  border-radius: 30px;
  height: 20px;
  width: 20px;
  padding: 8px;
  overflow: hidden;

  align-items: center;
  justify-content: center;
  overflow: hidden;
  display: flex;
`

export const Close = styled.button`
  background: none;
  border: 0;
  cursor: pointer;
  width: 24px;
  height: 24px;
  padding: 0;
  position: relative;

  &:before,
  &:after {
    background-color: #000;
    content: ' ';
    width: 2px;
    height: 24px;
    position: absolute;
    top: 0;
    left: 9px;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`
