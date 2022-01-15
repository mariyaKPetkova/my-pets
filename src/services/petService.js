const baseUrl = 'http://localhost:3030/data'
//'http://softuni-custom-server.herokuapp.com/jsonstore'
export const getAll = async () => {
    const response = await fetch(`${baseUrl}/pets`)

    const pets = await response.json();

    const result = Object.values(pets)

    return result;
};

export const getMyPets = async (userId) => {
    const response = await fetch(`${baseUrl}/pets`)

    const pets = await response.json();

    const result = Object.values(pets).filter(x => x._ownerId == userId)
    console.log(result);
    return result;
};
export const search = async (searched) => {
    console.log(searched)
    const response = await fetch(`${baseUrl}/pets`)

    const pets = await response.json();

   const result = Object.values(pets)
   //search by name or type:
    const res = Object.values(pets).filter(x=> x.name === searched || x.type === searched)
   console.log(res)
    return res;
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
        body: JSON.stringify({...petData,likes:[]})
    });

    const result = await response.json();

    return result;
};
export const del = (petId, token) => {
    return fetch(`${baseUrl}/pets/${petId}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        }
    }).then(res => res.json());
}
export const edit = async (petData, token,petId) => {
    const response = await fetch(`${baseUrl}/pets/${petId}`, {
         method: 'PUT',
         headers: {
             'content-type': 'application/json',
             'X-Authorization': token,
         },
         body: JSON.stringify(petData)
     });
     const result = await response.json();
     return result;
 };