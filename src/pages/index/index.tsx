import { useRequest } from 'alita';
import React, { FC } from 'react';
import { query } from './service';
import styles from './index.less';

const HomePage: FC = () => {
  const { data } = useRequest(query);

  return <div className={styles.center}>Hello {data?.text}</div>;
};

export default HomePage;
