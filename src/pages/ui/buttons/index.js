import React, { Component } from 'react'
import styled from 'styled-components'
import { Card, Button, Radio, Icon } from 'antd'

const RadioGroup = Radio.Group

class IButton extends Component {
	constructor() {
		super()
		this.state = {
			loading: true,
			size: 'small'
		}
	}

	onChange = e => {
		this.setState({
			size: e.target.value
		})
	}

	render() {
		const { loading, size } = this.state
		return (
			<Wrapper>
				<Card hoverable className="button-item" title="基础按钮">
					<Button type="primary">button</Button>
					<Button type="default">button</Button>
					<Button type="dashed">button</Button>
					<Button type="danger">button</Button>
					<Button disabled>button</Button>
				</Card>
				<Card hoverable className="button-item" title="图形按钮">
					<Button icon="plus">button</Button>
					<Button icon="edit">button</Button>
					<Button icon="delete">button</Button>
					<Button shape="circle" icon="search" />
					<Button type="primary" icon="search">
						button
					</Button>
					<Button type="primary" icon="download">
						button
					</Button>
				</Card>
				<Card hoverable className="button-item" title="Loading按钮">
					<Button type="primary" loading={loading}>
						Loading
					</Button>
					<Button shape="circle" loading={loading} />
					<Button
						loading={loading}
						onClick={() => this.setState({ loading: true })}
					>
						点击加载
					</Button>
					<Button type="primary" shape="circle" loading={loading} />
					<Button
						type="primary"
						onClick={() => this.setState({ loading: false })}
					>
						关闭
					</Button>
				</Card>
				<Card hoverable className="button-item" title="按钮组">
					<Radio.Group value="default">
						<Radio.Button value="large">Large</Radio.Button>
						<Radio.Button value="default">Default</Radio.Button>
						<Radio.Button value="small">Small</Radio.Button>
					</Radio.Group>
					<Button.Group>
						<Button type="primary">
							<Icon type="left" />
							Backward
						</Button>
						<Button type="primary">
							Forward
							<Icon type="right" />
						</Button>
					</Button.Group>
				</Card>
				<Card hoverable className="button-item" title="按钮尺寸">
					<RadioGroup onChange={this.onChange} value={this.state.size}>
						<Radio value={'small'}>小</Radio>
						<Radio value={'default'}>中</Radio>
						<Radio value={'large'}>大</Radio>
					</RadioGroup>
					<Button type="primary" size={size}>
						Primary
					</Button>
					<Button size={size}>Normal</Button>
					<Button type="dashed" size={size}>
						Dashed
					</Button>
					<Button type="danger" size={size}>
						Danger
					</Button>
				</Card>
			</Wrapper>
		)
	}
}

export default IButton

const Wrapper = styled.div`
	.button-item:not(:first-child) {
		margin-top: ${themeConfig['@space-base']};
	}
	button {
		margin-right: ${themeConfig['@space-lg']};
		vertical-align: top;
	}
	.ant-btn-group {
		vertical-align: top;
		margin-left: ${themeConfig['@space-lg']};
		button {
			margin-right: 0;
		}
	}
`
