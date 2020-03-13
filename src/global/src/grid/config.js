export const size = { 
  mobile: 599,
  tablet: 600, 
  desktop: 1200,
}

export const device = { 
  mobile: `@media screen and (max-width: ${size.mobile}px)`,
  tablet: `@media screen and (min-width: ${size.tablet}px)`,
  desktop: `@media screen and (min-width: ${size.desktop}px)`, 
}
 

export function getPropertyJustifyContent (type) {
  const propertys = { 
      flexStart: 'justify-content: flex-start;',
      flexEnd: 'justify-content: flex-end;',
      center: 'justify-content: center;',
      spaceBetween:'justify-content: space-between',
      spaceAround: 'justify-content: space-around',
      spaceEvenly: 'justify-content: space-evenly',
      default: 'justify-content: flex-start;'
  }
   
  return (propertys[type] || propertys['default'])
}

export const propertyJustifyContent = ['flexStart', 'flexEnd', 'center', 'spaceBetween','spaceAround', 'spaceEvenly']