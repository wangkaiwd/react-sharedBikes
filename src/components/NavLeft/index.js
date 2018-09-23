import React, { Component } from 'react'
import styled from 'styled-components'
import menuConfig from '@/config/menuConfig'
import { Menu, Icon } from 'antd';

const SubMenu = Menu.SubMenu;
class NavLeft extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  handleClick = (e) => {
    console.log('click', e);
  }

  // 生成左侧菜单
  createLeftMenus = (subMenu) => {
    return subMenu.map(subMenuTree => {
      if (subMenuTree.children) {
        return this.subMenusTree(subMenuTree)
      }
      return this.menusTree(subMenuTree)
    })
  }
  subMenusTree = (subMenuTree) => {
    return (<SubMenu key={subMenuTree.key} title={
      <span>
        {subMenuTree.icon && <Icon type={subMenuTree.icon} />}
        <span>{subMenuTree.title}</span>
      </span>
    }>
      {this.createLeftMenus(subMenuTree.children)}
    </SubMenu>)
  }
  menusTree = (menuTree) => (
    <Menu.Item key={menuTree.key}>
      {menuTree.title}
    </Menu.Item>
  )

  render() {
    return (
      <Wrapper>
        <Menu onClick={this.handleClick} theme="dark">
          {this.createLeftMenus(menuConfig)}
        </Menu>
      </Wrapper>
    )
  }
}
export default NavLeft
const Wrapper = styled.div`
  height: 100%;
  .ant-menu {
    height: 100%;
    width: 100%;
  }
`
