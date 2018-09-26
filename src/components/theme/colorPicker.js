import React from 'react'
import styled from 'styled-components'
import { Tooltip } from 'antd'
const ColorPicker = ({ changeColor, list }) => (
  <Wrapper>
    {list.map(item => {
      return (
        <Tooltip title={item.title} key={item.key}>
          <div
            className="color-item"
            style={{ backgroundColor: item.key }}
            onClick={() => changeColor(item.key)}
          />
        </Tooltip>
      )
    })}
  </Wrapper>
)

export default ColorPicker

const Wrapper = styled.div`
  display: flex;
  .color-item {
    cursor: pointer;
    margin-right: 20px;
    &:last-child {
      margin-right: 0;
    }
    width: 20px;
    height: 20px;
    border-radius: 50%;
  }
`
