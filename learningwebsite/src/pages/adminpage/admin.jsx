import React from "react";
import { PieChart, Pie, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import { useNavigate, } from "react-router-dom";
import "./admin.scss";
import { UserOutlined, FormOutlined, SolutionOutlined } from "@ant-design/icons";
import { ReadOutlined } from "@ant-design/icons";
import MainLayout from "../../layout/MainLayout";

const Adminpage = () => {
  const [darkTheme, setdarkTheme] = useState(true);
  const [groupedUsers, setGroupedUsers] = useState({});
  const [dataPie, setDataPie] = useState([]);
  const [collapsed, setCollapsed] = useState(false);
  const [isLogin, setisLogin] = useState(false);

  const ToggleTheme = () => {
    setdarkTheme(!darkTheme);
  };

  const navigate = useNavigate();

  const Logout = (event) => {
    sessionStorage.clear();
    navigate("/login");
  };
  const Login = (event) => {
    sessionStorage.clear();
    navigate("/login");
  };

  useEffect(() => {
    const storedUser = sessionStorage.getItem("role");
    console.log(storedUser);
    if (storedUser == null) {
      setisLogin(true);
      navigate("/login");
    }
    if (storedUser === "1") {
      setisLogin(false);
    }


    fetch("http://localhost:8080/backendelearning/service/AdminApi")
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 1) {
          setGroupedUsers(data.users);

          const counts = Object.keys(data.users).map((role) => ({
            name: role === "1" ? "Student" : "Teacher", // Assuming role 1 is Student and role 2 is Teacher
            value: data.users[role].length,
            fill: role === "1" ? "#FFBDFF" : "#C3BDFF", // Example colors, adjust as needed
          }));
          setDataPie(counts);
        } else {
          console.error("Error fetching users:", data.message);
        }
      })
      .catch((error) => console.error("Error:", error));
  }, [isLogin]);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


  return (
    <MainLayout>
        <div className="main-content">
          <div class="row justify-content-center align-items-center g-2">
            <div class="col ">
              <div
                className="btn-shortcut"
                style={{ backgroundColor: "#CBEFFF" }}
              >
                <div
                  className="row"
                  style={{ height: "100%", padding: "10px" }}
                >
                  <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                      <ReadOutlined className="icon" />
                    </div>
                  </div>
                  <div className="col-xl col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="">
                      <p style={{ fontSize: '1rem', fontWeight: '700' }}>10 วิชา</p>
                      <p style={{ fontSize: '1rem', fontWeight: '600' }}>วิชาที่เปิดสอนทั้งหมด</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="btn-shortcut"
                style={{ backgroundColor: "#BEFFB4" }}
              >
                <div
                  className="row"
                  style={{ height: "100%", padding: "10px" }}
                >
                  <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                      <UserOutlined className="icon" />
                    </div>
                  </div>
                  <div className="col-xl col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="">
                      <p style={{ fontSize: '1rem', fontWeight: '700' }}>10 คน</p>
                      <p style={{ fontSize: '1rem', fontWeight: '600' }}>ผู้ใช้งานทั้งหมด</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="btn-shortcut"
                style={{ backgroundColor: "#FFC0C0" }}
              >
                <div
                  className="row"
                  style={{ height: "100%", padding: "10px" }}
                >
                  <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                      <FormOutlined className="icon" />
                    </div>
                  </div>
                  <div className="col-xl col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="">
                      <p style={{ fontSize: '1rem', fontWeight: '700' }}>10 ชุด</p>
                      <p style={{ fontSize: '1rem', fontWeight: '600' }}>แบบทดสอบทั้งหมด</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col">
              <div
                className="btn-shortcut"
                style={{ backgroundColor: "#FFDEB6" }}
              >
                <div
                  className="row"
                  style={{ height: "100%", padding: "10px" }}
                >
                  <div className="col-xl-4 col-md-6 col-sm-12 d-flex justify-content-center align-items-center">
                    <div>
                      <SolutionOutlined className="icon" />
                    </div>
                  </div>
                  <div className="col-xl col-md-6 col-sm-12 d-flex align-items-center">
                    <div className="">
                      <p style={{ fontSize: '1rem', fontWeight: '700' }}>10 ชุด</p>
                      <p style={{ fontSize: '1rem', fontWeight: '600' }}>การบ้านทั้งหมด</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="sub-content">
            <div className="row" style={{ height: '100%' }}>
              <div className="col-xl-5 col-sm-12">
                <ResponsiveContainer
                  width="100%"
                  height="100%"
                >
                  <PieChart width={500} height={500}>
                    <Pie
                      data={dataPie}
                      dataKey="value"
                      cx="50%"
                      cy="50%"
                      outerRadius={"60vw"}
                      fill="#8884d8"
                      labelLine={false}
                      label={renderCustomizedLabel}
                    />
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="col-xl-2 col-sm-12">

              </div>
            </div>
          </div>
        </div>

      
    </MainLayout>
  );

};

export default Adminpage;
