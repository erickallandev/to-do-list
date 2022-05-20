import * as C from './styled';
import { Item } from '../../types/Item';

    type Props = {
        item: Item,
        index: number
}

export const ListItem = ({index, item}:Props) => {

    return (
        <C.Container>
            <input 
            type="checkbox" 
            />
            
            <label>{item.activity} - {item.done.toString()}</label>
           
        </C.Container>
    );
}