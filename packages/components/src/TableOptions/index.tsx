import { FC } from "react";
import { Button } from "antd";

interface IProps {
  option: { key: string; onClick?: () => void }[];
  record: Record<string, any>;
  index: number;
}

const TableOptions: FC<IProps> = ({ option, record, index }) => {
  const handleEdit = (v: any) => {
    if (v.onClick) {
      v.onClick(record, index);
      return;
    }

    console.log("编辑", record, index);
  };

  const handleDetail = (v: any) => {
    if (v.onClick) {
      v.onClick(record, index);
      return;
    }

    console.log("详情", record, index);
  };

  const handleDelete = (v: any) => {
    if (v.onClick) {
      v.onClick(record, index);
      return;
    }

    console.log("删除", record, index);
  };

  const handleClick = (v: any) => {
    if (v.onClick) {
      v.onClick(record, index);
      return;
    }

    console.log("点击", record, index);
  };
  const btnList = () => {
    return option.map((v) => {
      if (v.key === "edit") {
        return (
          <Button type="link" key={v.key} onClick={(v) => handleEdit(v)}>
            编辑
          </Button>
        );
      }
      if (v.key === "detail") {
        return (
          <Button type="link" key={v.key} onClick={(v) => handleDetail(v)}>
            详情
          </Button>
        );
      }
      if (v.key === "delete") {
        return (
          <Button type="link" key={v.key} onClick={(v) => handleDelete(v)}>
            删除
          </Button>
        );
      }
      return (
        <Button type="link" key={v.key} onClick={(v) => handleClick(v)}>
          {v.key}
        </Button>
      );
    });
  };
  return <div>{btnList()}</div>;
};

export default TableOptions;
