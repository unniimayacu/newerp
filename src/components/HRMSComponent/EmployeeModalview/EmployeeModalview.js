import Table from 'components/table/Table';
import {React,useState,useMemo} from 'react'
import Modal from "react-bootstrap/Modal";
import TableData from '../../ddatas/Hrms_Dummy_datas/HRMSTableDummyData'
import './EmployeeModalview.scss'

function EmployeeModalview(props) {

      const columns2 = useMemo(
        () => [
          {
            Header: " ",
            accessor: "blank",
          },
          {
            Header: "Employee ID",
            accessor: "emp_id",
          },
          {
            Header: "Name",
            accessor: "name",
          },
          {
            Header: "Total Amount Required For Refund",
            accessor: "totalfund",
          },
        ],
        []
      );
       const columns3 = useMemo(
         () => [
           {
             Header: " ",
             accessor: "blank",
           },
           {
             Header: "Employee ID",
             accessor: "emp_id",
           },
           {
             Header: "Name",
             accessor: "name",
           },
           {
             Header: "Leave Type",
             accessor: "leave",
           },
           {
             Header: "Required Date",
             accessor: "reqdate",
           },
         ],
         []
       );
               const columns4 = useMemo(
                 () => [
                   {
                     Header: " ",
                     accessor: "blank",
                   },
                   {
                     Header: "Employee ID",
                     accessor: "emp_id",
                   },
                   {
                     Header: "Name",
                     accessor: "name",
                   },
                   {
                     Header: "Expiry Date",
                     accessor: "expdate",
                   },
                 ],
                 []
               );
                const columns5 = useMemo(
                  () => [
                    {
                      Header: "Name ",
                      accessor: "name",
                    },
                    {
                      Header: "Document Name",
                      accessor: "document",
                    },
                    {
                      Header: "Doc Type",
                      accessor: "doctype",
                    },
                    {
                      Header: "Required fund (For Renew The Document)",
                      accessor: "fundreq",
                    },

                    {
                      Header: "Expiry Date",
                      accessor: "expdate",
                    },
                    {
                      Header: " ",
                      accessor: "search",
                    },
                  ],
                  []
                );
          




   const columns = useMemo(
     () => [
       {
         Header: " ",
         accessor: "blank",
       },
       {
         Header: "Employee ID",
         accessor: "emp_id",
       },
       {
         Header: "Name",
         accessor: "name",
       },
     ],
     []
   );
   const data = useMemo(() => TableData(), []);
   



  return (
    <div>
      <Modal
        {...props}
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        width="100%"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body className="model_body_hrms">
          <>
            <div>
              {props.totalEmployee && (
                <Table
                  data={data}
                  columns={columns}
                  PageSize={false}
                  pagination={false}
                  Sorted={false}
                  className={false}
                  responsive={false}
                  pagecenter={false}
                  Hrms_dash_table_header_color={true}
                />
              )}
              {props.totalRefund && (
                <Table
                  data={data}
                  columns={columns2}
                  PageSize={false}
                  pagination={false}
                  Sorted={false}
                  className={false}
                  responsive={false}
                  pagecenter={false}
                  Hrms_dash_table_header_color={true}
                />
              )}
              {props.pending_leaves && (
                <Table
                  data={data}
                  columns={columns3}
                  PageSize={false}
                  pagination={false}
                  Sorted={false}
                  className={false}
                  responsive={false}
                  pagecenter={false}
                  Hrms_dash_table_header_color={true}
                />
              )}
              {props.visa && (
                <Table
                  data={data}
                  columns={columns4}
                  PageSize={false}
                  pagination={false}
                  Sorted={false}
                  className={false}
                  responsive={false}
                  pagecenter={false}
                  Hrms_dash_table_header_color={true}
                />
              )}
              {props.Document && (
                <Table
                  data={data}
                  columns={columns5}
                  PageSize={false}
                  pagination={false}
                  Sorted={false}
                  className={false}
                  responsive={false}
                  pagecenter={false}
                  Hrms_dash_table_header_color={true}
                  
                />
              )}
            </div>
          </>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default EmployeeModalview