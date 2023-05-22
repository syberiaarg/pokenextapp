import styles from './SelectType.module.scss'

const SelectType = (pokemon) => (

    <div className={styles.wrap}>
        <div className={styles.typeList}>
            {pokemon.types.map((type) => <h2 key={type.id}>{type.name}</h2>)}
        </div>
    </div>
)


export default SelectType
