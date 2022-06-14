import React from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import "./table.scss";

export default function Table({
  columns,
  data,
  headerVisible = true,
  paginate = true,
  responsive = false,
}) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    rows,
    canPreviousPage,
    canNextPage,
    // pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 2 },
    },
    useSortBy,
    usePagination
  );
  return (
    <>
      {/* <pre>
        <code>
          {JSON.stringify(
            {
              pageIndex,
              pageSize,
              pageCount,
              canNextPage,
              canPreviousPage,
            },
            null,
            2
          )}
        </code>
      </pre> */}
      <div className="col-4  ">
        <select
          className="p-2 px-3 prod_select__custom "
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show Entries | {pageSize}
            </option>
          ))}
        </select>
      </div>
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
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* {column.render("Header")} */}
                        <span>
                          {column.isSorted
                            ? column.isSortedDesc
                              ? " 🔽"
                              : " 🔼"
                            : ""}
                        </span>
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

          <div className="pagination">
            {/* <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="material-icons p-2 "
            >
              chevron_left
              {"<<"}
            </button>{" "}
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              {"<"}
            </button>{" "}
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              {">"}
            </button>{" "}
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              {">>"}
            </button>{" "} */}
            <span
              onClick={() => gotoPage(0)}
              disabled={canPreviousPage}
              className="material-icons p-2 "
            >
              chevron_left
            </span>
            <span
              onClick={() => previousPage()}
              disabled={canPreviousPage}
              className="cust__icon  p-2 px-3"
            >
              1
            </span>
            <span
              onClick={(cust__icon) => nextPage()}
              disabled={canNextPage}
              className="  p-2 px-3"
            >
              2
            </span>
            <span
              onClick={() => nextPage()}
              disabled={canNextPage}
              className="p-2  px-3"
            >
              3
            </span>
            <span
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="material-icons p-2"
            >
              chevron_right
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

// export default Table
  {
    /* {pageCount} / {pageIndex + 1} */
  }

