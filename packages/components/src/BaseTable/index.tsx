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

const BaseTable: FC<BaseTableProps> = ({
  column: tableColumn,
  data,
  search,
  request,
  toolBar,
}) => {
  const [column, setColumn] = useState<IColumnTypes<any>[]>(tableColumn);
  const [searchForm, setSearchForm] = useState<ISearchFormProps>(
    search || {
      searchText: "查询",
      resetText: "重置",
    },
  );

  const [tableToolBar, setTableToolBar] = useState<IControlsProps>(
    toolBar || {
      showCreate: true,
      showExport: true,
      showImport: true,
    },
  );

  useEffect(() => {
    const newColumn = tableColumn.filter((item) => !item.hideInTable);
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
      <Table columns={column} dataSource={data}></Table>
    </TableStyle>
  );
};

export default BaseTable;
