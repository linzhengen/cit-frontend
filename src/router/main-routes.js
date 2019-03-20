import ReportForm from '@/views/report/Form';
import ReportList from '@/views/report/List';

export default [
  {
    path: 'report/form',
    name: 'ReportForm',
    component: ReportForm,
  },
  {
    path: '',
    name: 'ReportList',
    component: ReportList,
  },
];
