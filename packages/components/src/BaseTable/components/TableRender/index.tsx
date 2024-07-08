import { FC } from "react";
import type { ValueType } from "../../type";
import BaseSelect from "../../../BaseSelect";

interface IProps {
  text: any;
  record: Record<string, any>;
  index: number;
  valueType: ValueType;
  [key: string]: any;
}

const TableRender: FC<IProps> = ({ text, record, valueType, ...reset }) => {
  let valueRender = null;
  switch (valueType) {
    case "money":
      valueRender = <span>￥{text}</span>;
      break;
    case "select":
      valueRender = <BaseSelect valueEnum={reset?.valueEnum} value={text} />;
      break;

    default:
      valueRender = <span>{text}</span>;
  }

  return <>{valueRender}</>;
};

export default TableRender;
