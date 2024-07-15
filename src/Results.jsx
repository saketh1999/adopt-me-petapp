import Pet from "./Pet";

export default function Results({ allPets }) {
 

  return (
    <div className="search">
      {allPets.length ? (
        allPets.map((pet) => (
          <Pet
            animal={pet.animal}
            name={pet.name}
            id={pet.id}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city},${pet.state}`}
            key={pet.id}
          ></Pet>
        ))
      ) : (
        <h1>No Pets Found </h1>
      )}
    </div>
  );
}
