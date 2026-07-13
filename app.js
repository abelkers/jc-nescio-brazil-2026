const photos = {
  Salvador: "https://images.unsplash.com/photo-1640884216864-b26b780ff102?auto=format&fit=crop&w=1400&q=82",
  "Lençóis": "https://commons.wikimedia.org/wiki/Special:FilePath/Vale%20do%20Pati%20-%20Chapada%20Diamantina.JPG?width=1400",
  "Itacaré": "https://commons.wikimedia.org/wiki/Special:FilePath/Beach%20in%20Itacar%C3%A9.jpg?width=1100",
  "Petrópolis": "https://commons.wikimedia.org/wiki/Special:FilePath/Museu%20Imperial%20-%20Petr%C3%B3polis.jpg?width=1400",
  "Rio de Janeiro": "https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=1400&q=82",
  "Ilha Grande": "https://commons.wikimedia.org/wiki/Special:FilePath/IlhaGrande-LopesMendes1.jpg?width=1400"
};

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
  { id: "salvador-capoeira", place: "Salvador", title: "Capoeira & percussie in Pelourinho", copy: "Een energieke culturele avond die perfect past na de city tour.", time: "2–3 uur", cost: "€€", vibe: "cultuur", image: photos.Salvador },
  { id: "salvador-barra", place: "Salvador", title: "Zonsondergang bij Farol da Barra", copy: "Relaxte eerste avond aan zee met uitzicht vanaf de vuurtoren.", time: "2 uur", cost: "€", vibe: "chill", image: photos.Salvador },
  { id: "itacare-beaches", place: "Itacaré", title: "Trail langs vier stranden", copy: "Havaizinho, Engenhoca, Camboinha en Itacarezinho in één dag.", time: "5–6 uur", cost: "€€", vibe: "actief", image: photos["Itacaré"] },
  { id: "itacare-surf", place: "Itacaré", title: "Surflessen", copy: "Beginnersles met materiaal op een strand dat bij de omstandigheden past.", time: "2–3 uur", cost: "€€", vibe: "sport", image: photos["Itacaré"] },
  { id: "itacare-waterfall", place: "Itacaré", title: "Cachoeira do Tijuípe", copy: "Waterval, zwemmen en eventueel combineren met Itacarezinho.", time: "halve dag", cost: "€€", vibe: "natuur", image: photos["Itacaré"] },
  { id: "petropolis-museum", place: "Petrópolis", title: "Museu Imperial", copy: "Het voormalige zomerpaleis van Pedro II en de historische kern van de stad.", time: "2 uur", cost: "€", vibe: "cultuur", image: photos["Petrópolis"] },
  { id: "petropolis-beer", place: "Petrópolis", title: "Braziliaanse bierproeverij", copy: "Een rondleiding of tasting bij de lokale biertraditie van Petrópolis.", time: "2–3 uur", cost: "€€", vibe: "proeven", image: photos["Petrópolis"] },
  { id: "rio-sugarloaf", place: "Rio", title: "Sugarloaf bij zonsondergang", copy: "Klassiek Rio-uitzicht; reserveer een tijdslot en plan ruim rond zonsondergang.", time: "3 uur", cost: "€€€", vibe: "iconisch", image: photos["Rio de Janeiro"] },
  { id: "rio-samba", place: "Rio", title: "Samba-avond in Lapa", copy: "Live muziek en nachtelijk Rio. Spreek vervoer en een vaste terugtijd af.", time: "avond", cost: "€€", vibe: "nacht", image: photos["Rio de Janeiro"] },
  { id: "rio-match", place: "Rio", title: "Wedstrijd in Maracanã", copy: "De droomoptie, zodra speelschema, club en betrouwbare tickets vaststaan.", time: "halve dag", cost: "€€€", vibe: "voetbal", image: photos["Rio de Janeiro"] },
  { id: "ilha-boat", place: "Ilha Grande", title: "Speedboat rond het eiland", copy: "Veel baaien op één dag; route blijft afhankelijk van wind en zee.", time: "volle dag", cost: "€€€", vibe: "water", image: photos["Ilha Grande"] },
  { id: "ilha-lopes", place: "Ilha Grande", title: "Hike naar Lopes Mendes", copy: "Jungletrail en een van de bekendste stranden van het eiland.", time: "5–6 uur", cost: "€", vibe: "strand", image: photos["Ilha Grande"] },
  { id: "ilha-papagaio", place: "Ilha Grande", title: "Pico do Papagaio", copy: "De sportieve finale. Liefst met gids en alleen bij geschikte omstandigheden.", time: "6–8 uur", cost: "€€", vibe: "hike", image: photos["Ilha Grande"] }
];

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

function selectStop(name) {
  const stop = stops[name];
  $$(".route-point").forEach(button => button.classList.toggle("active", button.dataset.stop === name));
  $("[data-stop-photo]").style.backgroundImage = `url("${photos[name]}")`;
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
  $("[data-show-days]").addEventListener("click", event => {
    activeFilter = "all";
    $$("[data-filter]").forEach(b => b.classList.toggle("active", b.dataset.filter === "all"));
    $("[data-search]").value = event.currentTarget.dataset.query;
    applyProgramFilter();
    $("#programma").scrollIntoView({ behavior: "smooth" });
  });
  selectStop("Salvador");
}

function loadSet(key) {
  try { return new Set(JSON.parse(localStorage.getItem(key) || "[]")); }
  catch { return new Set(); }
}

function saveSet(key, set) {
  try { localStorage.setItem(key, JSON.stringify([...set])); } catch { /* storage may be disabled */ }
}

const shortlist = loadSet("nescio-shortlist");
let activeIdeaPlace = "Alle";
function renderIdeas() {
  const places = ["Alle", ...new Set(ideas.map(item => item.place))];
  $("[data-idea-filters]").innerHTML = places.map(place => `<button class="chip ${place === activeIdeaPlace ? "active" : ""}" type="button" data-idea-place="${place}">${place}</button>`).join("");
  $("[data-ideas]").innerHTML = ideas.map(item => `
    <article class="idea-card" data-idea-card="${item.place}" ${activeIdeaPlace !== "Alle" && activeIdeaPlace !== item.place ? "hidden" : ""}>
      <div class="idea-image" style="background-image:url('${item.image}')"></div>
      <div class="idea-body">
        <div class="idea-top"><span>${item.place}</span><span>${item.vibe}</span></div>
        <h3>${item.title}</h3><p>${item.copy}</p>
        <div class="idea-meta"><span>◷ ${item.time}</span><span>·</span><span>${item.cost}</span></div>
        <button class="save-idea ${shortlist.has(item.id) ? "saved" : ""}" type="button" data-save-idea="${item.id}" aria-pressed="${shortlist.has(item.id)}">${shortlist.has(item.id) ? "✓ Staat op mijn shortlist" : "+ Zet op mijn shortlist"}</button>
      </div>
    </article>`).join("");
  $("[data-shortlist-count]").textContent = shortlist.size;

  $$("[data-idea-place]").forEach(button => button.addEventListener("click", () => {
    activeIdeaPlace = button.dataset.ideaPlace;
    renderIdeas();
  }));
  $$("[data-save-idea]").forEach(button => button.addEventListener("click", () => {
    const id = button.dataset.saveIdea;
    shortlist.has(id) ? shortlist.delete(id) : shortlist.add(id);
    saveSet("nescio-shortlist", shortlist);
    renderIdeas();
  }));
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
renderIdeas();
renderTravelInfo();
initNavigation();
updateCountdown();
setInterval(updateCountdown, 60000);
