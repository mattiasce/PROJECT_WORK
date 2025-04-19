import CardCategory from "./CardCategory";

export default function CardsCategory({ data_cards_category }) {

    // creo un arrey con tutti i dati che hanno indice minore di 2
    const uno = data_cards_category.filter((_, index) => index < 2)
    // .filter crea un arrey con tutti gli elementi che soddisfano la condizione
    // _ non interessa l'elemento ma l'index, l'indice dell'elemento nell'arrey

    // creo un arrey con tutti i dati che hanno indice maggiore o uguale a 2
    const due = data_cards_category.filter((_, index) => index >= 2)
    // .filter crea un arrey con tutti gli elementi che soddisfano la condizione
    // _ non interessa l'elemento ma l'index, l'indice dell'elemento nell'arrey

    return (
        <div className="min-h-screen gap-4 grid h-[100%]">
            <div className="grid sm:flex gap-4 h-[100%]">
                {uno.map((elemento) => (
                    <CardCategory 
                        categoria={elemento.categoria}
                        bg_img={elemento.bg_img}
                    />
                ))}
            </div>
            <div className="sm:flex grid grid-cols-2 gap-4 sm:gap-4 h-[100%]">
                {due.map((elemento) => (
                    <CardCategory
                        categoria={elemento.categoria}
                        bg_img={elemento.bg_img}
                    />
                ))}
            </div>
        </div>
    );
}