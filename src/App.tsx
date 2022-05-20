import * as C from './App.styled';
import { useState } from 'react';
import { Item } from './types/Item';
import  { ListItem } from './components/ListItem/ListItem';

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id: 1, activity: 'Fazer a atividade 1 da to-do list', status: 'undone'},
        {id: 2, activity: 'Desempenhar a atividade 2 da to-do list', status: 'undone'},
        {id: 3, activity: 'Subir o projeto da to-do list no GitHub', status: 'done'}
    ]);

    return (
        <C.Container>
            <C.Area>
                <C.Header>To do List</C.Header>

                {/* Section to add new activities */}

                {/* Section to show the to do list */}
                {list.map((item, index) => (
                    <ListItem />
                ))}

            </C.Area>
        </C.Container>
    );
}

export default App;