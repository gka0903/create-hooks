import React, { useState, useEffect, useRef }  from 'react';
// import { useInput } from './useInput/useInput';
// import { useTabs } from './useTabs/useTabs';
// import { useTitle } from './useTitle/useTitle';
// import { useClick } from './useClick/useClick';
// import { useConfirm } from './useConfirm/useConfirm';

const usePreventLeave = () => {
    const check = (e) => {
        e.preventDefault();
        e.returnValue = '';
    };
    const enableProtect = () => window.addEventListener('beforeunload', check);
    const disableProtect = () => window.removeEventListener('beforeunload', check);
    return { enableProtect, disableProtect }
}

function App() {
    const { enableProtect, disableProtect } = usePreventLeave();
    return (
       <>
           <button onClick={enableProtect}>Protect</button>
           <button onClick={disableProtect}>Unprotect</button>
       </>
    );
}

export default App;
