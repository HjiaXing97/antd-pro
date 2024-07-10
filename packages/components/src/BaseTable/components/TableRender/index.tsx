/*
 * @Author: HuangJX 17388766232@163.com
 * @Date: 2024-07-08 09:02:04
 * @LastEditors: HuangJX 17388766232@163.com
 * @LastEditTime: 2024-07-10 10:43:21
 * @FilePath: \antd-pro\packages\components\src\BaseTable\components\TableRender\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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

const TableRender: FC<IProps> = ({ text, valueType, ...reset }) => {
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

  return <div>{valueRender}</div>;
};

export default TableRender;
