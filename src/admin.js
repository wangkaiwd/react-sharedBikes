import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd';
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavLeft from '@/components/NavLeft'
import Home from '@/pages/home'
class Admin extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return (
      <Wrapper>
        <Row className="admin">
          <Col span="4" className="nav-left">
            <NavLeft></NavLeft>
          </Col>
          <Col span="20" className="main">
            <Header></Header>
            <Row className="content-wrapper">
              <div className="content">
                <Home></Home>
              </div>
            </Row>
            <Footer></Footer>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
export default Admin

const Wrapper = styled.div`
  .admin {
    display: flex;
  }
  .nav-left {
    width: 15%;
    min-width: 180px;
    height: 100vh;
  }
  .content-wrapper {
    padding: ${themeConfig["@space-lg"]};
  }
  .content {
    background-color: ${themeConfig["@white"]};
  }
  .main {
    flex: 1;
    background-color: ${themeConfig["@gray"]};
  }
`
