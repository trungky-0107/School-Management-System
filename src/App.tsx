import { Layout, Menu, Typography } from 'antd';
import {
  UserOutlined,
  TeamOutlined,
  BookOutlined,
  HomeOutlined,
} from '@ant-design/icons';
import { useState } from 'react';
import './App.css';

const { Header, Sider, Content, Footer } = Layout;
const { Title } = Typography;

function App() {
  const [selectedKey, setSelectedKey] = useState('dashboard');

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider breakpoint="lg" collapsedWidth="0">
        <div className="logo" style={{ padding: '16px', color: 'white', textAlign: 'center', fontSize: 18 }}>
          🎓 SchoolAdmin
        </div>
        <Menu
          theme="dark"
          mode="inline"
          selectedKeys={[selectedKey]}
          onClick={(e) => setSelectedKey(e.key)}
          items={[
            { key: 'dashboard', icon: <HomeOutlined />, label: 'Trang chủ' },
            { key: 'students', icon: <UserOutlined />, label: 'Học sinh' },
            { key: 'teachers', icon: <TeamOutlined />, label: 'Giáo viên' },
            { key: 'subjects', icon: <BookOutlined />, label: 'Môn học' },
          ]}
        />
      </Sider>

      {/* Main content */}
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          <Title level={3} style={{ margin: 0 }}>
            Quản lý trường học
          </Title>
        </Header>
        <Content style={{ margin: '16px' }}>
          {selectedKey === 'dashboard' && <p>📊 Thống kê tổng quan trường học sẽ hiển thị ở đây.</p>}
          {selectedKey === 'students' && <p>👨‍🎓 Danh sách học sinh (component StudentTable sẽ nằm ở đây)</p>}
          {selectedKey === 'teachers' && <p>👩‍🏫 Danh sách giáo viên (component TeacherList sẽ nằm ở đây)</p>}
          {selectedKey === 'subjects' && <p>📚 Danh sách môn học (component SubjectTable sẽ nằm ở đây)</p>}
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          © {new Date().getFullYear()} Hệ thống quản lý trường học
        </Footer>
      </Layout>
    </Layout>
  );
}

export default App;
