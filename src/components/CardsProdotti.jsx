export default function CardsProdotti({ className, children, categoria, nome, prezzo }) {
    return (
        <>
            <div className={`card-product ${className}`}>

                <h6 className="h6-card-product">{categoria}</h6>
                <h4>{nome}</h4>
                <p>{prezzo}</p>

                {children}
            </div>
        </>
    );
}