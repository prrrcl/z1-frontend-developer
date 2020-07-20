/** @jsx jsx */
import { css, jsx } from '@emotion/core'
import { colors } from 'app/styles'

const headerStyle = css`
padding: 20px;
border-bottom: 1px solid ${colors.transparentizePrimary};
h1 {
  font-style: italic;
  font-weight: bold;
  color: ${colors.primaryUI};
  font-size: 21px;
}
`


const Header = () => {

  return (
    <header css={headerStyle}>
      <h1>
        BankClient
      </h1>
    </header>
  )
}

export default Header
