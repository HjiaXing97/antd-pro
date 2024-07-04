import { FC, useEffect } from "react";
import type { BaseTableProps } from "./type";

const BaseTable: FC<BaseTableProps> = ({ request, data }) => {
  useEffect(() => {
    if (request) request({ pageSize: 10, current: 1 });
    console.log(data);
  }, []);

  return <>111</>;
};

export default BaseTable;
