import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductMenu from '../components/CategoryMenu';
import CardProdotto from '../components/CardProdotto';

export default function Prodotto() {

    const par = useParams()
    console.log(par.id)

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [err, setErr] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get('/json/prodotti.json')  // Percorso relativo al file JSON locale
            .then(({ data }) => {

                // Cerco il prodotto specifico usando l'ID dalla URL
                const prodottoSingolo = data.find(p => p.id == (par.id));
                if (prodottoSingolo) {
                    setData(prodottoSingolo);  // Imposta i dati del prodotto trovato
                } else {
                    setErr('Prodotto non trovato');  // Se non esiste il prodotto
                }
            })
            .catch((err) => {
                console.dir(err);  // Log dell'errore
                setErr('Errore nel caricamento dei dati.');  // Messaggio di errore
            })
            .finally(() => {
                setLoading(false);  // Ferma il caricamento
            });
    }, [par.id]);

    return (
        <main className="min-h-screen">
            <ProductMenu></ProductMenu>
            {!loading && data &&

                <CardProdotto
                    className={`sm:flex sm:flex-row gap-x-8 gap-y-8`}
                    imgUrl={data.imgUrl}
                    nome={data.nome}
                    categoria={data.categoria}
                    descrizione={data.descrizione}
                    pScontato={data.pScontato}
                    prezzo={data.prezzo}
                    colore={`${data.colore}`}
                >


                </CardProdotto>

            }
            {err && <p>{err.message}</p>}
        </main>
    )
}