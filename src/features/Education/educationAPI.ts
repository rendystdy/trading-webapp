export async function fetchVideos() {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}videos`, {
            method: "GET",
        });

        const resJson = await response.json();

        return resJson;
    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}

export async function fetchFaq() {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}faq`, {
            method: "GET",
        });

        const resJson = await response.json();

        return resJson;
    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}
