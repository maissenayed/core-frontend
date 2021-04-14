import { Card, Col, Layout, Menu, Row, Skeleton, Typography } from 'antd';
import { UserOutlined, VideoCameraOutlined, UploadOutlined } from '@ant-design/icons';
import Avatar from 'antd/lib/avatar/avatar';
const { Header, Sider, Content } = Layout;
import './App.less';
import './index.css';
// @ts-ignore
import styled from 'styled-components';
function App() {
    return (
<Layout 
        className="Layout"
        style={{
           

        }}
        
        
        
        >
            <Sider 
            
                
            
            
            trigger={null} collapsible>
                <div 
                    className="logo"
                    style={{
 }}
                >
                    <Row >
                        <Col style={{        }}>

                            <Typography.Title level={3} 
                            style={{
                            
                                marginTop:'46px',
                                font: 'IBM Plex Sans',  
                                position: 'fixed',
                                opacity: 0.88, 
                                color:' #FFFFFF',
                             
                                }}
                                 >Toulisso
                                
                                </Typography.Title>
                        </Col>
                    </Row>
                </div>
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
                    <Card 
                    style={{
                        height:'560px',
                        border: '4px solid" "#1A1724',
                        borderRadius: '12px',
                    }}
                    
                    
                    >
                        <Skeleton avatar paragraph={{ rows: 4 }} 
                        
                        />
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
