const baseUrl = 'http://localhost:3030'

export const login = async (email, password) => {
    const result = await fetch(`${baseUrl}/users/login`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ email, password })
    })

    const jsonResult = await result.json()

    if (result.ok) {
        return jsonResult
    } else {
        throw jsonResult
    }
}
export const register = (email, password) => {
    return fetch(`${baseUrl}/users/register`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ email, password })
    })
        .then(res => res.json()); 
};

export const logout = async () => {
    const result = await fetch(`${baseUrl}/users/logout`)
}