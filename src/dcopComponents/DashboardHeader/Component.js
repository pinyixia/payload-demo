'use client'
import { Typography } from "antd"
import { useState } from "react";
import styles from './dash_board_head.module.scss'
const { Text } = Typography

export const DashBoardHead = (props) => {
  const {layoutWidth, layoutHeight} = props

  return (
    <div className={styles.dash_head} style={{ width: layoutWidth, height: layoutHeight }}>
      仪表盘头部组件
    </div >
  )
}
