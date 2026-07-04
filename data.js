/* ============================================================
   ON THIS DAY — Curated Sample Event Data
   Hand-picked events for the draft / prototype
   ============================================================ */

const CURATED_EVENTS = {
  // ── Century-level featured events ──────────────────────────
  centuries: {
    "1st":  { title: "Roman Empire at its Zenith", description: "The Roman Empire dominated the Mediterranean world, establishing systems of law, engineering, and governance that would shape Western civilization for millennia.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Roman_Empire" },
    "2nd":  { title: "The Five Good Emperors", description: "Rome's golden age under Nerva, Trajan, Hadrian, Antoninus Pius, and Marcus Aurelius. The empire reached its maximum territorial extent.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Nerva%E2%80%93Antonine_dynasty" },
    "3rd":  { title: "Crisis of the Third Century", description: "The Roman Empire nearly collapsed under the combined pressures of invasion, civil war, plague, and economic depression.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Crisis_of_the_Third_Century" },
    "4th":  { title: "Constantine and Christianity", description: "Emperor Constantine legalized Christianity and founded Constantinople, forever altering the trajectory of European and Middle Eastern history.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Constantine_the_Great" },
    "5th":  { title: "Fall of the Western Roman Empire", description: "In 476 CE, the last Western Roman Emperor was deposed by the Germanic chieftain Odoacer, marking the conventional end of antiquity.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire" },
    "6th":  { title: "Justinian's Reconquest", description: "Emperor Justinian I attempted to restore the Roman Empire, codified Roman law, and built the Hagia Sophia — one of history's greatest architectural achievements.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Justinian_I" },
    "7th":  { title: "Rise of Islam", description: "The Prophet Muhammad and his followers transformed the Arabian Peninsula and beyond. Within a century, an Islamic empire stretched from Spain to Central Asia.", category: "cultural", wikiLink: "https://en.wikipedia.org/wiki/Early_Muslim_conquests" },
    "8th":  { title: "Carolingian Renaissance", description: "Charlemagne united much of Western Europe and fostered a revival of learning, art, and culture that preserved classical knowledge through the medieval period.", category: "cultural", wikiLink: "https://en.wikipedia.org/wiki/Carolingian_Renaissance" },
    "9th":  { title: "The Viking Age Begins", description: "Norse seafarers expanded across the Atlantic and deep into Europe and the Byzantine Empire, reshaping the political map of the medieval world.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Viking_Age" },
    "10th": { title: "The Founding of Kyiv Rus'", description: "Viking-descended Varangian rulers established the state of Kyiv Rus', laying the cultural and political foundations for modern Ukraine, Russia, and Belarus.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Kievan_Rus%27" },
    "11th": { title: "The First Crusade", description: "European Christian armies captured Jerusalem in 1099, initiating two centuries of religious warfare and cross-cultural exchange between Europe and the Middle East.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/First_Crusade" },
    "12th": { title: "The Angevin Empire", description: "Henry II of England controlled territories from Scotland to the Pyrenees. Universities emerged in Paris and Oxford, beginning Europe's intellectual transformation.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Angevin_Empire" },
    "13th": { title: "The Mongol Empire", description: "Genghis Khan and his successors created the largest contiguous land empire in history, connecting East and West through trade and unprecedented destruction.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Mongol_Empire" },
    "14th": { title: "The Black Death", description: "The bubonic plague killed an estimated 30–60% of Europe's population between 1347 and 1353, fundamentally reshaping European society, economy, and culture.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Black_Death" },
    "15th": { title: "The Age of Exploration Begins", description: "Portuguese and Spanish navigators began the Age of Discovery. Columbus reached the Americas in 1492, and Gutenberg's printing press revolutionized communication.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Age_of_Discovery" },
    "16th": { title: "The Reformation", description: "Martin Luther's 95 Theses in 1517 sparked the Protestant Reformation, splitting Western Christianity and triggering wars of religion across Europe.", category: "cultural", wikiLink: "https://en.wikipedia.org/wiki/Reformation" },
    "17th": { title: "The Scientific Revolution", description: "Galileo, Newton, Kepler, and others transformed humanity's understanding of the natural world. The foundations of modern science were laid in this century.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Scientific_Revolution" },
    "18th": { title: "The Age of Revolutions", description: "The American (1776) and French (1789) Revolutions overthrew monarchies and established new ideals of liberty, equality, and democratic governance.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Age_of_Revolution" },
    "19th": { title: "The Industrial Revolution", description: "Steam power, railroads, and mass manufacturing transformed human civilization. Urbanization, colonialism, and new political ideologies reshaped the entire globe.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Industrial_Revolution" },
    "20th": { title: "The World Wars & the Atomic Age", description: "Two devastating global conflicts, the rise and fall of totalitarian ideologies, nuclear weapons, the space race, and the digital revolution defined the modern era.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/20th_century" },
    "21st": { title: "The Information Age", description: "The internet, smartphones, AI, and social media have connected and disrupted human society at unprecedented speed, while climate change poses existential challenges.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/21st_century" },
  },

  // ── Year-level events (sample: 20th century) ──────────────
  years: {
    1900: { title: "Boxer Rebellion", description: "Anti-foreign uprising in China, suppressed by an international coalition of eight nations.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Boxer_Rebellion" },
    1901: { title: "Death of Queen Victoria", description: "Queen Victoria died after 63 years on the British throne, ending the Victorian era.", category: "death", wikiLink: "https://en.wikipedia.org/wiki/Death_of_Queen_Victoria" },
    1903: { title: "First Powered Flight", description: "The Wright Brothers achieved the first sustained, controlled, powered heavier-than-air flight at Kitty Hawk, North Carolina.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Wright_Flyer" },
    1905: { title: "Einstein's Miracle Year", description: "Albert Einstein published four groundbreaking papers, including special relativity and the photoelectric effect.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Annus_Mirabilis_papers" },
    1906: { title: "San Francisco Earthquake", description: "A devastating 7.9-magnitude earthquake and subsequent fires destroyed much of San Francisco, killing over 3,000 people.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/1906_San_Francisco_earthquake" },
    1908: { title: "Tunguska Event", description: "A massive explosion flattened 2,150 square kilometres of Siberian forest, likely caused by the airburst of a meteoroid.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Tunguska_event" },
    1912: { title: "Sinking of the Titanic", description: "RMS Titanic struck an iceberg on her maiden voyage, sinking in the North Atlantic with the loss of over 1,500 lives.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Sinking_of_the_Titanic" },
    1914: { title: "World War I Begins", description: "The assassination of Archduke Franz Ferdinand triggered a chain of alliances that plunged Europe into the Great War.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/World_War_I" },
    1917: { title: "Russian Revolution", description: "The Bolsheviks overthrew the Provisional Government, establishing the world's first socialist state under Lenin.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Russian_Revolution" },
    1918: { title: "End of World War I", description: "The armistice on 11 November ended four years of fighting that killed an estimated 20 million people.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Armistice_of_11_November_1918" },
    1919: { title: "Treaty of Versailles", description: "The peace treaty that formally ended WWI imposed heavy reparations on Germany, sowing seeds for future conflict.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Treaty_of_Versailles" },
    1920: { title: "Women Win the Vote (US)", description: "The 19th Amendment to the US Constitution was ratified, granting women the right to vote nationwide.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Nineteenth_Amendment_to_the_United_States_Constitution" },
    1922: { title: "Discovery of Tutankhamun's Tomb", description: "Howard Carter discovered the nearly intact tomb of the Egyptian pharaoh Tutankhamun in the Valley of the Kings.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/KV62" },
    1928: { title: "Discovery of Penicillin", description: "Alexander Fleming discovered penicillin, ushering in the era of antibiotics and saving countless millions of lives.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Penicillin" },
    1929: { title: "Wall Street Crash", description: "The stock market crash of October 1929 triggered the Great Depression, the worst economic downturn in modern history.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929" },
    1933: { title: "Hitler Becomes Chancellor", description: "Adolf Hitler was appointed Chancellor of Germany, beginning the Nazi regime's consolidation of totalitarian power.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Adolf_Hitler%27s_rise_to_power" },
    1939: { title: "World War II Begins", description: "Germany invaded Poland on 1 September, triggering declarations of war by Britain and France.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/World_War_II" },
    1941: { title: "Attack on Pearl Harbor", description: "Japan's surprise attack on the US naval base at Pearl Harbor brought America into World War II.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Attack_on_Pearl_Harbor" },
    1945: { title: "Atomic Bombings & End of WWII", description: "The US dropped atomic bombs on Hiroshima and Nagasaki. Japan surrendered, ending the deadliest conflict in human history.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki" },
    1947: { title: "Indian Independence", description: "India gained independence from British rule, partitioned into India and Pakistan in a process accompanied by massive upheaval.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Partition_of_India" },
    1948: { title: "Creation of Israel", description: "The State of Israel declared independence, immediately followed by the first Arab-Israeli War.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Israeli_Declaration_of_Independence" },
    1953: { title: "Discovery of DNA Structure", description: "Watson and Crick published the double-helix structure of DNA, one of the most important scientific discoveries in history.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids" },
    1957: { title: "Sputnik Launches the Space Age", description: "The Soviet Union launched Sputnik 1, the first artificial satellite, igniting the Space Race with the United States.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Sputnik_1" },
    1961: { title: "First Human in Space", description: "Soviet cosmonaut Yuri Gagarin became the first human to orbit the Earth aboard Vostok 1.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Vostok_1" },
    1963: { title: "Assassination of JFK", description: "President John F. Kennedy was assassinated in Dallas, Texas, sending shockwaves around the world.", category: "death", wikiLink: "https://en.wikipedia.org/wiki/Assassination_of_John_F._Kennedy" },
    1969: { title: "Moon Landing", description: "Apollo 11's Neil Armstrong and Buzz Aldrin became the first humans to walk on the Moon on 20 July 1969.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_11" },
    1975: { title: "Fall of Saigon", description: "The capture of Saigon by North Vietnamese forces marked the end of the Vietnam War.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Fall_of_Saigon" },
    1986: { title: "Chernobyl Disaster", description: "The worst nuclear accident in history occurred at the Chernobyl power plant in Soviet Ukraine.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Chernobyl_disaster" },
    1989: { title: "Fall of the Berlin Wall", description: "The opening of the Berlin Wall on 9 November symbolized the end of the Cold War and the reunification of Europe.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall" },
    1991: { title: "Dissolution of the Soviet Union", description: "The USSR formally dissolved on 26 December, ending the Cold War and reshaping the global order.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union" },
    1994: { title: "Rwandan Genocide", description: "Over the course of approximately 100 days, an estimated 500,000 to 800,000 Rwandans were killed.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/Rwandan_genocide" },
    1997: { title: "Dolly the Sheep Cloned", description: "Scientists at the Roslin Institute announced the successful cloning of Dolly, the first mammal cloned from an adult somatic cell.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Dolly_(sheep)" },
    1999: { title: "Euro Currency Introduced", description: "The euro was officially introduced in eleven European Union member states, creating the world's largest currency union.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Euro" },
  },

  // ── Month-level events (sample: 1969) ─────────────────────
  months: {
    "1969-1":  { title: "Nixon Inaugurated", description: "Richard Nixon was inaugurated as the 37th President of the United States on 20 January.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/First_inauguration_of_Richard_Nixon" },
    "1969-2":  { title: "Boeing 747 First Flight", description: "The Boeing 747, the first wide-body commercial airliner, made its maiden flight on 9 February.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Boeing_747" },
    "1969-3":  { title: "Concorde's First Flight", description: "The Anglo-French supersonic airliner Concorde made its first test flight on 2 March.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/Concorde" },
    "1969-4":  { title: "Barricade Night in Northern Ireland", description: "Rioting erupted in Derry, marking a key escalation of the Troubles.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/The_Troubles" },
    "1969-6":  { title: "Stonewall Riots", description: "Patrons of the Stonewall Inn in New York City resisted a police raid, sparking the modern LGBTQ+ rights movement.", category: "cultural", wikiLink: "https://en.wikipedia.org/wiki/Stonewall_riots" },
    "1969-7":  { title: "Apollo 11 Moon Landing", description: "Neil Armstrong and Buzz Aldrin became the first humans to walk on the lunar surface on 20 July.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_11" },
    "1969-8":  { title: "Woodstock Festival", description: "The iconic three-day music festival took place on a dairy farm in Bethel, New York, attracting 400,000 people.", category: "cultural", wikiLink: "https://en.wikipedia.org/wiki/Woodstock" },
    "1969-10": { title: "First ARPANET Message", description: "The first message was sent over ARPANET from UCLA to SRI, laying the foundation for the modern internet.", category: "invention", wikiLink: "https://en.wikipedia.org/wiki/ARPANET" },
    "1969-11": { title: "Apollo 12 Lands on Moon", description: "The second crewed lunar landing demonstrated precision landing capability near the Surveyor 3 probe.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_12" },
  },

  // ── Day-level events (sample: July 1969) ──────────────────
  days: {
    "1969-7-3":  { title: "Soviet N1 Rocket Explodes", description: "The massive Soviet N1 moon rocket exploded seconds after launch at Baikonur, one of the largest non-nuclear explosions in history.", category: "disaster", wikiLink: "https://en.wikipedia.org/wiki/N1_(rocket)" },
    "1969-7-14": { title: "Football War Begins", description: "A brief war erupted between El Salvador and Honduras, triggered partly by tensions surrounding FIFA World Cup qualifying matches.", category: "war", wikiLink: "https://en.wikipedia.org/wiki/Football_War" },
    "1969-7-16": { title: "Apollo 11 Launches", description: "Apollo 11 launched from Kennedy Space Center, carrying Armstrong, Aldrin, and Collins toward the Moon.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_11" },
    "1969-7-20": { title: "First Moonwalk", description: "\"That's one small step for man, one giant leap for mankind.\" Neil Armstrong became the first human to set foot on the Moon.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Moon_landing" },
    "1969-7-21": { title: "Armstrong & Aldrin Return to CM", description: "After spending 21 hours on the lunar surface, the astronauts lifted off in the Lunar Module and rejoined Columbia.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_11" },
    "1969-7-24": { title: "Apollo 11 Splashdown", description: "The crew of Apollo 11 splashed down safely in the Pacific Ocean, completing humanity's first voyage to the Moon.", category: "exploration", wikiLink: "https://en.wikipedia.org/wiki/Apollo_11" },
    "1969-7-25": { title: "Nixon Doctrine Announced", description: "President Nixon announced that the US would expect its allies to handle their own defense, a shift in Cold War strategy.", category: "political", wikiLink: "https://en.wikipedia.org/wiki/Nixon_Doctrine" },
  },
};

// Month names for display
const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const MONTH_ABBR = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

// Ordinal suffix
function ordinal(n) {
  const s = ['th', 'st', 'nd', 'rd'];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// Century label helper
function centuryLabel(num) {
  return ordinal(num);
}
