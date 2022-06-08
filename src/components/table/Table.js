import React from 'react'
import {useTable, usePagination,  useSortBy} from 'react-table'
import './table.scss'

export default function Table({
  columns,
  data,
  headerVisible = true,
  paginate = false,
  responsive = false,
}) {
   const {
     getTableProps,
     getTableBodyProps,
     headerGroups,
     page,
     rows,
     prepareRow,
     canPreviousPage,
     canNextPage,
     pageCount,
     nextPage,
     previousPage,
     gotopage,
     state: { pageIndex, pageSize },
   } = useTable(
     {
       columns,
       data,
       initialState: { pageIndex: 0, pageSize: 5 },
     },
     usePagination
   );


  return (
    <>
      <div className="cif__table-wrapper">
        {paginate && (
          <div className="w-100 position-relative table__nav-btn-wrapper">
            <div className="table__nav-btn-group d-flex align-items-center text-right mt-2">
              <button
                disabled={!canPreviousPage}
                onClick={() => previousPage()}
                className="table__nav-btn"
              >
                <span class="material-icons">keyboard_arrow_left</span>
              </button>
              {/* {pageCount} / {pageIndex + 1} */}
              <button
                disabled={!canNextPage}
                onClick={() => nextPage()}
                className="table__nav-btn"
              >
                <span class="material-icons">keyboard_arrow_right</span>
              </button>
            </div>
          </div>
        )}
        <div
          className={`cif__table-table-container ${
            responsive ? "table-responsive" : ""
          }`}
        >
          <table {...getTableProps()} className="table table-borderless">
            {headerVisible && (
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        className={`${responsive ? "whitespace-nowrap" : ""}`}
                        {...column.getHeaderProps()}
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
            )}
            <tbody {...getTableBodyProps()}>
              {paginate
                ? page.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })
                : rows.map((row, i) => {
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td {...cell.getCellProps()}>
                              {cell.render("Cell")}
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
    </>
  );
}

// export default Table