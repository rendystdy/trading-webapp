export const fetchAccountDemo = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}my-account-demo`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resJson = await response.json();

        return resJson;

    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}

export const fetchAccountLive = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}my-account-live`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resJson = await response.json();

        return resJson;

    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}

export const fetchAccounDetails = async () => {
    try {
        const token = localStorage.getItem('token');
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}account-details`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
        const resJson = await response.json();

        return resJson;

    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}
