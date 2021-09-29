import styled from 'styled-components';

export const SliderContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 940px;
    height: 450px;
    background-color: #fff;
    margin-top: 40px;
    border: solid 2px #cfcdca;
    border-radius: 13px;
`;

export const BannerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 85%;
    height: 80%;
    margin-top: 20px;
    overflow: hidden;
    > img {
        width: 100%;
        height: auto;
    }
`;