import styled from 'styled-components';

export const Button = styled.button`
    background-color: transparent;
    border-radius: 1rem;
    border: none;
    color: white;
    font-size: 3.5vh;
    margin: 10%;
    cursor: pointer;
    transition: background-color 0.2s ease;

    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(5px);



    :hover {
        background-color: rgba(255,255,255,0.25);
    }

    :focus {
        outline: none;
    }

    &.delete,
    &.operator {
        background: rgba(41, 116, 170, 0.25);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

        :hover {
            background-color: rgba(255,255,255,0.25);
        }
    }

    &.equal {
        background: rgba(100, 200, 210, 0.4);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(5px);
        -webkit-backdrop-filter: blur(5px);

        :hover {
            background-color: rgba(255,255,255,0.25);
        }
    }

    @media screen and (min-height: 600px) {
        font-size: 1.4em;
    }

`;