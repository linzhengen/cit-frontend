<template>
  <div class="container">
    <section
      class="section">
      <h1 class="title">集会人数登録</h1>
      <hr>
      <div class="columns">
        <div class="column">
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
                  <input
                    type="text"
                    class="input"
                    v-model="form[item.name]"
                    :name="item.name"
                    :placeholder="item.label"
                  />
                </div>
                <div
                  v-else-if="item.type === 'datetime'"
                  class="control">
                  <input
                    type="datetime-local"
                    class="input"
                    v-model="form[item.name]"
                    :name="item.name"
                    :placeholder="item.label"
                  />
                </div>
                <div
                  v-else-if="item.type === 'number'"
                  class="control">
                  <input
                    type="number"
                    class="input"
                    v-model.number="form[item.name]"
                    :name="item.name"
                    :min="0"
                    :placeholder="item.label"
                    @change="summaryReport"/>
                </div>
                <div
                  v-else-if="item.type === 'select'"
                  class="control">
                  <div class="select is-fullwidth">
                    <select
                      v-model="form[item.name]"
                      :name="item.name"
                      @change="selectChange(item.name)">
                      <option disabled value="">請選擇</option>
                      <template v-if="item.name === 'place'">
                        <option
                          v-for="option in placeSelect"
                          :key="option.key"
                          :value="option.key">
                          {{ option.label }}
                        </option>
                      </template>
                      <template else>
                        <option
                          v-for="option in item.options"
                          :key="option.key"
                          :value="option.key">
                          {{ option.label }}
                        </option>
                      </template>
                    </select>
                  </div>
                </div>
                <p class="help is-danger" v-show="errors.has(item.name)">
                  {{ errors.first(item.name) }}
                </p>
              </div>
            </div>
          </div>
          <div class="field is-horizontal">
            <div class="field-label">
            </div>
            <div class="field-body">
              <div class="field">
                <div class="control">
                  <button class="button is-primary">
                    保存
                  </button>
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
      form: {
        type: '',
        place: '',
      },
      placeSelect: [],
      places,
      reportForm,
    };
  },
  methods: {
    selectChange(name) {
      if (name === 'type') {
        this.placeSelect = this.places[this.form[name]];
        this.form.place = '';
      }
    },
    summaryReport() {
      this.form.summary = (this.form.brother || 0)
          + (this.form.sister || 0)
          + (this.form.baptism || 0)
          + (this.form.newer || 0)
          + (this.form.friend || 0)
          + (this.form.child || 0);
    },
  },
};
</script>
