export default [
  {
    type: 'select',
    name: 'type',
    label: '聚會類別',
    required: true,
    options: [
      { key: 1, label: '小排' },
      { key: 2, label: '一般聚會' },
      { key: 3, label: '真理成全' },
      { key: 4, label: '特別聚會' },
    ]
  },
  {
    type: 'text',
    name: 'title',
    label: '標題',
    required: true,
  },
  {
    type: 'placeAutoComplete',
    name: 'place',
    label: '地點',
    required: true,
  },
  {
    type: 'datetime',
    name: 'time',
    label: '時間',
    required: true,
  },
  {
    type: 'number',
    name: 'report_item_1',
    label: '弟兄',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_2',
    label: '姊妹',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_3',
    label: '受浸',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_4',
    label: '新人',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_5',
    label: '朋友',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_6',
    label: '兒童',
    required: false,
  },
  {
    type: 'number',
    name: 'report_item_summary',
    label: '合計',
    required: true,
  },
  {
    type: 'number',
    name: 'report_item_speak',
    label: '申言',
    required: false,
  },
]
