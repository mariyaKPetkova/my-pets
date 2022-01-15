import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { useEffect } from 'react/cjs/react.development'
import * as petServce from '../../services/petService.js'
import PetCard from '../PetList/PetCard/PetCard.js'

let searched 
const Search = () => {
    
    const [pets,setPets] = useState([])

        useEffect(async()=>{
            await petServce.search(searched)
            .then(result =>{
                setPets(result)
            })
        })

    const onSearch = (e) =>{
        e.preventDefault()
        searched = new FormData(e.currentTarget).get('searched')
        //setPets(searched)
    }
     return(
        <section>
            <form onSubmit={onSearch} method="POST">
                <input type="text" name="searched" />
                <button>Search</button>
            </form>
            <section>
            {pets.length >0
        ?<ul className="other-pets-list">
                {pets.map(x => <PetCard key={x._id} pet={x} />)}
            </ul>
        :<p className="no-pets">No pets in database!</p>
        }
            </section>
        </section>
    )
}
export default Search