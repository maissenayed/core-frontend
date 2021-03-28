import { Card, Col, Layout, Menu, Row, Skeleton, Typography } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
const { Header, Sider, Content } = Layout;
import './App.less';
function App() {
    return (
        <Layout>
            <Sider trigger={null} collapsible>
                <div
                    className="logo"
                    style={{
                        textAlign: 'center',
                        font: 'normal normal medium 42px/55px IBM Plex Sans',
                        letterSpacing: '0px',
                        color: '#FFFFFF',
                        textTransform: 'capitalize',
                        opacity: '0.88',
                    }}
                >
                    <Row justify="center">
                        <Col>
                            <Typography.Title level={3} style={{ color: '#FFFFFF', opacity: '0.88' }}>
                                Toulisso
                            </Typography.Title>
                        </Col>
                    </Row>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{
                        background: '#0F0629',
                        marginTop: '50%',
                    }}
                >
                    <Menu.Item
                        style={{
                            textAlign: 'center',
                        }}
                        key="1"
                        icon={<UserOutlined />}
                    >
                        Navigation 1
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            textAlign: 'center',
                        }}
                        key="2"
                        icon={<VideoCameraOutlined />}
                    >
                        Navigation 1
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            textAlign: 'center',
                        }}
                        key="3"
                        icon={<UploadOutlined />}
                    >
                        Navigation 1
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            textAlign: 'center',
                        }}
                        key="3"
                        icon={<UploadOutlined />}
                    >
                        Navigation 1
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout
                className="site-layout"
                style={{
                    height: '100vh',
                    overflow: 'scroll',
                    width: '50%',
                }}
            >
                <Header
                    style={{
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                    }}
                >
                    <Row justify="end" gutter={[16, 16]}>
                        <Col>
                            <Typography.Text style={{ color: '#FFFFFF', opacity: '0.88' }}>
                                Maissen ayed
                            </Typography.Text>
                        </Col>
                        <Col>
                            <Avatar />
                        </Col>
                    </Row>
                </Header>
                <Content>
                    <Row justify="center">
                        <Col>
                            <Typography.Title level={1} style={{ color: '#FFFFFF', opacity: '0.88' }}>
                                Welcome Back Mohamed Ali
                            </Typography.Title>
                        </Col>
                    </Row>
                    <Card>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                    <Card>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                    <Card>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                    <Card>
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                </Content>
            </Layout>
            <Sider>
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
                <div className="logo" />
            </Sider>
        </Layout>
    );
}

export default App;
