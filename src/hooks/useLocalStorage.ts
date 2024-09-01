type TLocalStorage = {
    name: string;
    action: "SET_DATA" | "GET_DATA" | "DELETE_DATA" | "UPDATE_DATA";
    value?: string;
}

export const UseLocalStorage = (data: TLocalStorage) => {
    if(data.action === "SET_DATA") {
        localStorage.setItem(data.name, JSON.stringify(data.value));
    }
    if(data.action === "GET_DATA") {
        return JSON.parse(localStorage.getItem(data.name) || "");
    }
    if(data.action === "DELETE_DATA") {
        localStorage.removeItem(data.name);
    }
    if(data.action === "UPDATE_DATA") {
        const currentValue = JSON.parse(localStorage.getItem(data.name) || "");
        localStorage.setItem(data.name, JSON.stringify({...currentValue}));
    }
}