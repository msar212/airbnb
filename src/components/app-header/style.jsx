import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 80px;
  padding: 0 80px;
  
  &.fixed {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 100;
  }
`
