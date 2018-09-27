import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button } from 'antd'
class IButton extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Wrapper>
        <Card title="基础按钮">
          <Button type="primary">iadmin</Button>
          <Button type="default">iadmin</Button>
          <Button type="dashed">iadmin</Button>
          <Button type="danger">iadmin</Button>
          <Button disabled>iadmin</Button>
        </Card>
        <Card title="图形按钮">
          <Button icon="plus">iadmin</Button>
          <Button icon="edit">iadmin</Button>
          <Button icon="delete">iadmin</Button>
          <Button shape="circle" icon="search"></Button>
          <Button type="primary" icon="search">iadmin</Button>
          <Button type="primary" icon="download">iadmin</Button>
        </Card>
      </Wrapper>
    )
  }
}
export default IButton

const Wrapper = styled.div`
  button {margin-right: ${themeConfig["@space-lg"]};}
`
