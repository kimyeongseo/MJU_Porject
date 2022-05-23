import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getItemData } from '../api';

interface MainProps{
    state: string;
}

const MainWrap = styled.div`
display: flex;
justify-content: center;
section{
    width: 1000px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1rem;
    justify-items: center;
}
`;
const ItemCard = styled.div<MainProps>`
background-color: ${(props)=> props.state === "판매 완료" && "rgba(1, 1, 1, 0.7)"};
border: 1px solid black;

.itemCard_itemInfo{
    padding-left: 5px;
}

.itemCard_itemTitle{
    margin: 5px 0;
    display: block;
    font-size: 18px;
}

.itemCard_itemState{
    border: 1px solid gray;
    color: ${(props)=> props.state === "판매 완료" && "white"};
    width: 70px;
    text-align: center;
}

.itemCard_itemImg{
    opacity: ${(props)=> props.state === "판매 완료" && "0.3"};
}
`;

function Main() {
    const [itemData, setItemData] = useState<any[]>([]);

    async function postData() {
        try {
          //응답 성공 
          const response = await axios.post('http://localhost:8080/auth/login',{
                //보내고자 하는 데이터 
              id: "test",
              password: "test"
          });
          console.log(response);
        } catch (error) {
          //응답 실패
          console.error(error);
        }
      }

      useEffect(() => {
          (async () => {
              await postData();
          })();
      }, []);

    useEffect(() => {
        (async () => {
            const data = await getItemData();
            setItemData(data);
        })();
    }, []);

    return (
        <MainWrap>
            <section>
                
            {  itemData && itemData.map((data: any) =>
             <ItemCard state={data.state}>
             <img className='itemCard_itemImg' width="200" height="250" src={data.picture} alt={data.title} />
             <div className='itemCard_itemInfo' key={data.id}>
                 <span className='itemCard_itemTitle'>{data.title}</span>
                 <span className='itemCard_itemPrice'>{data.price}원</span>
                 <div className='itemCard_itemState'>{data.state}</div>
                 {/* <span className='itemCard_itemDate'>{data.date}</span> */}
             </div>
         </ItemCard>)

            }
            </section>
        </MainWrap>
    );
}

export default Main;