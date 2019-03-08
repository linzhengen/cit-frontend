<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数登録</h1>
      <hr>
      <div class="columns">
        <div class="column form-column">
          <div
            v-for="item in reportForm"
            :key="item.name"
            class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">{{ item.label }}</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div
                  v-if="item.type === 'text'"
                  class="control">
                  <el-input
                    v-model="form[item.name]"
                    :placeholder="item.label"
                    type="text"
                    class="form-item"/>
                </div>
                <div
                  v-else-if="item.type === 'datetime'"
                  class="control">
                  <el-date-picker
                    v-model="form[item.name]"
                    :placeholder="item.label"
                    :editable="false"
                    type="datetime"
                    class="form-item"/>
                </div>
                <div
                  v-else-if="item.type === 'number'"
                  class="control">
                  <el-input-number
                    v-model="form[item.name]"
                    :min="0"
                    :placeholder="item.label"
                    class="form-item"
                    @change="summaryReport"/>
                </div>
                <div
                  v-else-if="item.type === 'select'"
                  class="control">
                  <el-select
                    v-model="form[item.name]"
                    :placeholder="item.label"
                    class="form-item"
                    @change="selectChange(item.name)">
                    <el-option
                      v-for="option in item.options"
                      :key="option.key"
                      :label="option.label"
                      :value="option.key"/>
                  </el-select>
                </div>
                <div
                  v-else-if="item.type === 'placeAutoComplete'"
                  class="control">
                  <el-autocomplete
                    v-model="form[item.name]"
                    :placeholder="item.label"
                    :fetch-suggestions="querySearch"
                    class="form-item"
                    @select="handleAutocomplete">
                    <template slot-scope="{ item }">
                      <div class="name">{{ item.name }}</div>
                    </template>
                  </el-autocomplete>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import places from '@/data/places';
import reportForm from '@/data/reportForm';

export default {
  name: 'ReportForm',
  data() {
    return {
      form: {},
      places,
      placeSelect: [],
      reportForm,
    };
  },
  methods: {
    selectChange(name) {
      if (name === 'type') {
        this.placeSelect = this.places[this.form[name]];
        delete this.form.place;
      }
    },
    querySearch(queryString, cb) {
      const { placeSelect } = this;
      const results = queryString ? placeSelect.filter(
        this.createFilter(queryString),
      ) : placeSelect;
      cb(results);
    },
    createFilter(queryString) {
      return placeSelect => (
        placeSelect.name.toLowerCase().indexOf(queryString.toLowerCase()) === 0
      );
    },
    handleAutocomplete(item) {
      this.form.place = item.name;
    },
    summaryReport() {
      this.form.report_item_summary = (this.form.report_item_1 || 0)
          + (this.form.report_item_2 || 0)
          + (this.form.report_item_3 || 0)
          + (this.form.report_item_4 || 0)
          + (this.form.report_item_5 || 0)
          + (this.form.report_item_6 || 0);
    },
  },
};
</script>

<style lang="scss" scoped>
  .form-column {
    max-width: 700px;
  }

  .form-item {
    min-width: 340px;
    max-width: 400px;
  }
</style>
