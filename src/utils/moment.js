import moment from 'moment';
import 'moment/locale/ja';

const ja = () => moment().isoWeekday(1).startOf('week');

export default {
  ja,
};
