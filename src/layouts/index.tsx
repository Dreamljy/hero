import { Layout, Menu } from 'antd';
import React from 'react';
import { Link } from 'alita';
import styles from './index.less';

const { Header, Content, Footer } = Layout;

const BasicLayout: React.FC = ({ children }) => {

    let b = 1;
    const c = 2;

    const a = () => { }

    return (
        <Layout>
            <Header>
                <div className={styles.logo}>王者荣耀资料库</div>
                <Menu theme="dark"
                    mode="horizontal"
                >
                    {
                        menuData.map((item, index) => {
                            return (
                                <Menu.Item key={index}  >
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


const menuData = [
    { route: 'hero', name: '英雄' },
    { route: 'item', name: '局内道具' },
    { route: 'summoner', name: '召唤师技能' },
]
export default BasicLayout;