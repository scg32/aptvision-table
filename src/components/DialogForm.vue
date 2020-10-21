<template>
  <div class="q-pa-md">
    <q-dialog
      :value="showDialog"
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
          ></q-toggle>
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
                <q-toggle
                  label="Required contrast"
                  :false-value="Number(0)"
                  :true-value="Number(1)"
                  v-model="getFormModel.require_contrast"
                />
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
            <div class="row q-col-gutter-xs q-mb-sm">
              <div class="col-6">
                <div class="q-pa-md">
                  <q-card>
                    <q-card-section>
                      Description
                    </q-card-section>
                    <q-card-section>
                      <q-input
                        dense
                        outlined
                        v-model="description.title"
                        label="Title"
                      ></q-input>

                      <q-input
                        dense
                        outlined
                        v-model="description.value"
                        label="Value"
                      ></q-input>
                    </q-card-section>
                    <q-card-actions>
                      <q-btn
                        label="Add"
                        color="primary"
                        @click="addDescription()"
                      ></q-btn>
                      <q-space></q-space>
                      <q-btn
                        color="grey"
                        round
                        flat
                        dense
                        :icon="
                          expandedDesc
                            ? 'keyboard_arrow_up'
                            : 'keyboard_arrow_down'
                        "
                        @click="expandedDesc = !expandedDesc"
                      ></q-btn>
                    </q-card-actions>
                    <q-slide-transition>
                      <div v-show="expandedDesc">
                        <q-card-section class="text-subitle2">
                          <div
                            v-for="(desc, index) in getFormModel.description"
                            :key="index"
                          >
                            <p v-if="desc.title && desc.value">
                              <span>{{ `${desc.title}:${desc.value}` }}</span>
                            </p>
                          </div>
                        </q-card-section>
                      </div>
                    </q-slide-transition>
                  </q-card>
                </div>
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
import { numericArray } from "src/components/tableComponentConfig.js";

export default {
  name: "DialogForm",
  data() {
    return {
      loading: false,
      show: false,
      numericArray: numericArray,
      description: { title: "", value: "" },
      formModel: null,
      expandedDesc: false
    };
  },

  props: {
    showDialog: { type: Boolean, default: false },

    rowModelProps: { type: Object, default: () => {} }
  },
  watch: {
    getFormModel: {
      deep: true,
      handler(n, o) {
        //console.log("dataTable -> n,o", n, o);
      }
    }
  },
  computed: {
    getFormModel: function() {
      return this.rowModelProps;
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
    addDescription() {
      this.getFormModel.description.push(this.description);
    },
    saveForm() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.$emit("save-model");
        this.$emit("close-dialog");
      }, 2000);
    }
  }
};
</script>
