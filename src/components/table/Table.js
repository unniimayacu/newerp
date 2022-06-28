import React, { useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import "./table.scss";
import Pagination from "@mui/material/Pagination";

export default function Table({
  columns,
  data,
  headerVisible = true,
  paginate = true,
  responsive = false,
  PageSize = true,
  pagination = false,
  Sorted = true,
  className = false,
  pagecenter = false,
  Hrms_dash_table_header_color = false,
  Tbody_style = false,
  table_header_fixed = false ,
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
    setPageSize,
    gotoPage,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },

    useSortBy,
    usePagination
  );

  console.log(data);

  // const [pagevalue, setPagevalue] = useState(0);

  let [pagee, setPage] = useState(1);
  const handleChange = (e, index) => {
    console.log("page index : ", index - 1);
    gotoPage(index - 1);
    setPage(index);
    // data.jump(index + 1);
  };

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
        {PageSize && (
          <select
            className="p-2 px-2 prod_select__custom "
            value={pageSize}
            onChange={(e) => {
              // let tmpVal = data / e.target.value;
              // setPageSize(tmpVal);
              setPageSize(Number(e.target.value));
            }}
          >
            {[10, 20, 30, 40, 50].map((pageSize) => (
              <option key={pageSize} value={pageSize}>
                Show Entries |{pageSize}
              </option>
            ))}
          </select>
        )}
      </div>
      <div className="cif__table-wrapper">
        {/* {paginate && (
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
        )} */}
        <div
          className={`cif__table-table-container ${
            responsive ? "table-responsive" : ""
          }`}
        >
          <table {...getTableProps()} className="table table-borderless">
            {headerVisible && (
              <thead>
                {headerGroups.map((headerGroup) => (
                  <tr
                    {...headerGroup.getHeaderGroupProps()}
                    className={`${className && "table_header_color"} ${
                      Hrms_dash_table_header_color &&
                      "hrms_table_dash_header_color"
                    } ${table_header_fixed && "table_header_fix"}`}
                  >
                    {headerGroup.headers.map((column) => (
                      <th
                        className={`${responsive ? "whitespace-nowrap" : ""}  `}
                        {...column.getHeaderProps()}
                        {...column.getHeaderProps(
                          column.getSortByToggleProps()
                        )}
                      >
                        {column.render("Header")}
                        {/* {column.render("Header")} */}
                        {Sorted && (
                          <span>
                            {column.isSorted
                              ? column.isSortedDesc
                                ? " 🔽"
                                : " 🔼"
                              : ""}
                          </span>
                        )}
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
            )}
            <tbody
              {...getTableBodyProps()}
              className={`${Tbody_style && "table_body_style"}`}
            >
              {paginate
                ? page.map((row, i) => {
                    console.log(page);
                    // console.log(i);
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

          <div className={`${pagecenter && "page_div_center"}`}>
            {pagination && (
              <div className="d-flex algn-items-center">
                <Pagination
                  count={pageCount}
                  color="primary"
                  page={pagee}
                  onChange={handleChange}
                />
              </div>
            )}
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

{
  /*                 
                <span
                  onClick={(cust__icon) => nextPage()}
                  disabled={canNextPage}
                  className=" active p-2 px-3"
                >
                  2
                </span>
                <span
                  onClick={() => nextPage()}
                  disabled={canNextPage}
                  className="p-2  px-3"
                >
                  3
             
             
             
                </span> */
}
{
  /* <button
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
            </button>{" "} */
}
//     <select
//   value={pageSize}
//   onChange={e => {
//     setPageSize(Number(e.target.value))
//   }}
// >
//   {[10, 20, 30, 40, 50].map(pageSize => (
//     <option key={pageSize} value={pageSize}>
//       Show {pageSize}
//     </option>
//   ))}
// </select>
