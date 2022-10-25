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

import { Button, Col, Menu, Row, Avatar, Layout } from "antd";
import React, { useState } from "react";
import AboutMe from "./AboutMe";
const { Header, Footer, Sider, Content } = Layout;
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
  // getItem("Education", "2", <DesktopOutlined />),
  // getItem("Work", "3", <ContainerOutlined />),
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
    <Layout>
      <Header>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="horizontal"
          theme="dark"
          //inlineCollapsed={collapsed}
          items={items}
          onClick={(e) => {
            setSelectedKey(e.key);
          }}
        />
      </Header>
      <Content className="bg-gray-200">
        <Row className="flex justify-center p-2 justify-items-center">
          {selectedKey == "1" && (
            <Col span={22} className="flex justify-center ">
              <AboutMe />
            </Col>
          )}
        </Row>
      </Content>
      <Footer
        className="text-white"
        style={{
          textAlign: "center",
          backgroundColor: "rgb(55 65 81)",
          borderTop: "1px solid #E7E7E7",
          color: "white",
          textAlign: "center",
          padding: "",
          position: "fixed",
          left: "0",
          bottom: "0",
          height: "60px",
          width: "100%",
        }}
      >
        ASY
      </Footer>
    </Layout>
  );
};
export default Homepage;
