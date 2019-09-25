import styled from 'styled-components';

export const Container = styled.div`
    max-width: 380px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 10px 30px;
    margin: 20px auto;

    animation-duration: 2s;
    animation-name: bounceIn;

    .close {
        display: none;
    }

    .location {
        font-weight: bold;
        font-size: 14px;
        color: #6a6a68;
    }

    .temperature {
        font-weight: bold;
        font-size: 20px;
        color: #535352;
        margin-top: 25px;
        width: 140%;
    }

    .temp_min_max {
        font-weight: bold;
        font-size: 14px;
        color: #535352;
        margin-top: 10px;

        display: flex;
        align-items: center;
    }

    .humidity {
        color: #aba7a1;
        margin-top: 10px;

        span {
            font-weight: bold;
            color: #6a6a68;
        }
    }

    .align {
        display: flex;
        justify-content: space-between;
    }

    @keyframes bounceIn {
        0% {
            transform: scale(0.1);
            opacity: 0;
        }
        60% {
            transform: scale(1.2);
            opacity: 1;
        }
        100% {
            transform: scale(1);
        }
    }
`;
