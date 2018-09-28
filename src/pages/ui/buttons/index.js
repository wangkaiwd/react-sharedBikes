import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button } from 'antd'
class IButton extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Wrapper>
        <Card className="button-item" title="基础按钮">
          <Button type="primary">button</Button>
          <Button type="default">button</Button>
          <Button type="dashed">button</Button>
          <Button type="danger">iadmin</Button>
          <Button disabled>button</Button>
        </Card>
        <Card className="button-item" title="图形按钮">
          <Button icon="plus">button</Button>
          <Button icon="edit">button</Button>
          <Button icon="delete">button</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            button
          </Button>
          <Button type="primary" icon="download">
            button
          </Button>
        </Card>
        <Card className="button-item" title="Loading按钮">
          <Button icon="plus">button</Button>
          <Button icon="edit">button</Button>
          <Button icon="delete">button</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            button
          </Button>
          <Button type="primary" icon="download">
            button
          </Button>
        </Card>
        <Card className="button-item" title="按钮组">
          <Button icon="plus">button</Button>
          <Button icon="edit">button</Button>
          <Button icon="delete">button</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            button
          </Button>
          <Button type="primary" icon="download">
            button
          </Button>
        </Card>
        <Card className="button-item" title="按钮尺寸">
          <Button icon="plus">button</Button>
          <Button icon="edit">button</Button>
          <Button icon="delete">button</Button>
          <Button shape="circle" icon="search" />
          <Button type="primary" icon="search">
            button
          </Button>
          <Button type="primary" icon="download">
            button
          </Button>
        </Card>
      </Wrapper>
    )
  }
}
export default IButton

const Wrapper = styled.div`
  .button-item:not(:first-child) {margin-top:${themeConfig['@space-base']};}
  button {
    margin-right: ${themeConfig['@space-lg']};
  }
`
