/** @jsx jsx */
import { PropsWithChildren, Fragment } from 'react'
import styled from '@emotion/styled'
import { css, jsx } from '@emotion/core'
import { ReactComponent as OkIcon } from 'assets/okIcon.svg'
import { ReactComponent as CloseIcon } from 'assets/closeIcon.svg'

interface IStatus {
  isValid: boolean | null | undefined
}
const StatusWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 5%;
  border-radius: 4px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  transform: translateY(50%);
  span {
    color: white;
    margin-right:7px;
  }
`
const okStyle = css`
  background: #69CC8B;
`
const wrongStyle = css`
  background: #C00000;
`


const Status = (props: PropsWithChildren<IStatus>) => {
  return (
    <StatusWrapper css={props.isValid ? okStyle : wrongStyle}>
      {props.isValid 
      ? <Fragment>
        <OkIcon />
        <span>Accepted</span>
      </Fragment>
      : <Fragment>
        <CloseIcon />
        <span>Rejected</span>
      </Fragment>
      }
    </StatusWrapper>
  )
}

export default Status
