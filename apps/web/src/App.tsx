import { BaseTable } from '@antd-pro/components';

const App = () => {
  const getList = ({
    pageSize = 10,
    current = 1,
  }): { data: any[]; total: number } => {
    return {
      data: [],
      total: 0,
    };
  };
  return (
    <div>
      <BaseTable request={getList} />
    </div>
  );
};

export default App;
