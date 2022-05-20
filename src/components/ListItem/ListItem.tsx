import * as C from './styled';
import { Item } from '../../types/Item';

    type Props = {
        item: Item,
        index: number,
        onChange: (id: number, done: boolean) => void
}

export const ListItem = ({index, item, onChange}:Props) => {

    return (
        <C.Container>
            <input 
            type="checkbox"
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            />
            
            <label>{item.activity}</label>
           
        </C.Container>
    );
}