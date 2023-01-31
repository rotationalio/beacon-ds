import { useTable, useFilters, useSortBy, usePagination } from 'react-table';

import { SortIcon, SortUpIcon, SortDownIcon } from '../../shared/Icons';
import mergeClassnames from '../../utils/mergeClassnames';
import { StatusPill } from './shared/StatusPill';
import { ActionPill } from './shared/ActionPill';

interface TableProps {
  columns: any;
  data: any;
  className?: string;
  tableClassName?: string;
  theadClassName?: string;
  tbodyClassName?: string;
  trClassName?: string;
  thClassName?: string;
  statusClassName?: string;
}

function Table({
  columns,
  data,
  className,
  tableClassName,
  theadClassName,
  tbodyClassName,
  trClassName,
  thClassName,
  statusClassName,
}: TableProps) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page, // Instead of using 'rows', we'll use page,
  } = useTable(
    {
      columns,
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
              >
                <thead className={mergeClassnames('bg-white', theadClassName)}>
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        <th
                          scope="col"
                          className={mergeClassnames(
                            'group px-6 py-3 text-left text-[12px] font-medium text-gray-500 capitalize tracking-wider border-x-[1.5] border-gray-400/40',
                            trClassName
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
                  {page.map((row, i) => {
                    // new
                    console.log(row);
                    prepareRow(row);

                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          console.log('cell', cell);
                          return (
                            <td
                              {...cell.getCellProps()}
                              className="px-6 py-4 whitespace-nowrap"
                              role="cell"
                            >
                              {{
                                status: (
                                  <StatusPill
                                    value={cell.value}
                                    className={statusClassName}
                                  />
                                ),
                                actions: <ActionPill actions={cell.value} />,
                                default: cell.render('Cell'),
                              }[cell.column.id] || cell.render('Cell')}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Table;
