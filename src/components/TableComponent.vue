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
    </q-table>

    <DialogForm
      :rowModel="rowModel"
      :showDialog="showDialog"
      @close-dialog="closeDialog"
      @save-model="saveModel"
    ></DialogForm>
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
    DialogForm
  },

  data() {
    return {
      columns: columns,
      visibleColumns: columnsVisible,
      showDialog: false,
      rowModel: null,
      render: true
    };
  },

  computed: {
    getData() {
      return this.data;
    }
  },

  methods: {
    openDialog(rowData) {
      this.rowModel = rowData;
      this.showDialog = true;
    },
    closeDialog() {
      this.showDialog = false;
    },
    saveModel(modelToSave) {
      const found = this.data.find(
        dataFind => dataFind.protocol_id === modelToSave.protocol_id
      );
      if (typeof found !== "undefined") {
        Object.assign(found, modelToSave);
        this.render = false;
        this.$nextTick(() => {
          this.render = true;
        });
      }
    }
  },
  created() {
    this.data = dataTable;
  }
};
</script>

<style></style>
