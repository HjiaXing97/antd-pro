import { FC } from "react";
import { Button } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import type { IControlsProps } from "../../type";
import { ToolBarStyle, SubTitle, RightToolBar } from "./style";

const ControlsList: FC<IControlsProps> = ({
  showCreate,
  showExport,
  showImport,
  subTitle,
  ControlsNode,
}) => {
  return (
    <ToolBarStyle>
      <SubTitle>{subTitle}</SubTitle>
      <RightToolBar>
        {showCreate ? (
          <Button type="primary" icon={<PlusOutlined />}>
            新增
          </Button>
        ) : null}
        {showExport ? <Button icon={<DownloadOutlined />}>导出</Button> : null}
        {showImport ? <Button icon={<UploadOutlined />}>导入</Button> : null}
        {ControlsNode}
      </RightToolBar>
    </ToolBarStyle>
  );
};

export default ControlsList;
