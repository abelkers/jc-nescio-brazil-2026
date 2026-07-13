const galleries = {
  Salvador: [
    { url: "https://images.unsplash.com/photo-1640884216864-b26b780ff102?auto=format&fit=crop&w=1800&q=84", caption: "De kleurrijke straten van Pelourinho · Celso Hashimoto / Unsplash" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Farol%20da%20Barra%20-%20Salvador%20-%2020250725062824.jpg?width=1700", caption: "Farol da Barra bij zonsopkomst · Donatas Dabravolskas / CC BY-SA 4.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Farol%20da%20Barra%20Salvador.JPG?width=1700", caption: "Zonsondergang bij Farol da Barra · Marcio Salata / CC BY-SA 3.0" }
  ],
  "Lençóis": [
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Vale%20do%20Pati%20-%20Chapada%20Diamantina.JPG?width=1800", caption: "Vale do Pati · Jardelsliumba / CC BY-SA 3.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Morro%20do%20Pai%20Inacio.jpg?width=1700", caption: "Morro do Pai Inácio · AlmostBrazilian / CC BY-SA 1.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Chapada%20Diamantina%20Panorama.jpg?width=1800", caption: "Panorama over Chapada Diamantina · Wikimedia Commons" }
  ],
  "Itacaré": [
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20in%20Itacar%C3%A9.jpg?width=1400", caption: "Strand in Itacaré · Rivieiraa / CC BY-SA 4.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Itacarezinho.jpg?width=1700", caption: "Praia de Itacarezinho · FlaviaC / Wikimedia Commons" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Itacar%C3%A9%20-%20Bahia.%20%2815265757608%29.jpg?width=1800", caption: "De kust van Itacaré · Marinelson Almeida / Wikimedia Commons" }
  ],
  "Petrópolis": [
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu%20Imperial%20-%20Petr%C3%B3polis.jpg?width=1800", caption: "Museu Imperial · Guilherme Tonelli / CC BY-SA 4.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pal%C3%A1cio%20de%20Cristal%20%28Petr%C3%B3polis%29.jpg?width=1800", caption: "Palácio de Cristal · Wilfredor / Wikimedia Commons" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Museu%20Imperial%20em%20Petr%C3%B3polis.jpg?width=1500", caption: "Het keizerlijke paleis · Rusny Rezende Teixeira / CC BY-SA 4.0" }
  ],
  "Rio de Janeiro": [
    { url: "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1800&q=84", caption: "Cristo Redentor · Raphael Nogueira / Unsplash" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20de%20Janeiro.jpg?width=1700", caption: "Rio vanaf Corcovado · JGHowes / Wikimedia Commons" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Rio%20de%20Janeiro%2C%20Copacabana%20Beach%2C%20Morro%20da%20Urca%2C%20and%20Cristo%20Redentor%20from%20P%C3%A3o%20de%20A%C3%A7%C3%BAcar%20%2815929750801%29.jpg?width=1800", caption: "Copacabana vanaf Pão de Açúcar · Arian Zwegers / Wikimedia Commons" }
  ],
  "Ilha Grande": [
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/IlhaGrande-LopesMendes1.jpg?width=1700", caption: "Lopes Mendes · Fulviusbsas / publiek domein" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Praia%20de%20Lopes%20Mendes%20em%20Ilha%20Grande.jpg?width=1800", caption: "Helder water bij Lopes Mendes · Cibele Brugnera / CC BY-SA 4.0" },
    { url: "https://commons.wikimedia.org/wiki/Special:FilePath/Pico%20do%20Papagaio%20-%20Ilha%20Grande%20-%20RJ.jpg?width=1800", caption: "Pico do Papagaio · José Carlos B. Fialho / CC BY-SA 3.0" }
  ]
};

const galleryQueries = {
  Salvador: "Salvador Bahia Pelourinho Brazil",
  "Lençóis": "Chapada Diamantina Lencois Bahia Brazil",
  "Itacaré": "Itacare Bahia Brazil beach",
  "Petrópolis": "Petropolis Rio de Janeiro Brazil",
  "Rio de Janeiro": "Rio de Janeiro Brazil landmarks beach",
  "Ilha Grande": "Ilha Grande Angra dos Reis Brazil"
};
const galleryLabels = Object.fromEntries(Object.keys(galleryQueries).map(place => [place, place]));
const galleryFallbacks = {};
const galleryLoads = new Map();

const photos = Object.fromEntries(Object.entries(galleries).map(([place, images]) => [place, images[0].url]));

const stops = {
  Salvador: { index: "01", dates: "3–5 oktober", nights: "2", stay: "Nomads Multicultural", copy: "Koloniale kleuren, Afro-Braziliaanse cultuur en de eerste caipirinha van de reis.", query: "Salvador" },
  "Lençóis": { index: "02", dates: "5–10 oktober", nights: "5", stay: "Chapada Backpackers · Vale do Pati · hotel Lençóis", copy: "De poort naar Chapada Diamantina, met Ribeirão do Meio en een driedaagse tocht door Vale do Pati.", query: "Lençóis Chapada" },
  "Itacaré": { index: "03", dates: "10–13 oktober", nights: "3", stay: "Pousada Villa Maeva", copy: "Atlantisch regenwoud, surfstranden en ruimte voor een vrije of actieve dag.", query: "Itacaré" },
  "Petrópolis": { index: "04", dates: "13–16 oktober", nights: "3", stay: "Hotel Vila Bavaria", copy: "Keizerlijke geschiedenis, berglucht, lokaal bier en een hike naar Véu da Noiva.", query: "Petrópolis" },
  "Rio de Janeiro": { index: "05", dates: "16–20 oktober", nights: "4", stay: "Mango Tree", copy: "Voetbal, footvolley, strand en alle energie van de Cidade Maravilhosa.", query: "Rio de Janeiro" },
  "Ilha Grande": { index: "06", dates: "20–23 oktober", nights: "3", stay: "Holandês Hostel", copy: "Een autovrij eiland als finale: boot, jungle, Lopes Mendes en Pico do Papagaio.", query: "Ilha Grande" }
};

const itinerary = [
  { day: 1, date: "3 okt", weekday: "zaterdag", place: "Salvador", activity: "Welkom in Brazilië", sub: "Airport pick-up om 15:40, lokale drankjes en 1 e-sim.", stay: "Nomads Multicultural · private dorm", tags: ["aankomst", "0,5 u transfer"], types: ["travel"], details: "Transfer van Salvador Airport naar de stad. De aangeleverde planning noemt lokale drankjes en één e-sim bij aankomst." },
  { day: 2, date: "4 okt", weekday: "zondag", place: "Salvador", activity: "City tour Salvador", sub: "Een eerste volle dag tussen historie, muziek en Bahiaanse kleuren.", stay: "Nomads Multicultural · private dorm", tags: ["3 uur", "cultuur"], types: ["active"], details: "Duur volgens het schema: 3 uur. Een logische route loopt via Pelourinho, Elevador Lacerda en Mercado Modelo; de exacte tourinhoud moet nog worden bevestigd." },
  { day: 3, date: "5 okt", weekday: "maandag", place: "Lençóis", activity: "Aankomst + Ribeirão do Meio", sub: "Na de rit meteen afkoelen bij de natuurlijke waterpoel.", stay: "Chapada Backpackers · private dorm", tags: ["6 u transfer", "zwemmen"], types: ["travel", "active"], details: "Busrit Salvador → Lençóis, circa 6 uur. Daarna staat Natural Pool Ribeirão do Meio op het programma." },
  { day: 4, date: "6 okt", weekday: "dinsdag", place: "Chapada Diamantina", activity: "Vale do Pati · de vallei in", sub: "Dag 1 van de driedaagse meerdaagse trektocht.", stay: "Vale do Pati · private dorm", tags: ["hike", "3D/2N", "B · L · D"], types: ["active"], details: "Start van de 3-daagse/2-nachten hike. Ontbijt, lunch en diner staan voor deze dag als inbegrepen genoteerd." },
  { day: 5, date: "7 okt", weekday: "woensdag", place: "Chapada Diamantina", activity: "Vale do Pati · Castelo trotseren", sub: "De stevige middendag, diep in de vallei.", stay: "Vale do Pati · private dorm", tags: ["hike", "3D/2N", "B · L · D"], types: ["active"], details: "Dag 2 van de trektocht met Castelo als kern. Ontbijt, lunch en diner staan als inbegrepen genoteerd." },
  { day: 6, date: "8 okt", weekday: "donderdag", place: "Lençóis / Chapada", activity: "Viewpoints & terug naar de bewoonde wereld", sub: "De laatste trailkilometers en terug naar Lençóis.", stay: "Hotel in Lençóis · multiples", tags: ["hike", "3D/2N", "B · L"], types: ["active"], details: "Dag 3 van de trektocht. Ontbijt en lunch staan als inbegrepen genoteerd; de exacte hotelnaam in Lençóis ontbreekt." },
  { day: 7, date: "9 okt", weekday: "vrijdag", place: "Lençóis", activity: "Vrije dag + diner bij Restaurant Azul", sub: "Rustdag met een optionele culinaire reservering.", stay: "Hotel in Lençóis · multiples", tags: ["optioneel", "ontbijt"], types: ["optional"], details: "Restaurant Azul is als optioneel opgenomen. Reserveer vooraf zodra de groepskeuze vaststaat." },
  { day: 8, date: "10 okt", weekday: "zaterdag", place: "Itacaré", activity: "Door naar de kust", sub: "Aankomst in Itacaré na de lange rit vanuit Lençóis.", stay: "Pousada Villa Maeva · multiples", tags: ["8 u transfer", "ontbijt"], types: ["travel"], details: "Transfer Lençóis → Itacaré, circa 8 uur volgens het schema." },
  { day: 9, date: "11 okt", weekday: "zondag", place: "Itacaré", activity: "Vrije dag", sub: "Strand, surf, rustig aan — de dag is nog helemaal open.", stay: "Pousada Villa Maeva · multiples", tags: ["vrij", "ontbijt"], types: ["optional"], details: "Gebruik de shortlist verderop voor ideeën: vierstrandenroute, surflessen of een watervalbezoek." },
  { day: 10, date: "12 okt", weekday: "maandag", place: "Itacaré", activity: "Optionele activiteiten in en rond Itacaré", sub: "Nog te kiezen met de groep.", stay: "Pousada Villa Maeva · multiples", tags: ["optioneel", "ontbijt"], types: ["optional", "active"], details: "Suggesties staan in de shortlist. Houd rekening met vervoer, materiaalhuur en weersomstandigheden." },
  { day: 11, date: "13 okt", weekday: "dinsdag", place: "Petrópolis", activity: "Aankomst in Petrópolis", sub: "Van de Bahiaanse kust naar de bergen van Rio de Janeiro.", stay: "Hotel Vila Bavaria · multiples", tags: ["transfer onbekend", "ontbijt"], types: ["travel"], details: "De vervoersvorm en reistijd voor Itacaré → Petrópolis ontbreken in het bronmateriaal en moeten nog worden bevestigd." },
  { day: 12, date: "14 okt", weekday: "woensdag", place: "Petrópolis", activity: "Vrije dag + lokale bieren", sub: "Keizerlijk erfgoed en optioneel een Braziliaanse bierproeverij.", stay: "Hotel Vila Bavaria · multiples", tags: ["optioneel", "cultuur"], types: ["optional"], details: "Een bezoek aan het Museu Imperial en een proeverij of rondleiding bij Bohemia liggen voor de hand; reserveringen en openingstijden nog checken." },
  { day: 13, date: "15 okt", weekday: "donderdag", place: "Petrópolis", activity: "Hike naar Véu da Noiva", sub: "Waterval en berglandschap in de omgeving van Petrópolis.", stay: "Hotel Vila Bavaria · multiples", tags: ["optioneel", "hike"], types: ["optional", "active"], details: "Route, startpunt, gids en vervoer zijn nog niet vastgelegd. Controleer kort voor vertrek de lokale omstandigheden." },
  { day: 14, date: "16 okt", weekday: "vrijdag", place: "Rio de Janeiro", activity: "A Cidade Maravilhosa", sub: "Aankomst in Rio + ruimte voor een eerste activiteit.", stay: "Mango Tree · private dorm", tags: ["2 u transfer", "ontbijt"], types: ["travel", "optional"], details: "Transfer Petrópolis → Rio de Janeiro, circa 2 uur. Daarna kan de groep kiezen voor strand, uitzichtpunt of een rustige avond." },
  { day: 15, date: "17 okt", weekday: "zaterdag", place: "Rio de Janeiro", activity: "Potje voetballen & BBQ", sub: "De vaste groepsactiviteit van Rio.", stay: "Mango Tree · private dorm", tags: ["3 uur", "lunch", "voetbal"], types: ["active"], details: "Voetbal en barbecue staan voor circa 3 uur gepland. Lunch staat als inbegrepen genoteerd." },
  { day: 16, date: "18 okt", weekday: "zondag", place: "Rio de Janeiro", activity: "Een voetbalwedstrijd bijwonen", sub: "Optioneel — afhankelijk van speelschema en tickets.", stay: "Mango Tree · private dorm", tags: ["optioneel", "ontbijt"], types: ["optional"], details: "Club, stadion, aftraptijd en kaartverkoop moeten worden bevestigd zodra het speelschema bekend is." },
  { day: 17, date: "19 okt", weekday: "maandag", place: "Rio de Janeiro", activity: "Footvolley", sub: "Een uur trainen op Braziliaans zand. Voor twee reizigers is dit ook de terugreisdag.", stay: "Mango Tree · private dorm", tags: ["1 uur", "ontbijt", "2× fly home"], types: ["active", "travel"], details: "Footvolley duurt circa 1 uur. Twee groepsleden vliegen vandaag terug; bagage en airporttransfer moeten op hun vlucht aansluiten." },
  { day: 18, date: "20 okt", weekday: "dinsdag", place: "Ilha Grande", activity: "Aankomst op Ilha Grande", sub: "Van Rio via Angra dos Reis naar Vila do Abraão.", stay: "Holandês Hostel · private dorm", tags: ["3,5 u transfer", "boot", "ontbijt"], types: ["travel"], details: "De planning noemt 3,5 uur van Rio naar Abraão. De exacte combinatie van wegtransfer en boot nog bevestigen." },
  { day: 19, date: "21 okt", weekday: "woensdag", place: "Ilha Grande", activity: "Speedboottour", sub: "Optioneel langs baaien, stranden en helder water.", stay: "Holandês Hostel · private dorm", tags: ["optioneel", "boot", "ontbijt"], types: ["optional", "active"], details: "Type tour, route, vertrekpunt en prijs zijn nog open. Een hele-eilandroute is weersafhankelijk." },
  { day: 20, date: "22 okt", weekday: "donderdag", place: "Ilha Grande", activity: "Hike naar Pico do Papagaio", sub: "Optionele afsluiter met uitzicht over het eiland.", stay: "Holandês Hostel · private dorm", tags: ["optioneel", "hike", "ontbijt"], types: ["optional", "active"], details: "Een pittige hike. Overweeg een lokale gids, voldoende water en vertrek vroeg; exacte logistiek nog vastleggen." },
  { day: 21, date: "23 okt", weekday: "vrijdag", place: "Fly home", activity: "Naar huis · vertrek 22:00", sub: "Via Angra dos Reis terug naar Rio voor de vlucht.", stay: "Geen overnachting", tags: ["3,5 u transfer", "ontbijt", "vlucht"], types: ["travel"], details: "Het schema noemt Angra dos Reis → Rio de Janeiro in circa 3,5 uur en ‘naar huis (22:00)’. Vluchtnummer en exacte vertrektijd nog verifiëren." }
];

const ideas = [
  { id: "salvador-capoeira", place: "Salvador", title: "Capoeira & percussie in Pelourinho", copy: "Een energieke culturele avond die perfect past na de city tour.", time: "2–3 uur", cost: "€€", vibe: "cultuur", image: photos.Salvador, search: "capoeira Pelourinho Salvador", source: "https://visitbrasil.com/en/explore-afro-brazilian-roots-on-an-immersive-walking-tour-of-salvador/" },
  { id: "salvador-barra", place: "Salvador", title: "Zonsondergang bij Farol da Barra", copy: "Relaxte eerste avond aan zee met uitzicht vanaf de vuurtoren.", time: "2 uur", cost: "€", vibe: "chill", image: photos.Salvador, search: "Farol da Barra Salvador sunset", source: "https://visitbrasil.com/location/salvador-pt/" },
  { id: "salvador-afro", place: "Salvador", title: "Bahia Negra-wandeling", copy: "Een lokale gids verbindt Pelourinho, Afro-Braziliaanse geschiedenis, muziek en eten.", time: "4 uur", cost: "€€", vibe: "verhaal", image: photos.Salvador, search: "Pelourinho Afro Brazilian culture Salvador", source: "https://feel.visitbrasil.com/en/tour-bahia-negra-5/" },
  { id: "salvador-food", place: "Salvador", title: "Acarajé & Bahiaanse kookworkshop", copy: "Proef moqueca, vatapá en acarajé of leer zelf een Bahiaans gerecht maken.", time: "3 uur", cost: "€€", vibe: "proeven", image: photos.Salvador, search: "acaraje Salvador Bahia food", source: "https://visitbrasil.com/en/explore-afro-brazilian-roots-on-an-immersive-walking-tour-of-salvador/" },
  { id: "salvador-bonfim", place: "Salvador", title: "Bonfim, Mercado Modelo & Cidade Baixa", copy: "Een halve dag langs het geloof, de kleurrijke lintjes, markt en uitzicht vanaf Elevador Lacerda.", time: "halve dag", cost: "€", vibe: "cultuur", image: photos.Salvador, search: "Igreja Bonfim Mercado Modelo Salvador", source: "https://visitbrasil.com/location/salvador-pt/" },

  { id: "lencois-pai-inacio", place: "Lençóis", title: "Zonsondergang op Morro do Pai Inácio", copy: "Een relatief korte klim naar het bekendste panorama van Chapada Diamantina.", time: "halve dag", cost: "€€", vibe: "uitzicht", image: photos["Lençóis"], search: "Morro do Pai Inacio Chapada Diamantina", source: "https://visitbrasil.com/en/location/chapada-diamantina/" },
  { id: "lencois-fumaca", place: "Lençóis", title: "Cachoeira da Fumaça", copy: "Een lange dagtocht naar een van de spectaculairste watervallen van de regio.", time: "volle dag", cost: "€€", vibe: "hike", image: photos["Lençóis"], search: "Cachoeira da Fumaca Chapada Diamantina", source: "https://visitbrasil.com/en/embark-on-an-exciting-journey-in-chapada-diamantina/" },
  { id: "lencois-caves", place: "Lençóis", title: "Grottencircuit: Lapa Doce & Pratinha", copy: "Ondergrondse zalen, helder water en geologische formaties als rustigere dagtrip.", time: "volle dag", cost: "€€", vibe: "grotten", image: photos["Lençóis"], search: "Lapa Doce Pratinha Chapada Diamantina", source: "https://visitbrasil.com/en/location/chapada-diamantina/" },
  { id: "lencois-marimbus", place: "Lençóis", title: "Kanoën door Marimbus", copy: "Vier uur varen door het stille ‘Pantanal van Chapada’ vanuit de quilombola-gemeenschap Remanso.", time: "volle dag", cost: "€€", vibe: "water", image: photos["Lençóis"], search: "Marimbus Chapada Diamantina canoe", source: "https://feel.visitbrasil.com/en/marimbus-pantanal/" },
  { id: "lencois-bike", place: "Lençóis", title: "Mountainbike naar Barro Branco", copy: "Technische oude mijnwerkerspaden met rivierbaden; vooral voor ervaren mountainbikers.", time: "volle dag", cost: "€€€", vibe: "sport", image: photos["Lençóis"], search: "mountain bike Chapada Diamantina Lencois", source: "https://visitbrasil.com/en/location/chapada-diamantina/" },
  { id: "lencois-azul", place: "Lençóis", title: "Diner bij Restaurant Azul", copy: "De optionele dinerreservering die op 9 oktober al in het oorspronkelijke reisvoorstel staat.", time: "avond", cost: "€€", vibe: "diner", image: photos["Lençóis"], search: "restaurant dinner Lencois Bahia Brazil", source: "https://visitbrasil.com/en/location/chapada-diamantina/" },

  { id: "itacare-beaches", place: "Itacaré", title: "Trail langs vier stranden", copy: "Havaizinho, Engenhoca, Camboinha en Itacarezinho in één dag.", time: "5–6 uur", cost: "€€", vibe: "actief", image: photos["Itacaré"], search: "Itacarezinho Engenhoca beach Itacare", source: "https://itacare.ba.gov.br/praias/" },
  { id: "itacare-surf", place: "Itacaré", title: "Surflessen", copy: "Beginnersles met materiaal op een strand dat bij de omstandigheden past.", time: "2–3 uur", cost: "€€", vibe: "sport", image: photos["Itacaré"], search: "surf Itacare Bahia", source: "https://itacare.ba.gov.br/esportes-e-aventura/" },
  { id: "itacare-waterfall", place: "Itacaré", title: "Cachoeira do Tijuípe", copy: "Waterval, zwemmen en eventueel combineren met Itacarezinho.", time: "halve dag", cost: "€€", vibe: "natuur", image: photos["Itacaré"], search: "Cachoeira Tijuípe Itacare", source: "https://www.destinoitacare.com.br/" },
  { id: "itacare-rafting", place: "Itacaré", title: "Raften op de Rio de Contas", copy: "Stroomversnellingen, jungle en teamwork voor wie een actieve dag wil.", time: "halve dag", cost: "€€€", vibe: "adrenaline", image: photos["Itacaré"], search: "rafting Rio de Contas Itacare", source: "https://www.ba.gov.br/turismo/noticia/2024-07/3214/itacare-e-destaque-nacional-no-turismo-esportivo-e-de-aventura" },
  { id: "itacare-cacao", place: "Itacaré", title: "Cacaoboerderij & chocoladeproeverij", copy: "Volg de cacaovrucht van plantage tot chocolade en proef Zuid-Bahia.", time: "halve dag", cost: "€€", vibe: "proeven", image: photos["Itacaré"], search: "cacao farm Bahia chocolate", source: "https://www.destinoitacare.com.br/" },
  { id: "itacare-canoe", place: "Itacaré", title: "Kano, SUP of mangrovetocht", copy: "Een rustiger wateravontuur door rivier en mangrove, afhankelijk van getij en aanbieder.", time: "2–4 uur", cost: "€€", vibe: "water", image: photos["Itacaré"], search: "canoe mangrove Itacare Bahia", source: "https://www.ba.gov.br/turismo/noticia/2024-07/3214/itacare-e-destaque-nacional-no-turismo-esportivo-e-de-aventura" },

  { id: "petropolis-museum", place: "Petrópolis", title: "Museu Imperial", copy: "Het voormalige zomerpaleis van Pedro II en de historische kern van de stad.", time: "2 uur", cost: "€", vibe: "cultuur", image: photos["Petrópolis"], search: "Museu Imperial Petropolis", source: "https://www.turismo.rj.gov.br/cidades/petropolis/" },
  { id: "petropolis-beer", place: "Petrópolis", title: "Braziliaanse bierproeverij", copy: "Een rondleiding of tasting bij de lokale biertraditie van Petrópolis.", time: "2–3 uur", cost: "€€", vibe: "proeven", image: photos["Petrópolis"], search: "Cervejaria Bohemia Petropolis", source: "https://www.petropolis.rj.gov.br/turispetro/circuitos-cervejeiros" },
  { id: "petropolis-dumont", place: "Petrópolis", title: "Casa de Santos Dumont", copy: "Een compact en eigenzinnig huis-museum van de Braziliaanse luchtvaartpionier.", time: "1–2 uur", cost: "€", vibe: "geschiedenis", image: photos["Petrópolis"], search: "Casa Santos Dumont Petropolis", source: "https://www.turismo.rj.gov.br/cidades/petropolis/" },
  { id: "petropolis-crystal", place: "Petrópolis", title: "Palácio de Cristal & kathedraal", copy: "Combineer twee iconen met een wandeling door het historische centrum.", time: "2–3 uur", cost: "€", vibe: "wandelen", image: photos["Petrópolis"], search: "Palacio de Cristal Petropolis cathedral", source: "https://www.turismo.rj.gov.br/cidades/petropolis/" },
  { id: "petropolis-serra", place: "Petrópolis", title: "Serra dos Órgãos-dagtocht", copy: "Kies een passende trail of waterval in het nationale park en regel vervoer vooraf.", time: "volle dag", cost: "€€", vibe: "natuur", image: photos["Petrópolis"], search: "Serra dos Orgaos Petropolis Brazil", source: "https://www.petropolis.rj.gov.br/turispetro/viva-essa-experiencia" },
  { id: "petropolis-veu", place: "Petrópolis", title: "Hike naar Véu da Noiva", copy: "De optionele watervalhike die voor 15 oktober al in het oorspronkelijke reisvoorstel staat.", time: "halve dag", cost: "€€", vibe: "hike", image: photos["Petrópolis"], search: "Veu da Noiva waterfall Petropolis", source: "https://www.petropolis.rj.gov.br/turispetro/viva-essa-experiencia" },

  { id: "rio-sugarloaf", place: "Rio", title: "Sugarloaf bij zonsondergang", copy: "Klassiek Rio-uitzicht; reserveer een tijdslot en plan ruim rond zonsondergang.", time: "3 uur", cost: "€€€", vibe: "iconisch", image: photos["Rio de Janeiro"], search: "Pao de Acucar Sugarloaf Rio sunset", source: "https://riotur.rio/en/editorial/press-2/" },
  { id: "rio-samba", place: "Rio", title: "Samba-avond in Lapa", copy: "Live muziek en nachtelijk Rio. Spreek vervoer en een vaste terugtijd af.", time: "avond", cost: "€€", vibe: "nacht", image: photos["Rio de Janeiro"], search: "Lapa samba Rio de Janeiro", source: "https://riotur.rio/en/que_fazer/rio-nightlife/" },
  { id: "rio-match", place: "Rio", title: "Wedstrijd in Maracanã", copy: "De droomoptie, zodra speelschema, club en betrouwbare tickets vaststaan.", time: "halve dag", cost: "€€€", vibe: "voetbal", image: photos["Rio de Janeiro"], search: "Maracana football Rio de Janeiro", source: "https://riotur.rio/en/editorial/press-2/" },
  { id: "rio-pedra-bonita", place: "Rio", title: "Hike naar Pedra Bonita", copy: "Een toegankelijke top met uitzicht op Pedra da Gávea, stranden en Tijuca Forest.", time: "halve dag", cost: "€€", vibe: "hike", image: photos["Rio de Janeiro"], search: "Pedra Bonita Rio de Janeiro", source: "https://riotur.rio/en/que_fazer/pedra-bonita-2/" },
  { id: "rio-santa-teresa", place: "Rio", title: "Santa Teresa, tram & Selarón", copy: "Boheemse straten, kunst, oude tram en de kleurrijke trappen richting Lapa.", time: "halve dag", cost: "€", vibe: "wijk", image: photos["Rio de Janeiro"], search: "Santa Teresa tram Selaron Rio", source: "https://riotur.rio/en/que_fazer/santa-teresa-itinerary/" },
  { id: "rio-tijuca", place: "Rio", title: "Tijuca Forest & watervallen", copy: "Een groene stadsescape langs Taunay, uitzichtpunten en korte junglepaden.", time: "halve dag", cost: "€€", vibe: "natuur", image: photos["Rio de Janeiro"], search: "Tijuca Forest waterfall Rio", source: "https://riotur.rio/en/que_fazer/45731/" },
  { id: "rio-pedra-sal", place: "Rio", title: "Roda de samba bij Pedra do Sal", copy: "Een historische sambaplek; check kort vooraf welke avond er muziek is.", time: "avond", cost: "€", vibe: "muziek", image: photos["Rio de Janeiro"], search: "Pedra do Sal samba Rio", source: "https://riotur.rio/en/destaque/what-makes-rio-special/" },
  { id: "rio-museums", place: "Rio", title: "Museu do Amanhã & Pequena África", copy: "Moderne architectuur, havengebied en Afro-Braziliaanse geschiedenis in één route.", time: "halve dag", cost: "€€", vibe: "cultuur", image: photos["Rio de Janeiro"], search: "Museu do Amanha Pequena Africa Rio", source: "https://riotur.rio/en/destaque/what-makes-rio-special/" },

  { id: "ilha-boat", place: "Ilha Grande", title: "Speedboat rond het eiland", copy: "Veel baaien op één dag; route blijft afhankelijk van wind en zee.", time: "volle dag", cost: "€€€", vibe: "water", image: photos["Ilha Grande"], search: "boat tour Ilha Grande Brazil", source: "https://visite.angra.rj.gov.br/ponto-turistico/lagoa-azul" },
  { id: "ilha-lopes", place: "Ilha Grande", title: "Hike naar Lopes Mendes", copy: "Jungletrail en een van de bekendste stranden van het eiland.", time: "5–6 uur", cost: "€", vibe: "strand", image: photos["Ilha Grande"], search: "Lopes Mendes Ilha Grande", source: "https://visitilhagrande.com/ilha-grande-beaches/" },
  { id: "ilha-papagaio", place: "Ilha Grande", title: "Pico do Papagaio", copy: "De sportieve finale. Liefst met gids en alleen bij geschikte omstandigheden.", time: "6–8 uur", cost: "€€", vibe: "hike", image: photos["Ilha Grande"], search: "Pico do Papagaio Ilha Grande", source: "https://visitilhagrande.com/ilha-grande-beaches/" },
  { id: "ilha-lagoa-azul", place: "Ilha Grande", title: "Snorkelen in Lagoa Azul", copy: "Rustig, helder water en veel vis; meestal onderdeel van een bootroute.", time: "halve dag", cost: "€€", vibe: "snorkel", image: photos["Ilha Grande"], search: "Lagoa Azul Ilha Grande snorkeling", source: "https://visite.angra.rj.gov.br/ponto-turistico/lagoa-azul" },
  { id: "ilha-dois-rios", place: "Ilha Grande", title: "Trail naar Dois Rios", copy: "Een stevige wandeling naar een breed strand en de geschiedenis van de voormalige gevangenis.", time: "volle dag", cost: "€", vibe: "ontdekken", image: photos["Ilha Grande"], search: "Dois Rios Ilha Grande", source: "https://visitilhagrande.com/ilha-grande-beaches/" },
  { id: "ilha-kayak", place: "Ilha Grande", title: "Kajakken vanuit Abraão", copy: "Peddel langs rustige baaien en kleine stranden, liefst vroeg en bij kalme zee.", time: "2–4 uur", cost: "€€", vibe: "water", image: photos["Ilha Grande"], search: "kayak Vila do Abraao Ilha Grande", source: "https://www.ilhagrande.com.br/atrativos/lagoa-azul/" },
  { id: "ilha-dive", place: "Ilha Grande", title: "Duiken of discover scuba", copy: "Voor beginners of gebrevetteerde duikers; zicht en locatie hangen van de omstandigheden af.", time: "halve dag", cost: "€€€", vibe: "duiken", image: photos["Ilha Grande"], search: "scuba diving Ilha Grande Brazil", source: "https://www.ilhagrande.com.br/atrativos/lagoa-azul/" }
];

const proposalIdeaIds = new Set([
  "lencois-azul",
  "petropolis-beer",
  "petropolis-veu",
  "rio-match",
  "ilha-boat",
  "ilha-papagaio"
]);

const coverGuides = {
  "salvador-capoeira": { query: "intitle:Capoeira Salvador", terms: ["capoeira", "berimbau"] },
  "salvador-barra": { query: "Farol da Barra Salvador sunset", terms: ["farol da barra", "sunset", "pôr do sol", "salvador"] },
  "salvador-afro": { query: "Pelourinho Salvador Afro Brazilian culture", terms: ["pelourinho", "afro", "salvador"] },
  "salvador-food": { query: "intitle:Acaraje Bahia", terms: ["acarajé", "acaraje", "moqueca"] },
  "salvador-bonfim": { query: "intitle:Bonfim Salvador", terms: ["bonfim"] },
  "lencois-pai-inacio": { query: "Morro do Pai Inacio Chapada Diamantina", terms: ["pai inácio", "pai inacio"] },
  "lencois-fumaca": { query: "Cachoeira da Fumaca Chapada Diamantina", terms: ["cachoeira da fumaça", "cachoeira da fumaca", "fumaca"] },
  "lencois-caves": { query: "intitle:Lapa Doce", terms: ["lapa doce", "cave", "gruta"] },
  "lencois-marimbus": { query: "intitle:Marimbus", terms: ["marimbus", "canoe", "canoa"] },
  "lencois-bike": { query: "intitle:Mountain biking", terms: ["mountain bike", "mountain biking", "cycling", "bicicleta", "ciclismo"] },
  "lencois-azul": { query: "intitle:Feijoada Brazil", terms: ["feijoada", "restaurant", "dinner", "cuisine", "food", "comida"] },
  "itacare-beaches": { query: "Itacarezinho Engenhoca beach Itacare", terms: ["itacarezinho", "engenhoca", "itacare", "beach"] },
  "itacare-surf": { query: "intitle:Surfing Brazil", terms: ["surf", "surfer", "surfing"] },
  "itacare-waterfall": { query: "Cachoeira Tijuípe Itacare", terms: ["tijuípe", "tijuipe", "cachoeira", "waterfall"] },
  "itacare-rafting": { query: "rafting Rio de Contas Bahia", terms: ["rafting", "rio de contas", "rapid"] },
  "itacare-cacao": { query: "cacao cocoa chocolate Bahia", terms: ["cacao", "cacau", "cocoa", "chocolate"] },
  "itacare-canoe": { query: "intitle:Kayak Brazil", terms: ["canoe", "canoa", "kayak", "caiaque"] },
  "petropolis-museum": { query: "Museu Imperial Petropolis", terms: ["museu imperial", "imperial museum"] },
  "petropolis-beer": { query: "beer brewery cerveja Brazil", terms: ["beer", "brewery", "cerveja", "cervejaria", "chope"] },
  "petropolis-dumont": { query: "Casa Santos Dumont Petropolis", terms: ["santos dumont", "casa santos dumont"] },
  "petropolis-crystal": { query: "intitle:Palacio de Cristal Petropolis", terms: ["palácio de cristal", "palacio de cristal"] },
  "petropolis-serra": { query: "Serra dos Orgaos Petropolis mountain", terms: ["serra dos órgãos", "serra dos orgaos", "mountain"] },
  "petropolis-veu": { query: "Veu da Noiva waterfall Petropolis", terms: ["véu da noiva", "veu da noiva", "waterfall", "cachoeira"] },
  "rio-sugarloaf": { query: "Pao de Acucar Sugarloaf Rio sunset", terms: ["pão de açúcar", "pao de acucar", "sugarloaf", "sunset"] },
  "rio-samba": { query: "intitle:Samba Rio", terms: ["samba"] },
  "rio-match": { query: "Maracana football stadium Rio", terms: ["maracanã", "maracana", "football", "futebol"] },
  "rio-pedra-bonita": { query: "Pedra Bonita Rio de Janeiro", terms: ["pedra bonita"] },
  "rio-santa-teresa": { query: "intitle:Santa Teresa Rio tram", terms: ["santa teresa", "selarón", "selaron", "tram", "bonde"] },
  "rio-tijuca": { query: "Tijuca Forest waterfall Rio", terms: ["tijuca", "waterfall", "cachoeira", "forest"] },
  "rio-pedra-sal": { query: "intitle:Pedra do Sal", terms: ["pedra do sal", "samba"] },
  "rio-museums": { query: "Museu do Amanha Rio museum", terms: ["museu do amanhã", "museu do amanha", "museum of tomorrow"] },
  "ilha-boat": { query: "intitle:Boat Brazil sea", terms: ["boat", "speedboat", "lancha", "barco"] },
  "ilha-lopes": { query: "Lopes Mendes Ilha Grande beach", terms: ["lopes mendes"] },
  "ilha-papagaio": { query: "Pico do Papagaio Ilha Grande", terms: ["pico do papagaio"] },
  "ilha-lagoa-azul": { query: "intitle:Snorkeling Brazil", terms: ["snorkel", "snorkeling"] },
  "ilha-dois-rios": { query: "Dois Rios Ilha Grande beach", terms: ["dois rios"] },
  "ilha-kayak": { query: "intitle:Kayaking Brazil", terms: ["kayak", "kayaking", "caiaque"] },
  "ilha-dive": { query: "intitle:Scuba diving Brazil", terms: ["scuba", "diving", "mergulho", "diver"] }
};

ideas.forEach(item => {
  item.origin = proposalIdeaIds.has(item.id) ? "proposal" : "research";
  item.coverTerms = coverGuides[item.id]?.terms || [];
  const key = `activity:${item.id}`;
  galleryQueries[key] = `${coverGuides[item.id]?.query || item.search} Brazil`;
  galleryLabels[key] = item.title;
  galleryFallbacks[key] = normalizeGalleryPlace(item.place);
});

const stays = [
  ["3–5 okt", "Nomads Multicultural", "Salvador · private dorm", "2 nachten"],
  ["5–6 okt", "Chapada Backpackers", "Lençóis · private dorm", "1 nacht"],
  ["6–8 okt", "Vale do Pati", "Chapada · private dorm", "2 nachten"],
  ["8–10 okt", "Hotel in Lençóis", "Exacte naam onbekend · multiples", "2 nachten"],
  ["10–13 okt", "Pousada Villa Maeva", "Itacaré · multiples", "3 nachten"],
  ["13–16 okt", "Hotel Vila Bavaria", "Petrópolis · multiples", "3 nachten"],
  ["16–20 okt", "Mango Tree", "Rio · private dorm", "4 nachten"],
  ["20–23 okt", "Holandês Hostel", "Ilha Grande · private dorm", "3 nachten"]
];

const checklistItems = ["Paspoort + kopie", "Reisverzekering", "Medisch/reisadvies check", "KLM-app + boeking", "E-sim / roaming", "Offline kaarten", "Hikeschoenen", "Lichte regenlaag", "Muggenmiddel", "Zonnebrand", "Wereldstekker", "Betaalpas + backup"];

const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

function toast(message) {
  const el = $("[data-toast]");
  el.textContent = message;
  el.classList.add("show");
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => el.classList.remove("show"), 2600);
}

function renderItinerary() {
  const root = $("[data-itinerary]");
  root.innerHTML = itinerary.map(d => `
    <article class="day-row" data-types="${d.types.join(" ")}" data-text="${`${d.place} ${d.activity} ${d.sub}`.toLowerCase()}">
      <div class="day-num"><strong>${String(d.day).padStart(2,"0")}</strong><span>${d.date}<br>${d.weekday}</span></div>
      <div class="day-place"><b>${d.place}</b><small>Dag ${d.day}</small></div>
      <div class="day-activity"><h3>${d.activity}</h3><p>${d.sub}<br><small>Slapen: ${d.stay}</small></p></div>
      <div class="tags">${d.tags.map(tag => `<span class="tag ${d.types.includes("optional") && tag === "optioneel" ? "optional" : d.types.includes("travel") && (tag.includes("transfer") || tag === "vlucht" || tag === "boot") ? "travel" : ""}">${tag}</span>`).join("")}</div>
      <button class="day-toggle" type="button" aria-label="Details van dag ${d.day} tonen" aria-expanded="false">+</button>
      <div class="day-details">${d.details}</div>
    </article>`).join("");

  $$(".day-toggle", root).forEach(button => button.addEventListener("click", () => {
    const row = button.closest(".day-row");
    const open = row.classList.toggle("open");
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute("aria-label", `${open ? "Details verbergen van" : "Details tonen van"} dag ${$(".day-num strong", row).textContent}`);
  }));
}

let activeFilter = "all";
function applyProgramFilter() {
  const query = $("[data-search]").value.trim().toLowerCase();
  let visible = 0;
  $$(".day-row").forEach(row => {
    const typeMatch = activeFilter === "all" || row.dataset.types.split(" ").includes(activeFilter);
    const textMatch = !query || row.dataset.text.includes(query);
    row.hidden = !(typeMatch && textMatch);
    if (!row.hidden) visible += 1;
  });
  $("[data-empty]").hidden = visible !== 0;
}

function initProgramFilters() {
  $$("[data-filter]").forEach(button => button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    $$("[data-filter]").forEach(b => b.classList.toggle("active", b === button));
    applyProgramFilter();
  }));
  $("[data-search]").addEventListener("input", applyProgramFilter);
}

let currentStop = "Salvador";
let stopPhotoIndex = 0;
function updateStopPhoto() {
  const images = galleries[currentStop];
  const image = images[stopPhotoIndex];
  $("[data-stop-photo]").style.backgroundImage = `url("${image.url}")`;
  $("[data-stop-photo-count]").textContent = `${stopPhotoIndex + 1} / ${images.length}`;
}

function selectStop(name) {
  const stop = stops[name];
  currentStop = name;
  stopPhotoIndex = 0;
  $$(".route-point").forEach(button => button.classList.toggle("active", button.dataset.stop === name));
  updateStopPhoto();
  $("[data-stop-index]").textContent = `STOP ${stop.index}`;
  $("[data-stop-name]").textContent = name;
  $("[data-stop-copy]").textContent = stop.copy;
  $("[data-stop-dates]").textContent = stop.dates;
  $("[data-stop-nights]").textContent = stop.nights;
  $("[data-stop-stay]").textContent = stop.stay;
  $("[data-show-days]").dataset.query = stop.query;
}

function initRoute() {
  $$(".route-point").forEach(button => button.addEventListener("click", () => selectStop(button.dataset.stop)));
  $("[data-stop-prev]").addEventListener("click", () => {
    stopPhotoIndex = (stopPhotoIndex - 1 + galleries[currentStop].length) % galleries[currentStop].length;
    updateStopPhoto();
  });
  $("[data-stop-next]").addEventListener("click", () => {
    stopPhotoIndex = (stopPhotoIndex + 1) % galleries[currentStop].length;
    updateStopPhoto();
  });
  $("[data-open-current-gallery]").addEventListener("click", () => openGallery(currentStop, stopPhotoIndex));
  $("[data-show-days]").addEventListener("click", event => {
    activeFilter = "all";
    $$("[data-filter]").forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
    $("[data-search]").value = event.currentTarget.dataset.query;
    applyProgramFilter();
    $("#programma").scrollIntoView({ behavior: "smooth" });
  });
  selectStop("Salvador");
}

let dialogPlace = "Salvador";
let dialogIndex = 0;
function normalizeGalleryPlace(place) { return place === "Rio" ? "Rio de Janeiro" : place; }
function plainText(value = "") {
  const node = document.createElement("div");
  node.innerHTML = value;
  return (node.textContent || "").replace(/\s+/g, " ").trim();
}

async function fetchCommonsImages(query) {
  const params = new URLSearchParams({
    action: "query",
    format: "json",
    origin: "*",
    generator: "search",
    gsrsearch: `${query} filetype:bitmap`,
    gsrnamespace: "6",
    gsrlimit: "24",
    prop: "imageinfo",
    iiprop: "url|mime|extmetadata",
    iiurlwidth: "1800"
  });
  const response = await fetch(`https://commons.wikimedia.org/w/api.php?${params}`);
  if (!response.ok) throw new Error("Commons kon niet worden geladen");
  const data = await response.json();
  return Object.values(data.query?.pages || {}).map(page => {
    const info = page.imageinfo?.[0];
    if (!info?.thumburl || !/^image\/(jpeg|png|webp)$/i.test(info.mime || "")) return null;
    const title = plainText(page.title.replace(/^File:/, "").replace(/\.[^.]+$/, "").replace(/[_-]+/g, " "));
    const artist = plainText(info.extmetadata?.Artist?.value || info.extmetadata?.Credit?.value || "Wikimedia Commons").slice(0, 80);
    const license = plainText(info.extmetadata?.LicenseShortName?.value || "Wikimedia Commons");
    return { url: info.thumburl, caption: `${title} · ${artist} / ${license}` };
  }).filter(Boolean);
}

async function enrichGallery(key) {
  if (galleries[key]?.length >= 12) return galleries[key];
  if (galleryLoads.has(key)) return galleryLoads.get(key);
  const task = (async () => {
    const fallback = galleryFallbacks[key];
    if (!galleries[key]) galleries[key] = fallback ? [...(galleries[fallback] || [])] : [];
    const queries = [galleryQueries[key], fallback && galleryQueries[fallback]].filter(Boolean);
    const collected = fallback ? [] : [...galleries[key]];
    for (const query of [...new Set(queries)]) {
      const found = await fetchCommonsImages(query);
      const known = new Set(collected.map(image => image.url));
      found.forEach(image => { if (!known.has(image.url) && collected.length < 12) { collected.push(image); known.add(image.url); } });
      if (collected.length >= 12) break;
    }
    if (fallback && collected.length < 12) {
      const known = new Set(collected.map(image => image.url));
      (galleries[fallback] || []).forEach(image => { if (!known.has(image.url) && collected.length < 12) { collected.push(image); known.add(image.url); } });
    }
    galleries[key] = collected.slice(0, 12);
    if (dialogPlace === key) { dialogIndex = Math.min(dialogIndex, galleries[key].length - 1); renderDialog(); }
    if (currentStop === key) updateStopPhoto();
    return galleries[key];
  })().catch(() => galleries[key] || []);
  galleryLoads.set(key, task);
  return task;
}

const usedIdeaCovers = new Set();
const blockedCoverTerms = ["medicine", "medic", "pharmacy", "drug", "tablet", "pill", "hospital", "logo", "flag", "map", "diagram", "poster", "painting", "artwork", "coat of arms", "portrait"];
function normalizeCoverText(value = "") {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

function scoreIdeaCover(image, item) {
  const text = normalizeCoverText(image.caption);
  if (blockedCoverTerms.some(term => text.includes(term))) return -1000;
  return item.coverTerms.reduce((score, term) => {
    const normalized = normalizeCoverText(term);
    return score + (text.includes(normalized) ? (normalized.includes(" ") ? 16 : 7) : 0);
  }, 0);
}

function applyIdeaCover(item, image) {
  item.image = image.url;
  item.coverCaption = image.caption;
  const element = $(`[data-idea-image="${item.id}"]`);
  if (element) {
    element.style.backgroundImage = `url("${image.url}")`;
    element.setAttribute("aria-label", `Sfeerbeeld bij ${item.title}: ${image.caption.split(" · ")[0]}`);
    element.dataset.coverCaption = image.caption;
    element.classList.add("loaded");
  }
}

function seedIdeaCovers() {
  usedIdeaCovers.clear();
  ideas.forEach(item => {
    const place = normalizeGalleryPlace(item.place);
    const placeItems = ideas.filter(candidate => normalizeGalleryPlace(candidate.place) === place);
    const placeIndex = placeItems.findIndex(candidate => candidate.id === item.id);
    const cover = (galleries[place] || []).find((image, index) => index >= placeIndex && !usedIdeaCovers.has(image.url))
      || (galleries[place] || []).find(image => !usedIdeaCovers.has(image.url));
    if (cover) {
      usedIdeaCovers.add(cover.url);
      applyIdeaCover(item, cover);
    }
  });
}

async function loadIdeaCover(item) {
  const galleryKey = `activity:${item.id}`;
  const activityImages = await enrichGallery(galleryKey);
  const candidates = activityImages
    .map(image => ({ image, score: scoreIdeaCover(image, item) }))
    .sort((a, b) => b.score - a.score);
  usedIdeaCovers.delete(item.image);
  const match = candidates.find(candidate => candidate.score > 0 && !usedIdeaCovers.has(candidate.image.url));
  if (!match) { usedIdeaCovers.add(item.image); return; }
  usedIdeaCovers.add(match.image.url);
  applyIdeaCover(item, match.image);
}

async function loadIdeaCovers() {
  const queue = [...ideas];
  const workers = Array.from({ length: 5 }, async () => {
    while (queue.length) {
      const item = queue.shift();
      if (item) await loadIdeaCover(item);
    }
  });
  await Promise.allSettled(workers);
}

function renderDialog() {
  const images = galleries[dialogPlace];
  const current = images[dialogIndex];
  $("[data-dialog-place]").textContent = (galleryLabels[dialogPlace] || dialogPlace).toUpperCase();
  $("[data-dialog-title]").textContent = `Foto ${dialogIndex + 1} van ${images.length}`;
  $("[data-dialog-image]").src = current.url;
  $("[data-dialog-image]").alt = current.caption.split(" · ")[0];
  $("[data-dialog-caption]").textContent = current.caption;
  $("[data-dialog-thumbs]").innerHTML = images.map((image, index) => `<button class="dialog-thumb ${index === dialogIndex ? "active" : ""}" type="button" data-dialog-thumb="${index}" aria-label="Open foto ${index + 1}"><img src="${image.url}" alt="" loading="lazy"></button>`).join("");
  $$("[data-dialog-thumb]").forEach(button => button.addEventListener("click", () => {
    dialogIndex = Number(button.dataset.dialogThumb);
    renderDialog();
  }));
}

function openGallery(place, index = 0) {
  dialogPlace = normalizeGalleryPlace(place);
  const fallback = galleryFallbacks[dialogPlace];
  if (!galleries[dialogPlace]) galleries[dialogPlace] = fallback ? [...(galleries[fallback] || [])] : [];
  dialogIndex = index;
  renderDialog();
  $("[data-photo-dialog]").showModal();
  enrichGallery(dialogPlace);
}

function initPhotoDialog() {
  const dialog = $("[data-photo-dialog]");
  $$("[data-open-gallery]").forEach(button => button.addEventListener("click", () => openGallery(button.dataset.openGallery)));
  $("[data-dialog-close]").addEventListener("click", () => dialog.close());
  $("[data-dialog-prev]").addEventListener("click", () => {
    dialogIndex = (dialogIndex - 1 + galleries[dialogPlace].length) % galleries[dialogPlace].length;
    renderDialog();
  });
  $("[data-dialog-next]").addEventListener("click", () => {
    dialogIndex = (dialogIndex + 1) % galleries[dialogPlace].length;
    renderDialog();
  });
  dialog.addEventListener("click", event => { if (event.target === dialog) dialog.close(); });
}

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}

function saveSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch { /* storage may be disabled */ }
}

function encodeGroupState(value) {
  const bytes = new TextEncoder().encode(JSON.stringify(value));
  let binary = "";
  bytes.forEach(byte => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function decodeGroupState(value) {
  try {
    const base64 = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
    const bytes = Uint8Array.from(atob(base64), char => char.charCodeAt(0));
    const parsed = JSON.parse(new TextDecoder().decode(bytes));
    return Object.fromEntries(Object.entries(parsed).filter(([, names]) => Array.isArray(names)).map(([id, names]) => [id, [...new Set(names.map(String).filter(Boolean))].slice(0, 20)]));
  } catch { return null; }
}

function loadGroupVotes() {
  const shared = new URL(location.href).searchParams.get("group");
  if (shared) return decodeGroupState(shared) || {};
  try { return JSON.parse(localStorage.getItem("nescio-group-shortlist-v2") || "{}"); }
  catch { return {}; }
}

let groupVotes = loadGroupVotes();
let currentMember = localStorage.getItem("nescio-member-name") || "";
function syncGroupState() {
  try { localStorage.setItem("nescio-group-shortlist-v2", JSON.stringify(groupVotes)); } catch { /* storage may be disabled */ }
  const url = new URL(location.href);
  const hasVotes = Object.values(groupVotes).some(names => names.length);
  hasVotes ? url.searchParams.set("group", encodeGroupState(groupVotes)) : url.searchParams.delete("group");
  history.replaceState(null, "", url);
}

let activeIdeaPlace = "Alle";
function renderIdeas() {
  const places = ["Alle", ...new Set(ideas.map(item => item.place))];
  $("[data-idea-filters]").innerHTML = places.map(place => `<button class="chip ${place === activeIdeaPlace ? "active" : ""}" type="button" data-idea-place="${place}">${place}</button>`).join("");
  $("[data-ideas]").innerHTML = ideas.map(item => {
    const voters = groupVotes[item.id] || [];
    const chosenByMe = Boolean(currentMember && voters.includes(currentMember));
    return `
    <article class="idea-card" data-idea-card="${item.place}" ${activeIdeaPlace !== "Alle" && activeIdeaPlace !== item.place ? "hidden" : ""}>
      <div class="idea-image" role="img" aria-label="Sfeerbeeld bij ${item.title}" data-idea-image="${item.id}" style="background-image:url('${item.image}')"></div>
      <div class="idea-body">
        <div class="idea-top"><span>${item.place}</span><span>${item.vibe}</span></div>
        <span class="origin-badge ${item.origin}">${item.origin === "proposal" ? "Stond in reisvoorstel" : "Zelf opgezocht"}</span>
        <h3>${item.title}</h3><p>${item.copy}</p>
        <div class="idea-meta"><span>◷ ${item.time}</span><span>·</span><span>${item.cost}</span></div>
        <a class="idea-source" href="${item.source}" target="_blank" rel="noopener">Bekijk officiële inspiratie ↗</a>
        <div class="idea-voters">${voters.map(name => `<span class="voter"><i>${name.slice(0,1).toUpperCase()}</i>${name}</span>`).join("")}</div>
        <button class="save-idea ${chosenByMe ? "saved" : ""}" type="button" data-save-idea="${item.id}" aria-pressed="${chosenByMe}">${chosenByMe ? "✓ Door jou gekozen" : "+ Zet op mijn shortlist"}</button>
        <button class="idea-gallery" type="button" data-idea-gallery="activity:${item.id}">Bekijk 12+ sfeerbeelden ↗</button>
      </div>
    </article>`;
  }).join("");
  $("[data-shortlist-count]").textContent = Object.values(groupVotes).filter(names => names.length).length;

  $$("[data-idea-place]").forEach(button => button.addEventListener("click", () => {
    activeIdeaPlace = button.dataset.ideaPlace;
    renderIdeas();
  }));
  $$("[data-save-idea]").forEach(button => button.addEventListener("click", () => {
    const name = currentMember.trim();
    if (!name) {
      $("[data-member-name]").focus();
      toast("Vul eerst je naam in");
      return;
    }
    const id = button.dataset.saveIdea;
    const voters = groupVotes[id] || [];
    groupVotes[id] = voters.includes(name) ? voters.filter(voter => voter !== name) : [...voters, name];
    if (!groupVotes[id].length) delete groupVotes[id];
    syncGroupState();
    renderIdeas();
  }));
  $$("[data-idea-gallery]").forEach(button => button.addEventListener("click", () => openGallery(button.dataset.ideaGallery)));
}

async function shareGroupState() {
  syncGroupState();
  const data = { title: "JC Nescio groepsshortlist", text: "Bekijk wie welke activiteiten heeft gekozen voor Brazilië 2026.", url: location.href };
  try {
    if (navigator.share) await navigator.share(data);
    else { await navigator.clipboard.writeText(location.href); toast("Groepslink gekopieerd"); }
  } catch (error) { if (error.name !== "AbortError") toast("Delen lukte niet"); }
}

function initGroupShortlist() {
  const input = $("[data-member-name]");
  input.value = currentMember;
  input.addEventListener("input", () => {
    currentMember = input.value.trim();
    try { localStorage.setItem("nescio-member-name", currentMember); } catch { /* storage may be disabled */ }
    renderIdeas();
  });
  input.addEventListener("keydown", event => { if (event.key === "Enter") input.blur(); });
  $("[data-share-group]").addEventListener("click", shareGroupState);
}

function renderTravelInfo() {
  $("[data-stays]").innerHTML = stays.map(stay => `<div class="stay-row"><span>${stay[0]}</span><div><b>${stay[1]}</b><small>${stay[2]}</small></div><strong>${stay[3]}</strong></div>`).join("");
  const checked = loadSet("nescio-checklist");
  $("[data-checklist]").innerHTML = checklistItems.map((item, index) => `<label class="check-item"><input type="checkbox" value="${index}" ${checked.has(String(index)) ? "checked" : ""}><span>${item}</span></label>`).join("");
  $$("[data-checklist] input").forEach(input => input.addEventListener("change", () => {
    input.checked ? checked.add(input.value) : checked.delete(input.value);
    saveSet("nescio-checklist", checked);
  }));
  $("[data-reset-checklist]").addEventListener("click", () => {
    checked.clear();
    saveSet("nescio-checklist", checked);
    $$("[data-checklist] input").forEach(input => { input.checked = false; });
    toast("Checklist gewist");
  });
}

function updateCountdown() {
  const target = new Date("2026-10-03T00:00:00+02:00").getTime();
  const diff = Math.max(0, target - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const minutes = Math.floor((diff % 3600000) / 60000);
  const values = [days, hours, minutes];
  $$("[data-countdown] strong").forEach((el, index) => { el.textContent = String(values[index]).padStart(2, "0"); });
}

async function shareSite() {
  const data = { title: "JC Nescio × Brazilië 2026", text: "De complete reisgids voor onze lustrumvakantie naar Brazilië.", url: location.href };
  try {
    if (navigator.share) {
      await navigator.share(data);
    } else {
      await navigator.clipboard.writeText(location.href);
      toast("Link gekopieerd");
    }
  } catch (error) {
    if (error.name !== "AbortError") toast("Delen lukte niet — kopieer de URL uit je browser");
  }
}

function initNavigation() {
  const menuButton = $(".menu-button");
  const menu = $("#mobile-nav");
  menuButton.addEventListener("click", () => {
    const open = menu.hidden;
    menu.hidden = !open;
    menuButton.setAttribute("aria-expanded", String(open));
    menuButton.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
    menuButton.textContent = open ? "×" : "☰";
    document.body.classList.toggle("menu-open", open);
  });
  $$("#mobile-nav a").forEach(link => link.addEventListener("click", () => {
    menu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
    menuButton.setAttribute("aria-label", "Menu openen");
    menuButton.textContent = "☰";
    document.body.classList.remove("menu-open");
  }));
  $$('[data-share]').forEach(button => button.addEventListener("click", shareSite));
}

renderItinerary();
initProgramFilters();
initRoute();
initPhotoDialog();
renderIdeas();
initGroupShortlist();
renderTravelInfo();
initNavigation();
updateCountdown();
setInterval(updateCountdown, 60000);
Promise.allSettled(Object.keys(stops).map(place => enrichGallery(place))).then(() => {
  seedIdeaCovers();
  loadIdeaCovers();
});
