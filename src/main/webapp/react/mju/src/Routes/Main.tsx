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
margin-top: 50px;
`;

const WeatherContainer = styled.div`
display: flex;
justify-content: center;
margin-top: 30px;
border-bottom: 1px solid gray;
padding-bottom:50px;

`;
const TimeContainer = styled.div`
display: flex;
justify-content: center;
font-size: 40px;
text-align: center;
line-height: 90px;
`;

const WeatherItem = styled.div`
margin:0px 20px;
padding: 15px;
border-radius: 10px;
width: 250px;
background-color: #3a3a3a;
color: #fcfcfc;
box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
`;

const LocationName = styled.div`
font-size: 30px;
text-align: center;
`;
const WeatherTemp = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
line-height: 120px;

div{
    margin-left: 10px;
    height: 120px;
}

`;

const WeatherDetail = styled.div`
display: flex;
justify-content: space-around;
font-size: 15px;
`;

const TimeItem = styled.div`
.clock{
    display: block;
    width: 250px;
    margin: 0px 20px;
    height: 90px;
    background-color: #fcfcfc;
    box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
}

span{
    font-size: 30px;
}
`;

const WeatherLodingContainer = styled.div`
width: 250px;
height: 170px;

border-radius: 10px;
margin:0px 20px;
padding: 15px;

font-size: 40px;
text-align: center;
line-height: 180px;

background-color: #fcfcfc;
color: #606060;
box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05);
`;


function Main() {
    const [koreaData, setKoreaData] = useState<any>();
    const [torontoData, setTorontoData] = useState<any>();
    const [vancouverData, setVancouverData] = useState<any>();

    async function postData() {
        try {
            //응답 성공 
            const response = await axios.post('http://localhost:8080/auth/login', {
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
                        <LocationName>Korea ({koreaData.name})</LocationName>
                        <WeatherTemp>
                            <img src={require(`../assets/main_weather/${koreaData.icon}.png`)} />
                            <div>{koreaData.temp}°</div>
                        </WeatherTemp>
                        <WeatherDetail>
                            <div>체감 {koreaData.tempFeel}° </div>
                            <div>습도 {koreaData.hum}% </div>
                            <div>바람 {koreaData.wind}m/s </div>
                        </WeatherDetail>
                    </WeatherItem>
                    : <WeatherLodingContainer>Loding...</WeatherLodingContainer>}

                {torontoData != null ?
                    <WeatherItem>
                        <LocationName>{torontoData.name}</LocationName>
                        <WeatherTemp>
                            <img src={require(`../assets/main_weather/${torontoData.icon}.png`)} />
                            <div>{torontoData.temp}°</div>
                        </WeatherTemp>
                        <WeatherDetail>
                            <div>체감 {torontoData.tempFeel}°</div>
                            <div>습도 {torontoData.hum}%</div>
                            <div>바람 {torontoData.wind}m/s</div>
                        </WeatherDetail>
                    </WeatherItem>
                    : <WeatherLodingContainer>Loding...</WeatherLodingContainer>}

                {vancouverData != null ?
                    <WeatherItem>
                        <LocationName>{vancouverData.name}</LocationName>
                        <WeatherTemp>
                            <img src={require(`../assets/main_weather/${vancouverData.icon}.png`)} />
                            <div>{vancouverData.temp}°</div>
                        </WeatherTemp>
                        <WeatherDetail>
                            <div>체감 {vancouverData.tempFeel}°</div>
                            <div>습도 {vancouverData.hum}%</div>
                            <div>바람 {vancouverData.wind}m/s</div>
                        </WeatherDetail>
                    </WeatherItem>
                    :  <WeatherLodingContainer>Loding...</WeatherLodingContainer>}
            </WeatherContainer>
            <Title>Time</Title>
            <TimeContainer>
                <TimeItem> <span>Korea</span><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'Asia/Seoul'} /></TimeItem>
                <TimeItem><span>Toronto</span><Clock style={{ backgroundColor: '#3a3a3a', color: "#fcfcfc" }} className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Toronto'} /></TimeItem>
                <TimeItem><span>Vancouver</span><Clock className='clock' format={'HH:mm:ss'} ticking={true} timezone={'America/Vancouver'} /></TimeItem>
            </TimeContainer>

        </MainWrap>
    );
}

export default Main;