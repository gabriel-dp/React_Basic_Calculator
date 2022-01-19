import { DisplayContainer, ResultContainer, OperationContainer } from './styles';

const Display = ({result, operation}) => {
    return (
        <>
            <DisplayContainer>
                <OperationContainer>
                    {operation}
                </OperationContainer>
                <ResultContainer>
                    {result}
                </ResultContainer>
            </DisplayContainer>
        </>
    );
}

export default Display;