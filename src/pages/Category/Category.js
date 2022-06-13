import Header from 'components/header/Header'
import {React,useMemo} from 'react'
import Button from 'components/button/Button';
import {AiOutlinePlus} from "react-icons/ai"
import {FiUpload} from 'react-icons/fi'
import Newcontact from 'components/customersnewcontact/Newcontact';
import Table from 'components/table/Table';






function Category() {

 const data = useMemo(
    () => [
      {
        slno: 1,
        col1: "Product name",
        col2: "20",
        col3: "Kg",
        col4: "1000",
        col5: "10/Kg",
        col6: "N/A",
        col7: "3%",
        col8: "30",
        col9: " ",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "SL",
        accessor: "slno",
      },
      {
        Header: "PRODUCT",
        accessor: "col1",
      },
      {
        Header: "QTY",
        accessor: "col2",
      },
      {
        Header: "UOM",
        accessor: "col3",
      },
      {
        Header: "PRICING",
        accessor: "col4",
      },
      {
        Header: "UNIT PRICE",
        accessor: "col5",
      },
      {
        Header: "DISCOUNT",
        accessor: "col6",
      },
      {
        Header: "TAX%",
        accessor: "col7",
      },
      {
        Header: "TAX AMOUNT",
        accessor: "col8",
      },
      {
        Header: "NET RATE",
        accessor: "col9",
      },
    ],
    []
  );

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Header />
        </div>
        <div className="container mt-5 justify-content-center">
          <div className="row justify-content-center">
            <div className="d-flex justify-content-start pb-3  border-bottom">
              <div className="col-2">
                <h4>Category</h4>
              </div>
              <div className=" col-2">
                <Button appendIcon={<AiOutlinePlus />}>New Category</Button>
              </div>
              <div className="col-2 ">
                <Button appendIcon={<FiUpload />}>Upload Via CSV</Button>
              </div>

              <div className="d-flex justify-content-end col-6 ">
                <Newcontact />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div>
              <Table
                data={data}
                columns={columns}
                PageSize={true}
                Pagination={true}
                Sorted={true}
                className={true}
                responsive={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category