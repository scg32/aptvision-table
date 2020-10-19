<template>
  <div class="q-pa-md">
    <q-dialog
      v-model="showDialog"
      transition-show="rotate"
      transition-hide="rotate"
      @escape-key="showDialog = false"
    >
      <q-card style="width: 900px; max-width: 90vw;">
        <q-toolbar class="text-primary">
          <q-toolbar-title>
            Form
          </q-toolbar-title>
          <q-toggle
            label="Active"
            :false-value="Number(0)"
            :true-value="Number(1)"
            v-model="getFormModel.is_active"
          />
        </q-toolbar>
        <q-card-section>
          <q-form>
            <div class="row q-col-gutter-xs q-mb-sm">
              <div class="col-6">
                <q-input
                  outlined
                  v-model="getFormModel.protocol_name"
                  label="Protocol name"
                ></q-input>
              </div>

              <div class="col-6">
                <q-input
                  outlined
                  v-model="getFormModel.protocol_code"
                  label="Protocol code"
                ></q-input>
              </div>
            </div>
            <div class="row q-col-gutter-xs q-mb-sm">
              <div class="col-6">
                <q-input
                  outlined
                  v-model="getFormModel.protocol_reason"
                  label="Protocol reason"
                />
              </div>

              <div class="col-6">
                <q-input
                  outlined
                  v-model="getFormModel.illness_data_json"
                  label="Ilness"
                />
              </div>
            </div>
            <div class="row q-col-gutter-xs q-mb-sm">
              <div class="col-4">
                <q-select
                  filled
                  v-model="getFormModel.body_part_id"
                  :options="numericArray"
                  label="Body part"
                ></q-select>
              </div>
              <div class="col-4">
                <q-select
                  filled
                  v-model="getFormModel.body_sub_part_id"
                  :options="numericArray"
                  label="Body sub"
                ></q-select>
              </div>

              <div class="col-4">
                <q-select
                  filled
                  v-model="getFormModel.scan_id"
                  :options="numericArray"
                  label="Scan"
                ></q-select>
              </div>
            </div>

            <div class="row q-col-gutter-xs q-mb-sm">
              <div class="col-4">
                <q-select
                  filled
                  v-model="getFormModel.require_contrast"
                  :options="switcher"
                  option-value="value"
                  option-label="name"
                  emit-value
                  label="Required contrast"
                ></q-select>
              </div>
              <div class="col-4">
                <q-input
                  outlined
                  v-model="getFormModel.contrast_administration"
                  label="Contrast administaration"
                ></q-input>
              </div>

              <div class="col-4">
                <q-input
                  outlined
                  v-model="getFormModel.drl"
                  label="DRL"
                ></q-input>
              </div>
            </div>
          </q-form>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn
            label="Cancel"
            color="secondary"
            @click="$emit('close-dialog')"
          />
          <q-btn
            :loading="loading"
            label="Save"
            color="primary"
            @click="saveForm()"
          />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>
<script>
import { numericArray, switcher } from "src/components/tableComponentConfig.js";
export default {
  name: "DialogForm",
  data() {
    return {
      loading: false,
      show: false,
      numericArray: numericArray,
      switcher: switcher
    };
  },

  props: {
    showDialog: { type: Boolean, default: false },
    rowModel: { type: Object, default: null }
  },
  computed: {
    getFormModel() {
      if (this.rowModel) {
        return this.rowModel;
      }
      return {};
    },
    getDialog: {
      get: function() {
        return this.showDialog;
      },

      set: function(value) {
        this.showDialog = value;
      }
    }
  },
  methods: {
    saveForm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$emit("save-model", this.getFormModel);
        this.$emit("close-dialog");
      }, 2000);
    }
  }
};
</script>
