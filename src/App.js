import React, { useState }  from 'react';
// import { useInput } from './useInput/useInput';
import { useTabs } from './useTabs/useTabs';

const contents = [
    {
        name : 'HyoungBum',
        content : 'What is a sexy guy in the world'
    },
    {
        name : 'EunJi',
        content : 'What is a sexy girl in the world'
    }
];

function App() {
    const { item, changeItem } = useTabs(0, contents);
    return (
        <>
            <div>
                {contents.map((person, index) => <button key={index} onClick={() => changeItem(index)}>{person.name}</button>)}
                <div>{item.content}</div>
            </div>
        </>
    );
}

export default App;
