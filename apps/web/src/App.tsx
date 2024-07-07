import { BaseTable, VALUE_TYPE_ENUM } from '@antd-pro/components';
import { Button } from 'antd';

const App = () => {
  const column = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      valueType: VALUE_TYPE_ENUM.SELECT,
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      valueType: VALUE_TYPE_ENUM.MONEY,
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
      <BaseTable
        column={column}
        data={data}
        toolBar={{
          ControlsNode: (
            <>
              <Button>toolBar自定义按钮</Button>
            </>
          ),
        }}
      />
    </div>
  );
};

export default App;
