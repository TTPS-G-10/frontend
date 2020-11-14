import Navbar from "../../components/header/Navbar";
import { Layout } from "antd";
import React, { useState } from "react";
import SerchPatient from "../../components/addPatient/SerchPatient";

const AddPatients = () => {
  const { Header, Content } = Layout;
  const [state, setstate] = useState({});

  return (
    <Layout>
      <Header style={{ backgroundColor: "rgb(107, 45, 177)" }}>
        <Navbar info={state.user} />
      </Header>
      <Content>
        <SerchPatient />
      </Content>
    </Layout>
  );
};

export default AddPatients;
