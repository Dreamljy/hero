import React from 'react';
import styles from './index.less';

//使用antd框架
import { Layout,Menu } from 'antd';
const { Header, Content, Footer } = Layout;
//alita路由,里面封装了react-route的路由
import { Link } from 'alita';
const BasicLayout: React.FC = ({ children,location: { pathname } }) => {
    return(
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库</div>
                <Menu theme="dark" 
                    mode="horizontal" 
                    defaultSelectedKeys={[pathname]} 
                    styles={{lineHeight:'64px'}} 
                >
                    {
                        menuData.map((item,index)=>{
                            return(
                                <Menu.Item key="/hero" key={`${item.route}`} >
                                    <Link to={item.route}>{item.name}</Link>
                                </Menu.Item>
                            )
                        })
                    }

                </Menu>
            </Header>
            
            <Content style={{ padding: '0 50px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                {children}
            </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
            Alita 入门教程 Created by xiaohuoni
            </Footer>
        </Layout>
    )

};


const menuData =[
    { route: 'hero', name: '英雄' },
    { route: 'item', name: '局内道具' },
    { route: 'summoner', name: '召唤师技能' },
]
export default BasicLayout;