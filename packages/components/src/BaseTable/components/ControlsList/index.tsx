import { FC } from "react";
import { Button, Tooltip } from "antd";
import {
  PlusOutlined,
  UploadOutlined,
  DownloadOutlined,
  RedoOutlined,
  SettingOutlined,
  LineHeightOutlined,
} from "@ant-design/icons";

import type { IControlsProps } from "../../type";
import { ToolBarStyle, SubTitle, RightToolBar, ToolBarIcon } from "./style";

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
        <ToolBarIcon>
          <Tooltip title={"刷新"}>
            <RedoOutlined />
          </Tooltip>
          <Tooltip title={"密度"}>
            <LineHeightOutlined />
          </Tooltip>
          <Tooltip title={"列设置"}>
            <SettingOutlined />
          </Tooltip>
        </ToolBarIcon>
      </RightToolBar>
    </ToolBarStyle>
  );
};

export default ControlsList;
