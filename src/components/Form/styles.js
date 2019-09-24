import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;

    margin-top: 30px;

    form {
        position: relative;
        width: 380px;

        input {
            background: #fff;
            border: 0;
            border-radius: 2px;
            height: 40px;
            padding: 15px 35px 15px 15px;
            width: 100%;
        }

        button {
            position: absolute;
            top: 0;
            right: 0;
            z-index: 10;
            border: none;
            background: transparent;
            outline: none;

            padding: 9px 5px;
        }
    }
`;
