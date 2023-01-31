import { Table } from '@rotational/beacon-core';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'beacon/Table',
  component: Table,
} as Meta<typeof Table>;

const Template: Story<typeof Table> = (args) => <Table {...args} />;

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
