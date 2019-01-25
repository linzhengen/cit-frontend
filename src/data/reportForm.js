export default [
  {
    element_type: 'select',
    item_code: 'type',
    name: '聚會類別',
    required: true,
    options: [
      { type_id: 1, name: '小排' },
      { type_id: 2, name: '一般聚會' },
      { type_id: 3, name: '真理成全' },
      { type_id: 4, name: '特別聚會' },
    ]
  },
  {
    element_type: 'text',
    item_code: 'title',
    name: '標題',
    required: true,
  },
  {
    element_type: 'autocomplete',
    item_code: 'place',
    name: '地點',
    required: true,
  },
  {
    element_type: 'datetime',
    item_code: 'time',
    name: '時間',
    required: true,
  },
  {
    element_type: 'number',
    item_code: 'report_item_1',
    name: '弟兄',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_2',
    name: '姊妹',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_3',
    name: '受浸',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_4',
    name: '新人',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_5',
    name: '朋友',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_6',
    name: '兒童',
    required: false,
  },
  {
    element_type: 'number',
    item_code: 'report_item_summary',
    name: '合計',
    required: true,
  },
  {
    element_type: 'number',
    item_code: 'report_item_speak',
    name: '申言',
    required: false,
  },
]
