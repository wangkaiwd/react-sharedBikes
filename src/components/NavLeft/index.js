import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import menuConfig from '@/config/menuConfig'
import { Menu, Icon } from 'antd'

const SubMenu = Menu.SubMenu
class NavLeft extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount = () => {
    // 这样生成侧边栏会节省性能，只是在每次DOM加载完成后进行渲染，而不用每次都在render的时候执行函数
    const menuTreeNode = this.createLeftMenus(menuConfig)
    this.setState({ menuTreeNode })
  }
  handleClick = e => {
    // console.log('click', e)
  }

  // 生成左侧菜单
  createLeftMenus = subMenu => {
    return subMenu.map(subMenuTree => {
      if (subMenuTree.children) {
        return this.subMenusTree(subMenuTree)
      }
      return this.menusTree(subMenuTree)
    })
  }
  subMenusTree = subMenuTree => {
    return (
      <SubMenu
        key={subMenuTree.key}
        title={
          <span>
            {subMenuTree.icon && <Icon type={subMenuTree.icon} />}
            <span>{subMenuTree.title}</span>
          </span>
        }
      >
        {this.createLeftMenus(subMenuTree.children)}
      </SubMenu>
    )
  }
  menusTree = menuTree => (
    <Menu.Item key={menuTree.key}>
      <Link to={menuTree.key}>{menuTree.title}</Link>
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
          {/* 在每次render的时候都要执行函数，影响性能 */}
          {/* {this.createLeftMenus(menuConfig)} */}
          {this.state.menuTreeNode}
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
  padding: ${themeConfig['@space-base']};
  display: flex;
  font-size: ${themeConfig['@font-size-lg']};
  align-items: center;
  background-color: ${themeConfig['@green-logo']};
  img {
    height: 35px;
  }
  h1 {
    margin-left: ${themeConfig['@space-base']};
    color: ${themeConfig['@white']};
  }
`
