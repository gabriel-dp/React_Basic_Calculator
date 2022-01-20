import { useState } from 'react';

import CalculatorButton from '../CalculatorButton';
import Display from '../Display';

import { CalculatorContainer, ButtonsContainer } from './styles';

const Calculator = () => {
    const [primary, setPrimary] = useState('0');
    const [secondary, setSecondary] = useState('');

    const buttons = {
        'delete_all' : 'C',
        'delete_input' : 'CE',
        'delete_single' : '⌫',
        'operator_/' : '/',
        'number_7' : 7,
        'number_8' : 8,
        'number_9' : 9,
        'operator_*' : '*',
        'number_4' : 4,
        'number_5' : 5,
        'number_6' : 6,
        'operator_-' : '-',
        'number_1' : 1,
        'number_2' : 2,
        'number_3' : 3,
        'operator_+' : '+',
        'float' : '.',
        'number_0' : 0,
        'inverse' : '+/-',
        'equal' : '='
    };

    function isNumber (digit) {
        return !isNaN(parseInt(digit));
    }

    function numberPressed (number) {
        const newNumber = (primary === '0' ? '' : primary) + number;
        setPrimary(newNumber);
    }

    function insertFloat () {
        if (primary.indexOf('.') === -1) {
            setPrimary(primary+'.')
        }
    }

    function inverseNumber () {
        if (primary !== '0') {
            setPrimary((0-parseFloat(primary)).toString());
        }
    }

    function operatorPressed (char) {
        if (isNumber(secondary.slice(secondary.length-1)) || secondary === '') { 
            setSecondary(primary+char);
            deleteOnDisplay('input');
        } else {
            if (primary !== '0') {
                solveMath(false, char);
            } else {
                setSecondary(secondary.slice(0, -1)+char);
            }
        }
    }

    function deleteOnDisplay (whatDelete) {
        if (whatDelete === 'all') {
            setPrimary('0');
            setSecondary('');
        } else if (whatDelete === 'input') {
            setPrimary('0');
        } else if (whatDelete === 'single') {
            if (primary !== '0' && primary.length > 1) {
                setPrimary(primary.slice(0, -1));
            } else {
                setPrimary('0');
            }
        }
    }

    function solveMath (fromEqual, nextOperation) {
        const firstNum = parseFloat(secondary);
        const secondNum = parseFloat(primary);

        if (!firstNum || !secondNum) return;
        
        let result;
        switch (secondary.slice(secondary.length-1)) {
            case '-':
                result = firstNum - secondNum;
                break;
            case '*':
                result = firstNum * secondNum;
                break;
            case '/':
                result = firstNum / secondNum;
                break;
            default:
                result = firstNum + secondNum;
        }
        result = result.toString();

        if (fromEqual) {
            setPrimary(result);
            setSecondary('');
        } else {
            setSecondary(result + nextOperation);
            setPrimary('0');
        }

    }
    
    return (
        <CalculatorContainer>
            <Display result={primary} operation={secondary}/>
            <ButtonsContainer>
                {
                    Object.keys(buttons).map((button, index) => (
                        <CalculatorButton 
                            key={button}
                            display={buttons[button]}
                            role={button}
                            numberPressed={numberPressed}
                            insertFloat={insertFloat}
                            inverseNumber={inverseNumber}
                            deleteOnDisplay={deleteOnDisplay}
                            operatorPressed={operatorPressed}
                            solveMath={solveMath}
                        />
                    ))
                }
            </ButtonsContainer>
        </CalculatorContainer>
    );
}

export default Calculator;