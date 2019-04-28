<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数</h1>
    </section>
  </div>
</template>

<script>
import { reportListQuery } from '@/grahql/query';
import moment from '@/utils/moment';

export default {
  name: 'ReportList',
  apollo: {
    // Query with parameters
    lastWeekReportList: {
      query: reportListQuery,
      variables: {
        from: moment.ja().subtract(1, 'weeks')
          .day(1)
          .toDate(),
        to: moment.ja().subtract(1, 'weeks')
          .day(7)
          .toDate(),
      },
      update(data) {
        return data.reports;
      },
    },
    // Query with parameters
    thisWeekReportList: {
      query: reportListQuery,
      variables: {
        from: moment.ja().day(1).toDate(),
        to: moment.ja().day(7).toDate(),
      },
      update(data) {
        return data.reports;
      },
    },
  },
  data() {
    return {
      lastWeekReportList: [],
      thisWeekReportList: [],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
