<template>
  <div class="container" v-loading.fullscreen.lock="$apollo.loading">
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
              <label class="label">
                {{ item.label }}
                <span class="has-text-danger" v-if="item.validate.includes('required')">※</span>
              </label>
            </div>
            <div class="field-body">
              <div class="field is-narrow">
                <div
                  v-if="item.type === 'text'"
                  class="control">
                  <input
                    type="text"
                    v-validate="item.validate"
                    v-model="form[item.name]"
                    :class="[{'is-danger': errors.has(item.name)}, 'input']"
                    :data-vv-as="item.label"
                    :name="item.name"
                    :placeholder="item.label"
                  />
                </div>
                <!--<div-->
                  <!--v-else-if="item.type === 'date'"-->
                  <!--class="control">-->
                  <!--<input-->
                    <!--type="date"-->
                    <!--v-validate="item.validate"-->
                    <!--v-model="form[item.name]"-->
                    <!--:class="[{'is-danger': errors.has(item.name)}, 'input']"-->
                    <!--:data-vv-as="item.label"-->
                    <!--:name="item.name"-->
                    <!--:placeholder="item.label"-->
                  <!--/>-->
                <!--</div>-->
                <div
                  v-else-if="item.type === 'date'"
                  class="control">
                  <div
                    :class="[{'is-danger': errors.has(item.name)}, 'select', 'is-fullwidth']"
                  >
                    <select
                      v-validate="item.validate"
                      v-model="form[item.name]"
                      :data-vv-as="item.label"
                      :name="item.name">
                      <option disabled value="">請選擇</option>
                      <option
                        v-for="(dateName, date) in lastWeekDates"
                        :key="date"
                        :value="date">
                        {{ dateName }}
                      </option>
                    </select>
                  </div>
                </div>
                <div
                  v-else-if="item.type === 'time'"
                  class="control">
                  <input
                    type="time"
                    v-validate="item.validate"
                    v-model="form[item.name]"
                    :class="[{'is-danger': errors.has(item.name)}, 'input']"
                    :data-vv-as="item.label"
                    :name="item.name"
                    :placeholder="item.label"
                  />
                </div>
                <div
                  v-else-if="item.type === 'number'"
                  class="control">
                  <input
                    type="number"
                    :class="[{'is-danger': errors.has(item.name)}, 'input']"
                    v-validate="item.validate"
                    v-model.number="form[item.name]"
                    :data-vv-as="item.label"
                    :name="item.name"
                    :placeholder="item.label"
                    @change="handleSummaryReport(item.name)"/>
                </div>
                <div
                  v-else-if="item.type === 'select'"
                  class="control">
                  <div
                    :class="[{'is-danger': errors.has(item.name)}, 'select', 'is-fullwidth']"
                    >
                    <select
                      v-validate="item.validate"
                      v-model="form[item.name]"
                      :data-vv-as="item.label"
                      :name="item.name"
                      @change="handleSelectChange(item.name)">
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
                  <button class="button is-primary" @click="handleSave">
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
import VueScrollTo from 'vue-scrollto';
import { createReportMutation } from '@/grahql/mutation';
import moment from '@/utils/moment';

export default {
  name: 'ReportForm',
  apollo: {},
  data() {
    return {
      form: {
        type: null,
        title: null,
        place: null,
        date: null,
        time: null,
        dateTime: null,
        summary: null,
        detail: null,
      },
      placeSelect: [],
      places,
      reportForm,
    };
  },
  computed: {
    lastWeekDates() {
      const dates = {};
      for (let i = 0; i < 7; i += 1) {
        dates[moment().subtract(i, 'days').format('YYYY-MM-DD')] = moment().subtract(i, 'days').format('YYYY-MM-DD(ddd)');
      }
      return dates;
    },
  },
  methods: {
    handleSelectChange(name) {
      if (name === 'type') {
        this.placeSelect = this.places[this.form[name]];
        this.form.place = '';
      }
    },
    handleSummaryReport(name) {
      if (name === 'summary') {
        return;
      }
      this.form.summary = (this.form.brother || 0)
        + (this.form.sister || 0)
        + (this.form.baptism || 0)
        + (this.form.newer || 0)
        + (this.form.friend || 0)
        + (this.form.child || 0);
    },
    async handleSave() {
      await this.$validator.validateAll();
      if (this.errors.any()) {
        VueScrollTo.scrollTo(`[name=${this.errors.items[0].field}]`, 700);
        return;
      }
      await this.$apollo.mutate({
        // Query
        mutation: createReportMutation,
        // Parameters
        variables: {
          type: this.form.type,
          title: this.form.title,
          place: this.form.place,
          dateTime: moment(`${this.form.date} ${this.form.time}`, 'YYYY-MM-DD hh:mm').toDate(),
          summary: this.form.summary,
          detail: this.form,
        },
      });
      this.$message({
        message: '送信成功！',
        type: 'success',
      });
      this.$router.push({ name: 'ReportList' });
    },
  },
};
</script>
