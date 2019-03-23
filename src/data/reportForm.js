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
    ],
  },
  {
    type: 'text',
    name: 'title',
    label: '標題',
    required: true,
  },
  {
    type: 'select',
    name: 'place',
    label: '地點',
    required: true,
    options: [],
  },
  {
    type: 'date',
    name: 'date',
    label: '日期',
    required: true,
  },
  {
    type: 'time',
    name: 'time',
    label: '時間',
    required: true,
  },
  {
    type: 'number',
    name: 'brother',
    label: '弟兄',
    required: false,
  },
  {
    type: 'number',
    name: 'sister',
    label: '姊妹',
    required: false,
  },
  {
    type: 'number',
    name: 'baptism',
    label: '受浸',
    required: false,
  },
  {
    type: 'number',
    name: 'newer',
    label: '新人',
    required: false,
  },
  {
    type: 'number',
    name: 'friend',
    label: '朋友',
    required: false,
  },
  {
    type: 'number',
    name: 'child',
    label: '兒童',
    required: false,
  },
  {
    type: 'number',
    name: 'summary',
    label: '合計',
    required: true,
  },
  {
    type: 'number',
    name: 'speaker',
    label: '申言',
    required: false,
  },
];
