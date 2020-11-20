import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import Navbar from "../../components/header/Navbar";
import SystemsAdmin from "../../components/adminsys/SystemsAdmin";
import axiosInstance from "../../components/axios";

const adminsys = () => {
  const { Header, Content } = Layout;
  const [systems, _setSystems] = useState([]);
  const [refresh, setRefresh] = useState(0);
  const getSystems = async () => (await axiosInstance.get("/adminsys")).data.systems;
  const setSystems = async () => { _setSystems(await getSystems()) };
  const refreshSystems = () => setSystems();
  useEffect(() => {
    console.log('use effect');
    setSystems();
  }, []);
  return (
    <Layout>
      <Header style={{ backgroundColor: "rgb(107, 45, 177)" }}>
        <Navbar />
      </Header>
      <Content>
        <SystemsAdmin systems={systems} refreshData={refreshSystems} />
      </Content>
    </Layout>
  );
};

export default adminsys;