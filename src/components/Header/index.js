import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { formateDate } from '@/utils/utils'
class Header extends Component {
  constructor() {
    super()
    this.state = {
      userNmae: 'wangkaiwd',
      sysTime: formateDate(new Date())
    }
  }
  componentDidMount = () => {
    setInterval(() => {
      const sysTime = formateDate(new Date())
      this.setState({ sysTime })
    }, 1000)
  }
  render() {
    const { userNmae, sysTime } = this.state;
    return (
      <Wrapper>
        <Row className="personal-info">
          <Col span="24">
            <span>欢迎，{userNmae}</span>
            <a href="javascript:;">退出</a>
          </Col>
        </Row>
        <Row className="bread-crumb">
          <Col span="4" className="bread-crumb-title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="time">{sysTime}</span>
            <span className="detail">晴转多云</span>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
export default Header

const Wrapper = styled.div`
  .personal-info {
    height: 60px;
    line-height: 60px;
    text-align: right;
    padding: 0 20px;
    a {
      margin-left: 40px;
    }
  }
  .bread-crumb {
    height: 40px;
    line-height: 40px;
    padding: 0 20px;
    border-top: 1px solid ${themeConfig["@primary-color"]};
    .bread-crumb-title {
      text-align: center;
    }
    .weather {
      text-align: right;
    }
    .time {
      margin-right: ${themeConfig["@space-base"]};
    }
  }
`
