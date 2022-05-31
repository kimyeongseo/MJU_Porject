import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getKoreaData, getTorontoData, getVancouverData } from '../lib/weather';

import Clock from 'react-live-clock';

interface MainProps {
    state: string;
}

const MainWrap = styled.div`
color: #3a3a3a;
`;

const Title = styled.div`
text-align: center;
font-size: 35px;
font-weight: 700;
`;

const WeatherContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
`;
const TimeContainer = styled.div`
display: flex;
justify-content: center;
font-size: 40px;
text-align: center;
line-height: 90px;
`;

const WeatherItem = styled.div`
margin-right:10px;
border: 1px solid #3a3a3a;
`;

const TimeItem = styled.div`
.clock{
    display: block;
    width: 250px;
    margin: 0px 20px;
    height: 90px;
    box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
}

span{
    font-size: 30px;
}


`;



function Main() {
    const [koreaData, setKoreaData] = useState<any>();
    const [torontoData, setTorontoData] = useState<any>();
    const [vancouverData, setVancouverData] = useState<any>();

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
            const korea = await getKoreaData();
            const vancouver = await getVancouverData();
            const toronto = await getTorontoData();
            setKoreaData(korea);
            setTorontoData(toronto);
            setVancouverData(vancouver);
        })();
    }, []);

    return (
        <MainWrap>
              <Title>Weather</Title>
            <WeatherContainer>
                {koreaData != null ?
                    <WeatherItem>
                        <div>{koreaData.name}</div>
                        <div>{koreaData.temp}°</div>
                        <div>습도: {koreaData.hum}%</div>
                        <div>체감 온도: {koreaData.tempFeel}°</div>
                        <div>바람 {koreaData.wind}m/s</div>
                    </WeatherItem>
                    : <>Loding...</>}

                {torontoData != null ?
                    <WeatherItem>
                        <div>{torontoData.name}</div>
                        <div>{torontoData.temp}°</div>
                        <div>습도: {torontoData.hum}%</div>
                        <div>체감 온도: {torontoData.tempFeel}°</div>
                        <div>바람 {torontoData.wind}m/s</div>

                    </WeatherItem>
                    : <>Loding...</>}

                {vancouverData != null ?
                    <WeatherItem>
                        <div>{vancouverData.name}</div>
                        <div>{vancouverData.temp}°</div>
                        <div>습도: {vancouverData.hum}%</div>
                        <div>체감 온도: {vancouverData.tempFeel}°</div>
                        <div>바람 {vancouverData.wind}m/s</div>

                    </WeatherItem>
                    : <>Loding...</>}
            </WeatherContainer>
            <Title>Time</Title>
            <TimeContainer>
                <TimeItem> <span>Korea</span><Clock className='clock'  format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'}/></TimeItem>
                <TimeItem><span>Toronto</span><Clock style={{backgroundColor: '#3a3a3a', color: "#fcfcfc"}}  className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Toronto'}/></TimeItem>
                <TimeItem><span>Vancouver</span><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Vancouver'}/></TimeItem>
            </TimeContainer>

        </MainWrap>
    );
}

export default Main;