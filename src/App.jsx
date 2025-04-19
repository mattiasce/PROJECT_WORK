import './App.css'

// CLIENT SITE ROUTING
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import WrapperRoute from './routing/WrapperRoute'
import ErrorRoute from './routing/ErrorRoute'
import Contatti from './routing/Contatti'
import ChiSiamo from './routing/ChiSiamo'
import HomePage from './routing/HomePage'
import Prodotti from './routing/Prodotti'
import Prodotto from './routing/Prodotto'
import Pi_Categoria from './routing/Pi_Categoria'

const router = createBrowserRouter([
  {
    path: "/",                              // Definisco la rotta radice
    element: <WrapperRoute />,              // Definisco il componente da mappare (permette di avere un elemento uguale all'interno di tutte le interfacce che genero, ad esempio un menù)
    errorElement: <ErrorRoute />,           // Definisco il componente di errore
    children: [                             // Definisco le rotte secondarie
      {
        index: true,                        // Utilizzo il componente di sotto come nodo radice perchè index è impostato a true
        element: <HomePage />               // Componente da renderizzare
      },
      {
        path: "/prodotti",                  // Percorso
        element: <Prodotti />               // Componente da renderizzare
      },
      {
        path: "prodotto/:id",               // Percorso per ogni singolo prodotto (/:id)
        element: <Prodotto />               // Componente da renderizzare
      },
      {
        path:"prodotti/:categoria",         // Percorso per ogni categoria di prodotti (/:categoria)
        element: <Pi_Categoria />           // Componente da renderizzare
      },
      {
        path: "/chi-siamo",                 // Percorso
        element: <ChiSiamo />               // Componente da renderizzare
      },
      {
        path: "/contatti",                  // Percorso
        element: <Contatti />               // Componente da renderizzare
      }
    ]
  }
]);

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App