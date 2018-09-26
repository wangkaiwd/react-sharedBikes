import React, { Component } from 'react'
import styled from 'styled-components'
import Theme from '@/components/theme'
import { Card, Button, Spin, Row, Col, DatePicker } from 'antd'
const { RangePicker } = DatePicker
class Home extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Wrapper>
        <div>
          页面首页，可能要展示一些比较好看的东西
          <Card
            title="Card title"
            bordered={true}
            style={{ width: 600, marginTop: 20 }}
          >
            <Theme />
            <Button type="primary" style={{ marginTop: '20px' }}>
              点击上部颜色按钮切换主题
            </Button>
            <Row gutter={16} style={{ marginTop: '20px' }}>
              <Col span="4">
                <Spin size="small" />
              </Col>
              <Col span="4">
                <Spin />
              </Col>
              <Col span="4">
                <Spin size="large" />
              </Col>
              <Col span={12}>
                <RangePicker size="default" />
              </Col>
            </Row>
          </Card>
        </div>
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
  font-size: ${themeConfig['@font-size-lg']};
`
