export const columns = [
  {
    name: "protocol_id",
    required: true,
    label: "ID",
    align: "left",
    field: row => row.protocol_id,
    sortable: true
  },
  {
    name: "protocol_name",
    required: false,
    label: "Name",
    align: "left",
    field: row => row.protocol_name,
    sortable: true
  },
  {
    name: "protocol_code",
    required: false,
    label: "Code",
    align: "left",
    field: row => row.protocol_code,
    sortable: true
  },
  {
    name: "is_active",
    required: false,
    label: "Active",
    align: "left",
    field: row => row.is_active,
    sortable: true
  },
  {
    name: "illness_data_json",
    required: false,
    label: "Illnes",
    align: "left",
    field: row => row.illness_data_json,
    sortable: true
  },
  {
    name: "protocol_reason",
    required: false,
    label: "Reason",
    align: "left",
    field: row => row.protocol_reason,
    sortable: true
  },
  {
    name: "body_part_id",
    required: false,
    label: "Body part",
    align: "left",
    field: row => row.body_part_id,
    sortable: true
  },
  {
    name: "body_sub_part_id",
    required: false,
    label: "Body sub part",
    align: "left",
    field: row => row.body_sub_part_id,
    sortable: true
  },
  {
    name: "scan_id",
    required: false,
    label: "Scan",
    align: "left",
    field: row => row.scan_id,
    sortable: true
  },
  {
    name: "additional_views_json",
    required: false,
    label: "Addition Views",
    align: "left",
    field: row => row.additional_views_json,
    sortable: true
  },
  {
    name: "comment",
    required: false,
    label: "Comment",
    align: "left",
    field: row => row.comment,
    sortable: true
  },
  {
    name: "description",
    required: false,
    label: "Description",
    align: "left",
    field: row => row.description,
    sortable: true
  },
  {
    name: "require_contrast",
    required: false,
    label: "Require contrast",
    align: "left",
    field: row => row.require_contrast,
    sortable: true
  },
  {
    name: "contrast_administration",
    required: false,
    label: "Admin contrast",
    align: "left",
    field: row => row.contrast_administration,
    sortable: true
  },
  {
    name: "drl",
    required: false,
    label: "Admin contrast",
    align: "left",
    field: row => row.drl,
    sortable: true
  }
];

export const columnsVisible = [
  "protocol_name",
  "protocol_code",
  "is_active",
  "illness_data_json",
  "protocol_reason",
  "body_part_id",
  "body_sub_part_id",
  "scan_id",
  "additional_views_json",
  "comment",
  "description",
  "require_contrast",
  "contrast_administration",
  "drl"
];

export const numericArray = [1, 2, 3, 4, 5];

export const switcher = [
  {
    name: "Yes",
    value: 1
  },
  {
    name: "No",
    value: 0
  }
];
