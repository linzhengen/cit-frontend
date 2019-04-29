<template>
  <div class="container" v-loading.fullscreen.lock="$apollo.loading">
    <section
      class="section">
      <h1 class="title is-2">集会人数</h1>
      <div v-for="(weekReports, index) in [lastWeekReports, thisWeekReports]"
           :key="index" class="content">
        <div v-for="(reports, type) in weekReports" :key="type" class="content">
          <h1 class="title is-4">
            {{ type | typeName}}
            <span v-if="index == 0">(上週)</span><span v-if="index == 1">(本週)</span>
          </h1>
          <el-table
            stripe
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
              width="150">
              <template slot-scope="scope">
                {{ scope.row.detail.date }}
                <span v-if="scope.row.detail.time">
                  <br>
                  {{ scope.row.detail.time }}
                </span>
              </template>
            </el-table-column>
            <el-table-column
              prop="detail.summary"
              label="標題"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.title"
              label="合計"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.brother"
              label="弟兄"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.sister"
              label="姊妹"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.baptism"
              label="受浸"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.newer"
              label="新人"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.friend"
              label="朋友"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.child"
              label="兒童"
              width="100">
            </el-table-column>
            <el-table-column
              prop="detail.speaker"
              label="申言"
              width="100">
            </el-table-column>
          </el-table>
        </div>
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
        from: moment().startOf('day').subtract(1, 'weeks')
          .day(1)
          .toDate(),
        to: moment().endOf('day').subtract(1, 'weeks')
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
        from: moment().startOf('day').day(1).toDate(),
        to: moment().endOf('day').day(7).toDate(),
      },
      update(data) {
        return _.groupBy(data.reports, 'type');
      },
    },
  },
  data() {
    return {
      lastWeekReports: [],
      thisWeekReports: [],
    };
  },
  created() {
    this.$apollo.queries.lastWeekReports.refetch();
    this.$apollo.queries.thisWeekReports.refetch();
  },
};
</script>

<style lang="scss" scoped>

</style>
