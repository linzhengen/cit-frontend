<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数</h1>
      <div v-for="(reports, type) in lastWeekReports" :key="type">
        <h3>{{ type | typeName}}</h3>
        <el-table
          :data="reports"
          style="width: 100%">
          <el-table-column
            prop="detail.place"
            label="地點"
            width="100">
            <template slot-scope="scope">
              {{ scope.row.detail.place | placeName(type) }}
            </template>
          </el-table-column>
          <el-table-column
            prop="detail.date"
            label="日期"
            width="100">
          </el-table-column>
          <el-table-column
            prop="detail.summary"
            label="合計">
          </el-table-column>
        </el-table>
      </div>
    </section>
  </div>
</template>

<script>
import { reportListQuery } from '@/grahql/query';
import moment from '@/utils/moment';
import _ from 'lodash';

export default {
  name: 'ReportList',
  apollo: {
    // Query with parameters
    lastWeekReports: {
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
        return _.groupBy(data.reports, 'type');
      },
    },
    // Query with parameters
    thisWeekReports: {
      query: reportListQuery,
      variables: {
        from: moment.ja().day(1).toDate(),
        to: moment.ja().day(7).toDate(),
      },
      update(data) {
        return _.groupBy(data.reports, 'type');
      },
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
