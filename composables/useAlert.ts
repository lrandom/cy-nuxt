const useAlert = () => {
    const showAlert = (message: string) => {
        alert(message);
    };

    const showConfirm = (message: string) => {
        return confirm(message);
    }

    return {
        showAlert,
        showConfirm,

    };
}

export default useAlert;