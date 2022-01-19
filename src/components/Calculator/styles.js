import styled from 'styled-components';

export const CalculatorContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100%;
    max-height: 600px;
    background: linear-gradient(45deg, #0f2027, #203a43, #2c5364);
    padding: 1em;
    border-radius: 1em;
    border: 1px rgba(255,255,255,0.25) solid;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ButtonsContainer = styled.div`
    width: 100%;
    height: 80%;
    
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(5, 1fr);
`;