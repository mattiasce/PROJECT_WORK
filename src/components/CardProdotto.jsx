export default function CardProdotto({ className, children, categoria, nome, descrizione, prezzo, imgUrl, colore, pScontato }) {
    return (
        <>
            <div className={`card-product ${className}my-2`}>
                <div className="sm:w-1/2">
                    <img className="sm:w-[420px] pb-12 sm:p-0" src={imgUrl} alt={`img_${nome}`}></img>
                </div>

                <div className="flex flex-col gap-4 sm:w-1/2">
                    <div className="flex flex-row gap-4 justify-between items-center">
                        <h4 className="text-[20px] font-semibold">{nome}</h4>
                        <p className="h6-card-product p-2 border-[1px] border-black">{categoria}</p>
                    </div>
                    <p>{descrizione}</p>
                    <div className="flex flex-row gap-4 w-full">
                        <div className="w-full">
                            <p className="p-2 h6-card-product">prezzo scontato</p>
                            <p className="p-2 border-[1px] border-black w-full">{pScontato} €</p>
                        </div>
                        <div className="w-full opacity-40">
                            <p className="p-2 h6-card-product">prezzo precedente</p>
                            <p className="p-2 border-[1px] border-black w-full">{prezzo} €</p>
                        </div>

                    </div>

                    <div className="flex flex-col w-full">
                        <p className="p-2 w-full h6-card-product">Colori disponibili</p>
                        <p className="p-2 border-[1px] border-black w-full">{colore}</p>
                    </div>

                </div>
                {children}
            </div >
        </>
    );
}