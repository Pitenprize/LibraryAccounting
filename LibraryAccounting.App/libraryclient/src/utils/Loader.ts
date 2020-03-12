export default async function api<T>(url: string): Promise<T> {
    return await fetch(url, {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json() as Promise<T>;
    });
}