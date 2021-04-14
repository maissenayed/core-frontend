import './App.less';

import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Card, Col, Layout, Menu, Row, Skeleton, Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import styled from 'styled-components';

const { Header, Sider, Content } = Layout;
const LogoWrapper = styled.div`
    text-align: 'center';
    font: 'normal normal medium 42px/55px IBM Plex Sans';
    letter-spacing: '0px';
    color: '#FFFFFF';
    text-transform: 'capitalize';
    opacity: '0.88';
`;

function App() {
    return (
        <Layout>
            <Sider trigger={null} collapsible>
                <LogoWrapper>
                    <Row justify="center">
                        <Col>
                            <Typography.Title level={3} style={{ color: '#FFFFFF', opacity: '0.88' }}>
                                Toulisso
                            </Typography.Title>
                        </Col>
                    </Row>
                </LogoWrapper>
                <Menu
                    theme="dark"
                    mode="inline"
                    style={{
                        
                        textAlign:'center',
                        color: '#FFFFFF',
                        marginTop:'132px',
                        marginRight:'169px',

                        
                        
                    }}
                >
                    <Menu.Item
                        style={{
                            letterSpacing: '0px', 
                            opacity: '0.88',
                            font:'normal 600 20px/25px IBM Plex Sans',
                            

                        }}
                        key="1"
                        icon={<UserOutlined />}
                        
                            
                        

                    >Navigation 1
                        
                    </Menu.Item>
                    <Menu.Item
                        style={{
                           
                            letterSpacing: '0px',
                            opacity: 1,
                            font: 'normal 600 20px/25px IBM Plex Sans',
                        
                        }}
                        key="2"
                        icon={<VideoCameraOutlined />}
                    >
                        Navigation 2
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            
                            letterSpacing: '0px',
                            opacity: 1,
                            font: 'normal 600 20px/25px IBM Plex Sans',
                        }}
                        key="3"
                        icon={<UploadOutlined />}
                    >
                        Navigation 3
                    </Menu.Item>
                    <Menu.Item
                        style={{
                            letterSpacing: '0px',
                            opacity: 1,
                            font: 'normal 600 20px/25px IBM Plex Sans',
                            
                        }}
                        key="3"
                        icon={<UploadOutlined />}
                    >
                        Navigation 4
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
                <Content style={{
                    
                }}>
                    <Row justify="center"
                    style={{        }}>
                        
                        
                        
                        
                        <Col style={{           }}>
                        
    
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
                    <Card
                    style={{
                        height:'560px',
                        
                    }}
                    
                    
                    >
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                    <Card
                    style={{
                        height:'560px',
                        
                    }}
                    
                    
                    >
                        <Skeleton avatar paragraph={{ rows: 4 }} />
                    </Card>
                    <Card
                    
                    style={{
                        height:'560px',
                        
                    }}
                    
                    
                    >
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
