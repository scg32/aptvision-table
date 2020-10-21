<template>
  <div class="q-pa-md" v-if="render">
    <q-table
      :data="getData"
      :columns="columns"
      row-key="name"
      :visible-columns="visibleColumns"
    >
      <template v-slot:top>
        <h6>Table</h6>
        <q-space />

        <q-select
          v-model="visibleColumns"
          multiple
          outlined
          dense
          options-dense
          :display-value="$q.lang.table.columns"
          emit-value
          map-options
          :options="columns"
          option-value="name"
          options-cover
          style="min-width: 150px"
        />
      </template>
      <template v-slot:body-cell-protocol_id="props">
        <q-td :props="props">
          <q-icon
            size="xs"
            name="fas fa-eye"
            @click="openDialog(props.row)"
          ></q-icon>
        </q-td>
      </template>
      <template v-slot:body-cell-is_active="props">
        <q-td :props="props">
          <span>{{ `${props.row.is_active === 0 ? "No" : "Yes"}` }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-require_contrast="props">
        <q-td :props="props">
          <span>{{
            `${props.row.require_contrast === 0 ? "No" : "Yes"}`
          }}</span>
        </q-td>
      </template>
      <template v-slot:body-cell-description="props">
        <q-td :props="props">
          <div v-for="(desc, index) in props.row.description" :key="index">
            <p v-if="desc.title && desc.value">
              <span>{{ `${desc.title}:${desc.value}` }}</span>
            </p>
          </div>
        </q-td>
      </template>
    </q-table>

    <dialog-form
      :rowModelProps="rowModel"
      :showDialog="showDialog"
      @close-dialog="closeDialog"
      @save-model="saveModel"
    ></dialog-form>
  </div>
</template>

<script>
import {
  columns,
  columnsVisible
} from "src/components/tableComponentConfig.js";
import { dataTable } from "src/components/tableData.js";
import DialogForm from "src/components/DialogForm.vue";

export default {
  name: "TableComponent",
  components: {
    "dialog-form": DialogForm
  },

  data() {
    return {
      columns: columns,
      visibleColumns: columnsVisible,
      showDialog: false,
      rowModel: {},
      setData: dataTable,
      render: true
    };
  },

  computed: {
    getData() {
      return this.setData;
    }
  },

  methods: {
    openDialog(row) {
      this.rowModel = row;

      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
      this.getData;
    },
    saveModel() {
      // setData.filter(dataFind => {
      //   if (dataFind.protocol_id === this.rowModel.protocol_id) {
      //     dataFind = this.rowModel;
      //   }
      // });
      this.render = false;
      this.$nextTick(() => {
        this.render = true;
      });
    }
  }
};
</script>

<style></style>
