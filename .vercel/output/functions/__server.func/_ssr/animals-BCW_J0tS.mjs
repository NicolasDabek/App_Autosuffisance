//#region node_modules/.nitro/vite/services/ssr/assets/animals-BCW_J0tS.js
var ANIMALS = [
	{
		id: "poules",
		name: "Poules",
		latin: "Gallus gallus domesticus",
		category: "volaille",
		summary: "Porte d’entrée de l’élevage familial : œufs, viande occasionnelle, fientes pour le compost, et valorisation des restes végétaux.",
		minSurfaceM2: 20,
		recommendedSurfaceM2: 40,
		minBudgetEur: 250,
		hoursPerWeek: 3,
		noise: 2,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: true,
		yields: [
			{
				label: "Œufs",
				qty: 220,
				unit: "œufs",
				kcalPerUnit: 70,
				per: "poule pondeuse / an"
			},
			{
				label: "Viande (réforme)",
				qty: 1.4,
				unit: "kg carcasse",
				kcalPerUnit: 1500,
				per: "poule / cycle"
			},
			{
				label: "Fientes",
				qty: 75,
				unit: "kg",
				per: "poule / an"
			}
		],
		feed: {
			description: "120 g/j de mélange céréales + protéines. Réductible de 30 à 50 % avec verdure, insectes, restes cuits sans sel.",
			kgYear: 44,
			loop: "Épluchures, vers, graines du jardin, lactosérum si fromage."
		},
		manure: {
			kgYear: 75,
			use: "Composter 6–12 mois avant épandage potager (azote fort, risque de brûlure à cru)."
		},
		housing: "Poulailler 0,3–0,5 m²/tête à l’abri, pondoirs, perchoirs, parcours herbeux 4–10 m²/poule, grillage enterré contre renards.",
		health: [
			"Parasites externes (poux rouges) : litière sèche, diatomée, contrôle des pondoirs",
			"Coccidiose des jeunes : litière propre, éviter la boue",
			"Influenza aviaire : confinement selon niveau de risque préfectoral"
		],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Déclaration obligatoire dès le 1er oiseau détenu en extérieur (arrêté du 25 septembre 2023, influenza aviaire). En ligne sur mesdemarches.agriculture.gouv.fr ou Cerfa 15472 à la mairie / DDPP. Gratuit.",
			slaughter: "Abattage familial autorisé pour les animaux que vous avez élevés sur place, exclusivement pour votre consommation personnelle. Interdiction de vendre ou même de donner viandes et abats.",
			products: "Œufs et viande : autoconsommation uniquement. Toute vente = cadre professionnel (agrément, traçabilité).",
			neighbor: "Règlement sanitaire départemental et PLU : souvent plus de formalités sous 50 volailles, mais distances, bruit du coq et odeurs peuvent fonder un trouble de voisinage. Coq déconseillé en milieu dense.",
			sources: [
				{
					label: "Service-Public — abattage familial",
					href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
				},
				{
					label: "Déclaration oiseaux",
					href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
				},
				{
					label: "Ministère — influenza aviaire",
					href: "https://agriculture.gouv.fr/tout-ce-quil-faut-savoir-sur-linfluenza-aviaire"
				}
			]
		},
		loops: [
			"lombrics",
			"potager",
			"verger",
			"tenebrio",
			"lapins",
			"eau"
		],
		starter: [
			"Poulailler + parcours",
			"Mangeoire anti-gaspi",
			"Abreuvoir",
			"Litière (paille/copeaux)",
			"Grillage 2 m + enterré"
		],
		pitfalls: [
			"Sous-dimensionner le parcours : boue, odeur, parasites",
			"Nourrir pain et restes salés en excès",
			"Oublier la déclaration et les mesures de biosécurité en période d’influenza"
		]
	},
	{
		id: "lapins",
		name: "Lapins",
		latin: "Oryctolagus cuniculus",
		category: "lagomorphe",
		summary: "Viande blanche rapide, fumier précieux, peu bruyants. Idéals en relais du potager (fanes, adventices).",
		minSurfaceM2: 12,
		recommendedSurfaceM2: 25,
		minBudgetEur: 180,
		hoursPerWeek: 3,
		noise: 1,
		smell: 2,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		yields: [{
			label: "Viande",
			qty: 18,
			unit: "kg carcasse",
			kcalPerUnit: 1400,
			per: "1 mâle + 3 femelles / an (ordre de grandeur)"
		}, {
			label: "Fumier",
			qty: 80,
			unit: "kg",
			per: "adulte / an"
		}],
		feed: {
			description: "Foin à volonté, verdure du jardin, granulés rationnés. Une femelle + portée : 100–150 g de concentré/j.",
			kgYear: 40,
			loop: "Fanes, ronces, luzerne, restes de pain sec avec modération, sarments."
		},
		manure: {
			kgYear: 80,
			use: "Fumier froid, excellent au compost et au pied des fruitiers après compostage."
		},
		housing: "Clapier surélevé 0,5–1 m²/adulte + parc herbeux rotatif. Protection chaleur (>28 °C mortel) et gel. Éviter le sol grillagé seul (pododermatite).",
		health: [
			"VHD / myxomatose : vaccination recommandée",
			"Coccidiose : hygiène, foin propre",
			"Coups de chaleur l’été"
		],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Pas d’identification type EDE pour un élevage familial de lagomorphes. Cadre voisinage et RSD selon commune.",
			slaughter: "Abattage familial autorisé pour les lapins élevés sur place, consommation personnelle exclusive (comme les volailles).",
			products: "Viande : autoconsommation. Vente = abattoir / tuerie encadrée.",
			neighbor: "Peu bruyants. Odeur si litière saturée. Distances PLU parfois applicables au-delà d’un seuil local.",
			sources: [{
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"poules",
			"potager",
			"verger",
			"lombrics"
		],
		starter: [
			"Clapiers / parc",
			"Râtelier à foin",
			"Abreuvoirs",
			"Vaccination",
			"Caisse de transport"
		],
		pitfalls: [
			"Surpopulation et chaleur",
			"Aliment trop riche en concentré (entérotoxémie)",
			"Reproduction non maîtrisée"
		]
	},
	{
		id: "cailles",
		name: "Cailles",
		latin: "Coturnix japonica",
		category: "volaille",
		summary: "Format compact, ponte précoce, cycle viande de 8 semaines. Adapté aux petites surfaces, y compris cabanon.",
		minSurfaceM2: 4,
		recommendedSurfaceM2: 10,
		minBudgetEur: 120,
		hoursPerWeek: 2,
		noise: 2,
		smell: 2,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		yields: [{
			label: "Œufs",
			qty: 280,
			unit: "œufs",
			kcalPerUnit: 14,
			per: "caille / an"
		}, {
			label: "Viande",
			qty: .15,
			unit: "kg",
			kcalPerUnit: 1400,
			per: "oiseau à 8 semaines"
		}],
		feed: {
			description: "Aliment gibier / caille 20–24 % protéines.",
			kgYear: 8,
			loop: "Peu de restes ; vers de farine en complément."
		},
		manure: {
			kgYear: 8,
			use: "Fientes concentrées : diluer au compost."
		},
		housing: "Volière couverte, 4–6 cailles / m² max, abri du vent, litière sèche. Mâles chanteurs : limiter le nombre en ville.",
		health: ["Influenza : même régime oiseaux que les poules", "Cannibalisme si densité trop forte"],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Oiseaux : déclaration dès le 1er individu en extérieur, comme les poules.",
			slaughter: "Abattage familial pour autoconsommation, animaux élevés sur place.",
			products: "Œufs et viande : foyer uniquement.",
			neighbor: "Le chant des mâles peut gêner. Préférer un groupe de femelles en habitat dense.",
			sources: [{
				label: "Déclaration oiseaux",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
			}]
		},
		loops: [
			"tenebrio",
			"potager",
			"lombrics"
		],
		starter: [
			"Volière",
			"Pondoirs bas",
			"Mangeoire",
			"Abreuvoir anti-noyade"
		],
		pitfalls: [
			"Mâles trop nombreux",
			"Froid et courants d’air",
			"Aliment poule trop pauvre en protéines"
		]
	},
	{
		id: "canards",
		name: "Canards",
		latin: "Anas platyrhynchos domesticus",
		category: "volaille",
		summary: "Œufs riches, viande, régulation des limaces. Demandent de l’eau claire et un sol qui ne tourne pas en bourbier.",
		minSurfaceM2: 40,
		recommendedSurfaceM2: 80,
		minBudgetEur: 280,
		hoursPerWeek: 4,
		noise: 2,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Œufs",
			qty: 180,
			unit: "œufs",
			kcalPerUnit: 130,
			per: "cane coureur / an"
		}, {
			label: "Viande",
			qty: 2,
			unit: "kg",
			kcalPerUnit: 2e3,
			per: "canard de Barbarie"
		}],
		feed: {
			description: "Mélange blé + complément. Excellent pâturage et chasse aux limaces.",
			kgYear: 50,
			loop: "Mare, potager, verger."
		},
		manure: {
			kgYear: 90,
			use: "Très liquide : compost + litière carbonée."
		},
		housing: "Abri sec + bassin renouvelé (pas une piscine stagnante). Coureur indien : peu d’eau mais mare utile.",
		health: ["Influenza : palmipèdes très sensibles, confinement fréquent", "Botulisme si eau croupie"],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Déclaration oiseaux obligatoire. Mesures de mise à l’abri selon arrêté préfectoral.",
			slaughter: "Abattage familial, consommation personnelle, animaux élevés sur place.",
			products: "Œufs, viande : foyer. Foie gras : hors cadre familial raisonnable (éthique + sanitaire).",
			neighbor: "Canard de Barbarie relativement calme ; colvert plus bruyant.",
			sources: [{
				label: "Ministère — influenza",
				href: "https://agriculture.gouv.fr/tout-ce-quil-faut-savoir-sur-linfluenza-aviaire"
			}]
		},
		loops: [
			"potager",
			"mare",
			"verger"
		],
		starter: [
			"Abri",
			"Bassin vidable",
			"Filet anti-prédateurs",
			"Litière absorbante"
		],
		pitfalls: [
			"Mare stagnante",
			"Oublier le confinement influenza",
			"Sol détruit sans rotation"
		]
	},
	{
		id: "pigeons",
		name: "Pigeons de chair",
		latin: "Columba livia",
		category: "volaille",
		summary: "Colombier traditionnel : pigeonneaux en 28 jours, peu d’emprise au sol, fientes riches.",
		minSurfaceM2: 8,
		recommendedSurfaceM2: 15,
		minBudgetEur: 200,
		hoursPerWeek: 2,
		noise: 2,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Pigeonneaux",
			qty: 12,
			unit: "oiseaux",
			kcalPerUnit: 400,
			per: "couple / an (ordre)"
		}],
		feed: {
			description: "Mélange vesce, blé, maïs, minéraux.",
			kgYear: 25,
			loop: "Grains du jardin, menues pailles."
		},
		manure: {
			kgYear: 20,
			use: "Colombine : très azotée, à composter."
		},
		housing: "Colombier aéré, nids, volière. Attention au classement de certains pigeons et au voisinage urbain.",
		health: ["Trichomonose", "Paramyxovirose : vaccination selon contexte"],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Oiseaux : déclaration si détenus en extérieur. Règlements communaux parfois restrictifs en ville.",
			slaughter: "Abattage familial pour autoconsommation.",
			products: "Viande de pigeonneau : foyer.",
			neighbor: "Fientes et envol : source de conflits en lotissement.",
			sources: [{
				label: "Déclaration oiseaux",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
			}]
		},
		loops: ["potager", "lombrics"],
		starter: [
			"Colombier",
			"Nids",
			"Mangeoire",
			"Volière"
		],
		pitfalls: [
			"Surpopulation",
			"Voisinage",
			"Prédateurs (faucon, chat)"
		]
	},
	{
		id: "abeilles",
		name: "Abeilles",
		latin: "Apis mellifera",
		category: "abeille",
		summary: "Miel, pollen, cire et pollinisation du verger. Déclaration annuelle obligatoire dès la première colonie.",
		minSurfaceM2: 20,
		recommendedSurfaceM2: 40,
		minBudgetEur: 400,
		hoursPerWeek: 1.5,
		noise: 1,
		smell: 1,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Miel",
			qty: 15,
			unit: "kg",
			kcalPerUnit: 3e3,
			per: "ruche / an (moyenne très variable)"
		}, {
			label: "Cire / propolis",
			qty: .5,
			unit: "kg",
			per: "ruche / an"
		}],
		feed: {
			description: "Autonomie nectar + pollen. Candi / sirop seulement en disette.",
			kgYear: 0,
			loop: "Haies mellifères, verger, jachère fleurie."
		},
		manure: {
			kgYear: 0,
			use: "Pas de fumier : service de pollinisation."
		},
		housing: "Ruche Dadant ou Warré, orientation sud-est, haie ou palissade 2 m. Distances : souvent 10 m des limites, 20 m des voies, 100 m des écoles — vérifier l’arrêté préfectoral.",
		health: [
			"Varroa : traitement raisonné obligatoire pour la survie",
			"Loque américaine : déclaration",
			"Frelon asiatique"
		],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Déclaration annuelle obligatoire du 1er septembre au 31 décembre, dès la 1re colonie (NAPI). mesdemarches.agriculture.gouv.fr — Cerfa 13995.",
			slaughter: "Non applicable. Destruction sanitaire encadrée en cas de loque.",
			products: "Miel, pollen, cire : autoconsommation libre. Vente = étiquetage, traçabilité, parfois DDCSPP.",
			neighbor: "Distances d’implantation et palissade. Responsabilité civile en cas de piqûres.",
			sources: [{
				label: "Déclaration de ruches",
				href: "https://www.mesdemarches.agriculture.gouv.fr/"
			}]
		},
		loops: [
			"verger",
			"potager",
			"haies"
		],
		starter: [
			"Ruche + hausses",
			"Combinaison",
			"Enfumoir",
			"Lève-cadres",
			"Formation rucher-école"
		],
		pitfalls: [
			"Pas de formation",
			"Oublier la déclaration NAPI",
			"Ruche trop près des voisins"
		]
	},
	{
		id: "escargots",
		name: "Escargots",
		latin: "Helix aspersa / Cornu aspersum",
		category: "mollusque",
		summary: "Petit-gris au jardin : croissance lente, végétaux, clôture anti-évasion. Autoconsommation simple.",
		minSurfaceM2: 6,
		recommendedSurfaceM2: 15,
		minBudgetEur: 80,
		hoursPerWeek: 1,
		noise: 1,
		smell: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: [
			"oceanique",
			"semi-oceanique",
			"atlantique-sud",
			"mediterraneen",
			"continental"
		],
		beginner: true,
		yields: [{
			label: "Chair",
			qty: 4,
			unit: "kg",
			kcalPerUnit: 800,
			per: "parc familial / an"
		}],
		feed: {
			description: "Feuilles tendres, courge, son. Complément calcaire.",
			kgYear: 15,
			loop: "Déchets verts tendres, purin dilué interdit (toxicité)."
		},
		manure: {
			kgYear: 5,
			use: "Déjections discrètes, sol enrichi localement."
		},
		housing: "Parc grillagé anti-rats, ombre, humidité, planches-abris. Filet anti-oiseaux.",
		health: ["Prédateurs (rats, carabes, oiseaux)", "Sécheresse mortelle"],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Autoconsommation : pas de statut d’héliciculteur. Espèces protégées (ex. Helix pomatia selon zones) : ne pas prélever dans la nature sans vérifier.",
			slaughter: "Préparation familiale pour le foyer. Vente = agrément sanitaire.",
			products: "Chair : foyer. Ramassage sauvage réglementé par arrêtés.",
			neighbor: "Aucun bruit. Risque d’évasion vers le jardin voisin.",
			sources: [{
				label: "Code de l’environnement — espèces",
				href: "https://www.legifrance.gouv.fr/"
			}]
		},
		loops: ["potager", "haies"],
		starter: [
			"Parc",
			"Abreuvoir",
			"Calcium",
			"Ombrage"
		],
		pitfalls: [
			"Ramasser des espèces protégées",
			"Canicule sans arrosage",
			"Rats"
		]
	},
	{
		id: "chevres",
		name: "Chèvres naines / alpines",
		latin: "Capra hircus",
		category: "ruminant",
		summary: "Lait, fromage, débroussaillage. Identification obligatoire, vétérinaire sanitaire, abattage familial possible sous conditions.",
		minSurfaceM2: 200,
		recommendedSurfaceM2: 500,
		minBudgetEur: 800,
		hoursPerWeek: 8,
		noise: 3,
		smell: 3,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Lait",
			qty: 400,
			unit: "L",
			kcalPerUnit: 680,
			per: "alpine / lactation (très variable)"
		}, {
			label: "Fumier",
			qty: 400,
			unit: "kg",
			per: "tête / an"
		}],
		feed: {
			description: "Foin, pâture, minéraux. Elles « trient » : clôture solide indispensable.",
			kgYear: 250,
			loop: "Haies, refus de prairie, sarments, marc de pomme."
		},
		manure: {
			kgYear: 400,
			use: "Fumier chaud : compost, verger, pommes de terre."
		},
		housing: "Abri 1,5 m²/tête, litière, clôture 1,2 m minimum (naines) / 1,4 m (alpines), abreuvoir antigel.",
		health: [
			"Parasites internes : coprologie, rotation de pâture",
			"CAEV, fièvre Q",
			"Piétin, ongles"
		],
		legal: {
			level: "identification",
			privateOk: true,
			declaration: "Identification (boucles) et déclaration à l’EDE / chambre d’agriculture. Désigner un vétérinaire sanitaire auprès de la DDPP. Mouvements à déclarer sous 7 jours.",
			slaughter: "Abattage familial possible pour un animal élevé sur place, consommation personnelle exclusive. Bovins/équins : interdit hors abattoir. Chèvre, mouton, porc : autorisé dans ce cadre strict.",
			products: "Lait et fromage : foyer. Toute cession = agrément / dérogation fermière.",
			neighbor: "Bêlements, odeur du bouc, fugues. Rarement compatible avec le lotissement.",
			sources: [{
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"verger",
			"haies",
			"potager",
			"abeilles"
		],
		starter: [
			"Abri",
			"Clôture",
			"Râtelier",
			"Boucles / EDE",
			"Vétérinaire sanitaire"
		],
		pitfalls: [
			"Une seule chèvre (espèce sociale)",
			"Clôture trop basse",
			"Lait cru sans hygiène"
		]
	},
	{
		id: "moutons",
		name: "Moutons",
		latin: "Ovis aries",
		category: "ruminant",
		summary: "Viande, laine, entretien de prairie. Même régime d’identification que les caprins.",
		minSurfaceM2: 400,
		recommendedSurfaceM2: 1e3,
		minBudgetEur: 700,
		hoursPerWeek: 5,
		noise: 2,
		smell: 2,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Viande",
			qty: 16,
			unit: "kg carcasse",
			kcalPerUnit: 2e3,
			per: "agneau"
		}, {
			label: "Laine",
			qty: 2,
			unit: "kg",
			per: "tête / an"
		}],
		feed: {
			description: "Herbe + foin. Complément en finition.",
			kgYear: 200,
			loop: "Prairie, haies, verger haute-tige (écorce à protéger)."
		},
		manure: {
			kgYear: 350,
			use: "Fumier de bergerie : orge, pomme de terre, compost."
		},
		housing: "Bergerie simple, filet électrifié, abri. Lot de 2 minimum.",
		health: [
			"Strongles",
			"Piétin",
			"Entérotoxémie : vaccination"
		],
		legal: {
			level: "identification",
			privateOk: true,
			declaration: "Identification + EDE + vétérinaire sanitaire. Carnet d’élevage.",
			slaughter: "Abattage familial si animal élevé sur place, consommation du foyer uniquement.",
			products: "Viande, laine : foyer. Vente d’agneaux = circuit professionnel.",
			neighbor: "Plus discrets que les chèvres. Chiens de voisinage = risque.",
			sources: [{
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"verger",
			"prairie",
			"potager"
		],
		starter: [
			"Filet électrique",
			"Abri",
			"Abreuvoir",
			"Identification"
		],
		pitfalls: [
			"Prairie trop petite (parasites)",
			"Isolement d’un individu",
			"Cuivre (toxicité ovine)"
		]
	},
	{
		id: "porcs",
		name: "Porcs (1–2 têtes)",
		latin: "Sus scrofa domesticus",
		category: "porcin",
		summary: "Valorisent lactosérum et surplus du jardin. Identification obligatoire. Abattage familial possible mais lourd (matériel, hygiène, sang).",
		minSurfaceM2: 150,
		recommendedSurfaceM2: 400,
		minBudgetEur: 500,
		hoursPerWeek: 6,
		noise: 2,
		smell: 3,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Viande",
			qty: 80,
			unit: "kg carcasse",
			kcalPerUnit: 2200,
			per: "porc charcutier ~6–8 mois"
		}],
		feed: {
			description: "Céréales + légumineuses + déchets végétaux. Interdit de nourrir avec des déchets de cuisine d’origine animale (règles peste porcine / sous-produits).",
			kgYear: 300,
			loop: "Petits-laits, pommes, courges, topinambours — jamais d’eaux grasses carnées."
		},
		manure: {
			kgYear: 600,
			use: "Lisier/fumier très riche : compost long, céréales."
		},
		housing: "Loge + parcours, bauge, ombre, clôture électrique. Eau en continu.",
		health: [
			"Peste porcine : biosécurité",
			"Parasites",
			"Coups de soleil / chaleur"
		],
		legal: {
			level: "identification",
			privateOk: true,
			declaration: "Identification, EDE, vétérinaire sanitaire, même pour 1 porc. Déclaration des mouvements.",
			slaughter: "Abattage familial autorisé pour un porc élevé sur place, consommation personnelle. Pas de cession. Hygiène et élimination des sous-produits à respecter.",
			products: "Charcuterie maison : foyer uniquement. Atelier de transformation vendant au public = agrément.",
			neighbor: "Odeur, fugues, sol retourné. Uniquement en milieu rural clair.",
			sources: [{
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"potager",
			"lactoserum",
			"verger"
		],
		starter: [
			"Loge",
			"Électrificateur",
			"Abreuvoir",
			"Identification EDE"
		],
		pitfalls: [
			"Nourrir des restes carnés",
			"Sous-estimer l’odeur",
			"Abattage sans préparation"
		]
	},
	{
		id: "lombrics",
		name: "Vers de compost",
		latin: "Eisenia fetida",
		category: "insecte",
		summary: "Clef de voûte urbaine : déchets de cuisine → lombricompost et thé de vers, relais vers poules et potager.",
		minSurfaceM2: .5,
		recommendedSurfaceM2: 1,
		minBudgetEur: 40,
		hoursPerWeek: .4,
		noise: 1,
		smell: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		yields: [{
			label: "Lombricompost",
			qty: 30,
			unit: "kg",
			per: "foyer de 2 / an"
		}, {
			label: "Lixiviat",
			qty: 20,
			unit: "L",
			per: "an (à diluer)"
		}],
		feed: {
			description: "Épluchures, marc, carton brun. Pas d’agrumes en masse, ni viande, ni oignon en excès.",
			kgYear: 80,
			loop: "Tous les déchets végétaux du foyer."
		},
		manure: {
			kgYear: 30,
			use: "Amendement de surface, semis, plants."
		},
		housing: "Bac à plateaux, 15–25 °C, à l’abri du gel et du soleil. Balcon ou cellier.",
		health: ["Acariens si trop humide", "Fuite des vers si milieu acide"],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Aucune. Obligation de tri des biodéchets depuis 2024 : le lombricomposteur y répond.",
			slaughter: "Non applicable.",
			products: "Compost et lixiviat : jardin du foyer.",
			neighbor: "Inodore si bien mené. Jus trop plein = odeur.",
			sources: [{
				label: "ADEME — biodéchets",
				href: "https://www.ademe.fr/"
			}]
		},
		loops: [
			"poules",
			"potager",
			"cailles"
		],
		starter: [
			"Bac",
			"Litière carton",
			"Souche de vers",
			"Robinet à lixiviat"
		],
		pitfalls: [
			"Trop d’eau",
			"Viande et produits laitiers",
			"Geler le bac"
		]
	},
	{
		id: "tenebrio",
		name: "Vers de farine",
		latin: "Tenebrio molitor",
		category: "insecte",
		summary: "Protéines pour volailles. Élevage en bacs, son de blé, peu d’espace. Novel food humain possible mais hors besoin familial courant.",
		minSurfaceM2: 1,
		recommendedSurfaceM2: 2,
		minBudgetEur: 30,
		hoursPerWeek: .5,
		noise: 1,
		smell: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		yields: [{
			label: "Larves fraîches",
			qty: 8,
			unit: "kg",
			kcalPerUnit: 2e3,
			per: "installation hobby / an"
		}],
		feed: {
			description: "Son, farine, épluchures. Tranche de pomme pour l’eau.",
			kgYear: 20,
			loop: "Issues de meunerie, carton, restes végétaux secs."
		},
		manure: {
			kgYear: 10,
			use: "Frass : engrais riche, à composté légèrement."
		},
		housing: "Bacs aérés empilés, 20–25 °C, sec. Séparer nymphes / adultes pour le rythme.",
		health: ["Acariens si humidité", "Cannibalisme si jeûne"],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Élevage d’insectes pour nourrir ses propres animaux : cadre privé. Mise sur le marché humain = novel food / agrément.",
			slaughter: "Non pertinent. Congélation des larves avant distribution aux volailles : hygiène.",
			products: "Aliment animal du foyer. Pas de vente sans statut.",
			neighbor: "Aucun, si sec et fermé.",
			sources: [{
				label: "ANSES — insectes",
				href: "https://www.anses.fr/"
			}]
		},
		loops: [
			"poules",
			"cailles",
			"potager"
		],
		starter: [
			"Bacs",
			"Son",
			"Souche",
			"Tamis"
		],
		pitfalls: [
			"Humidité",
			"Surpopulation",
			"Nourrir des volailles avec des larves avariées"
		]
	},
	{
		id: "poissons",
		name: "Poissons (bassin / aquaponie)",
		latin: "Cyprinus / Oncorhynchus",
		category: "poisson",
		summary: "Carpe ou truite en bassin, éventuellement aquaponie. Technique et sanitaire plus lourds ; espèces invasives interdites.",
		minSurfaceM2: 20,
		recommendedSurfaceM2: 40,
		minBudgetEur: 600,
		hoursPerWeek: 3,
		noise: 1,
		smell: 1,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"continental",
			"montagne",
			"atlantique-sud"
		],
		beginner: false,
		yields: [{
			label: "Poisson",
			qty: 8,
			unit: "kg",
			kcalPerUnit: 1200,
			per: "petit système / an"
		}],
		feed: {
			description: "Granulés truite / carpe + insectes. En aquaponie, les déjections nourrissent les plantes.",
			kgYear: 12,
			loop: "Lentilles d’eau, vers, restes végétaux (avec prudence)."
		},
		manure: {
			kgYear: 0,
			use: "Eau riche : irrigation / lits de culture aquaponique."
		},
		housing: "Bassin hors-gel ou profondeur > 80 cm, oxygénation, ombre. Filtration.",
		health: [
			"Qualité d’eau (NH3, NO2)",
			"Hérons",
			"Maladies d’importation"
		],
		legal: {
			level: "complexe",
			privateOk: true,
			declaration: "Plan d’eau : selon taille et connexion au réseau hydrographique, déclaration ou autorisation (loi sur l’eau). Espèces : tilapia et de nombreuses exotiques sont interdites ou encadrées. Carpe et truite : se renseigner DDT / OFB.",
			slaughter: "Pêche pour le foyer dans son bassin privé : généralement possible. Remise dans un cours d’eau = interdit pour beaucoup d’espèces.",
			products: "Chair : foyer. Vente = agrément.",
			neighbor: "Moustiques si eau stagnante non équilibrée. Sécurité enfants.",
			sources: [{
				label: "OFB — espèces",
				href: "https://www.ofb.gouv.fr/"
			}]
		},
		loops: [
			"potager",
			"eau",
			"canards"
		],
		starter: [
			"Bassin",
			"Pompe",
			"Test d’eau",
			"Ombrage",
			"Filet anti-héron"
		],
		pitfalls: [
			"Espèce interdite",
			"Surdensité",
			"Ammoniac"
		]
	},
	{
		id: "oies",
		name: "Oies",
		latin: "Anser anser domesticus",
		category: "volaille",
		summary: "Pâtureuses, viande de fête, graisse et duvet. Beaucoup d’herbe, une mare, un voisinage qui tolère le cri. Peu de grain si la prairie est là.",
		minSurfaceM2: 200,
		recommendedSurfaceM2: 600,
		minBudgetEur: 350,
		hoursPerWeek: 4,
		noise: 3,
		smell: 2,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		yields: [
			{
				label: "Viande",
				qty: 5,
				unit: "kg carcasse",
				kcalPerUnit: 2500,
				per: "oie de 6–8 mois"
			},
			{
				label: "Œufs",
				qty: 30,
				unit: "œufs",
				kcalPerUnit: 180,
				per: "oie / an (peu pondeuse)"
			},
			{
				label: "Graisse",
				qty: 1.5,
				unit: "kg",
				per: "oie"
			}
		],
		feed: {
			description: "Herbe en priorité, grain en finition. Une oie adulte pâture ~1–2 kg de vert/j.",
			kgYear: 40,
			loop: "Prairie, refus de fauche, pommes tombées, marc — jamais de pain en masse."
		},
		manure: {
			kgYear: 120,
			use: "Fientes liquides : litière carbonée puis compost. Excellent au pied des fruitiers haute-tige."
		},
		housing: "Abri sec 1 m²/tête, parcours herbeux 50–100 m²/tête, bassin vidable. Clôture 80–90 cm souvent suffisante. Garde naturelle (cris).",
		health: [
			"Influenza : palmipèdes, confinement fréquent",
			"Coccidiose des jeunes si parc boueux",
			"Coups de chaleur : ombre et eau claire"
		],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Oiseaux : déclaration dès le 1er individu en extérieur. Mesures de mise à l’abri selon le niveau de risque.",
			slaughter: "Abattage familial, animaux élevés sur place, consommation personnelle exclusive.",
			products: "Viande, graisse, œufs : foyer uniquement. Duvet : usage privé.",
			neighbor: "Le cri porte loin. Incompatible avec le lotissement. Distances RSD / PLU.",
			sources: [{
				label: "Déclaration oiseaux",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
			}, {
				label: "Ministère — influenza",
				href: "https://agriculture.gouv.fr/tout-ce-quil-faut-savoir-sur-linfluenza-aviaire"
			}]
		},
		loops: [
			"verger",
			"prairie",
			"potager",
			"canards"
		],
		starter: [
			"Abri",
			"Prairie clôturée",
			"Bassin vidable",
			"Souche de 3–4 oisons (espèce sociale)"
		],
		pitfalls: [
			"Voisinage sous-estimé",
			"Prairie trop petite → boue et parasites",
			"Confinement influenza oublié"
		]
	},
	{
		id: "pintades",
		name: "Pintades",
		latin: "Numida meleagris",
		category: "volaille",
		summary: "Œufs, viande fine, chasse aux tiques et insectes. Volent, crient, se perchent. Un filet haut ou une volière s’impose près des maisons.",
		minSurfaceM2: 60,
		recommendedSurfaceM2: 150,
		minBudgetEur: 220,
		hoursPerWeek: 3,
		noise: 3,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"continental",
			"atlantique-sud",
			"mediterraneen"
		],
		beginner: false,
		yields: [{
			label: "Œufs",
			qty: 80,
			unit: "œufs",
			kcalPerUnit: 90,
			per: "pintade / saison"
		}, {
			label: "Viande",
			qty: 1.2,
			unit: "kg carcasse",
			kcalPerUnit: 1400,
			per: "oiseau à 5–6 mois"
		}],
		feed: {
			description: "Protéines élevées au démarrage, puis grain + insectes du parcours. Moins « poubelle » que la poule.",
			kgYear: 35,
			loop: "Vers de farine, insectes du verger, graines."
		},
		manure: {
			kgYear: 40,
			use: "Comme les poules : compost 8–12 mois avant le potager."
		},
		housing: "Volière couverte ou filet 2 m : elles se perchent aux arbres et ne rentrent pas. Abri haut, perchoirs. Ne pas mélanger trop tôt aux jeunes poules (picage).",
		health: [
			"Influenza : même régime oiseaux",
			"Parasites si parcours saturé",
			"Froid humide des jeunes"
		],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Oiseaux : déclaration obligatoire en extérieur, comme les poules.",
			slaughter: "Abattage familial pour autoconsommation, élevés sur place.",
			products: "Œufs et viande : foyer.",
			neighbor: "Cri métallique, très porteur. Coq de pintade surtout. Mieux en écarté.",
			sources: [{
				label: "Déclaration oiseaux",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
			}]
		},
		loops: [
			"verger",
			"tenebrio",
			"poules"
		],
		starter: [
			"Volière haute",
			"Perchoirs",
			"Souche élevée au chaud",
			"Filet anti-envol"
		],
		pitfalls: [
			"Envol chez le voisin",
			"Bruit",
			"Ponte cachée dans les ronces"
		]
	},
	{
		id: "dindes",
		name: "Dindes",
		latin: "Meleagris gallopavo",
		category: "volaille",
		summary: "Viande d’automne : un lot de 4–8 dindonneaux au printemps, abattage familial avant les fêtes. Parcours, abri haut, influenza.",
		minSurfaceM2: 80,
		recommendedSurfaceM2: 200,
		minBudgetEur: 280,
		hoursPerWeek: 4,
		noise: 2,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Viande",
			qty: 8,
			unit: "kg carcasse",
			kcalPerUnit: 1600,
			per: "dinde fermière 6–8 mois"
		}],
		feed: {
			description: "Aliment dinde (protéines) jusqu’à 12 semaines, puis grain + verdure. Gourmandes.",
			kgYear: 70,
			loop: "Courges, pommes, insectes, restes végétaux non salés."
		},
		manure: {
			kgYear: 80,
			use: "Litière + fientes au compost long. Fort en azote."
		},
		housing: "Abri haut (elles se perchent), parcours herbeux, grillage enterré. Sensibles à l’humidité des jeunes. Ne pas surcharger avec les poules (histomonose / « blackhead »).",
		health: [
			"Histomonose si mélange trop tôt avec les poules (vers de terre vecteurs)",
			"Influenza : déclaration et confinement",
			"Coccidiose des dindonneaux"
		],
		legal: {
			level: "declaration",
			privateOk: true,
			declaration: "Oiseaux : déclaration dès le 1er en extérieur.",
			slaughter: "Abattage familial, élevés sur place, foyer uniquement.",
			products: "Viande : autoconsommation. Un « dinde de Noël vendue aux cousins » sort du cadre.",
			neighbor: "Glouglou sonore mais moins qu’un coq. Taille impressionnante.",
			sources: [{
				label: "Déclaration oiseaux",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/R44627"
			}, {
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"potager",
			"verger",
			"compost"
		],
		starter: [
			"Abri haut",
			"Éleveuse les 4 premières semaines",
			"Parcours",
			"Plan d’abattage et de froid"
		],
		pitfalls: [
			"Mélange précoce poules / dindes",
			"Sous-estimer l’aliment",
			"Pas de place au congélateur le jour J"
		]
	},
	{
		id: "vaches",
		name: "Vache laitière (1–2 têtes)",
		latin: "Bos taurus",
		category: "ruminant",
		summary: "Lait, fumier, vêlage. Cadre d’identification lourd, abattoir obligatoire, prairie réelle. Ce n’est pas « une chèvre en plus gros ».",
		minSurfaceM2: 4e3,
		recommendedSurfaceM2: 1e4,
		minBudgetEur: 2500,
		hoursPerWeek: 14,
		noise: 2,
		smell: 3,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		yields: [{
			label: "Lait",
			qty: 3500,
			unit: "L",
			kcalPerUnit: 640,
			per: "lactation jersiaise / brune (très variable)"
		}, {
			label: "Fumier",
			qty: 8e3,
			unit: "kg",
			per: "tête / an"
		}],
		feed: {
			description: "Pâture + foin + minéraux. Une vache n’est pas un recycleur de pain. Eau : 50–80 L/j.",
			kgYear: 2500,
			loop: "Prairie, refus de fauche, petit-lait limité. Complément céréales seulement en lactation."
		},
		manure: {
			kgYear: 8e3,
			use: "Fumier de stabulation composté : potager, verger, céréales du clos. Jamais frais au contact des racines nues."
		},
		housing: "Stabulation ou stabulation libre, cornadis, litière, paddock, clôture électrique sérieuse, contention (cornadis / cage) pour le véto.",
		health: [
			"Mammites : hygiène de traite",
			"Parasites de pâture, rotation",
			"Fièvre Q, IBR selon cheptel",
			"Vêlage : savoir appeler le véto"
		],
		legal: {
			level: "complexe",
			privateOk: true,
			declaration: "Identification (boucles), EDE, vétérinaire sanitaire, registre. Mouvements, naissances, morts : délais courts. Pacage : parfois PAC si surfaces, pas obligatoire pour 1 bête.",
			slaughter: "Bovins : pas d’abattage familial à la ferme. Passage en abattoir agréé, même pour le foyer. Cadavres : équarrissage.",
			products: "Lait et fromage : foyer. Toute cession = cadre sanitaire laitier. Veau mâle : planifier (engraissement ou filière), pas l’improvisation.",
			neighbor: "Meuglements, odeur, ruissellement de lisier. Distances, fossé, pas vers le puits du voisin.",
			sources: [{
				label: "Service-Public — identification des bovins",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F1918"
			}, {
				label: "Service-Public — abattage familial",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F34981"
			}]
		},
		loops: [
			"prairie",
			"fromage",
			"potager",
			"verger"
		],
		starter: [
			"Prairie réelle",
			"Abri",
			"Contention",
			"EDE / boucles",
			"Matériel de traite ébouillantable",
			"Plan d’abattoir"
		],
		pitfalls: [
			"Une vache seule (espèce sociale : 2 minimum)",
			"Pas de place d’hiver",
			"Lait cru sans froid ni hygiène",
			"Vêlage improvisé"
		]
	},
	{
		id: "grillons",
		name: "Grillons (élevage)",
		latin: "Acheta domesticus",
		category: "insecte",
		summary: "Protéines pour le foyer ou, plus souvent, pour les volailles. Bacs, carton, son. Discret, urbain possible. Chant des mâles à anticiper.",
		minSurfaceM2: 1,
		recommendedSurfaceM2: 4,
		minBudgetEur: 80,
		hoursPerWeek: 2,
		noise: 2,
		smell: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		yields: [{
			label: "Insectes (sec)",
			qty: 8,
			unit: "kg",
			kcalPerUnit: 1200,
			per: "bac bien conduit / an (ordre de grandeur)"
		}],
		feed: {
			description: "Son, légumes, gelée d’eau. Éviter les restes très gras et le pain moisi.",
			kgYear: 20,
			loop: "Issues de meunerie, fanes, carton ondulé comme abri."
		},
		manure: {
			kgYear: 5,
			use: "Frass (déjections) : amendement fin, sécher puis poignée au pied des tomates."
		},
		housing: "Bacs lisses 40–60 cm, aération grille fine, 25–30 °C pour la croissance, cachettes carton, abreuvoir mousse (noyade).",
		health: [
			"Acariens si trop humide",
			"Cannibalisme si surdensité ou manque d’abris",
			"Froid : arrêt de ponte"
		],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Élevage d’insectes au foyer pour autoconsommation : pas le même dossier qu’un atelier de novel food. Espèce Acheta domesticus autorisée dans l’UE comme denrée, sous conditions d’hygiène si mise sur le marché.",
			slaughter: "Blanchiment / congélation. Hygiène cuisine. Pas un spectacle.",
			products: "Foyer, ou aliment des volailles du foyer. Vente : cadre alimentaire (novel food).",
			neighbor: "Stridulation nocturne des mâles. Couvercle, pièce fermée, souche peu bruyante.",
			sources: [{
				label: "EFSA / novel food grillons (contexte UE)",
				href: "https://www.efsa.europa.eu/"
			}, {
				label: "Service-Public",
				href: "https://www.service-public.gouv.fr/"
			}]
		},
		loops: [
			"poules",
			"cailles",
			"dechets"
		],
		starter: [
			"Bac lisse",
			"Carton",
			"Son",
			"Souche saine",
			"Pièce hors gel"
		],
		pitfalls: [
			"Évasions dans l’appartement",
			"Chant",
			"Trop d’humidité (odeurs)"
		]
	},
	{
		id: "hermetia",
		name: "Mouches soldats noires",
		latin: "Hermetia illucens",
		category: "insecte",
		summary: "Larves qui triturent épluchures et restes : biomasse pour poules, « frass » pour le sol. Pas un aliment humain du dimanche. Cadre et odeurs à tenir.",
		minSurfaceM2: 2,
		recommendedSurfaceM2: 8,
		minBudgetEur: 120,
		hoursPerWeek: 3,
		noise: 1,
		smell: 2,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"mediterraneen",
			"atlantique-sud",
			"continental"
		],
		beginner: false,
		yields: [{
			label: "Larves fraîches",
			qty: 40,
			unit: "kg",
			kcalPerUnit: 1500,
			per: "bac / saison chaude (très variable)"
		}, {
			label: "Frass",
			qty: 30,
			unit: "kg",
			per: "saison"
		}],
		feed: {
			description: "Épluchures, marc, restes peu gras. Éviter viande en masse (odeurs, ravageurs).",
			kgYear: 200,
			loop: "Biodéchets du foyer → larves → poules / compost."
		},
		manure: {
			kgYear: 30,
			use: "Frass séché : NPK doux, à mélanger au compost mûr."
		},
		housing: "Bac drainé, 25–30 °C, aération, rampe de « self-harvest » des prépupes. Adultes : cage grillagée si l’on veut boucler le cycle (ponte).",
		health: ["Acariens et mouches concurrentes si trop mouillé", "Froid : la colonie s’arrête sous ~15 °C"],
		legal: {
			level: "simple",
			privateOk: true,
			declaration: "Insectes pour aliment animal du foyer : rester dans le clos. Les règles UE sur les protéines animales en élevage visent surtout les filières ; ne pas vendre de larves comme aliment.",
			slaughter: "Pas un abattage. Congélation des larves avant distribution aux volailles, hygiène.",
			products: "Larves = aliment des animaux du foyer. Pas de commercialisation improvisée.",
			neighbor: "Odeur si le bac anaérobie. Tenir carboné, comme un bokashi mal mené.",
			sources: [{
				label: "Service-Public — biodéchets",
				href: "https://www.service-public.gouv.fr/particuliers/vosdroits/F17902"
			}]
		},
		loops: [
			"poules",
			"dechets",
			"compost"
		],
		starter: [
			"Bac drainé",
			"Souche",
			"Mélange carboné",
			"Plan poules ou compost"
		],
		pitfalls: [
			"Bac trop liquide",
			"Promettre un « zéro déchet » magique",
			"Hiver sans relais compost"
		]
	}
];
function animalById(id) {
	return ANIMALS.find((a) => a.id === id);
}
var LEGAL_LABEL = {
	simple: "Cadre simple",
	declaration: "Déclaration",
	identification: "Identification",
	complexe: "Cadre complexe"
};
//#endregion
export { LEGAL_LABEL as n, animalById as r, ANIMALS as t };
