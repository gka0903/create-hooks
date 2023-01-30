import React, { useState, useEffect, useRef }  from 'react';
// import { useInput } from './useInput/useInput';
// import { useTabs } from './useTabs/useTabs';
// import { useTitle } from './useTitle/useTitle';
import { useClick } from './useClick/useClick';

function App() {
    // const { item, changeItem } = useTabs(0, contents);
    // const titleUpdater = useTitle('Loading...');
    // setTimeout(() => titleUpdater('Home'), 3000)
    const onClcick = () => {
        console.log('hello')
    }
    const title = useClick(onClcick);
    return (
        <h1 ref={title}>Een Ji</h1>
    );
}

export default App;
