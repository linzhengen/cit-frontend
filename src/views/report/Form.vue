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
            :key="item.item_code"
            class="field is-horizontal">
            <div class="field-label is-normal">
              <label class="label">{{ item.name }}</label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div
                  v-if="item.element_type === 'text'"
                  class="control">
                  <el-input
                    v-model="form[item.item_code]"
                    :placeholder="item.name"
                    type="text"
                    class="form-item"/>
                </div>
                <div
                  v-else-if="item.element_type === 'datetime'"
                  class="control">
                  <el-date-picker
                    v-model="form[item.item_code]"
                    :placeholder="item.name"
                    :editable="false"
                    type="datetime"
                    class="form-item"/>
                </div>
                <div
                  v-else-if="item.element_type === 'number'"
                  class="control">
                  <el-input-number
                    v-model="form[item.item_code]"
                    :min="0"
                    :placeholder="item.name"
                    class="form-item"/>
                </div>
                <div
                  v-else-if="item.element_type === 'select'"
                  class="control">
                  <el-select
                    v-model="form[item.item_code]"
                    :placeholder="item.name"
                    class="form-item">
                    <el-option
                      v-for="option in item.options"
                      :key="option.type_id"
                      :label="option.name"
                      :value="option.type_id"/>
                  </el-select>
                </div>
                <div
                  v-else-if="item.element_type === 'autocomplete'"
                  class="control">
                  <el-autocomplete
                    v-model="form[item.item_code]"
                    :fetch-suggestions="querySearch"
                    placeholder="请输入内容"
                    class="inline-input form-item"/>
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
  import places from "@/data/places";
  import reportForm from "@/data/reportForm"
  export default {
    name: 'ReportForm',
    data() {
      return {
        form: {},
        places: places,
        reportForm: reportForm,
      }
    },
  }
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
