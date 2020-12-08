import React, { useContext, useEffect } from "react";
import { Form, Switch } from "antd";
import { UserContext } from "src/contexts/Context";

const SymptomsForm = ({ form }) => {
  const { lastEvolution } = useContext(UserContext);
  const values = {
    remember: true,
  };

  useEffect(() => {
    console.log(lastEvolution);
  }, []);

  const initialValues = () => {
    if (lastEvolution != null) {
      if (lastEvolution.drowsiness != null)
        values.drowsiness = lastEvolution.drowsiness;

      if (lastEvolution.anosmia != null) values.anosmia = lastEvolution.anosmia;

      if (lastEvolution.disagreement != null)
        values.disagreement = lastEvolution.disagreement;
    }
    console.log("vaaaaalueeessss", values);
    return values;
  };

  return (
    <>
      {lastEvolution != false && (
        <Form
          form={form}
          layout="vertical"
          style={{ width: "100%" }}
          name="SymptomsForm"
          initialValues={lastEvolution ? initialValues() : { values }}
        >
          <Form.Item label="Somnolencia:" name="drowsiness">
            <Switch
              defaultChecked={
                lastEvolution != null
                  ? lastEvolution.drowsiness === 1
                  : undefined
              }
            />
          </Form.Item>
          <Form.Item label="Anosmia:" name="anosmia">
            <Switch
              defaultChecked={
                lastEvolution != null ? lastEvolution.anosmia === 1 : undefined
              }
            />
          </Form.Item>
          <Form.Item label="Disgeusia:" name="disagreement">
            <Switch
              defaultChecked={
                lastEvolution != null
                  ? lastEvolution.disagreement === 1
                  : undefined
              }
            />
          </Form.Item>
        </Form>
      )}
    </>
  );
};

export default SymptomsForm;
