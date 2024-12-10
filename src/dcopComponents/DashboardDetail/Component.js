'use client'
import React from "react"
import styles from './dash_board_detail.module.scss'

export const DashBoardDetail = (props) => {
  const {layoutWidth, layoutHeight} = props
  return (
    <div className={styles.card_container} style={{width: layoutWidth, height: layoutHeight }}>
      仪表盘详情组件
    </div>
  )
}