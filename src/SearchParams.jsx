import React, { useContext } from "react";
import { useState } from "react";
import useBreedList from "./useBreedList";
import Results from "./Results";
import fetchSearch from "./fetchSearch";
import { useQuery } from "@tanstack/react-query";
import AdoptPetContext from "./AdoptedPetContext";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

export default function SearchParams() {
  const [requestParam, setRequestParams] = useState({
    location:"",
    animal:"",
    breed:""
  })
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreedList(animal);
  const [adoptedPet] = useContext(AdoptPetContext)
  const results = useQuery(["search",requestParam],fetchSearch);
  const pets = results?.data?.pets??[];
 
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          const obj = {
            animal: formData.get("animal")?? "",
            breed : formData.get("breed")?? "",
            location: formData.get("location")?? ""
          }
         setRequestParams(obj)
        }}
      >
      {
        adoptedPet?(<div className="pet image-container">
            <img src={adoptedPet.images[0]} alt={adoptedPet.name}></img>
        </div>):null
      }
        <label htmlFor="location">
          Location
          <input
            name = "location"
            id="location"
            
            placeholder="Location"
          ></input>
        </label>

        <label>
          Animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => {
              setAnimal(e.target.value);
            }}
          >
            {ANIMALS.map((animal) => (
              <option key={animal}>{animal}</option>
            ))}
          </select>
        </label>

        <label>
          Breed
          <select
            name="breed"
            id="breed"
            disabled={breeds.length === 0}
          >
            {breeds.map((breed) => (
              <option key={breed}>{breed}</option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
      <Results allPets={pets}></Results>
    </div>
  );
}
