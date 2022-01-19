import styled from 'styled-components';

export const DisplayContainer = styled.div`
    width: 97%;
    height: 20%;
    margin: 5%;
    border-radius: 1rem;

    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
`;

export const ResultContainer = styled.div`
    width: 100%;
    color: white;
    font-size: 5.25vh;
    height: 60%;
    padding: 0 7%;

    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: clip;

    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-end;

    @media screen and (min-height: 600px) {
        font-size: 2em;
    }
`;

export const OperationContainer = styled.div`
    color: rgba(255,255,255,0.65);
    font-size: 2.5vh;
    height: 40%;
    padding: 0 7%;

    white-space: nowrap; 
    overflow: hidden; 
    text-overflow: clip;

    display: flex;
    flex-direction: row;
    align-items: flex-end;

    @media screen and (min-height: 600px) {
        font-size: 0.95em;
    }
`;