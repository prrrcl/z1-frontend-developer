import React from 'react'
import renderer from 'react-test-renderer'
import Button from './button'

describe('Button', () => {
  const children = 'Button'
  const onClick = () => console.log('Button')

  it('[Props] Check props', () => {
    expect(children).toMatchSnapshot(expect.any(String))
  })

  it('[Render] Button without props', () => {
    const tree = renderer.create(<Button />).toJSON();
    expect(tree).toMatchSnapshot()
  })

  it("[Render] Button with Props", () => {
    const tree = renderer.create(
      <Button onClick={onClick}>
        {children}
      </Button>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})