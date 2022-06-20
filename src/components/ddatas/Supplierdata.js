import React, { useMemo } from "react";
import { RiFileSearchFill } from "react-icons/ri";
import { BsPencilSquare } from "react-icons/bs";
import { AiFillPrinter } from "react-icons/ai";
import { Form } from "react-bootstrap";

const actionIcons = () => {
  return (
    <div className="d-flex align-items-center justify-content-center ">
      <span className="cust_icon_edit  ">
        <BsPencilSquare />
      </span>
      <span className="cust_icon_edit ms-2">
        <RiFileSearchFill />{" "}
      </span>
      <span className="cust_icon_edit ms-2">
        <AiFillPrinter />{" "}
      </span>
    </div>
  );
};
const activeSwitch = () => {
  return (
    <div className="custswitch_color">
      <Form.Check type="switch" id="custom-switch" />
    </div>
  );
};

const riskcategoryred = () => {
  return <div className="cust_riskred_color  "></div>;
};
const riskcategorygreen = () => {
  return <div className="cust_riskgreen_color  "></div>;
};
const riskcategoryyellow = () => {
  return <div className=" cust_riskyellow_color"></div>;
};

export default function Makedata() {
  const data = [
    {
      slno: 1,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryred(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 2,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategorygreen(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 3,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryyellow(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 4,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategorygreen(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 5,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryred(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 6,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryyellow(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 7,
      col1: "Reon Technologies",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryred(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 8,
      col1: "Reon Technologies",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryyellow(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 9,
      col1: "Reon Technologies",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategorygreen(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 10,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryred(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 11,
      col1: "Almoorj Solutions",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryyellow(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 12,
      col1: "AL-RAWAHY EST.DUBAI",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategoryred(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
    {
      slno: 13,
      col1: "Reon Technologies",
      col2: "Contact Person",
      col3: "raveen@abn-intl.com",
      col4: "00971-55-658 6050",
      col5: "1month",
      col6: "100255407700003",
      col7: "3000",
      col8: "22337",
      col9: riskcategorygreen(),
      col10: "233",
      col11: actionIcons(),
      col12: activeSwitch(),
    },
  ];

  let dataChunk = [];
  for (let i = 0; i < data.length; i++) {
    dataChunk.push(data[i]);
  }
  return dataChunk;
}
