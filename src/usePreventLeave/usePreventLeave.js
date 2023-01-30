export const usePreventLeave = () => {
    const check = (e) => {
        e.preventDefault();
        e.returnValue = '';
    };
    const enableProtect = () => window.addEventListener('beforeunload', check);
    const disableProtect = () => window.removeEventListener('beforeunload', check);
    return { enableProtect, disableProtect }
}