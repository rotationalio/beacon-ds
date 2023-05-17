import { Table, TableProps } from '@rotational/beacon-core';

import { Meta, StoryFn } from '@storybook/react';

export default {
  title: 'beacon/Table',
  component: Table,
} as Meta<TableProps>;

const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },

    {
      Header: 'Role',
      accessor: 'role',
      filter: 'includes',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ],
  data: [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      status: 'Active',
      age: 43,
      role: 'Admin',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',
      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
  ],
  onRowClick: (params: any) => {
    console.log('clicked!', params);
  },
  'data-testId': 'table',
};

export const NoData = Template.bind({});

NoData.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },

    {
      Header: 'Role',
      accessor: 'role',
      filter: 'includes',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ],
  data: [],
};

// pagination example

export const Pagination = Template.bind({});

Pagination.args = {
  columns: [
    {
      Header: 'Name',
      accessor: 'name',
    },
    {
      Header: 'Title',
      accessor: 'title',
    },
    {
      Header: 'Status',
      accessor: 'status',
    },
    {
      Header: 'Age',
      accessor: 'age',
    },

    {
      Header: 'Role',
      accessor: 'role',
      filter: 'includes',
    },
    {
      Header: 'Actions',
      accessor: 'actions',
    },
  ],
  data: [
    {
      name: 'Jane Cooper',
      title: 'Regional Paradigm Technician',
      status: 'Active',
      age: 43,
      role: 'Admin',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
    {
      name: 'Cody Fisher',
      title: 'Product Directives Officer',
      status: 'Active',

      age: 22,
      role: 'User',
      actions: [
        {
          label: 'Edit',
          onClick: () => alert('Edit'),
        },
        {
          label: 'Delete',
          onClick: () => alert('Delete'),
        },
      ],
    },
  ],
};
