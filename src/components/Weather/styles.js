import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    max-width: 380px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    padding: 10px 30px;
    margin: 20px auto;

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
        margin-top: 10px;
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
`;
