import { FC, useEffect, useState } from "react";
import { Table } from "antd";

import type {
  BaseTableProps,
  IColumnTypes,
  ISearchFormProps,
  IControlsProps,
} from "./type";
import SearchForm from "./components/SearchForm";
import ControlsList from "./components/ControlsList";
import { TableStyle } from "./style";

import { DEFAULT_TOO_BAR, DEFAULT_SEARCH_FORM } from "./static";

const BaseTable: FC<BaseTableProps> = ({
  column: tableColumn,
  data,
  search,
  request,
  toolBar,
}) => {
  const [column, setColumn] = useState<IColumnTypes<any>[]>(tableColumn);
  const [searchForm, setSearchForm] = useState<ISearchFormProps>({
    ...DEFAULT_SEARCH_FORM,
    ...(search ?? {}),
  });

  const [tableToolBar, setTableToolBar] = useState<IControlsProps>({
    ...DEFAULT_TOO_BAR,
    ...(toolBar ?? {}),
  });

  useEffect(() => {
    let newColumn = tableColumn.filter((item) => !item.hideInTable);
    newColumn = newColumn.map((v) => ({
      ...v,
      render: (text: any, record: any, index: number) => {
        console.log(v.render, "v.render");
        console.log(text, "text");
        console.log(record, "record");
        console.log(index, "index");
        console.log("================================");

        if (v.render) {
          return v.render(text, record, index);
        }
        return text;
      },
    }));
    setColumn(newColumn);
  }, []);

  const handleSearch = (values: any) => {
    request && request({ pageSize: 10, current: 1, ...values });
  };

  return (
    <TableStyle>
      <SearchForm
        columns={column}
        searchForm={searchForm}
        handleSearch={handleSearch}
      ></SearchForm>
      {toolBar?.hideControls ? null : (
        <ControlsList {...tableToolBar}></ControlsList>
      )}
      <Table columns={column} dataSource={data} bordered></Table>
    </TableStyle>
  );
};

export default BaseTable;
