// 局内道具页面
import style from './index.less'
import React,{FC} from 'react';
import { query } from './service';
import { useRequest} from 'alita'
import { Row, Col } from 'antd';
interface ItemPagProps{}

const ItemPage : FC<ItemPagProps> = () =>{
    const localData = [
        {
            item_id: 1111,
            item_name: "铁剑",
            item_type: 1,
            price: 150,
            total_price: 250,
            des1: "<p>+20物理攻击</p>"
        },
    ];

    const { data: items = localData } = useRequest(query);
    return (
        <div className={style.center}>
            <Row>
                {
                    items.map( (item:any) => {
                        return (<Col key={item.item_id} span={3} className={style.item}>
                            {/* https://game.gtimg.cn/images/yxzj/img201606/itemimg/1111.jpg */}
                            <img src={`https://game.gtimg.cn/images/yxzj/img201606/itemimg/${item.item_id}.jpg`} />
                             <p className="myp">{item.item_name}</p>
                        </Col>)
                    })
                }
            </Row>
        </div>

    )
}
export default ItemPage;

