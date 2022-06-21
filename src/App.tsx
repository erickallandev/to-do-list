import * as C from './App.styled';
import { useState } from 'react';
import { Item } from './types/Item';
import  { ListItem } from './components/ListItem/ListItem';
import { AddItem } from './components/AddItem/AddItem';

const App = () => {
    const [list, setList] = useState<Item[]>([
        {id: 1, activity: 'Exemplo de atividade adicionada e pendente', done: false},
        {id: 2, activity: 'Exemplo de atividade adicionada e concluída', done: false}
    ]);

    const handleChangeCheck = (id: number, done: boolean) => {
        const newList = [...list];
        for (let i in newList) {
            if(newList[i].id === id) {
                newList[i].done = done
            }
            setList(newList);
        }
    }

    const handleOnEnter = (taskName: string) => {
        const newList = [...list];
        newList.push({
            id: list.length + 1,
            activity: taskName,
            done: false
        });
        setList(newList);
    }

    const handleRemoveButton = (id: number) => {
        let newList = list.filter(item => item.id !== id);
        setList(newList);
    }

    return (
        <>
        <C.Container>
            <C.Area>
                <C.Header>To do List</C.Header>

                {/* Section to add new activities */}
                <AddItem 
                onEnter={handleOnEnter}
                />


                {/* Section to show the to do list */}

                {list.map((item, index) => (
                    <ListItem 
                    key={index} 
                    item={item}
                    onChange={handleChangeCheck}
                    clickRemoveButton={handleRemoveButton}
                    />
                ))}

            </C.Area>
        </C.Container>
        <C.Footer>Developed by Erick Allan Silva <C.link href='https://eawebdev.com' target='_blank'> - EaWebDev</C.link> 2022</C.Footer>
        </>
    );
}

export default App;