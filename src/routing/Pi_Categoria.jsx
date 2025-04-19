import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import CategoryMenu from '../components/CategoryMenu'
import CardsProdotti from '../components/CardsProdotti'


export default function Pi_Categoria(){

const par = useParams()
console.log(par.categoria)

const [loading, setLoading] = useState(false);
const [data, setData] = useState([]);
const [err, setErr] = useState(false);

useEffect(() => {
    setLoading(true);
    axios.get('/json/prodotti.json')
        .then(({ data }) => {
            // Il metodo FILTER non FIND (che restitusice l'elemento trovato ed esce). FILTER crea un nuovo array e restituisce tutti gli elementi che soddisfano la condizione specificata nella funzione callback.
            const category = data.filter(c => c.categoria == par.categoria); 
            if (category) {
                setData(category);
                console.log(category) // Imposto i dati dei prodotti per categoria
            } else {
                setErr('Categoria inesistente');
            }

        })
        .catch((err) => {
            console.dir(err);
            setErr('Errore nel caricamento dei dati.');
        })

        .finally(() => {
            setLoading(false);
        });
}, [par.categoria]);  // Aggiungi par.categoria come dipendenza



return (
    <main className="min-h-screen">
        <CategoryMenu />

        <div className='products-grid my-2'>
            {loading ? <p>Loading...</p> :
                data && data.length > 0 && data.map((product) => (
                    <CardsProdotti
                        key={product.id}
                        categoria={product.categoria}
                        >
                        <Link to={`/prodotto/${product.id}`}>
                            {product.nome}<br /><br />
                        </Link>
                        {product.prezzo} €
                        
                    </CardsProdotti>
                ))
            }

            {/* SE C'E' UN ERRORE, ALLORE MI RENDERIZZI IL MESSAGGIO DI ERRORE */}
            {err && <p>{err.message}</p>}
        </div>
    </main>
);
}



