import { useState } from "react";

export const useTabs = (initialCurrentIndex, allTabs) => {
    const [currentIndex, setCurrentIndex] = useState(initialCurrentIndex);
    if(!allTabs || !Array.isArray(allTabs)){
        return;
    }
    return {
        item: allTabs[currentIndex],
        changeItem: setCurrentIndex
    }
}

// const contents = [
//     {
//         name : 'HyoungBum',
//         content : 'What is a sexy guy in the world'
//     },
//     {
//         name : 'EunJi',
//         content : 'What is a sexy girl in the world'
//     }
// ];