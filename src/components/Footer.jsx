export default function Footer() {
    return (
        <div className="text-left text-black min-h-screen flex flex-col gap-4 my-2">
            <div className="sm:grid sm:grid-cols-2 h-1/4 gap-4 gap-x-4">
                <div>
                    <p className="logo">LOGO</p>
                </div>

                <div className="min-h text-3xl">
                    Ogni prodotto è creato per offrirti il meglio in qualità e innovazione.
                    Ogni dispositivo è realizzato per le tue necessità.
                    Dalla forza dei MacBook alla praticità dell’iPhone,
                    ogni scelta è un passo verso ciò che ti appartiene.
                </div>
            </div>

            <div className="sm:grid sm:grid-cols-6 flex flex-row h-1/4 gap-4 gap-x-4">

                <div className="flex flex-col gap-4">
                    <div className="uppercase">
                        Orari
                    </div>
                    <div className="flex flex-rows-2 uppercase text-[12px] gap-8">
                        <div>
                            Lun - Ven <br></br>
                            Sabato <br></br>
                            Domenica
                        </div>
                        <div>
                            09:00 – 18:00 <br></br>
                            09:00 - 12:30 <br></br>
                            Chiuso
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="uppercase">
                        INDIRIZZO
                    </div>
                    <div className="uppercase text-[12px]" >
                        Via Rizzoli, 16 <br></br>
                        40125 Bologna <br></br>
                        <a href=""> 051 640 010 0</a>
                    </div>
                </div>

                <div className="flex flex-col gap-4">
                    <div className="uppercase">
                        Social
                    </div>
                    <div className="flex flex-col uppercase text-[12px]">
                        <a href="#">Instagram</a>
                        <a href="#">YouTube</a>
                        <a href="#">Twitter</a>
                    </div>
                </div>

            </div>

            <div className="sm:h-1/4 gap-4 gap-x-4">
                <p className="text-[26vw] leading-[1.2] tracking-tight h-fit">
                    PJWORK
                </p>
            </div>
        </div>
    )
}