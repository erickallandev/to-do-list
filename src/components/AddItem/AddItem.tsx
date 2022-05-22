import * as C from './styled';
import { useState, KeyboardEvent } from 'react';

type Props = {
    onEnter: (taskName: string) => void
}

export const AddItem = ({onEnter}:Props) => {
    const [newActivity, setNewActivity] = useState('');

    const handleKeyUp = (e: KeyboardEvent) => {
        if((e.code === 'Enter' || e.code === 'NumpadEnter') && newActivity !== '') {
            onEnter(newActivity);
            setNewActivity('');
        }
    }

    return (
        <C.Container>
            <input 
            type="text" 
            placeholder="Insira sua nova atividade e pressione enter" 
            value={newActivity}
            onChange={e => setNewActivity(e.target.value)}
            onKeyUp={handleKeyUp}
            
            />
        </C.Container>
    );
}