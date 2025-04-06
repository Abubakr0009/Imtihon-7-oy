import { Typography, Card } from "antd";

const { Title, Text } = Typography;

const DashboardHome = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
      <Title level={3}>Welcome to your dashboard, Udemy school</Title>
      <Text type="secondary">Uyo/school/@teachable.com</Text>

      <Card>
        <Title level={5}>Add other admins</Title>
        <Text>
          Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!
        </Text>
      </Card>

      <Card>
        <Title level={5}>Add classes</Title>
        <Text>
          Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!
        </Text>
      </Card>

      <Card>
        <Title level={5}>Add students</Title>
        <Text>
          Create rich course content and coaching products for your students.
          When you give them a pricing plan, they’ll appear on your site!
        </Text>
      </Card>
    </div>
  );
};

export default DashboardHome;
