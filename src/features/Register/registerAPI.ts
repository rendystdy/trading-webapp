import { IPayloadLogin } from "./registerSlice";

export const login = async (payload: IPayloadLogin): Promise<any> => {
    try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}login`, {
            method: "POST",
            body: JSON.stringify(payload),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const resJson = await response.json();

        return resJson;

    } catch (error: any) {
        return error ? error?.message : 'Failed to fetch'
    }
}
