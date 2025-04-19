import axios from 'axios';
import { useState, useEffect } from 'react';
import CategoryMenu from '../components/CategoryMenu';
import { Link } from 'react-router-dom';
import CardsProdotti from '../components/CardsProdotti';

export default function Prodotti() {

    const [loading, setLoading] = useState(false);      // Gestione del caricamento
    const [prodotto, setProdotto] = useState([]);       // Gestione dell'array dei dati
    const [err, setErr] = useState(false);              // Gestione errore

    // Funzione per mescolare l'array in modo casuale
    const mescolaArray = (array) => {
        return [...array].sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        setLoading(true);
        axios.get('json/prodotti.json')
            .then(({ data }) => {
                // Mescola i dati dei prodotti prima di aggiornarli nello stato
                setProdotto((data));
            })
            .catch(err => {
                console.dir(err);
                setErr(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (
        <main className="min-h-screen">
            <CategoryMenu />

            <div className='products-grid my-2'>
                {loading ? <p>Loading...</p> :
                    prodotto && prodotto.length > 0 && prodotto.map((product) => (
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
