export async function fetchNews() {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}news`, {
            method: "GET",
        });
        
        console.log("🚀 ~ fetchNews ~ response:", await response.json())

          return await response.json();
    } catch (error) {
    }
}
