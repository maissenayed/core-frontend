import './App.less';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Card, Col, Layout, Menu, Row, Skeleton, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;
const LogoWrapper = styled.div`
    text-align: center;
    font: normal normal medium 42px/55px IBM Plex Sans;
    letter-spacing: 0px;
    color: #ffffff;
    text-transform: capitalize;
    opacity: 0.88;
`;
const LayoutWarrper = styled(Layout)`
    height: 100vh;
    overflow: scroll;
    width: 50%;
`;

const MenuWarrper = styled(Menu)`
    margin-top: 50%;
`;
const TitleWarrper = styled(Typography.Title)`
    opacity: 0.88;
    color: #ffffff !important;
`;
function App() {
    return (
        <Layout>
            <Sider trigger={null} collapsible>
                <LogoWrapper>
                    <Row justify="center">
                        <Col>
                            <TitleWarrper level={3}>Toulisso</TitleWarrper>
                        </Col>
                    </Row>
                </LogoWrapper>
                <MenuWarrper theme="dark" mode="inline">
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
                        key="4"
                        icon={<UploadOutlined />}
                    >
                        Navigation 1
                    </Menu.Item>
                </MenuWarrper>
            </Sider>
            <Layout className="site-layout" style={{}}>
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
                        <Row align="middle" gutter={[16, 16]}>
                            <Col>
                                <Skeleton.Avatar active={true} size={'large'} shape={'circle'} />
                            </Col>
                            <Col>
                                <Row gutter={[0, 8]} style={{ marginBottom: '4px' }}>
                                    <Skeleton.Button size="small" />
                                </Row>
                                <Row>
                                    <Skeleton.Button size="small" />
                                </Row>
                            </Col>
                        </Row>
                        <Skeleton />
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
