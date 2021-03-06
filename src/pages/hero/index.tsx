import { useRequest } from 'alita';
import { Row, Col } from 'antd';
import React, { FC } from 'react';
import { query } from './service';
import styles from './index.less';

const HeroPage: FC = () => {
  const localData = [
    {
      ename: 105,
      cname: '廉颇',
      title: '正义爆轰',
      new_type: 0,
      hero_type: 3,
      skin_name: '正义爆轰|地狱岩魂',
    },
  ];

  const { data: heros = localData } = useRequest(query);
  // console.log(heros);

  return (
    <div className={styles.center}>
      <Row>
        {heros.map((item: any, index: number) => {
          return (
            <Col key={index} span={3} className={styles.heroitem}>
              <img
                src={`https://game.gtimg.cn/images/yxzj/img201606/heroimg/${item.ename}/${item.ename}.jpg`}
              />
              <p>{item.cname}</p>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};
export default HeroPage;
