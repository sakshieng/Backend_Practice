const fetchDataFromBackend = async () => {
    try {
        const response = await fetch('/api/send-message');

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get('content-type');

        if (!contentType || !contentType.includes('application/json')) {
            throw new Error(`Unexpected response content type: ${contentType}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

export { fetchDataFromBackend };

