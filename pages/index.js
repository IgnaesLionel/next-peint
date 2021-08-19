import Head from "next/head";
import { useState, useContext, useEffect } from "react";

import Hero from "../components/Hero/Hero";
import { useRouter } from "next/router";

import FourSquareInfo from "../components/FourSquareInfo/FourSquareInfo";

const Home = (props) => {
  const [page, setPage] = useState(1);
  const router = useRouter();

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1);
  }, [router.query]);

  return (
    <div>
      <Head>
        <title>Peint tes rêves!</title>
      </Head>
      <Hero />

      <div>
        Montrez votre gratitude et exprimez vos sentiments en décorant votre
        maison avec une œuvre d'art unique et durable. Faite des prénoms de ceux
        que vous aimez. Elle pourra être accrochée en souvenir des êtres qui
        vous sont le plus cher.
      </div>
      <br />
      <div>
        Un cadeau unique Pour tout type de surprises ✓ Anniversaire de marriage
        ✓ Fête des mères, fête des pères ✓ Anniversaire ✓ Cadeau commémoratif en
        memoire d'un proche et même d'un animal de compagnie ✓ Noël et fêtes
      </div>
      <div>
        Facile et rapide à créer En 2 minutes Nous avons créé un interface
        simple et rapide: Étape 1 : Sélectionnez le nombre de prénoms Étape 2 :
        Ecrivez vos prénoms Étape 3 : Passez commande, nous vous enverrons votre
        création en moins d'une semaine !
      </div>
      <div>
        Toiles Personnalisables Montrez votre gratitude et exprimez vos
        sentiments en décorant votre maison avec une œuvre d'art unique et
        durable, faite des prénoms de ceux que vous aimez. Elle pourra être
        accrochée en souvenir des êtres qui vous sont le plus cher.{" "}
      </div>
      <div>
        Satisfait ou remboursé Un problème avec la toile? Une erreur
        d'impression? Nous vous renvoyons une toile à nos frais ou vous
        remboursons. Livraison offerte Livraison suivie gratuite en 5 à 7 jours
        ouvrés après impression. Support 100% Français Une question? Notre
        équipe vous répondra en moins de 24 heures ! Pour la vie Des toiles haut
        de gamme prêtes à accrocher qui du
      </div>
      <div>
        FAQ Où est-ce que vous livrez et en combien de temps ? Nous livrons en
        France, Belgique, Luxembourg, Pays-Bas et Allemagne en 5 à 7 jours
        ouvrables . Nous vous envoyons votre toile depuis nos centres
        d'impression en Allemagne. <br /> Comment suivre ma commande ? Chaque
        envoi inclut un lien avec numéro de suivi qui vous permettra de suivre
        la progression de votre livraison sur le site UPS
        https://www.ups.com/track .
      </div>
      <div>
        Une équipe disponible, à votre écoute. <br />
        Support 100% en français Une question ? Notre équipe vous répondra en
        moins de 24 heures. Contactez nous via le chat sur le site ou par email
        à support@jewelly.fr Ou par téléphone au 01 76 40 13 50
      </div>
    </div>
  );
};

export default Home;
