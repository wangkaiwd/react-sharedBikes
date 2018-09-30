import React, { Component } from 'react'
import { Row, Col } from 'antd'
import styled from 'styled-components'
import { formatDate } from '@/utils/utils'
import Axios from '@/http/axios'
class Header extends Component {
  constructor() {
    super()
    this.state = {
      userNmae: 'wangkaiwd',
      sysTime: formatDate(new Date()),
      weatherData: {}
    }
  }
  componentDidMount = () => {
    this.getSystemTime();
    this.weatherApiData();
  }
  getSystemTime = () => {
    setInterval(() => {
      const sysTime = formatDate(new Date())
      this.setState({ sysTime })
    }, 1000)
  }
  weatherApiData = () => {
    const { weatherData } = this.state
    let city = '杭州' // 地址中出现中文要进行一个编码
    Axios.jsonp(`http://api.map.baidu.com/telematics/v3/weather?location=${encodeURI(city)}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`, {})
      .then(({ results }) => {
        weatherData.dayPicture = results[0].weather_data[0].dayPictureUrl
        weatherData.weather = results[0].weather_data[0].weather
        this.setState({ weatherData })
      })
  }
  render() {
    const { userNmae, sysTime, weatherData } = this.state;
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
            <p className="triangle"></p>
          </Col>
          <Col span="20" className="weather">
            <span className="time">{sysTime}</span>
            <span className="detail">
              <img src={weatherData.dayPicture} alt="" />
              <span>{weatherData.weather}</span>
            </span>
          </Col>
        </Row>
      </Wrapper>
    )
  }
}
export default Header

const Wrapper = styled.div`
  background-color: ${themeConfig["@white"]};
  filter: drop-shadow(2px 2px 6px rgba(0,0,0,.1));
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
    display: flex;
    align-items: center;
    padding: 0 20px;
    border-top: 1px solid ${themeConfig["@primary-color"]};
    .bread-crumb-title { text-align: center; position: relative;height:100%;line-height: 40px;
      font-size: ${themeConfig["@font-size-lg"]};
    }
    .weather { text-align: right; }
    .time { margin-right: ${themeConfig["@space-lg"]}; }
    img { height: 16px; margin-right: ${themeConfig["@space-lg"]}; }
    .triangle {
      position: absolute;
      top: 100%;
      left: 50%;
      margin-left: -12px;
      border-top: 12px solid ${themeConfig["@white"]};
      border-left: 12px solid transparent;
      border-right: 12px solid transparent;
      width: 0;
      height: 0;
    }
  }
`
