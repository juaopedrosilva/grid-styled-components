import styled from "styled-components"

import { device, propertyJustifyContent, getPropertyJustifyContent } from "./config"

function getWidthGrid(gridWidth) {
  if (!gridWidth) return;

  let width = (100 / (12 / gridWidth)) * 1

  return `flex-basis: ${width}%;`
}

export const Container = styled.div` 
  margin: ${({ isFluid }) => (isFluid ? 0 : "0 auto")};

  ${device.mobile} {
    width: 100%;
  }

  ${device.tablet} {
    width: 100%;
  }

  ${device.desktop} {
    width: 75%;
  }
`

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  
  ${(props) => {
    const filter = Object.keys(props).map(item => {
      return propertyJustifyContent.find(key => key === item)
    })
    return getPropertyJustifyContent(filter[0])
  }} 
`

export const Col = styled.div` 
  padding-top: .75rem;
  padding-bottom: .75rem;
  background-color: #E5EDF5;
  border: 1px solid #C9C1D5;
  color: #5F5F5F;
  position: relative; 
  padding-right: 15px;
  padding-left: 15px;
 
  ${({ mobile }) => {
    if (mobile) {
      return `${device.mobile} {   
        ${getWidthGrid(mobile)}
      }`
    } else {
      return `${getWidthGrid(3)}`
    }
  }}

  ${({ tablet }) => {
    if (tablet) {
      return `${device.tablet} {   
          ${getWidthGrid(tablet)} 
        }`;
    } else {
      return `${getWidthGrid(3)}`
    }
  }}

  ${({ desktop }) => {
    if (desktop) {
      return `${device.desktop} {   
          ${getWidthGrid(desktop)} 
        }`
    } else {
      return `${getWidthGrid(3)}`
    }
  }}
`
