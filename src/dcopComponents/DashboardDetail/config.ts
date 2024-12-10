import type { Block } from 'payload'

export const DashboardDetail: Block = {
  slug: 'dbd',
  fields: [
    {
      label: '布局宽度',
      name: 'layoutWidth',
      type: 'text',
      defaultValue: '100%'
    },
    {
      label: '布局高度',
      name: 'layoutHeight',
      type: 'text',
      defaultValue: '100%'
    },
    {
      label: '布局排版',
      name: 'typography',
      type: 'select',
      defaultValue: 'horizontal',
      options: [
        {
          label: '水平排版',
          value: 'horizontal',
        },
        {
          label: '垂直排版',
          value: 'vertical',
        }
      ]
    }
  ],
  interfaceName: 'DashboardDetail',
  labels: {
    plural: '仪表盘详情',
    singular: '仪表盘详情',
  },
}
