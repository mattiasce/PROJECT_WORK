import CardsCategory from "../components/CardsCategory";
import ContactFormSection from "../components/ContactFormSection";

export default function HomePage() {

  const info_hero = {
    title_hero: "Watch Series 10",
    description_hero: "Più schermo. Più stile. Più sottile."
  };

  const data_cards_category = [
    { categoria: "MacBook", bg_img: "bg-computer-image", id: 1 },
    { categoria: "iPhone", bg_img: "bg-iPhone-image", id: 2 },
    { categoria: "Apple Watch", bg_img: "bg-appleWatch-image", id: 3 },
    { categoria: "iPad", bg_img: "bg-iPad-image", id: 4 },
    { categoria: "AirPods", bg_img: "bg-accessori-image", id: 5 },
    { categoria: "Altro", bg_img: "bg-altro-image", id: 6 }
  ]

  return (
    <>

      <div className="hero bg-image bg-hero-image">
        <h1>{info_hero.title_hero}</h1>
        <p className="p-hero">{info_hero.description_hero}</p>
      </div>

      <CardsCategory data_cards_category={data_cards_category} />

      <ContactFormSection>Qui per aiutarti. Contattaci.</ContactFormSection>
    </>
  );
}
