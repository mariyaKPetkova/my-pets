import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useContext, useEffect } from "react/cjs/react.development"
import { AuthContext } from "../../contexts/AuthContext.js"
import * as petService from "../../services/petService.js"

const Edit = () => {
    const navigate = useNavigate()
    const { user } = useContext(AuthContext)
    const { petId } = useParams()
    const [pet,setPet] = useState({})
    useEffect(() => { 
        petService.getOne(petId)
        .then(result=>{
            setPet(result)
        })
    }, [petId])
    
const onEdit = (e) =>{
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    
    const name = form.get('name')
        const description = form.get('description')
        const imageUrl = form.get('imageUrl')
        const type = form.get('type')
        console.log(user)
petService.edit({
    name,
    description,
    imageUrl,
    type
}, user.accessToken,petId) 
    .then(result => {
        navigate('/dashboard')
    })
}

    return(
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#"  method="PUT" onSubmit={onEdit}>
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlF
                        or="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" defaultValue={pet.name}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="description">Description</label>
                        <span className="input">
                            <textarea name="description"
                                id="description" defaultValue={pet.description}></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" defaultValue={pet.imageUrl}/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="type">Type</label>
                        <span className="input">
                            <select id="type" name="type" value="dog">
                                <option value="cat" >Cat</option>
                                <option value="dog" >Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Edit