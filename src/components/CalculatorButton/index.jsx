import { Button } from './styles';

const CalculatorButton = ({display, role, numberPressed, insertFloat, inverseNumber, operatorPressed, deleteOnDisplay, solveMath}) => {

    const roleClass = role.split("_")[0];
    const roleId = role.split("_")[1];

    function handleClick () {
        switch (roleClass) {
            case 'number':
                numberPressed(roleId);
                break;
            case 'float':
                insertFloat();
                break;
            case 'inverse':
                inverseNumber();
                break;
            case 'operator':
                operatorPressed(roleId);
                break;
            case 'equal':
                solveMath(true);
                break;
            case 'delete':
                deleteOnDisplay(roleId);
                break;
            default:
        }
    }
    

    return (
        <Button className={roleClass} onClick={() => handleClick()}>
            {display}
        </Button>
    );
} 

export default CalculatorButton;