import React, { useState } from "react";
import { useTable, usePagination, useSortBy } from "react-table";
import "./table.scss";

export default function Table({
  columns,
  data,
  headerVisible = true,
  paginate = true,
  responsive = false,
  PageSize = true,
  Pagination = true,
  Sorted = true,
  className = false,
  pagecenter = false,
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

  const PaginateBtn = ({ pageNum, children, onClick }) => {
    return (
      <span
        onClick={onClick}
        disabled={canPreviousPage}
        className="cust__icon p-2 px-3"
      >
        {children}
      </span>
    );
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
               setPageSize(Number(e.target.value));
              // let tmpVal = data / e.target.value;
              // setPageSize(tmpVal);
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
                    className={`${className && "table_header_color"}`}
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
            <tbody {...getTableBodyProps()}>
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
         

            {Pagination && (
              <div className="d-flex algn-items-center" >
                <span
                  onClick={() => gotoPage(0)}
                  disabled={canPreviousPage}
                  className="material-icons p-2 "
                >
                  chevron_left
                </span>
                {
                  // Array.from(Array(pageCount).map((item,index) => {
                  //   return <returnBtn>{index+1}</returnBtn>;
                  // }))
                  [...Array(pageCount).keys()].map((item, index) => {
                    return (
                      <PaginateBtn
                        onClick={() => gotoPage(index)}
                        pageNum={index }
                      >
                        {index}
                      </PaginateBtn>
                    );
                  })
                }

           
                <span
                  onClick={() => gotoPage(pageCount - 1)}
                  disabled={!canNextPage}
                  className="material-icons p-2"
                >
                  chevron_right
                </span>
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