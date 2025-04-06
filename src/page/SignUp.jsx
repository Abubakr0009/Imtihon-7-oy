


import { Form, Input, Button, Card } from "antd";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const onFinish = (values) => {
    login(values);
    navigate("/dashboard");
  };

  return (
    
    <Card  style={{ width: 300, margin: "auto", marginTop: 50 }}>
      <p style={{textAlign:"center", fontWeight:500, color:"#667085"}}>It is our great pleasure to have you on board! </p>
      <Form onFinish={onFinish}>
        <Form.Item name="email" rules={[{ required: true, message: "Enter your Email" }]}>
          <Input placeholder="Enter your Email" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Create your Login" }]}>
          <Input.Password placeholder="reate your Login" />
        </Form.Item>
        <Form.Item name="password" rules={[{ required: true, message: "Create your Password" }]}>
          <Input.Password placeholder="Create your Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block className="bg-#2D88D4">
          Ro‘yxatdan o‘tish
        </Button>
      </Form>
    </Card>
  );
};

export default SignUp;
