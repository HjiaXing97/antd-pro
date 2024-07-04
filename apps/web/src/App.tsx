import { BaseTable } from '@antd-pro/components';

const App = () => {
  const column = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
  ];
  return (
    <div>
      <BaseTable column={column} />
    </div>
  );
};

export default App;
