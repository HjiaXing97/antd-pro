import type { TableColumnType } from "antd";

/**
 * 表格请求数据参数
 */
interface IRequestParams {
  /** 分页参数  */
  pageSize: number;

  /**
   * 当前页
   */
  current: number;

  /**
   * 其他查询参数
   */
  [key: string]: any;
}

/**
 * 请求返回数据
 */
type RequestProps = (params: IRequestParams) => {
  data: any[];
  current?: number;
  total?: number;
};

/**
 * 表格列配置
 */
export interface IColumnTypes<RecordType> extends TableColumnType<RecordType> {
  render?: (text: any, record: RecordType, index: number) => React.ReactNode;

  title: string;

  /**
   * 是否在表格中隐藏
   */
  hideInTable?: boolean;

  /**
   * 是否在搜索表单中隐藏
   */
  hideInSearch?: boolean;

  /**
   * 是否在表单中隐藏
   */
  hideInForm?: boolean;
}

/**
 * 搜索表单配置
 */
export interface ISearchFormProps {
  searchText?: "查询" | string;
  resetText?: "重置" | string;
}

/**
 * 操作区域配置
 */
export interface IControlsProps {
  /**
   * 是否显示新增按钮
   */
  showCreate?: boolean;

  /**
   * 是否显示导出按钮
   */
  showExport?: boolean;

  /**
   * 是否显示导入按钮
   */
  showImport?: boolean;

  /**
   * 自定义操作区域
   */
  ControlsNode?: React.ReactNode;

  /**
   * 是否隐藏操作区域
   */
  hideControls?: boolean;

  /**
   * 表格子标题
   */
  subTitle?: string;
}

/**
 * 表格基础配置
 */
export interface BaseTableProps {
  /**
   * 请求数据的方法
   */
  request?: RequestProps;

  /**
   * 表格静态数据，优先级高于request请求返回的数据
   */
  data?: any[];

  /**
   * 表格列配置
   */
  column: IColumnTypes<any>[];
  search?: ISearchFormProps;
  toolBar?: IControlsProps;
}
