<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数</h1>
      <hr>
      <vue-good-table
        :columns="columns"
        :rows="rows"/>
    </section>
  </div>
</template>

<script>
import { reportListQuery } from '@/grahql/query';
import moment from 'moment';

export default {
  name: 'ReportList',
  apollo: {
    // Query with parameters
    reportList: {
      query: reportListQuery,
      variables: {
        from: new Date(),
        to: new Date(),
      },
    },
  },
  data() {
    return {
      columns: [
        {
          label: 'Name',
          field: 'name1',
        },
        {
          label: 'Name',
          field: 'name2',
        },
        {
          label: 'Name',
          field: 'name3',
        },
        {
          label: 'Name',
          field: 'name4',
        },
        {
          label: 'Age',
          field: 'age',
          type: 'number',
        },
        {
          label: 'Created On',
          field: 'createdAt',
          type: 'date',
          dateInputFormat: 'YYYY-MM-DD',
          dateOutputFormat: 'MMM Do YY',
        },
        {
          label: 'Percent',
          field: 'score',
          type: 'percentage',
        },
      ],
      rows: [
        {
          id: 1,
          name1: 'John',
          name2: 'John',
          name3: 'John',
          name4: 'John',
          age: 20,
          createdAt: '201-10-31:9: 35 am',
          score: 0.03343,
        },
        {
          id: 1,
          name1: 'John',
          name2: 'John',
          name3: 'John',
          name4: 'John',
          age: 20,
          createdAt: '201-10-31:9: 35 am',
          score: 0.03343,
        },
        {
          id: 1,
          name1: 'John',
          name2: 'John',
          name3: 'John',
          name4: 'John',
          age: 20,
          createdAt: '201-10-31:9: 35 am',
          score: 0.03343,
        },
        {
          id: 1,
          name1: 'John',
          name2: 'John',
          name3: 'John',
          name4: 'John',
          age: 20,
          createdAt: '201-10-31:9: 35 am',
          score: 0.03343,
        },
        {
          id: 2,
          name1: 'Jane',
          name2: 'Jane',
          name3: 'Jane',
          name4: 'Jane',
          age: 24,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
        {
          id: 3,
          name1: 'Susan',
          name2: 'Susan',
          name3: 'Susan',
          name4: 'Susan',
          age: 16,
          createdAt: '2011-10-30',
          score: 0.03343,
        },
        {
          id: 4,
          name1: 'Chris',
          name2: 'Chris',
          name3: 'Chris',
          name4: 'Chris',
          age: 55,
          createdAt: '2011-10-11',
          score: 0.03343,
        },
        {
          id: 5,
          name1: 'Dan',
          name2: 'Dan',
          name3: 'Dan',
          name4: 'Dan',
          age: 40,
          createdAt: '2011-10-21',
          score: 0.03343,
        },
        {
          id: 6,
          name1: 'John',
          name2: 'John',
          name3: 'John',
          name4: 'John',
          age: 20,
          createdAt: '2011-10-31',
          score: 0.03343,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>

</style>
