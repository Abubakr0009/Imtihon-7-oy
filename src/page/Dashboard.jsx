// src/pages/Dashboard.js

import React, { useState } from "react";
import { Layout, Menu, Button } from "antd";
import {
  DashboardOutlined,
  UserOutlined,
  TeamOutlined,
  CreditCardOutlined,
  SettingOutlined,
  FileTextOutlined,
  StarOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useNavigate, Routes, Route, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import DashboardHome from "./DashboardHome";
import logo from "../assets/logo.svg";

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();
  const location = useLocation();

  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    about: "",
    class: "",
    gender: "",
    age: "",
    image: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      image: e.target.files[0],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Form ma'lumotlarini backendga yuborish jarayoni
  };

  const menuItems = [
    { key: "dashboard", icon: <DashboardOutlined />, label: "Dashboard" },
    { key: "teachers", icon: <UserOutlined />, label: "Teachers" },
    { key: "students", icon: <TeamOutlined />, label: "Students" },
    { key: "billing", icon: <CreditCardOutlined />, label: "Billing" },
    {
      key: "settings",
      icon: <SettingOutlined />,
      label: "Settings and profile",
    },
    { key: "exams", icon: <FileTextOutlined />, label: "Exams" },
    { key: "features", icon: <StarOutlined />, label: "Features", type: "new" },
  ];

  const handleLogout = () => {
    logout();
    navigate("/signin");
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        width={250}
        style={{
          backgroundColor: "#152259",
          position: "fixed",
          left: 0,
          top: 0,
          bottom: 0,
          height: "100vh",
        }}
      >
        <div style={{ textAlign: "center", padding: "16px" }}>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "80%", maxWidth: "120px" }}
          />
          <div
            style={{
              fontFamily: "Kumbh Sans",
              fontWeight: 600,
              fontSize: 14,
              lineHeight: "100%",
              letterSpacing: 0,
              color: "white",
              marginTop: 30,
            }}
          >
            Udemy Inter. school
          </div>
        </div>

        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[location.pathname.split("/")[1] || "dashboard"]}
          onClick={({ key }) => navigate(`/${key}`)}
          style={{
            backgroundColor: "#152259",
          }}
        >
          {menuItems.map((item) => (
            <Menu.Item key={item.key} icon={item.icon}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.label}</span>
                {item.type === "new" && (
                  <span style={{ color: "aqua", fontSize: 10 }}>NEW</span>
                )}
              </div>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>

      <Layout style={{ marginLeft: 220 }}>
        <Header
          style={{
            background: "#fff",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "Kumbh Sans",
                fontWeight: 500,
                fontSize: 18,
                lineHeight: "100%",
                letterSpacing: 0,
                marginBottom: 16,
                color: "grey",
                marginLeft: 300,
              }}
            >
              Learn how to launch faster <br /> watch our webinar for tips from
              our experts and get a limited time offer.
            </h2>
          </div>

          <div style={{ alignItems: "center", gap: 16 }}>
            <BellOutlined style={{ fontSize: 18 }} />
          </div>
          <Button type="primary" onClick={handleLogout}>
            Log out
          </Button>
        </Header>

        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          <Routes>
            <Route
              path="/dashboard"
              element={<DashboardHome />}
            />
            <Route
              path="/teachers"
              element={
                <div>
                  <button onClick={() => setShowForm(!showForm)}>
                    Add Developer
                  </button>
                  {showForm && (
                    <form onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="fullName"
                        placeholder="Full Name"
                        value={formData.fullName}
                        onChange={handleInputChange}
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                      />
                      <textarea
                        name="about"
                        placeholder="About"
                        value={formData.about}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        name="class"
                        placeholder="Class"
                        value={formData.class}
                        onChange={handleInputChange}
                      />
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        value={formData.age}
                        onChange={handleInputChange}
                      />
                      <input
                        type="file"
                        name="image"
                        onChange={handleImageChange}
                      />
                      <button type="submit">Submit</button>
                    </form>
                  )}
                </div>
              }
            />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
