import React, { useState, useEffect, useRef }  from 'react';
// import { useInput } from './useInput/useInput';
// import { useTabs } from './useTabs/useTabs';
// import { useTitle } from './useTitle/useTitle';
// import { useClick } from './useClick/useClick';
// import { useConfirm } from './useConfirm/useConfirm';
// import { usePreventLeave } from "./usePreventLeave/usePreventLeave";
import { useBeforeLeave } from "./useBeforeLeave/useBeforeLeave";

function App() {
    const play = () => {
        console.log('please dont move outside window')
    }
    useBeforeLeave(play);
    return (
       <>
       </>
    );
}

export default App;
