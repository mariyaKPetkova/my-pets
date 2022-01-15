import { useState } from "react"
import { useContext, useEffect } from "react/cjs/react.development"
import { AuthContext } from "../../contexts/AuthContext.js"
import * as petService from '../../services/petService.js'
import MyPetCard from '../MyPets/MyPetCard/MyPetCard.js'
const MyPets = () => {
const {user} = useContext(AuthContext)
const [pets,setPets] = useState([])
useEffect(()=>{
    petService.getMyPets(user._id)
    .then(res=>{
        setPets(res)
    })
},[])
//console.log(pets);
    return(
        <section id="my-pets-page" className="my-pets">
            <h1>My Pets</h1>
            {pets.length >0
        ?<ul className="my-pets-list">
                {pets.map(x => <MyPetCard key={x._id} pet={x} />)}
            </ul>
        :<p className="no-pets">No pets in database!</p>
        }
            
        </section>
    )
}
export default MyPets