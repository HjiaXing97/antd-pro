import { FC } from "react";
import type { ValueType } from "../../type";
import BaseSelect from "../../../BaseSelect";
import TableOptions from "../../../TableOptions";

interface IProps {
  text: any;
  record: Record<string, any>;
  index: number;
  valueType: ValueType;
  [key: string]: any;
}

const TableRender: FC<IProps> = ({ text, valueType, ...reset }) => {
  let valueRender = null;

  switch (valueType) {
    case "money":
      valueRender = <span>￥{text}</span>;
      break;
    case "select":
      valueRender = <BaseSelect valueEnum={reset?.valueEnum} value={text} />;
      break;
    case "option":
      valueRender = (
        <TableOptions
          option={reset?.options}
          record={reset.record}
          index={reset.index}
        />
      );
      break;

    default:
      valueRender = <span>{text}</span>;
  }

  return <div>{valueRender}</div>;
};

export default TableRender;
