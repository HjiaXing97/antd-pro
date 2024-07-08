import {
  FC,
  useEffect,
  useState,
  forwardRef,
  useRef,
  useImperativeHandle,
} from "react";
import _ from "lodash";
import { Table } from "antd";

import type {
  BaseTableProps,
  IColumnTypes,
  ISearchFormProps,
  IControlsProps,
} from "./type";
import SearchForm from "./components/SearchForm";
import ControlsList from "./components/ControlsList";
import TableRender from "./components/TableRender";
import { TableStyle } from "./style";

import { DEFAULT_TOO_BAR, DEFAULT_SEARCH_FORM } from "./static";

const BaseTable: FC<BaseTableProps> = forwardRef(
  ({ column: tableColumn, data, search, request, toolBar }, ref) => {
    const [column, setColumn] = useState<IColumnTypes<any>[]>(tableColumn);
    const [searchForm, setSearchForm] = useState<ISearchFormProps>({
      ...DEFAULT_SEARCH_FORM,
      ...(search ?? {}),
    });

    const [tableToolBar, setTableToolBar] = useState<IControlsProps>({
      ...DEFAULT_TOO_BAR,
      ...(toolBar ?? {}),
    });

    const tableRef = useRef(null);

    useEffect(() => {
      let newColumn = tableColumn.filter((item) => !item.hideInTable);
      newColumn = newColumn.map((v) => ({
        ...v,
        render: (text: any, record: any, index: number) => {
          const param = _.omit(v, ["key"]);

          if (v.render) return v.render(text, record, index);
          if (v.valueType)
            return (
              <TableRender
                text={text}
                record={record}
                index={index}
                valueType={v.valueType}
                {...param}
              />
            );
          return text;
        },
      }));
      setColumn(newColumn);
    }, []);

    const handleSearch = (values: any) => {
      request && request({ pageSize: 10, current: 1, ...values });
    };

    const reload = () => {
      request && request({ pageSize: 10, current: 1 });
    };

    useImperativeHandle(ref, () => ({
      reload,
    }));

    return (
      <TableStyle ref={tableRef}>
        <SearchForm
          columns={column}
          searchForm={searchForm}
          handleSearch={handleSearch}
        ></SearchForm>
        {toolBar?.hideControls ? null : (
          <ControlsList {...tableToolBar} reload={reload}></ControlsList>
        )}
        <Table columns={column} dataSource={data} bordered></Table>
      </TableStyle>
    );
  },
);

export default BaseTable;
