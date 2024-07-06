import styled from "styled-components";

export const ToolBarStyle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
`;

export const SubTitle = styled.div`
  color: rgba(42, 46, 54, 0.88);
  font-size: 16px;
  font-weight: 500;
`;

export const RightToolBar = styled.div`
  display: flex;
  align-items: center;
  .ant-btn {
    margin-right: 16px;
  }
`;

export const ToolBarIcon = styled.div`
  display: flex;
  align-items: center;
  .anticon {
    margin-right: 16px;
    font-size: 20px;
    cursor: pointer;
  }
`;
