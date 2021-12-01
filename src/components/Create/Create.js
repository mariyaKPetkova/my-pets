import { useContext } from 'react'
import{useNavigate} from 'react-router-dom'
import * as petService from '../../services/petService.js'
import { AuthContext } from '../../contexts/AuthContext.js'

const Create = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const onCreate = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
      
        const name = formData.get('name');
        const description = formData.get('description');
        const imageUrl = formData.get('imageUrl');
        const type = formData.get('type');
        
        petService.create({name,description,imageUrl,type},user.accessToken)
        .then(result=>{
            navigate('/dashboard')
        })
    }
    return(
        <section id="create-page" className="create">
            <form id="create-form" onSubmit={onCreate} method="Post">
                <fieldset>
                    <legend>Add new Pet</legend>
                    <p className="field">
                        <label htmlF
                        or="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description" placeholder="Description"></textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageUrl" id="image" placeholder="Image"/>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlF
                        or="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog">Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Add Pet"/>
                </fieldset>
            </form>
        </section>
    )
}
export default Create