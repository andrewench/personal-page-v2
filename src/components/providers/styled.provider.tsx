import { FC, PropsWithChildren } from 'react'

import isPropValid from '@emotion/is-prop-valid'
import { StyleSheetManager } from 'styled-components'

export const StyledProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyleSheetManager
      enableVendorPrefixes
      shouldForwardProp={(propName, elementToBeRendered) =>
        typeof elementToBeRendered === 'string' ? isPropValid(propName) : true
      }
    >
      {children}
    </StyleSheetManager>
  )
}
