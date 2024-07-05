import { FC } from "react";
import { Button, Form, Input, Row, Col } from "antd";
import type { IColumnTypes, ISearchFormProps } from "../../type";

interface IProps {
  columns: IColumnTypes<any>[];
  searchForm?: ISearchFormProps;
  handleSearch?: (values: any) => void;
}

const SearchForm: FC<IProps> = ({
  columns,
  searchForm,
  handleSearch: handleSearchProps,
}) => {
  const [form] = Form.useForm();

  /** 查询方法 */
  const handleSearch = () => {
    handleSearchProps && handleSearchProps(form.getFieldsValue());
  };

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      style={{ marginBottom: `8px` }}
    >
      <Row gutter={16}>
        {columns.map((v) => (
          <Col span={6} key={v.dataIndex}>
            <Form.Item label={v.title} name={v.dataIndex}>
              <Input />
            </Form.Item>
          </Col>
        ))}
        <Col span={6}>
          <Form.Item>
            <Button type="primary" onClick={handleSearch}>
              {searchForm?.searchText}
            </Button>
            <Button>{searchForm?.resetText}</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;
