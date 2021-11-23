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