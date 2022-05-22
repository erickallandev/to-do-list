import * as C from './styled';
import { Item } from '../../types/Item';

    type Props = {
        item: Item,
        onChange: (id: number, done: boolean) => void,
        clickRemoveButton: (id:number) => void
}

export const ListItem = ({item, onChange, clickRemoveButton}:Props) => {

    return (
        <C.Container done={item.done}>
            <input 
            type="checkbox"
            checked={item.done}
            onChange={e => onChange(item.id, e.target.checked)}
            />
            
            <label>{item.activity}</label>
            <div 
            className='removeButton'
            onClick={e => clickRemoveButton(item.id)}
            >-</div>
           
        </C.Container>
    );
}