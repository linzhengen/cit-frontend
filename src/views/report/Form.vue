<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数登録</h1>
      <hr>
      <div class="columns">
        <div class="column form-column">
          <div
            v-for="item in form_items"
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
                    type="datetime"
                    editable="false"
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
  export default {
    name: 'ReportForm',
    data() {
      return {
        form: {},
        places: {
          1: [
            '浦田',
            '中華街',
            '中板橋',
            '龜戶',
            '西日暮里',
            '橫濱週三',
            '橫濱週六',
            '大森海岸',
            '鶴見',
            '東大前',
            '田原町',
            '早稻阿佐',
            '代代木週五',
          ],
          2: [
            '東京上午區',
            '東京下午區',
            '第三大區',
            '橫濱區',
            '第六大區',
            '第七大區',
            '事奉聚會',
            '禱告聚會',
            '青年在職',
            '兒童活力',
            '相調聚會',
          ],
          3: [
            '成全訓練',
            '真理追求',
          ],
          4: [
            '特別聚會',
          ],
        },
        form_items: [
          {
            element_type: 'select',
            item_code: 'type',
            name: '聚會類別',
            required: true,
            options: [
              {type_id: 1, name: '小排'},
              {type_id: 2, name: '一般聚會'},
              {type_id: 3, name: '真理成全'},
              {type_id: 4, name: '特別聚會'},
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
