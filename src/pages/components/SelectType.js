

const SelectType = (pokemon) => (

    pokemon.types.map((type) => <h2 key={type.name}>{type.name}</h2>)
)


export default SelectType
