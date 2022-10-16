import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

import { Button, Col, Menu, Row, Avatar } from "antd";
import React, { useState } from "react";
import AboutMe from "./AboutMe";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("About Me", "1", <PieChartOutlined />),
  getItem("Education", "2", <DesktopOutlined />),
  getItem("Work", "3", <ContainerOutlined />),
  // getItem('Navigation One', 'sub1', <MailOutlined />, [
  //   getItem('Option 5', '5'),
  //   getItem('Option 6', '6'),
  //   getItem('Option 7', '7'),
  //   getItem('Option 8', '8'),
  // ]),
  // getItem('Navigation Two', 'sub2', <AppstoreOutlined />, [
  //   getItem('Option 9', '9'),
  //   getItem('Option 10', '10'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
  // ]),
];
const Homepage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const [selectedKey, setSelectedKey] = useState("1");
  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Menu
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="horizontal"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(e) => {
          setSelectedKey(e);
        }}
      />
      <Row className="flex justify-center p-2 justify-items-center">
        {selectedKey == "1" && (
          <Col span={22} className="flex justify-center ">
            <AboutMe />
          </Col>
        )}
      </Row>
    </div>
  );
};
export default Homepage;
