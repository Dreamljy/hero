// 召唤师技能页面


import style from './index.less'
import React,{FC,useState} from 'react';
import { query } from './service';
import { useRequest} from 'alita'
import { Row, Col } from 'antd';

interface SummonerPageProps {};
const SummonerPage :FC<SummonerPageProps> = ()=>{

    const summoner=[
        {  
        "summoner_id": 80110,
        "summoner_name": "狂暴",
        "summoner_rank": "LV.5解锁",
        "summoner_description": "60秒CD：使用期间增加10%伤害、增加15%韧性、20%的物理吸血和法术吸血，持续7秒"
        }, 
    ];
    const { data: item = summoner } = useRequest(query);
    
    let [mydata,setMydate] = useState(item[0])
    return (
        <div className={style.content}>
            <ul className={style.left}>
                <Row>
                    {item.map( (item:any) => {
                        return(
                            <Col key={item.summoner_id} span={5} className={style.item} onClick={()=>setMydate(item)} >
                             {/* https://game.gtimg.cn/images/yxzj/img201606/itemimg/1111.jpg */}
                            <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${item.summoner_id}.jpg`} />
                                <p className="myp">{item.summoner_name}</p>
                            </Col>
                        )
                    }
                    
                    )}
                </Row>
            </ul>
            <div className={style.right}>
                <img src={`https://game.gtimg.cn/images/yxzj/img201606/summoner/${mydata.summoner_id}-big.jpg`} alt="" />
                <p className={style.p_1}>{mydata.summoner_name}</p>
                <p className={style.p_2}>{mydata.summoner_rank}</p>
                <p className={style.p_3}>{mydata.summoner_description}</p>
            </div>
        </div>
    )
}

export default SummonerPage;


