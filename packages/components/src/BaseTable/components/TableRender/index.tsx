import { FC } from "react";
import type { ValueType } from "../../type";
import BaseSelect from "../../../BaseSelect";

interface IProps {
  text: any;
  record: Record<string, any>;
  index: number;
  valueType: ValueType;
}

const TableRender: FC<IProps> = ({ text, record, valueType }) => {
  let valueRender = null;
  switch (valueType) {
    case "money":
      valueRender = <span>￥{text}</span>;
      break;
    case "select":
      valueRender = <BaseSelect />;
      break;

    default:
      valueRender = <span>{text}</span>;
  }

  return <>{valueRender}</>;
};

export default TableRender;
