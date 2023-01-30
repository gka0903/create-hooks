import React, { useState, useEffect, useRef }  from 'react';
// import { useInput } from './useInput/useInput';
// import { useTabs } from './useTabs/useTabs';
// import { useTitle } from './useTitle/useTitle';
// import { useClick } from './useClick/useClick';
import { useConfirm } from './useConfirm/useConfirm';

function App() {
    const send = () => console.log('i love you');
    const stop = () => console.log('it is okay you are right she does not like me... thank you')
    const confirmMessage = useConfirm('Are you sure? Really?', send, stop)
    return (
       <button onClick={confirmMessage}>Send to her</button>
    );
}

export default App;
