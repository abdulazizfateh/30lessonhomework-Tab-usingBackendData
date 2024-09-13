const url = "http://localhost:3000";

const getTabHeader = async () => {
    try {
        const response = await fetch(`${url}/productType`);
        const backendData = await response.json();
        return backendData;
    } catch (error) {
        return error.message;
    }
}


const getTabContent = async (path) => {
    try {
        const response = await fetch(`${url}${path}`);
        const backendData = await response.json();
        return backendData;
    } catch (error) {
        return error.message;
    }
}

export { getTabHeader, getTabContent };