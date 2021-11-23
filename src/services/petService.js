const baseUrl = 'http://localhost:3030/data'
//'http://softuni-custom-server.herokuapp.com/jsonstore'
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pets`)

    const pets = await response.json();

    const result = Object.values(pets)

    console.log(result);
    return result; 
};