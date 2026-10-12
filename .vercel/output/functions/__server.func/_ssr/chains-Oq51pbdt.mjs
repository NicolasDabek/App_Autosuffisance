//#region node_modules/.nitro/vite/services/ssr/assets/chains-Oq51pbdt.js
var CHAINS = [
	{
		id: "micro-urbain",
		name: "Micro-boucle urbaine",
		tagline: "Lombrics, jardinières et, si le règlement le permet, cailles.",
		nodes: [
			{
				id: "dechets",
				label: "Déchets cuisine",
				kind: "waste"
			},
			{
				id: "lombrics",
				label: "Lombricompost",
				kind: "process"
			},
			{
				id: "pots",
				label: "Jardinières",
				kind: "plant"
			},
			{
				id: "cailles",
				label: "Cailles (option)",
				kind: "animal"
			}
		],
		animalIds: ["lombrics", "cailles"],
		minSurfaceM2: 4,
		recommendedSurfaceM2: 12,
		setupEur: [80, 350],
		hoursPerWeek: 2,
		noise: 1,
		settings: ["urbain"],
		climates: "all",
		beginner: true,
		legalNote: "Lombricomposteur : aucune déclaration. Cailles = oiseaux, déclaration si extérieur. Règlement de copropriété à lire avant tout élevage.",
		loops: ["Épluchures → vers → compost → aromatiques / tomates en bac", "Vers de farine optionnels → cailles → fientes au compost (jamais en tas cru sur les pots)"],
		yields: [
			{
				label: "Compost",
				detail: "20–40 kg / an pour un foyer de 2"
			},
			{
				label: "Herbes et feuilles",
				detail: "Coupe continue, 5–15 kg de légumes-feuilles"
			},
			{
				label: "Œufs de caille",
				detail: "Si élevage : 4 femelles ≈ 1 000 œufs / an"
			}
		],
		savings: "Sacs d’amendement, une partie des salades, éventuellement œufs.",
		steps: [
			"Installer un lombricomposteur à l’abri du gel",
			"Réserver 4 à 8 bacs profonds (30 cm) pour choux asiatiques, bettes, aromatiques",
			"Vérifier copropriété / bail avant cailles",
			"Tenir un carnet : kg de déchets, récoltes"
		],
		risks: [
			"Odeur si bac trop humide",
			"Mâles de caille trop bruyants",
			"Interdiction en copropriété"
		]
	},
	{
		id: "poules-compost-potager",
		name: "Poules · compost · potager",
		tagline: "La boucle la plus rentable pour un jardin de 40 à 200 m².",
		nodes: [
			{
				id: "dechets",
				label: "Restes végétaux",
				kind: "waste"
			},
			{
				id: "poules",
				label: "Poules",
				kind: "animal"
			},
			{
				id: "compost",
				label: "Compost",
				kind: "process"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			}
		],
		animalIds: ["poules", "lombrics"],
		minSurfaceM2: 40,
		recommendedSurfaceM2: 80,
		setupEur: [300, 900],
		hoursPerWeek: 4,
		noise: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: true,
		legalNote: "Déclaration des oiseaux dès le 1er individu en extérieur. Œufs et viande : foyer uniquement. Coq déconseillé en lotissement.",
		loops: [
			"Épluchures et verdure → poules",
			"Fientes + litière → compost 8–12 mois → planches",
			"Adventices et surplus → poules",
			"Coquilles broyées → calcium des pondeuses"
		],
		yields: [
			{
				label: "Œufs",
				detail: "4 pondeuses ≈ 800–900 œufs / an"
			},
			{
				label: "Légumes",
				detail: "+15 à 30 % de rendement grâce à l’amendement"
			},
			{
				label: "Déchets détournés",
				detail: "150–250 kg / an hors poubelle"
			}
		],
		savings: "Œufs du foyer + engrais du commerce + une partie des poubelles.",
		steps: [
			"Déclarer la basse-cour",
			"Poulailler + parcours grillage enterré",
			"Composteur 400–800 L à 10 m de la maison",
			"Planches permanentes pour recevoir le compost mûr"
		],
		risks: [
			"Renard / fouine",
			"Influenza : confinement",
			"Fientes fraîches qui brûlent les plants"
		]
	},
	{
		id: "poules-lapins-verger",
		name: "Poules · lapins · verger",
		tagline: "Deux fumiers complémentaires, viande et œufs, fruitiers nourris.",
		nodes: [
			{
				id: "lapins",
				label: "Lapins",
				kind: "animal"
			},
			{
				id: "poules",
				label: "Poules",
				kind: "animal"
			},
			{
				id: "compost",
				label: "Compost",
				kind: "process"
			},
			{
				id: "verger",
				label: "Verger",
				kind: "plant"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			}
		],
		animalIds: ["poules", "lapins"],
		minSurfaceM2: 80,
		recommendedSurfaceM2: 200,
		setupEur: [500, 1400],
		hoursPerWeek: 6,
		noise: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: true,
		legalNote: "Poules : déclaration oiseaux. Lapins : cadre simple. Abattage familial pour les deux, foyer uniquement.",
		loops: [
			"Fanes et adventices → lapins",
			"Fumier de lapin (froid) + fientes → compost",
			"Compost au pied des fruitiers et planches gourmandes",
			"Chutes de taille → litière et BRF"
		],
		yields: [
			{
				label: "Œufs",
				detail: "4–6 poules"
			},
			{
				label: "Viande",
				detail: "Lapin : 15–25 kg carcasse / an selon reproduction"
			},
			{
				label: "Fruits",
				detail: "Haute-tige + compost : montée en régime dès 3–5 ans"
			}
		],
		savings: "Viande, œufs, amendements, une part de fruits à 5 ans.",
		steps: [
			"Installer poulailler et clapiers à l’ombre des fruitiers sans accès direct à l’écorce",
			"Rotation des parcs pour ne pas détruire l’herbe",
			"Vacciner les lapins (VHD, myxomatose)"
		],
		risks: [
			"Chaleur lapins",
			"Écorce des jeunes scions",
			"Charge de travail si reproduction non planifiée"
		]
	},
	{
		id: "ruches-verger",
		name: "Ruches · verger · haies",
		tagline: "Pollinisation d’abord, miel ensuite.",
		nodes: [
			{
				id: "haies",
				label: "Haies mellifères",
				kind: "plant"
			},
			{
				id: "abeilles",
				label: "Ruches",
				kind: "animal"
			},
			{
				id: "verger",
				label: "Verger",
				kind: "plant"
			},
			{
				id: "miel",
				label: "Miel",
				kind: "process"
			}
		],
		animalIds: ["abeilles"],
		minSurfaceM2: 80,
		recommendedSurfaceM2: 300,
		setupEur: [400, 1200],
		hoursPerWeek: 2,
		noise: 1,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		legalNote: "Déclaration annuelle NAPI dès 1 ruche. Distances d’implantation : arrêté préfectoral.",
		loops: [
			"Floraisons étalées (saule, fruitiers, tilleul, ronce, lierre) → colonies",
			"Pollinisation → nouaison",
			"Cire gaufrée recyclée, essaims pour renouveler"
		],
		yields: [{
			label: "Miel",
			detail: "10–25 kg / ruche selon millésime"
		}, {
			label: "Fruits",
			detail: "Nouaison nettement meilleure sur pommier, cerisier, courges"
		}],
		savings: "Pots de miel + rendement fruitier. Le service de pollinisation vaut souvent plus que le miel.",
		steps: [
			"Formation rucher-école",
			"Déclaration NAPI",
			"Palissade 2 m",
			"Haie mellifère avant la 2e ruche"
		],
		risks: [
			"Varroa",
			"Voisinage / allergies",
			"Année sans miel"
		]
	},
	{
		id: "canards-limaces",
		name: "Canards · mare · potager",
		tagline: "Régulation des limaces, œufs, mare vivante.",
		nodes: [
			{
				id: "mare",
				label: "Mare",
				kind: "water"
			},
			{
				id: "canards",
				label: "Canards",
				kind: "animal"
			},
			{
				id: "limaces",
				label: "Limaces",
				kind: "process"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			}
		],
		animalIds: ["canards"],
		minSurfaceM2: 80,
		recommendedSurfaceM2: 200,
		setupEur: [350, 1100],
		hoursPerWeek: 4,
		noise: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		legalNote: "Déclaration oiseaux + confinement influenza fréquent pour palmipèdes. Mare : rester hors cours d’eau naturel.",
		loops: [
			"Canards au parc le matin sur planches déjà levées (pas sur semis)",
			"Eau renouvelée → irrigation après décantation",
			"Litière + fientes → compost carboné"
		],
		yields: [{
			label: "Œufs",
			detail: "Coureur indien : 150–220 œufs / cane"
		}, {
			label: "Limaces",
			detail: "Baisse nette en 1 saison si parc tournant"
		}],
		savings: "Anti-limaces, œufs, éventuellement un canard de chair.",
		steps: [
			"Choisir coureur indien (peu d’eau, bon marcheur)",
			"Bassin vidable",
			"Filet à vison / renard"
		],
		risks: [
			"Bourbier",
			"Influenza",
			"Semis piétinés"
		]
	},
	{
		id: "escargots-haies",
		name: "Escargots · haies · ombre",
		tagline: "Petite production de chair, zéro bruit, déchets verts tendres.",
		nodes: [
			{
				id: "haies",
				label: "Ombre et haies",
				kind: "plant"
			},
			{
				id: "verts",
				label: "Verts tendres",
				kind: "waste"
			},
			{
				id: "escargots",
				label: "Escargots",
				kind: "animal"
			}
		],
		animalIds: ["escargots"],
		minSurfaceM2: 10,
		recommendedSurfaceM2: 25,
		setupEur: [80, 250],
		hoursPerWeek: 1,
		noise: 1,
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
		legalNote: "Autoconsommation simple. Ne pas prélever Helix pomatia (escargot de Bourgogne) sans vérifier les arrêtés.",
		loops: [
			"Feuilles de courge / bette → parc",
			"Calcium du jardin (coquilles) → coquilles",
			"Ombre des haies → survie estivale"
		],
		yields: [{
			label: "Chair",
			detail: "Quelques kg / an, croissance 6–12 mois"
		}],
		savings: "Plat occasionnel, pédagogie, aucun engrais acheté pour ce module.",
		steps: [
			"Parc anti-rats",
			"Souche d’élevage légale (pas de ramassage illégal)",
			"Arrosage fin de journée"
		],
		risks: [
			"Sécheresse",
			"Rats",
			"Confusion d’espèces protégées"
		]
	},
	{
		id: "chevres-haies",
		name: "Chèvres · haies · fromage",
		tagline: "Lait, débroussaillage, fumier. Un cran juridique et de travail au-dessus.",
		nodes: [
			{
				id: "haies",
				label: "Haies / broussailles",
				kind: "plant"
			},
			{
				id: "chevres",
				label: "Chèvres",
				kind: "animal"
			},
			{
				id: "lait",
				label: "Lait / fromage",
				kind: "process"
			},
			{
				id: "fumier",
				label: "Fumier",
				kind: "waste"
			},
			{
				id: "verger",
				label: "Verger protégé",
				kind: "plant"
			}
		],
		animalIds: ["chevres"],
		minSurfaceM2: 400,
		recommendedSurfaceM2: 800,
		setupEur: [900, 2500],
		hoursPerWeek: 8,
		noise: 3,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		legalNote: "Identification EDE, vétérinaire sanitaire, abattage familial possible. Lait : foyer uniquement.",
		loops: [
			"Refus ligneux → chèvres",
			"Fumier → compost → pommes de terre et fruitiers (troncs protégés)",
			"Petit-lait → poules ou porc si présents (jamais de restes carnés aux porcs)"
		],
		yields: [{
			label: "Lait",
			detail: "Alpine : plusieurs centaines de litres / lactation"
		}, {
			label: "Fromage",
			detail: "10 L de lait ≈ 1 kg de fromage lactique"
		}],
		savings: "Laitages, débroussaillage, fumier. Le temps de traite n’est pas un « gain » si mal anticipé.",
		steps: [
			"Deux chèvres minimum",
			"Clôture sérieuse",
			"Déclaration EDE",
			"Formation fromage lactique"
		],
		risks: [
			"Fugues",
			"Parasites",
			"Charge quotidienne (traite)"
		]
	},
	{
		id: "tenebrio-volailles",
		name: "Vers de farine · volailles",
		tagline: "Protéines maison pour réduire l’aliment du commerce.",
		nodes: [
			{
				id: "son",
				label: "Son / issues",
				kind: "waste"
			},
			{
				id: "tenebrio",
				label: "Tenebrio",
				kind: "animal"
			},
			{
				id: "volailles",
				label: "Poules / cailles",
				kind: "animal"
			}
		],
		animalIds: ["tenebrio", "poules"],
		minSurfaceM2: 30,
		recommendedSurfaceM2: 50,
		setupEur: [40, 200],
		hoursPerWeek: 1,
		noise: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Insectes pour nourrir ses propres animaux : cadre privé. Pas de vente d’insectes sans statut.",
		loops: ["Son et carton → larves → volailles → fientes → compost"],
		yields: [{
			label: "Protéines",
			detail: "Quelques kg de larves / an, complément pas ration complète"
		}],
		savings: "10–20 % de l’aliment volaille selon assiduité.",
		steps: [
			"3 à 5 bacs empilés",
			"Température 22 °C",
			"Trier nymphes toutes les 2 semaines"
		],
		risks: ["Acariens", "Surestimer le rendement"]
	},
	{
		id: "clos-complet",
		name: "Clos complet",
		tagline: "Poules, lapins, ruches, compost, potager, verger, eau de pluie.",
		nodes: [
			{
				id: "eau",
				label: "Eau de pluie",
				kind: "water"
			},
			{
				id: "poules",
				label: "Poules",
				kind: "animal"
			},
			{
				id: "lapins",
				label: "Lapins",
				kind: "animal"
			},
			{
				id: "abeilles",
				label: "Ruches",
				kind: "animal"
			},
			{
				id: "compost",
				label: "Compost",
				kind: "process"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			},
			{
				id: "verger",
				label: "Verger",
				kind: "plant"
			}
		],
		animalIds: [
			"poules",
			"lapins",
			"abeilles",
			"lombrics"
		],
		minSurfaceM2: 400,
		recommendedSurfaceM2: 1200,
		setupEur: [2e3, 8e3],
		hoursPerWeek: 10,
		noise: 2,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		legalNote: "Cumul des déclarations oiseaux + NAPI. Tout produit animal reste dans le foyer. Récupération d’eau : arrêté 2008 si usages intérieurs.",
		loops: [
			"Toiture → cuve → abreuvoirs et irrigation",
			"Animaux → compost → sol → plantes → restes → animaux",
			"Abeilles → fruitiers et courges",
			"BRF de taille → sol et litière"
		],
		yields: [{
			label: "Autonomie alimentaire",
			detail: "20–40 % des kcal d’un foyer de 2–3 après 3 ans, davantage en fruits/légumes/œufs"
		}, {
			label: "Eau",
			detail: "Selon toiture : plusieurs m³ / an"
		}],
		savings: "Courses, engrais, une part d’eau potable, miel. Le bois et l’isolation se branchent ensuite (module Énergie).",
		steps: [
			"Année 1 : sol, compost, poules, cuve",
			"Année 2 : verger, lapins",
			"Année 3 : ruches si formation OK",
			"Journaliser pour piloter"
		],
		risks: [
			"Charge mentale",
			"Prédateurs",
			"Cumul sanitaire influenza + varroa"
		]
	},
	{
		id: "aquaponie-douce",
		name: "Aquaponie douce",
		tagline: "Bassin, filtration, légumes-feuilles. Technique, peu d’animaux « de basse-cour ».",
		nodes: [
			{
				id: "poissons",
				label: "Poissons",
				kind: "animal"
			},
			{
				id: "biofiltre",
				label: "Biofiltre",
				kind: "process"
			},
			{
				id: "lits",
				label: "Lits de culture",
				kind: "plant"
			}
		],
		animalIds: ["poissons"],
		minSurfaceM2: 25,
		recommendedSurfaceM2: 50,
		setupEur: [700, 3e3],
		hoursPerWeek: 4,
		noise: 1,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"continental",
			"atlantique-sud",
			"montagne"
		],
		beginner: false,
		legalNote: "Espèces autorisées seulement. Plan d’eau parfois soumis à la loi sur l’eau. Tilapia : à éviter / souvent hors cadre.",
		loops: ["Granulés → poissons → ammoniaque → bactéries → nitrates → plantes → eau claire"],
		yields: [{
			label: "Feuilles",
			detail: "Laitues, basilic, bettes en continu sous abri"
		}, {
			label: "Poisson",
			detail: "Quelques kg si le système est stable"
		}],
		savings: "Légumes-feuilles hors-sol, pédagogie. Pas un système « pas cher » la première année.",
		steps: [
			"Cycle à blanc 4 semaines",
			"Faible densité de poissons",
			"Tests NH3 / NO2 / pH"
		],
		risks: [
			"Coupure électrique",
			"Surdensité",
			"Espèce interdite"
		]
	},
	{
		id: "porc-jardin",
		name: "Porc saisonnier · jardin",
		tagline: "Un porc d’automne pour valoriser courges et châtaignes — rural uniquement.",
		nodes: [
			{
				id: "jardin",
				label: "Surplus jardin",
				kind: "plant"
			},
			{
				id: "porcs",
				label: "Porc",
				kind: "animal"
			},
			{
				id: "fumier",
				label: "Fumier",
				kind: "waste"
			}
		],
		animalIds: ["porcs"],
		minSurfaceM2: 200,
		recommendedSurfaceM2: 500,
		setupEur: [400, 1200],
		hoursPerWeek: 6,
		noise: 2,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		legalNote: "Identification même pour 1 porc. Interdiction de nourrir avec des déchets de cuisine d’origine animale. Abattage familial strictement foyer.",
		loops: ["Courges, pommes, topinambours (végétaux) → porc → fumier → pommes de terre de l’année suivante"],
		yields: [{
			label: "Viande",
			detail: "70–90 kg carcasse à 7–8 mois"
		}],
		savings: "Plusieurs mois de viande familiale, fumier. Investissement en clôture et temps d’abattage.",
		steps: [
			"EDE + boucle",
			"Parcours électrifié",
			"Planifier l’abattage et le froid"
		],
		risks: [
			"Odeur",
			"Aliments interdits",
			"Sous-estimation de l’abattage"
		]
	},
	{
		id: "oies-prairie",
		name: "Oies · prairie · verger",
		tagline: "Pâture, viande d’automne, fruitiers haute-tige protégés.",
		nodes: [
			{
				id: "prairie",
				label: "Prairie",
				kind: "plant"
			},
			{
				id: "oies",
				label: "Oies",
				kind: "animal"
			},
			{
				id: "verger",
				label: "Verger haute-tige",
				kind: "plant"
			},
			{
				id: "compost",
				label: "Compost",
				kind: "process"
			}
		],
		animalIds: ["oies"],
		minSurfaceM2: 400,
		recommendedSurfaceM2: 1e3,
		setupEur: [400, 1400],
		hoursPerWeek: 4,
		noise: 3,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		legalNote: "Déclaration oiseaux. Cri porteur : hors lotissement. Abattage familial, foyer uniquement.",
		loops: [
			"Herbe → oies → fientes + litière → compost → fruitiers",
			"Pommes tombées → finition d’automne",
			"Jeunes scions grillagés : elles écorcent"
		],
		yields: [{
			label: "Viande",
			detail: "4 oies ≈ 20 kg carcasse + graisse"
		}, {
			label: "Entretien",
			detail: "Prairie rase, moins de broyeur"
		}],
		savings: "Viande de fête, tonte, amendement. Le grain reste un appoint.",
		steps: [
			"Prairie clôturée",
			"Lot de 3–4 (espèce sociale)",
			"Bassin vidable",
			"Déclaration"
		],
		risks: [
			"Voisinage",
			"Influenza",
			"Boue si surcharge"
		]
	},
	{
		id: "pintades-verger",
		name: "Pintades · verger",
		tagline: "Tiques, insectes, œufs — à condition de volière haute.",
		nodes: [
			{
				id: "verger",
				label: "Verger",
				kind: "plant"
			},
			{
				id: "pintades",
				label: "Pintades",
				kind: "animal"
			},
			{
				id: "insectes",
				label: "Insectes / tiques",
				kind: "process"
			}
		],
		animalIds: ["pintades"],
		minSurfaceM2: 80,
		recommendedSurfaceM2: 200,
		setupEur: [250, 800],
		hoursPerWeek: 3,
		noise: 3,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"continental",
			"atlantique-sud",
			"mediterraneen"
		],
		beginner: false,
		legalNote: "Déclaration oiseaux. Le cri gène un lotissement dense.",
		loops: ["Insectes du sol → pintades → fientes compostées → arbres", "Œufs de saison"],
		yields: [{
			label: "Œufs",
			detail: "Ponte groupée au printemps-été"
		}, {
			label: "Sanitaire",
			detail: "Pression tiques en baisse sur un parcours habité"
		}],
		savings: "Œufs, un peu de viande, moins de sprays. Filet : le vrai coût.",
		steps: [
			"Volière ou filet 2 m",
			"Perchoirs hauts",
			"Ne pas compter sur le retour au poulailler"
		],
		risks: [
			"Envol",
			"Bruit",
			"Ponte hors abri"
		]
	},
	{
		id: "pleurotes-bois",
		name: "Pleurotes · bois · compost",
		tagline: "Champignons cultivés sur paille ou bûches, sans forêt.",
		nodes: [
			{
				id: "paille",
				label: "Paille / bûches",
				kind: "waste"
			},
			{
				id: "pleurotes",
				label: "Pleurotes",
				kind: "process"
			},
			{
				id: "cuisine",
				label: "Récolte",
				kind: "plant"
			},
			{
				id: "compost",
				label: "Substrat usé",
				kind: "waste"
			}
		],
		animalIds: [],
		minSurfaceM2: 4,
		recommendedSurfaceM2: 12,
		setupEur: [30, 150],
		hoursPerWeek: 1,
		noise: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Mycélium du commerce. Autoconsommation. Pas de prélèvement de souches en forêt publique.",
		loops: ["Paille pasteurisée → mycélium → carpophores → substrat au compost"],
		yields: [{
			label: "Champignons",
			detail: "Quelques kg / sac sur 2–3 vagues, selon souche"
		}],
		savings: "Barquettes du marché, valorisation de paille. Cave ou cellier : pas de jardin obligatoire.",
		steps: [
			"Commander une souche de laboratoire",
			"Pasteuriser la paille",
			"Ombre et humidité",
			"Composter le reste"
		],
		risks: [
			"Contaminations (moisissures vertes)",
			"Local trop sec",
			"Confusion avec cueillette sauvage (ce n’est pas le même geste)"
		]
	},
	{
		id: "dindes-automne",
		name: "Dindes d’automne",
		tagline: "Lot saisonnier au printemps, congélateur en novembre.",
		nodes: [
			{
				id: "dindes",
				label: "Dindes",
				kind: "animal"
			},
			{
				id: "parcours",
				label: "Parcours",
				kind: "plant"
			},
			{
				id: "compost",
				label: "Litière",
				kind: "waste"
			}
		],
		animalIds: ["dindes"],
		minSurfaceM2: 100,
		recommendedSurfaceM2: 250,
		setupEur: [280, 700],
		hoursPerWeek: 4,
		noise: 2,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: false,
		legalNote: "Déclaration oiseaux. Abattage familial, foyer uniquement — pas la dinde des cousins.",
		loops: ["Verdure et grain → dindes → litière → compost de printemps"],
		yields: [{
			label: "Viande",
			detail: "4 dindes fermières ≈ 30 kg carcasse"
		}],
		savings: "Plusieurs repas d’hiver. L’aliment de démarrage pèse : ne pas sous-budgéter.",
		steps: [
			"Éleveuse 4 semaines",
			"Séparer des poules au début (histomonose)",
			"Planifier froid et abattage"
		],
		risks: [
			"Histomonose",
			"Influenza",
			"Place au congélateur"
		]
	},
	{
		id: "vache-prairie",
		name: "Prairie et vache laitière",
		tagline: "Lait du foyer, fumier du clos — seulement si la surface et l’abattoir existent.",
		nodes: [
			{
				id: "prairie",
				label: "Prairie",
				kind: "plant"
			},
			{
				id: "vaches",
				label: "Vache",
				kind: "animal"
			},
			{
				id: "lait",
				label: "Lait / fromage",
				kind: "process"
			},
			{
				id: "fumier",
				label: "Fumier",
				kind: "waste"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			}
		],
		animalIds: ["vaches"],
		minSurfaceM2: 4e3,
		recommendedSurfaceM2: 12e3,
		setupEur: [2500, 8e3],
		hoursPerWeek: 14,
		noise: 2,
		settings: ["rural"],
		climates: "all",
		beginner: false,
		legalNote: "Identification bovine, EDE, véto sanitaire. Abattage en abattoir, jamais à la ferme. Lait : foyer.",
		loops: ["Herbe → lait → petit-lait (poules) → fumier composté → planches"],
		yields: [{
			label: "Lait",
			detail: "Plusieurs litres / jour en lactation, à transformer ou boire"
		}],
		savings: "Lait et fromage du commerce, fumier acheté. Le temps et le foin d’hiver pèsent plus que le prix de la bête.",
		steps: [
			"Deux bêtes minimum",
			"Contention et EDE",
			"Plan d’hiver (foin)",
			"Fromagerie hygiénique",
			"Abattoir identifié"
		],
		risks: [
			"Mammites",
			"Vêlage",
			"Lisier vers le puits",
			"Isolement social de l’animal"
		]
	},
	{
		id: "grillons-volailles",
		name: "Grillons → volailles",
		tagline: "Protéines d’insectes pour réduire le sac de granulés.",
		nodes: [
			{
				id: "son",
				label: "Son / épluchures",
				kind: "waste"
			},
			{
				id: "grillons",
				label: "Grillons",
				kind: "animal"
			},
			{
				id: "volailles",
				label: "Poules / cailles",
				kind: "animal"
			}
		],
		animalIds: ["grillons", "poules"],
		minSurfaceM2: 25,
		recommendedSurfaceM2: 50,
		setupEur: [80, 250],
		hoursPerWeek: 4,
		noise: 2,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Insectes du foyer pour animaux du foyer. Vente de grillons alimentaires = cadre novel food.",
		loops: ["Issues de meunerie → grillons → volailles → fientes compostées"],
		yields: [{
			label: "Protéines",
			detail: "Complément, pas 100 % de la ration"
		}],
		savings: "Une part du sac « ponte ». Le son reste un achat si l’on n’a pas de moulin.",
		steps: [
			"Bac lisse",
			"Chaleur 25 °C",
			"Congeler avant de donner",
			"Frass au compost"
		],
		risks: [
			"Chant",
			"Évasions",
			"Surdensité"
		]
	},
	{
		id: "hermetia-poules",
		name: "Biodéchets → soldats noirs → poules",
		tagline: "Les larves ferment la poubelle molle que le compost refuse.",
		nodes: [
			{
				id: "dechets",
				label: "Épluchures",
				kind: "waste"
			},
			{
				id: "hermetia",
				label: "Larves BSF",
				kind: "animal"
			},
			{
				id: "poules",
				label: "Poules",
				kind: "animal"
			},
			{
				id: "frass",
				label: "Frass",
				kind: "waste"
			}
		],
		animalIds: ["hermetia", "poules"],
		minSurfaceM2: 30,
		recommendedSurfaceM2: 80,
		setupEur: [120, 400],
		hoursPerWeek: 5,
		noise: 1,
		settings: ["periurbain", "rural"],
		climates: [
			"oceanique",
			"semi-oceanique",
			"mediterraneen",
			"atlantique-sud",
			"continental"
		],
		beginner: false,
		legalNote: "Larves pour les animaux du foyer, pas une filière. Odeur = bac trop mouillé.",
		loops: ["Restes → larves → poules → œufs ; frass → compost"],
		yields: [{
			label: "Œufs + larves",
			detail: "Réduit le sac, valorise ce que les poules ne doivent pas manger cru en masse"
		}],
		savings: "Ordures et aliment. L’hiver, revenir au compost classique.",
		steps: [
			"Bac drainé 25–30 °C",
			"Carbone dans le mélange",
			"Self-harvest des prépupes",
			"Relais compost hors saison"
		],
		risks: [
			"Odeurs",
			"Froid",
			"Promesses magiques"
		]
	},
	{
		id: "sarrasin-ruches",
		name: "Sarrasin, abeilles, farine",
		tagline: "Un couvert qui se mange et qui miellifie.",
		nodes: [
			{
				id: "sarrasin",
				label: "Sarrasin",
				kind: "plant"
			},
			{
				id: "abeilles",
				label: "Ruches",
				kind: "animal"
			},
			{
				id: "miel",
				label: "Miel sombre",
				kind: "process"
			},
			{
				id: "farine",
				label: "Farine",
				kind: "process"
			}
		],
		animalIds: ["abeilles"],
		minSurfaceM2: 150,
		recommendedSurfaceM2: 600,
		setupEur: [40, 400],
		hoursPerWeek: 3,
		noise: 1,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: true,
		legalNote: "Ruches : déclaration. Sarrasin : semences du foyer. Miel : foyer.",
		loops: ["Semis juin → floraison → miel → graines → farine ; paillis"],
		yields: [{
			label: "Farine + miel",
			detail: "Petits volumes, gros apprentissage"
		}],
		savings: "Galettes et miel d’été. Le sarrasin gèle : ne pas semer trop tôt.",
		steps: [
			"Sol réchauffé",
			"Floraison pour les ruches",
			"Récolte avant gel",
			"Vanner, moudre tard"
		],
		risks: [
			"Gel précoce",
			"Oiseaux",
			"Pas de ruche trop près d’un lotissement"
		]
	},
	{
		id: "haie-brf-sol",
		name: "Haie → BRF → sol",
		tagline: "La clôture qui nourrit les planches.",
		nodes: [
			{
				id: "haie",
				label: "Haie vive",
				kind: "plant"
			},
			{
				id: "brf",
				label: "BRF",
				kind: "waste"
			},
			{
				id: "sol",
				label: "Sol vivant",
				kind: "process"
			},
			{
				id: "potager",
				label: "Potager",
				kind: "plant"
			}
		],
		animalIds: [],
		minSurfaceM2: 80,
		recommendedSurfaceM2: 300,
		setupEur: [40, 250],
		hoursPerWeek: 2,
		noise: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Distances de plantation. Espèces locales. Broyeur : bruit, voisins, EPI.",
		loops: ["Taille d’hiver → BRF → paillis 3 cm → humus → légumes"],
		yields: [{
			label: "Paillis",
			detail: "Quelques m³ au bout de 4–5 ans de haie"
		}],
		savings: "Terreau, clôture, biodiversité. Le temps de pousse se compte en années.",
		steps: [
			"Planter en hiver",
			"Distances légales",
			"Tailler 1/3 par an",
			"Paillis mince, pas une dune"
		],
		risks: [
			"Faim d’azote si BRF enfoui cru",
			"Laurier-palme « pour aller vite »",
			"Broyeur sous-dimensionné"
		]
	},
	{
		id: "pressoir-verger",
		name: "Verger → pressoir → cave",
		tagline: "Le jus de l’année, avant qu’il ne tombe.",
		nodes: [
			{
				id: "pommes",
				label: "Verger",
				kind: "plant"
			},
			{
				id: "pressoir",
				label: "Pressoir",
				kind: "process"
			},
			{
				id: "jus",
				label: "Jus / cidre",
				kind: "process"
			},
			{
				id: "marc",
				label: "Marc au compost",
				kind: "waste"
			}
		],
		animalIds: [],
		minSurfaceM2: 40,
		recommendedSurfaceM2: 200,
		setupEur: [80, 600],
		hoursPerWeek: 2,
		noise: 1,
		settings: ["periurbain", "rural"],
		climates: "all",
		beginner: true,
		legalNote: "Jus et cidre du foyer : libre. Distillation : droit spécifique, pas un tuyau.",
		loops: ["Fruits → jus pasteurisé ou cidre → cave ; marc → compost → arbres"],
		yields: [{
			label: "Jus et cidre",
			detail: "Quelques dizaines de litres dès trois ou quatre arbres chargés"
		}],
		savings: "Boissons et sucre. Le pressoir communal évite d’acheter l’outil.",
		steps: [
			"Trier le pourri",
			"Presser propre",
			"Débourber",
			"Pasteuriser une partie",
			"Marc au compost"
		],
		risks: [
			"Bouteilles fermées trop tôt",
			"Verre sale",
			"Alambic improvisé"
		]
	},
	{
		id: "insectes-verger",
		name: "Auxiliaires et verger",
		tagline: "Nichoirs et bandes fleuries avant les pulvérisations.",
		nodes: [
			{
				id: "haie",
				label: "Haie fleurie",
				kind: "plant"
			},
			{
				id: "gites",
				label: "Gîtes",
				kind: "process"
			},
			{
				id: "aux",
				label: "Auxiliaires",
				kind: "animal"
			},
			{
				id: "fruits",
				label: "Fruitiers",
				kind: "plant"
			}
		],
		animalIds: ["abeilles"],
		minSurfaceM2: 30,
		recommendedSurfaceM2: 150,
		setupEur: [20, 150],
		hoursPerWeek: 1,
		noise: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Pas de glu (oiseaux, chauves-souris). Espèces protégées : on héberge, on ne prélève pas.",
		loops: ["Fleurs → pollinisateurs → nouaison ; mésanges et chrysopes → chenilles"],
		yields: [{
			label: "Nouaison",
			detail: "Moins de traitements, pas une garantie de zéro ver"
		}],
		savings: "Produits et fruits abîmés. Le temps se compte en saisons, pas en jours.",
		steps: [
			"Haie champêtre",
			"Nichoirs en février",
			"Bande non tondue",
			"Filets plutôt que insecticides « au cas où »"
		],
		risks: [
			"Hôtel décoratif inutile",
			"Glu",
			"Tondre toutes les fleurs en mai"
		]
	},
	{
		id: "aromatiques-cuisine",
		name: "Spirale d’aromatiques",
		tagline: "Le condiment qui ne s’achète plus.",
		nodes: [
			{
				id: "spirale",
				label: "Spirale",
				kind: "plant"
			},
			{
				id: "herbes",
				label: "Herbes",
				kind: "plant"
			},
			{
				id: "sechage",
				label: "Séchage",
				kind: "process"
			},
			{
				id: "compost",
				label: "Épluchures",
				kind: "waste"
			}
		],
		animalIds: [],
		minSurfaceM2: 4,
		recommendedSurfaceM2: 12,
		setupEur: [20, 80],
		hoursPerWeek: 1,
		noise: 1,
		settings: [
			"urbain",
			"periurbain",
			"rural"
		],
		climates: "all",
		beginner: true,
		legalNote: "Aucun pour le foyer. Copropriété : accord si la spirale est sur une partie commune.",
		loops: ["Herbes → cuisine → épluchures → compost → spirale"],
		yields: [{
			label: "Bouquets",
			detail: "Thym, romarin, ciboulette presque toute l’année ; coriandre en séries"
		}],
		savings: "Barquettes. La menthe contenue évite d’en offrir à tout le quartier malgré lui.",
		steps: [
			"Haut sec, bas frais",
			"Menthe en pot enterré",
			"Couper avant la floraison pour sécher",
			"Laisser quelques fleurs aux insectes"
		],
		risks: [
			"Menthe libre",
			"Thym noyé",
			"Tout couper d’un coup"
		]
	}
];
//#endregion
export { CHAINS as t };
