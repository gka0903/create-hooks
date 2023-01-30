export const useConfirm = (message = '', callback, stop) => {
    const confirmAction = () => {
        if (window.confirm(message)){
            callback();
        } else {
            stop();
        }
    }
    return confirmAction;
}