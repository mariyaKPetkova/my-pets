export const login = async (email,password) =>{
    const result =  await fetch('http://localhost:3030/users/login', {
    method:'POST',
    headers:{ 'content-type':'application/json'},
    body: JSON.stringify({email,password})
    })

    const jsonResult = await result.json()

        if(result.ok){
            return jsonResult
        }else{
            throw jsonResult
        }
}