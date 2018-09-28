import React, { Component } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import NavLeft from '@/components/NavLeft'

class Admin extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Wrapper primary>
        <Row className="admin">
          <Col span="4" className="nav-left">
            <NavLeft />
          </Col>
          <Col span="20" className="main">
            <Header />
            <Row className="content-wrapper">
              {this.props.children}
            </Row>
            <Footer />
          </Col>
        </Row>
      </Wrapper>
    )
  }
}

export default Admin

const Wrapper = styled.div`
  .admin { display: flex; }
  .nav-left {
    width: 15%;
    min-width: 180px;
    height: 100vh;
  }
  .content-wrapper { padding: ${themeConfig['@space-lg']}; }
  .main { flex: 1; background-color: ${themeConfig['@gray']}; }
`
