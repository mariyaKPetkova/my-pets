const baseUrl = 'http://localhost:3030/data'
//'http://softuni-custom-server.herokuapp.com/jsonstore'
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pets`)

    const pets = await response.json();

    const result = Object.values(pets)

    console.log(result);
    return result;
};
export const getOne = async (id) => {
    const response = await fetch(`${baseUrl}/pets/${id}`)
    const pet = await response.json();
    return pet
}
export const create = async (petData, token) => {
   const response = await fetch(`${baseUrl}/pets`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token,
        },
        body: JSON.stringify(petData)
    });

    const result = await response.json();

    return result;
};
