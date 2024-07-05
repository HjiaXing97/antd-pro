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

  const data = [
    {
      name: 'John Brown',
      age: 32,
      key: 1,
    },
    {
      name: 'Jim Green',
      age: 42,
      key: 2,
    },
    {
      name: 'Joe Black',
      age: 32,
      key: 3,
    },
  ];
  return (
    <div>
      <BaseTable column={column} data={data} />
    </div>
  );
};

export default App;
