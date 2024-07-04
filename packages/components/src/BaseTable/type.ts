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

type RequestProps = (params: IRequestParams) => {
  data: any[];
  current?: number;
  total?: number;
};

export interface BaseTableProps {
  request?: RequestProps;
  data?: any[];
}
