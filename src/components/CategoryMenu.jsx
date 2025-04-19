import BtnMenu from './BtnMenu'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'

export default function CategoryMenu() {

    const categorie = ["MacBook", "iPhone", "Apple Watch", "iPad", "AirPods", "Accessori"]

    return (
        <div className='flex flex-col sm:flex-row justify-between sm:gap-4'>
            {/* Questo map è utilizzato per scorrere l'arrey categorie e realizzare un menù con le categorie dei prodotti */}
            <div className="sm:flex grid grid-cols-3 gap-x-4 sm:gap-4 w-[100%]">
                {categorie.map((categoria) => (

                    <Link to={`/prodotti/${categoria}`}>
                        <BtnMenu>
                            {categoria}
                        </BtnMenu>
                    </Link>
                    
                ))}
            </div>
            <SearchBar></SearchBar>

        </div>
    )
}