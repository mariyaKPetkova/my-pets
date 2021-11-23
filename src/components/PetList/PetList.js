import { useEffect,useState } from "react"
import * as petServise from '../../services/petService.js'
import PetCard from './PetCard/PetCard.js'
const PetList = () => {
    const [pets,setPets] = useState([])
    useEffect(()=>{
        petServise.getAll()
        .then(result=>{
            setPets(result)
        })
    },[])
    return (
        <>
        {pets.length >0
        ?<ul className="other-pets-list">
                {pets.map(x => <PetCard key={x._id} pet={x} />)}
            </ul>
        :<p className="no-pets">No pets in database!</p>
        }
            
            
        </>
    )
}
export default PetList