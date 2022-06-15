import Header from 'components/header/Header'
import {React,useMemo} from 'react'
import Button from 'components/button/Button';
import {AiOutlinePlus} from "react-icons/ai"

import {FiUpload} from 'react-icons/fi'
import Newcontact from 'components/customersnewcontact/Newcontact';
import Table from 'components/table/Table';

import Categorydata from 'components/ddatas/Categorydata';
import Slidebar from 'components/Slidebar/Slidebar';







function Category() {



  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "CATEGORY NAME",
        accessor: "col1",
      },
      {
        Header: "CODE",
        accessor: "col2",
      },
      {
        Header: "DESCRIPTION",
        accessor: "col3",
      },
      {
        Header: "PARENT CATEGORY",
        accessor: "col4",
      },
      {
        Header: "ACTION",
        accessor: "col5",
      },
      {
        Header: "ACTIVE",
        accessor: "col6",
      },

    ],
    []
  );
  const data = useMemo(() => Categorydata(), []); 

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <Header />
          <Slidebar />
         
        </div>
        <div className="container mt-5 justify-content-center">
          <div className="row justify-content-center">
            <div className="d-flex justify-content-start pb-3  border-bottom">
              <div className="col-2">
                <h4>Category</h4>
              </div>
              <div className=" col-2 m-0 p-0">
                <Button 
                //  appendIcon={}
                 >New Category <AiOutlinePlus /></Button>
              </div>
              <div className="col-2 ">
                <Button 
                // appendIcon={}
                >Upload Via CSV <FiUpload /></Button>
              </div>

              <div className="d-flex justify-content-end col-6 ">
                <Newcontact />
              </div>
            </div>
          </div>
          <div className="row mt-5 justify-content-center">
            <div>
              <Table
                data={data}
                columns={columns}
                PageSize={true}
                Pagination={true}
                Sorted={true}
                className={true}
                responsive={true}
                pagecenter={true}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Category