import React, { Component } from 'react'
import ColorPicker from './colorPicker'
const colorList = [
  {
    key: '#f5222d',
    title: '薄暮'
  },
  {
    key: '#fa541c',
    title: '火山'
  },
  {
    key: '#faad14',
    title: '日暮'
  },
  {
    key: '#13c2c2',
    title: '明青'
  },
  {
    key: '#52c412',
    title: '极光青'
  },
  {
    key: '#1890ff',
    title: '拂晓蓝（默认）'
  },
  {
    key: '#2f54eb',
    title: '极客蓝'
  },
  {
    key: '#722ed1',
    title: '酱紫'
  }
]
class Theme extends Component {
  constructor() {
    super()
    this.state = {}
  }
  changeColor = color => {
    console.log(color)
    window.less.modifyVars({
      '@primary-color': color,
      '@link-color': color,
      '@btn-primary-bg': color
    })
  }
  render() {
    return (
      <div className="theme-wrapper">
        <ColorPicker list={colorList} changeColor={this.changeColor} />
      </div>
    )
  }
}

export default Theme
