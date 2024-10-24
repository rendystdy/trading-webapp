export async function fetchNews() {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}news`, {
            method: "GET",
        });

        const resJson = await response.json();

        return resJson;
    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}
