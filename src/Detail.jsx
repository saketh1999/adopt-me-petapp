import { useParams, useNavigate } from "react-router"
import { useQuery } from "@tanstack/react-query";
import fetchPet from "./fetchPet";
import Carousel from "./Carousel";
import { useContext } from "react";
import AdoptPetContext from "./AdoptedPetContext";
import Modal from "./Modal";
import ErrorBoundary from "./ErrorBoundary"; 
import { useState } from "react";

function Detail() {
    const [modal,setModal] = useState(false)
    const {id} = useParams(); //this is pulling the data from the Browser router component context
    const results = useQuery(["details",id],fetchPet)
    const navigate = useNavigate();
    const [_,setAdoptedPet] = useContext(AdoptPetContext);
    if(results.isLoading) //this is react-query
    {
        return (
            <div className="loading-pane">
                <h2 className="loader">🍕</h2>
            </div>
        )
    }

    //post this we are sure that the data is fetched
    const pet = results.data.pets[0];
    return (
    <div className="details">
    <div>
    <Carousel images={pet.images}></Carousel>
        <h1>{pet.name}</h1>
        <h2>
            {pet.animal} - {pet.breed} - {pet.city}, {pet.state}
            <p>{pet.description}</p>
            <button onClick={()=>{
                setModal(true)
            }}> Adopt {pet.name}</button>
            {
                modal? (
                    <Modal>
                        <div>
                            <h1>Would you like to Adopt {pet.name}?</h1>
                            <div className="buttons">
                                <button onClick={()=>{
                                    setAdoptedPet(pet); //this is where the pet is being asigned
                                    navigate('/');
                                }}>Yes</button>
                                <button onClick={()=>setModal(false)}>No</button>
                            </div>
                        </div>
                    </Modal>
                ) :(null)
            }
        </h2>

    </div>
    </div>
  )
}
function DetailsErrorBoundary(props){
    return <ErrorBoundary>
        <Detail {...props}></Detail>
    </ErrorBoundary>
}
export default DetailsErrorBoundary
