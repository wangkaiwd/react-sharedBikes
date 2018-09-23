import React, { Component } from 'react';
import styled from 'styled-components';
import menuConfig from '@/config/menuConfig';
import '@/styles/reset.less';
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
        <Logo>
          {/* 最终源码打包后会生成到public目录下，public下面的源码会部署到服务器上 */}
          <img src="/assets/images/logo-ant.svg" alt="" />
          <h1>wk admin</h1>
        </Logo>
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
  display: flex;
  flex-direction: column;
  .ant-menu {
    flex: 1;
    width: 100%;
  }
`
const Logo = styled.div`

`
