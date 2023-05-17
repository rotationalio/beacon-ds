import {
  useTable,
  useFilters,
  useSortBy,
  usePagination,
  Column,
  Row,
} from 'react-table';

import { SortIcon, SortUpIcon, SortDownIcon, NoDataIcon } from '../Icon/Icons';
import Loader from '../Loader/Loader';
import mergeClassnames from '../../utils/mergeClassnames';
import { StatusPill } from './shared/StatusPill';
import { ActionPill } from './shared/ActionPill';
import { PaginateButton } from './shared/PaginateButton';
export interface TableProps {
  columns: Column[];
  data: any;
  initialState?: any;
  className?: string;
  tableClassName?: string;
  theadClassName?: string;
  tbodyClassName?: string;
  trClassName?: string;
  tdClassName?: string;
  thClassName?: string;
  statusClassName?: string;
  actionsClassName?: string;
  isLoading?: boolean;
  showPaginationAfter?: number;
  [key: string]: any;
  onRowClick?: (params: Row) => void;
}

function Table({
  columns,
  data,
  onRowClick,
  tableClassName,
  theadClassName,
  trClassName,
  thClassName,
  initialState,
  tdClassName,
  showPaginationAfter = 10,
  statusClassName,
  actionsClassName,
  isLoading = false,
  ...rest
}: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,

    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      initialState: { pageIndex: 0, pageSize: 10, ...initialState },
      data,
    },
    useFilters, // useFilters!
    useSortBy,
    usePagination // new
  );

  return (
    <>
      {/*  header group (filter row) */}
      <div className="sm:flex sm:gap-x-2">
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render('Filter')}
              </div>
            ) : null
          )
        )}
      </div>
      {/* table */}
      <div className="mt-4 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg text-[12px]">
              <table
                {...getTableProps()}
                className={mergeClassnames(
                  'min-w-full divide-y divide-gray-200',
                  tableClassName
                )}
                {...rest}
              >
                <thead
                  className={mergeClassnames(
                    'bg-white font-bold',
                    theadClassName
                  )}
                >
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className={mergeClassnames(
                            'group px-6 py-3 text-left text-[12px] font-bold  capitalize tracking-wider border-x-[1.5] border-gray-400/40',
                            thClassName
                          )}
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render('Header')}
                            {/* Add a sort direction indicator */}
                            <span>
                              {column.isSorted ? (
                                column.isSortedDesc ? (
                                  <SortDownIcon className="w-4 h-4 text-gray-400" />
                                ) : (
                                  <SortUpIcon className="w-4 h-4 text-gray-400" />
                                )
                              ) : (
                                <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                              )}
                            </span>
                          </div>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  {...getTableBodyProps()}
                  className="bg-white divide-y divide-gray-[#1C1C1C]"
                >
                  {isLoading && (
                    <tr className="text-center items-center">
                      <td
                        colSpan={columns.length}
                        className="px-auto py-4 whitespace-nowrap text-center h-[100px] items-center"
                      >
                        <div className="flex flex-col text-center justify-center">
                          <Loader size="md" />
                        </div>
                        <p className="mt-2 text-sm text-gray-500">
                          Please wait while we load the data
                        </p>
                      </td>
                    </tr>
                  )}
                  {(page.length > 0 &&
                    page.map((row, i) => {
                      prepareRow(row);

                      return (
                        <tr
                          {...row.getRowProps()}
                          onClick={() => onRowClick && onRowClick(row)}
                          className={mergeClassnames(
                            onRowClick && 'cursor-pointer hover:bg-gray-100',
                            trClassName
                          )}
                        >
                          {!isLoading &&
                            row.cells.length > 0 &&
                            row.cells.map((cell) => {
                              return (
                                <td
                                  {...cell.getCellProps()}
                                  className={mergeClassnames(
                                    'px-6 py-4 whitespace-nowrap text-[12px]',
                                    tdClassName
                                  )}
                                  role="cell"
                                >
                                  {{
                                    status: (
                                      <StatusPill
                                        value={cell.value}
                                        className={statusClassName}
                                      />
                                    ),
                                    actions: (
                                      <ActionPill
                                        actions={cell.value}
                                        className={actionsClassName}
                                      />
                                    ),
                                    default: cell.render('Cell'),
                                  }[cell.column.id] || cell.render('Cell')}
                                </td>
                              );
                            })}
                        </tr>
                      );
                    })) || (
                    <tr className="text-center items-center">
                      {!isLoading && (
                        <td
                          colSpan={columns.length}
                          className="px-auto py-4 whitespace-nowrap text-center h-[100px] items-center"
                        >
                          <div className="flex text-center justify-center">
                            <NoDataIcon className="w-16 h-16 text-gray-500" />
                          </div>
                          <p className="mt-2 text-sm text-gray-500">
                            No data available
                          </p>
                        </td>
                      )}
                    </tr>
                  )}
                </tbody>
              </table>
              {/* display pagination only when data is up to pagesize value */}
              {data.length > showPaginationAfter && (
                <div className="py-3 flex items-center justify-between">
                  <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div className="flex gap-x-2 items-baseline">
                      <span className="text-sm text-gray-700">
                        Page{' '}
                        <span className="font-medium">{pageIndex + 1}</span> of{' '}
                        <span className="font-medium">
                          {pageOptions.length}
                        </span>
                      </span>
                      <label>
                        <span className="sr-only">Items Per Page</span>
                        <select
                          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          value={pageSize}
                          onChange={(e) => {
                            setPageSize(Number(e.target.value));
                          }}
                        >
                          {[5, 10, 20].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              Show {pageSize}
                            </option>
                          ))}
                        </select>
                      </label>
                    </div>
                  </div>

                  <div className="flex justify-between sm:hidden">
                    <PaginateButton
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      Previous
                    </PaginateButton>
                    <PaginateButton
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                    >
                      Next
                    </PaginateButton>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
