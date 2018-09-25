import React, { Component } from 'react'
import styled from 'styled-components'
class Footer extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Wrapper>
        我是页面底部
      </Wrapper>
    )
  }
}
export default Footer

const Wrapper = styled.div`
  height: 100px;
  padding: 40px 0;
  text-align: center;
  color: ${themeConfig["@gray-footer"]};
`
