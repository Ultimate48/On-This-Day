// Flat event pool — matches the DB schema exactly.
// month/day can be null for year-only events (empires, long-duration).
// importance_score drives bubbling: highest score = hero at each zoom level.
//
// Granularity rules:
//   year-only (month=null)      → visible at century + year levels
//   year+month (day=null)       → visible at century + year + month levels
//   year+month+day              → visible at all four levels

export const EVENTS = [

  // ── Ancient World (BC) ───────────────────────────────────────────────────

  {
    month: null, day: null, year: -3200,
    category: "cultural",
    description: "Proto-cuneiform writing emerges in Uruk, Mesopotamia — humanity's first recorded language.",
    wiki_links: ["https://en.wikipedia.org/wiki/Cuneiform"],
    image_key: "cultural_ancient_1",
    importance_score: 9.2
  },
  {
    month: null, day: null, year: -2560,
    category: "cultural",
    description: "The Great Pyramid of Giza is completed, the only surviving wonder of the ancient world.",
    wiki_links: ["https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"],
    image_key: "cultural_ancient_2",
    importance_score: 8.5
  },
  {
    month: null, day: null, year: -776,
    category: "cultural",
    description: "The first ancient Olympic Games are held in Olympia, Greece.",
    wiki_links: ["https://en.wikipedia.org/wiki/Ancient_Olympic_Games"],
    image_key: "cultural_ancient_1",
    importance_score: 6.5
  },
  {
    month: null, day: null, year: -753,
    category: "political",
    description: "Rome is founded by Romulus according to Roman tradition, beginning one of history's greatest civilizations.",
    wiki_links: ["https://en.wikipedia.org/wiki/Founding_of_Rome"],
    image_key: "political_ancient_1",
    importance_score: 9.0
  },
  {
    month: null, day: null, year: -563,
    category: "cultural",
    description: "Siddhartha Gautama, the Buddha, is born in Lumbini — founding one of the world's major religions.",
    wiki_links: ["https://en.wikipedia.org/wiki/Gautama_Buddha"],
    image_key: "cultural_ancient_1",
    importance_score: 9.0
  },
  {
    month: null, day: null, year: -508,
    category: "political",
    description: "Cleisthenes establishes Athenian democracy, laying the foundation of Western democratic governance.",
    wiki_links: ["https://en.wikipedia.org/wiki/Athenian_democracy"],
    image_key: "political_ancient_1",
    importance_score: 8.8
  },
  {
    month: null, day: null, year: -490,
    category: "war",
    description: "Greek city-states defeat the Persian Empire at the Battle of Marathon, preserving Western civilization.",
    wiki_links: ["https://en.wikipedia.org/wiki/Battle_of_Marathon"],
    image_key: "war_ancient_1",
    importance_score: 8.0
  },
  {
    month: null, day: null, year: -447,
    category: "cultural",
    description: "Construction begins on the Parthenon in Athens, the defining monument of Greek civilization.",
    wiki_links: ["https://en.wikipedia.org/wiki/Parthenon"],
    image_key: "cultural_ancient_2",
    importance_score: 7.5
  },
  {
    month: null, day: null, year: -336,
    category: "war",
    description: "Alexander the Great becomes King of Macedon and begins conquering the known world.",
    wiki_links: ["https://en.wikipedia.org/wiki/Alexander_the_Great"],
    image_key: "war_ancient_1",
    importance_score: 9.3
  },
  {
    month: 6, day: 11, year: -323,
    category: "death",
    description: "Alexander the Great dies in Babylon aged 32, and his empire fractures among his generals.",
    wiki_links: ["https://en.wikipedia.org/wiki/Death_of_Alexander_the_Great"],
    image_key: "death_ancient_1",
    importance_score: 8.5
  },
  {
    month: null, day: null, year: -221,
    category: "political",
    description: "Qin Shi Huang unifies China's warring states, becoming the first Emperor of a united China.",
    wiki_links: ["https://en.wikipedia.org/wiki/Qin_Shi_Huang"],
    image_key: "political_ancient_1",
    importance_score: 9.2
  },
  {
    month: null, day: null, year: -202,
    category: "political",
    description: "The Han Dynasty is established, beginning one of China's golden ages and opening the Silk Road.",
    wiki_links: ["https://en.wikipedia.org/wiki/Han_dynasty"],
    image_key: "political_ancient_1",
    importance_score: 8.0
  },
  {
    month: 3, day: 15, year: -44,
    category: "death",
    description: "Julius Caesar is assassinated on the Ides of March, ending the Roman Republic.",
    wiki_links: ["https://en.wikipedia.org/wiki/Assassination_of_Julius_Caesar"],
    image_key: "death_ancient_1",
    importance_score: 9.4
  },
  {
    month: null, day: null, year: -27,
    category: "political",
    description: "Augustus establishes the Roman Empire, ushering in two centuries of the Pax Romana.",
    wiki_links: ["https://en.wikipedia.org/wiki/Roman_Empire"],
    image_key: "political_ancient_1",
    importance_score: 9.5
  },

  // ── 1st–5th Century ──────────────────────────────────────────────────────

  {
    month: null, day: null, year: 4,
    category: "cultural",
    description: "Jesus of Nazareth is born, whose teachings will found Christianity and reshape Western civilization.",
    wiki_links: ["https://en.wikipedia.org/wiki/Jesus"],
    image_key: "cultural_ancient_1",
    importance_score: 9.8
  },
  {
    month: null, day: null, year: 79,
    category: "disaster",
    description: "Mount Vesuvius erupts, burying Pompeii and Herculaneum and killing thousands.",
    wiki_links: ["https://en.wikipedia.org/wiki/Eruption_of_Mount_Vesuvius_in_79_AD"],
    image_key: "disaster_1",
    importance_score: 8.0
  },
  {
    month: null, day: null, year: 105,
    category: "invention",
    description: "Cai Lun refines the papermaking process in China, enabling the spread of knowledge worldwide.",
    wiki_links: ["https://en.wikipedia.org/wiki/History_of_paper"],
    image_key: "invention_1",
    importance_score: 8.5
  },
  {
    month: null, day: null, year: 312,
    category: "political",
    description: "Constantine the Great converts to Christianity, transforming it from a persecuted sect to Rome's state religion.",
    wiki_links: ["https://en.wikipedia.org/wiki/Constantine_the_Great"],
    image_key: "political_ancient_1",
    importance_score: 9.0
  },
  {
    month: 8, day: 24, year: 410,
    category: "war",
    description: "Visigoths under Alaric sack Rome — the first time in 800 years the city has fallen to a foreign enemy.",
    wiki_links: ["https://en.wikipedia.org/wiki/Sack_of_Rome_(410)"],
    image_key: "war_ancient_1",
    importance_score: 8.5
  },
  {
    month: 9, day: 4, year: 476,
    category: "political",
    description: "Romulus Augustulus is deposed by Odoacer, marking the fall of the Western Roman Empire.",
    wiki_links: ["https://en.wikipedia.org/wiki/Fall_of_the_Western_Roman_Empire"],
    image_key: "political_ancient_1",
    importance_score: 9.6
  },

  // ── 6th–10th Century ──────────────────────────────────────────────────────

  {
    month: null, day: null, year: 570,
    category: "cultural",
    description: "Muhammad ibn Abdullah is born in Mecca — the founder of Islam, one of the world's major religions.",
    wiki_links: ["https://en.wikipedia.org/wiki/Muhammad"],
    image_key: "cultural_ancient_1",
    importance_score: 9.8
  },
  {
    month: null, day: null, year: 622,
    category: "cultural",
    description: "Muhammad's Hijra from Mecca to Medina marks Year 1 of the Islamic calendar.",
    wiki_links: ["https://en.wikipedia.org/wiki/Hijra_(Islam)"],
    image_key: "cultural_ancient_1",
    importance_score: 8.5
  },
  {
    month: null, day: null, year: 711,
    category: "war",
    description: "Umayyad forces cross into Iberia, beginning nearly 800 years of Islamic presence in Europe.",
    wiki_links: ["https://en.wikipedia.org/wiki/Umayyad_conquest_of_Hispania"],
    image_key: "war_ancient_1",
    importance_score: 8.0
  },
  {
    month: 12, day: 25, year: 800,
    category: "political",
    description: "Charlemagne is crowned Emperor of the Romans, uniting Western Europe for the first time since Rome.",
    wiki_links: ["https://en.wikipedia.org/wiki/Charlemagne"],
    image_key: "political_ancient_1",
    importance_score: 9.0
  },
  {
    month: null, day: null, year: 793,
    category: "war",
    description: "Vikings raid Lindisfarne monastery, beginning the Viking Age of raids across Europe.",
    wiki_links: ["https://en.wikipedia.org/wiki/Viking_Age"],
    image_key: "war_medieval_1",
    importance_score: 8.0
  },
  {
    month: null, day: null, year: 960,
    category: "political",
    description: "The Song Dynasty is established, beginning China's era of economic prosperity and technological innovation.",
    wiki_links: ["https://en.wikipedia.org/wiki/Song_dynasty"],
    image_key: "political_ancient_1",
    importance_score: 7.5
  },

  // ── 11th–14th Century ─────────────────────────────────────────────────────

  {
    month: 10, day: 14, year: 1066,
    category: "war",
    description: "William the Conqueror defeats Harold II at Hastings, reshaping the English language and governance forever.",
    wiki_links: ["https://en.wikipedia.org/wiki/Battle_of_Hastings"],
    image_key: "war_medieval_1",
    importance_score: 9.0
  },
  {
    month: 7, day: 15, year: 1099,
    category: "war",
    description: "Crusader armies capture Jerusalem after a five-week siege, beginning two centuries of religious warfare.",
    wiki_links: ["https://en.wikipedia.org/wiki/Siege_of_Jerusalem_(1099)"],
    image_key: "war_medieval_1",
    importance_score: 8.5
  },
  {
    month: 6, day: 15, year: 1215,
    category: "political",
    description: "King John of England seals the Magna Carta, establishing for the first time that the king is subject to the law.",
    wiki_links: ["https://en.wikipedia.org/wiki/Magna_Carta"],
    image_key: "political_medieval_1",
    importance_score: 9.2
  },
  {
    month: null, day: null, year: 1206,
    category: "war",
    description: "Genghis Khan unites the Mongol tribes and launches the largest land empire in history.",
    wiki_links: ["https://en.wikipedia.org/wiki/Mongol_Empire"],
    image_key: "war_medieval_1",
    importance_score: 9.3
  },
  {
    month: null, day: null, year: 1271,
    category: "exploration",
    description: "Marco Polo departs on his journey to China, later writing accounts that defined Europe's view of Asia.",
    wiki_links: ["https://en.wikipedia.org/wiki/Marco_Polo"],
    image_key: "exploration_1",
    importance_score: 7.5
  },
  {
    month: null, day: null, year: 1347,
    category: "disaster",
    description: "The Black Death reaches Europe, ultimately killing 30–60% of the continent's population.",
    wiki_links: ["https://en.wikipedia.org/wiki/Black_Death"],
    image_key: "disaster_1",
    importance_score: 9.7
  },
  {
    month: null, day: null, year: 1368,
    category: "political",
    description: "The Ming Dynasty is established after overthrowing the Mongols, beginning China's cultural renaissance.",
    wiki_links: ["https://en.wikipedia.org/wiki/Ming_dynasty"],
    image_key: "political_ancient_1",
    importance_score: 7.5
  },

  // ── 15th Century ──────────────────────────────────────────────────────────

  {
    month: null, day: null, year: 1440,
    category: "invention",
    description: "Johannes Gutenberg develops the movable-type printing press, revolutionizing the spread of knowledge.",
    wiki_links: ["https://en.wikipedia.org/wiki/Printing_press"],
    image_key: "invention_1",
    importance_score: 9.8
  },
  {
    month: 5, day: 29, year: 1453,
    category: "war",
    description: "Ottoman forces under Mehmed II capture Constantinople, ending the Byzantine Empire after 1,000 years.",
    wiki_links: ["https://en.wikipedia.org/wiki/Fall_of_Constantinople"],
    image_key: "war_medieval_1",
    importance_score: 9.2
  },
  {
    month: 10, day: 12, year: 1492,
    category: "exploration",
    description: "Christopher Columbus reaches the Americas, beginning the age of transatlantic contact.",
    wiki_links: ["https://en.wikipedia.org/wiki/Voyages_of_Christopher_Columbus"],
    image_key: "exploration_1",
    importance_score: 9.6
  },
  {
    month: null, day: null, year: 1498,
    category: "exploration",
    description: "Vasco da Gama reaches India by sea around Africa, opening a direct trade route between Europe and Asia.",
    wiki_links: ["https://en.wikipedia.org/wiki/Vasco_da_Gama"],
    image_key: "exploration_1",
    importance_score: 8.5
  },

  // ── 16th Century ──────────────────────────────────────────────────────────

  {
    month: 10, day: 31, year: 1517,
    category: "cultural",
    description: "Martin Luther nails his 95 Theses to the Wittenberg church door, igniting the Protestant Reformation.",
    wiki_links: ["https://en.wikipedia.org/wiki/Reformation"],
    image_key: "cultural_ancient_1",
    importance_score: 9.5
  },
  {
    month: null, day: null, year: 1543,
    category: "invention",
    description: "Copernicus publishes his heliocentric model of the solar system, beginning the Scientific Revolution.",
    wiki_links: ["https://en.wikipedia.org/wiki/Nicolaus_Copernicus"],
    image_key: "invention_1",
    importance_score: 9.2
  },
  {
    month: null, day: null, year: 1519,
    category: "exploration",
    description: "Ferdinand Magellan begins the first circumnavigation of the Earth.",
    wiki_links: ["https://en.wikipedia.org/wiki/Ferdinand_Magellan"],
    image_key: "exploration_1",
    importance_score: 8.5
  },

  // ── 17th Century ──────────────────────────────────────────────────────────

  {
    month: null, day: null, year: 1687,
    category: "invention",
    description: "Isaac Newton publishes Principia Mathematica, establishing the laws of motion and gravity.",
    wiki_links: ["https://en.wikipedia.org/wiki/Philosophi%C3%A6_Naturalis_Principia_Mathematica"],
    image_key: "invention_1",
    importance_score: 9.7
  },
  {
    month: null, day: null, year: 1609,
    category: "invention",
    description: "Galileo Galilei uses the telescope to observe the moons of Jupiter, confirming heliocentrism.",
    wiki_links: ["https://en.wikipedia.org/wiki/Galileo_Galilei"],
    image_key: "invention_1",
    importance_score: 8.8
  },
  {
    month: 11, day: 5, year: 1605,
    category: "political",
    description: "The Gunpowder Plot to blow up the English Parliament is discovered and foiled.",
    wiki_links: ["https://en.wikipedia.org/wiki/Gunpowder_Plot"],
    image_key: "political_medieval_1",
    importance_score: 6.5
  },

  // ── 18th Century ──────────────────────────────────────────────────────────

  {
    month: 7, day: 4, year: 1776,
    category: "political",
    description: "The United States Declaration of Independence is signed, establishing a new nation founded on Enlightenment ideals.",
    wiki_links: ["https://en.wikipedia.org/wiki/United_States_Declaration_of_Independence"],
    image_key: "political_modern_1",
    importance_score: 9.7
  },
  {
    month: 7, day: 14, year: 1789,
    category: "political",
    description: "The storming of the Bastille sparks the French Revolution, toppling the monarchy and reshaping Europe.",
    wiki_links: ["https://en.wikipedia.org/wiki/French_Revolution"],
    image_key: "political_modern_1",
    importance_score: 9.6
  },
  {
    month: null, day: null, year: 1769,
    category: "invention",
    description: "James Watt patents his improved steam engine, the engine of the Industrial Revolution.",
    wiki_links: ["https://en.wikipedia.org/wiki/James_Watt"],
    image_key: "invention_1",
    importance_score: 9.3
  },
  {
    month: null, day: null, year: 1760,
    category: "invention",
    description: "The Industrial Revolution begins in Britain, transforming manufacturing, society, and the global economy.",
    wiki_links: ["https://en.wikipedia.org/wiki/Industrial_Revolution"],
    image_key: "invention_1",
    importance_score: 9.5
  },

  // ── 19th Century ──────────────────────────────────────────────────────────

  {
    month: null, day: null, year: 1804,
    category: "political",
    description: "Napoleon Bonaparte crowns himself Emperor of France, dominating Europe for a decade.",
    wiki_links: ["https://en.wikipedia.org/wiki/Napoleon"],
    image_key: "political_modern_1",
    importance_score: 9.2
  },
  {
    month: 6, day: 18, year: 1815,
    category: "war",
    description: "Napoleon is decisively defeated at the Battle of Waterloo, ending the Napoleonic Wars.",
    wiki_links: ["https://en.wikipedia.org/wiki/Battle_of_Waterloo"],
    image_key: "war_modern_1",
    importance_score: 8.8
  },
  {
    month: null, day: null, year: 1859,
    category: "invention",
    description: "Charles Darwin publishes On the Origin of Species, establishing the theory of evolution by natural selection.",
    wiki_links: ["https://en.wikipedia.org/wiki/On_the_Origin_of_Species"],
    image_key: "invention_1",
    importance_score: 9.6
  },
  {
    month: 4, day: 12, year: 1861,
    category: "war",
    description: "Confederate forces fire on Fort Sumter, starting the American Civil War.",
    wiki_links: ["https://en.wikipedia.org/wiki/American_Civil_War"],
    image_key: "war_modern_1",
    importance_score: 9.0
  },
  {
    month: 11, day: 19, year: 1863,
    category: "political",
    description: "Abraham Lincoln delivers the Gettysburg Address, redefining the Civil War as a fight for human equality.",
    wiki_links: ["https://en.wikipedia.org/wiki/Gettysburg_Address"],
    image_key: "political_modern_1",
    importance_score: 8.5
  },
  {
    month: null, day: null, year: 1876,
    category: "invention",
    description: "Alexander Graham Bell patents the telephone, beginning the age of modern telecommunications.",
    wiki_links: ["https://en.wikipedia.org/wiki/Alexander_Graham_Bell"],
    image_key: "invention_1",
    importance_score: 8.8
  },
  {
    month: null, day: null, year: 1895,
    category: "invention",
    description: "Wilhelm Röntgen discovers X-rays, revolutionizing medicine and our understanding of matter.",
    wiki_links: ["https://en.wikipedia.org/wiki/Wilhelm_R%C3%B6ntgen"],
    image_key: "invention_1",
    importance_score: 8.2
  },

  // ── 20th Century (dense coverage) ─────────────────────────────────────────

  {
    month: 12, day: 17, year: 1903,
    category: "invention",
    description: "The Wright Brothers achieve the first powered, controlled flight at Kitty Hawk, North Carolina.",
    wiki_links: ["https://en.wikipedia.org/wiki/Wright_Flyer"],
    image_key: "invention_1",
    importance_score: 9.3
  },
  {
    month: null, day: null, year: 1905,
    category: "invention",
    description: "Albert Einstein publishes special relativity and the photoelectric effect in his annus mirabilis papers.",
    wiki_links: ["https://en.wikipedia.org/wiki/Annus_Mirabilis_papers"],
    image_key: "invention_1",
    importance_score: 9.5
  },
  {
    month: 4, day: 15, year: 1912,
    category: "disaster",
    description: "RMS Titanic sinks in the North Atlantic on her maiden voyage, killing over 1,500 people.",
    wiki_links: ["https://en.wikipedia.org/wiki/Sinking_of_the_Titanic"],
    image_key: "disaster_1",
    importance_score: 8.0
  },
  {
    month: 6, day: 28, year: 1914,
    category: "war",
    description: "Archduke Franz Ferdinand is assassinated in Sarajevo, triggering the chain of events that starts World War I.",
    wiki_links: ["https://en.wikipedia.org/wiki/World_War_I"],
    image_key: "war_modern_1",
    importance_score: 9.7
  },
  {
    month: 11, day: 11, year: 1918,
    category: "war",
    description: "The armistice ending World War I takes effect, after 20 million dead in four years of industrial warfare.",
    wiki_links: ["https://en.wikipedia.org/wiki/Armistice_of_11_November_1918"],
    image_key: "war_modern_1",
    importance_score: 9.3
  },
  {
    month: 11, day: 7, year: 1917,
    category: "political",
    description: "The Bolshevik Revolution overthrows the Russian Provisional Government, creating the world's first communist state.",
    wiki_links: ["https://en.wikipedia.org/wiki/October_Revolution"],
    image_key: "political_modern_1",
    importance_score: 9.5
  },
  {
    month: 9, day: 3, year: 1928,
    category: "invention",
    description: "Alexander Fleming discovers penicillin, launching the antibiotic era and saving hundreds of millions of lives.",
    wiki_links: ["https://en.wikipedia.org/wiki/Penicillin"],
    image_key: "invention_1",
    importance_score: 9.4
  },
  {
    month: 10, day: 29, year: 1929,
    category: "disaster",
    description: "The Wall Street Crash triggers the Great Depression, the worst economic crisis of the 20th century.",
    wiki_links: ["https://en.wikipedia.org/wiki/Wall_Street_Crash_of_1929"],
    image_key: "disaster_1",
    importance_score: 9.0
  },
  {
    month: 1, day: 30, year: 1933,
    category: "political",
    description: "Adolf Hitler is appointed Chancellor of Germany, beginning the Nazi regime's path to total war.",
    wiki_links: ["https://en.wikipedia.org/wiki/Adolf_Hitler%27s_rise_to_power"],
    image_key: "political_modern_1",
    importance_score: 9.5
  },
  {
    month: 9, day: 1, year: 1939,
    category: "war",
    description: "Germany invades Poland, beginning World War II — the deadliest conflict in human history.",
    wiki_links: ["https://en.wikipedia.org/wiki/World_War_II", "https://en.wikipedia.org/wiki/Invasion_of_Poland"],
    image_key: "war_modern_1",
    importance_score: 9.9
  },
  {
    month: 6, day: 6, year: 1944,
    category: "war",
    description: "Allied forces storm the beaches of Normandy on D-Day in the largest seaborne invasion in history.",
    wiki_links: ["https://en.wikipedia.org/wiki/Normandy_landings"],
    image_key: "war_modern_1",
    importance_score: 9.2
  },
  {
    month: 8, day: 6, year: 1945,
    category: "war",
    description: "The United States drops an atomic bomb on Hiroshima — the first use of nuclear weapons in warfare.",
    wiki_links: ["https://en.wikipedia.org/wiki/Atomic_bombings_of_Hiroshima_and_Nagasaki"],
    image_key: "war_modern_1",
    importance_score: 9.8
  },
  {
    month: 8, day: 15, year: 1945,
    category: "war",
    description: "Japan surrenders unconditionally, ending World War II and reshaping the global order.",
    wiki_links: ["https://en.wikipedia.org/wiki/Victory_over_Japan_Day"],
    image_key: "war_modern_1",
    importance_score: 9.5
  },
  {
    month: 8, day: 15, year: 1947,
    category: "political",
    description: "India and Pakistan gain independence from Britain, ending the British Empire's most prized possession.",
    wiki_links: ["https://en.wikipedia.org/wiki/Partition_of_India"],
    image_key: "political_modern_1",
    importance_score: 9.0
  },
  {
    month: null, day: null, year: 1948,
    category: "political",
    description: "The Universal Declaration of Human Rights is adopted by the UN, establishing global human rights standards.",
    wiki_links: ["https://en.wikipedia.org/wiki/Universal_Declaration_of_Human_Rights"],
    image_key: "political_modern_1",
    importance_score: 9.0
  },
  {
    month: 4, day: 25, year: 1953,
    category: "invention",
    description: "Watson and Crick publish the double-helix structure of DNA, unlocking the blueprint of all life.",
    wiki_links: ["https://en.wikipedia.org/wiki/Molecular_Structure_of_Nucleic_Acids"],
    image_key: "invention_1",
    importance_score: 9.6
  },
  {
    month: 10, day: 4, year: 1957,
    category: "invention",
    description: "The Soviet Union launches Sputnik 1, the first artificial satellite, igniting the Space Race.",
    wiki_links: ["https://en.wikipedia.org/wiki/Sputnik_1"],
    image_key: "invention_1",
    importance_score: 9.2
  },
  {
    month: 11, day: 22, year: 1963,
    category: "death",
    description: "President John F. Kennedy is assassinated in Dallas, sending shockwaves across the world.",
    wiki_links: ["https://en.wikipedia.org/wiki/Assassination_of_John_F._Kennedy"],
    image_key: "death_modern_1",
    importance_score: 8.8
  },
  {
    month: 7, day: 20, year: 1969,
    category: "exploration",
    description: "Neil Armstrong becomes the first human to walk on the Moon — humanity's greatest feat of exploration.",
    wiki_links: ["https://en.wikipedia.org/wiki/Apollo_11"],
    image_key: "exploration_space_1",
    importance_score: 9.8
  },
  {
    month: 7, day: 16, year: 1969,
    category: "exploration",
    description: "Apollo 11 launches from Kennedy Space Center, carrying three astronauts toward the Moon.",
    wiki_links: ["https://en.wikipedia.org/wiki/Apollo_11"],
    image_key: "exploration_space_1",
    importance_score: 8.5
  },
  {
    month: 7, day: 24, year: 1969,
    category: "exploration",
    description: "Apollo 11 splashes down safely in the Pacific Ocean, completing humanity's first lunar voyage.",
    wiki_links: ["https://en.wikipedia.org/wiki/Apollo_11"],
    image_key: "exploration_space_1",
    importance_score: 8.0
  },
  {
    month: 8, day: 15, year: 1969,
    category: "cultural",
    description: "The Woodstock festival draws 400,000 people to a New York farm, defining the counterculture generation.",
    wiki_links: ["https://en.wikipedia.org/wiki/Woodstock"],
    image_key: "cultural_modern_1",
    importance_score: 7.5
  },
  {
    month: 10, day: 29, year: 1969,
    category: "invention",
    description: "The first message is sent over ARPANET between UCLA and SRI, laying the foundation for the internet.",
    wiki_links: ["https://en.wikipedia.org/wiki/ARPANET"],
    image_key: "invention_1",
    importance_score: 9.0
  },
  {
    month: 4, day: 26, year: 1986,
    category: "disaster",
    description: "Reactor No. 4 at Chernobyl explodes in the worst nuclear accident in history, contaminating vast swathes of Europe.",
    wiki_links: ["https://en.wikipedia.org/wiki/Chernobyl_disaster"],
    image_key: "disaster_1",
    importance_score: 8.8
  },
  {
    month: 11, day: 9, year: 1989,
    category: "political",
    description: "The Berlin Wall falls, symbolizing the end of the Cold War and the collapse of Soviet communism.",
    wiki_links: ["https://en.wikipedia.org/wiki/Fall_of_the_Berlin_Wall"],
    image_key: "political_modern_1",
    importance_score: 9.5
  },
  {
    month: 12, day: 26, year: 1991,
    category: "political",
    description: "The Soviet Union formally dissolves, ending the Cold War and reshaping the global geopolitical order.",
    wiki_links: ["https://en.wikipedia.org/wiki/Dissolution_of_the_Soviet_Union"],
    image_key: "political_modern_1",
    importance_score: 9.4
  },
  {
    month: null, day: null, year: 1990,
    category: "invention",
    description: "Tim Berners-Lee invents the World Wide Web, transforming the internet into a global information network.",
    wiki_links: ["https://en.wikipedia.org/wiki/World_Wide_Web"],
    image_key: "invention_1",
    importance_score: 9.7
  },

  // ── 21st Century ──────────────────────────────────────────────────────────

  {
    month: 9, day: 11, year: 2001,
    category: "disaster",
    description: "Al-Qaeda terrorists hijack four planes and attack the World Trade Center and Pentagon, killing nearly 3,000 people.",
    wiki_links: ["https://en.wikipedia.org/wiki/September_11_attacks"],
    image_key: "disaster_1",
    importance_score: 9.8
  },
  {
    month: 6, day: 29, year: 2007,
    category: "invention",
    description: "Apple releases the first iPhone, redefining the smartphone and ushering in the mobile computing era.",
    wiki_links: ["https://en.wikipedia.org/wiki/IPhone_(1st_generation)"],
    image_key: "invention_1",
    importance_score: 9.2
  },
  {
    month: null, day: null, year: 2008,
    category: "disaster",
    description: "The global financial crisis — the worst since the Great Depression — triggers worldwide recession.",
    wiki_links: ["https://en.wikipedia.org/wiki/Financial_crisis_of_2007%E2%80%932008"],
    image_key: "disaster_1",
    importance_score: 8.8
  },
  {
    month: 3, day: 11, year: 2011,
    category: "disaster",
    description: "A 9.0 earthquake and tsunami strike Japan, triggering the Fukushima nuclear disaster.",
    wiki_links: ["https://en.wikipedia.org/wiki/2011_T%C5%8Dhoku_earthquake_and_tsunami"],
    image_key: "disaster_1",
    importance_score: 8.5
  },
  {
    month: 3, day: 11, year: 2020,
    category: "disaster",
    description: "The WHO declares COVID-19 a global pandemic — the first pandemic in over a century to reshape daily life worldwide.",
    wiki_links: ["https://en.wikipedia.org/wiki/COVID-19_pandemic"],
    image_key: "disaster_1",
    importance_score: 9.5
  },
  {
    month: null, day: null, year: 2022,
    category: "war",
    description: "Russia invades Ukraine in the largest land war in Europe since World War II.",
    wiki_links: ["https://en.wikipedia.org/wiki/Russian_invasion_of_Ukraine"],
    image_key: "war_modern_1",
    importance_score: 9.0
  },
  {
    month: null, day: null, year: 2023,
    category: "invention",
    description: "Generative AI enters mainstream use with ChatGPT, sparking the fastest technology adoption in history.",
    wiki_links: ["https://en.wikipedia.org/wiki/ChatGPT"],
    image_key: "invention_1",
    importance_score: 9.0
  },
];

// ── Helpers ───────────────────────────────────────────────────────────────────

export const MONTH_NAMES = [
  '', 'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const MONTH_ABBR = [
  '', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
];

export function ordinal(n) {
  const absN = Math.abs(n);
  const s = ['th', 'st', 'nd', 'rd'];
  const v = absN % 100;
  const suffix = s[(v - 20) % 10] || s[v] || s[0];
  return absN + suffix;
}

export function centuryLabel(num) {
  if (num < 0) {
    return `${ordinal(Math.abs(num))} century BC`;
  }
  return `${ordinal(num)} century`;
}

/**
 * Returns all events that fall within the given zoom-level slot,
 * respecting granularity rules, sorted by importance_score descending.
 *
 * Granularity rules:
 *   century → any event whose year falls in the century range
 *   year    → event.year === year  (month can be null)
 *   month   → event.year === year AND event.month === month  (day can be null)
 *   day     → event.year === year AND event.month === month AND event.day === day
 */
export function getEventsForSlot(level, slotValue, context) {
  let filtered = [];

  switch (level) {
    case 'century': {
      const num = slotValue;
      const startYear = num < 0 ? num * 100 : (num - 1) * 100 + 1;
      const endYear   = num < 0 ? (num + 1) * 100 - 1 : num * 100;
      filtered = EVENTS.filter(e => e.year >= startYear && e.year <= endYear);
      break;
    }
    case 'year': {
      filtered = EVENTS.filter(e => e.year === slotValue);
      break;
    }
    case 'month': {
      // event MUST have a month to appear at this level
      filtered = EVENTS.filter(e =>
        e.year === context.year &&
        e.month !== null &&
        e.month === slotValue
      );
      break;
    }
    case 'day': {
      // event MUST have month AND day
      filtered = EVENTS.filter(e =>
        e.year === context.year &&
        e.month === context.month &&
        e.day !== null &&
        e.day === slotValue
      );
      break;
    }
    default:
      break;
  }

  return filtered.sort((a, b) => b.importance_score - a.importance_score);
}
