import React, { Component } from 'react'
import styled from 'styled-components'
class Home extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Wrapper>
        页面首页，可能要展示一些比较好看的东西
     </Wrapper>
    )
  }
}
export default Home

const Wrapper = styled.div`
  height: 64vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${themeConfig["@font-size-lg"]};
` 
