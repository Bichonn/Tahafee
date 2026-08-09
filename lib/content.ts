import { GameDesign, Palier } from "./types";

export const design: GameDesign = {
  title: "Tahafée : Le Sentier des Lucioles",
  tagline: "Suis la lumière, retrouve les tiens.",
  introText:
    "Cette nuit-là, un ours féroce a surgi des ténèbres et tout emporté sur son passage : les maisons de mousse, les ponts de lianes, le doux chant du village de Tahafée. Dans la panique, la petite fée s'est envolée sans se retourner, ses ailes tremblant plus fort que la lumière de sa lanterne. Maintenant seule au cœur de la forêt magique, elle ne connaît qu'un seul chemin : celui qui la ramènera vers les siens. Mais la nuit est immense, les ombres bougent entre les arbres, et quelque part derrière elle, un grondement sourd n'a pas renoncé à la traquer. Aide Tahafée à traverser chaque clairière, chaque rivière et chaque secret de la forêt, jusqu'à ce qu'elle retrouve enfin son village.",
  victoryText:
    "Entre les branches, une lumière chaude perce enfin la nuit : ce sont les lanternes de son village, allumées comme pour l'accueillir. Tahafée se pose, les ailes tremblantes, et déjà les siens accourent, fous de joie et de soulagement de la revoir saine et sauve. Des bras familiers se referment autour d'elle, doux et rassurants, et pour la première fois depuis l'attaque, son petit cœur cesse enfin de courir. La forêt magique redevient un refuge : Tahafée est rentrée chez elle, entourée de tous ceux qu'elle aime.",
  gameOverText:
    "Un grondement immense fait trembler les feuilles, et cette fois, Tahafée ne peut plus s'échapper : l'ours l'a rattrapée. Sa dernière étincelle de courage vacille comme une luciole soufflée par le vent, et la nuit l'engloutit un instant. Mais une petite fée ne s'éteint jamais vraiment : quelque part, une lumière frémit encore, prête à se relever. Reprends ton souffle, Tahafée... la forêt t'attend pour un nouvel essai.",
};

export const paliers: Palier[] = [
  {
    index: 0,
    category: "observation",
    sceneTitle: "Lisière Calcinée",
    sceneDescription:
      "Les cendres de son village fument encore au loin et une odeur âcre s'accroche à ses ailes tremblantes. Tahafée scrute l'orée sombre de la forêt, cherchant le moindre signe d'un chemin sûr avant que le rugissement ne se rapproche.",
    question:
      "Le rugissement se rapproche et Tahafée n'a qu'un instant pour choisir son chemin. Elle balaie des yeux la lisière calcinée et dénombre les troncs qui la bordent : un chêne effondré, deux sapins noircis, un chêne encore debout, trois sapins noircis, puis un dernier chêne effondré. Combien de sapins noircis a-t-elle comptés en tout ?",
    answers: ["6 sapins noircis", "4 sapins noircis", "5 sapins noircis"],
    correctIndex: 2,
    successFlavor:
      "Le compte est juste : Tahafée repère l'unique passage entre les sapins et s'y faufile sans un bruit, s'enfonçant plus sereinement dans l'ombre protectrice de la forêt.",
    bearFlavor:
      "Le calcul trompe Tahafée : elle s'engage entre les mauvais troncs quand l'ours surgit soudain d'un fourré fumant. Elle s'échappe de justesse en voletant à ras du sol, mais la frayeur lui coûte un cœur.",
  },
  {
    index: 1,
    category: "enigme",
    sceneTitle: "Passage des Ronces",
    sceneDescription:
      "D'épaisses ronces entrelacées barrent le sentier comme un mur vivant, et seule une astuce ancienne pourrait les faire s'écarter. Quelque part dans les broussailles, une branche craque : l'ours n'est pas loin.",
    question:
      "Gravée dans l'écorce d'un vieux chêne, une suite ancienne semble tenir les ronces en respect : chaque nombre y est la somme des deux précédents. 1, 1, 2, 3, 5, 8, ... Quel nombre faut-il murmurer pour que les ronces s'écartent ?",
    answers: ["11", "13", "12"],
    correctIndex: 1,
    successFlavor:
      "Tahafée reconnaît la suite ancienne et murmure le nombre juste : les ronces s'écartent en silence, lui ouvrant un passage sûr. Elle s'enfonce plus loin dans la forêt, sereine.",
    bearFlavor:
      "Tahafée se trompe de nombre : les ronces se resserrent en un enchevêtrement bruyant, et l'ours surgit soudain des fourrés. Elle plonge de justesse sous une branche basse pour lui échapper, mais cela lui coûte un cœur.",
  },
  {
    index: 2,
    category: "culture_generale",
    sceneTitle: "Clairière des Vieux Contes",
    sceneDescription:
      "Au centre d'une clairière endormie se dresse une pierre gravée des légendes que les fées se racontent depuis toujours. Tahafée reprend son souffle un instant, mais un grognement sourd lui rappelle qu'elle ne peut s'attarder.",
    question:
      "Gravée dans la pierre de la clairière, une inscription rend hommage à l'auteur des contes que toutes les fées se transmettent. Quel écrivain français a écrit « Cendrillon » et « Le Petit Chaperon rouge » ?",
    answers: ["Jean de La Fontaine", "Charles Perrault", "Victor Hugo"],
    correctIndex: 1,
    successFlavor:
      "Tahafée sourit en repensant à ces histoires bien connues et s'élance d'un pas léger à travers la clairière silencieuse.",
    bearFlavor:
      "Elle hésite un instant de trop : un grognement éclate derrière la pierre gravée, et Tahafée détale de justesse, le cœur battant et un cœur en moins.",
  },
  {
    index: 3,
    category: "calcul",
    sceneTitle: "Gué de la Rivière Pâle",
    sceneDescription:
      "La rivière argentée serpente entre des pierres plates, espacées juste assez pour mettre à l'épreuve son compte et son courage. De l'autre côté des roseaux, une ombre massive trouble l'eau calme.",
    question:
      "Le gué compte 8 pierres plates avant le tournant du courant, puis encore 7 jusqu'à la rive opposée. Combien de pierres Tahafée doit-elle fouler en tout pour traverser la Rivière Pâle ?",
    answers: ["16", "15", "14"],
    correctIndex: 1,
    successFlavor:
      "Tahafée compte ses appuis à voix basse et pose le pied juste où il faut : la quinzième pierre l'accueille pile sur la rive, sèche et sereine, tandis que l'ombre dans les roseaux s'éloigne sans bruit.",
    bearFlavor:
      "Un pas de trop la mène vers une pierre qu'elle n'avait pas comptée, et l'ombre massive se redresse soudain hors des roseaux : c'est l'ours ! Elle bondit de justesse vers la berge, le cœur battant, mais un cœur en moins.",
  },
  {
    index: 4,
    category: "observation",
    sceneTitle: "Bosquet des Champignons Lumineux",
    sceneDescription:
      "Des champignons phosphorescents éclairent le sous-bois d'une lueur bleutée, dessinant un chemin fragile entre les racines noueuses. Tahafée retient son souffle en devinant, entre deux troncs, la silhouette de l'ours qui renifle sa piste.",
    question:
      "Sous la voûte de racines noueuses, cinq lueurs jalonnent le sentier fragile : un champignon rond et bleu pâle près de la première racine, un champignon rond et bleu pâle près de la deuxième, un champignon ovale et bleu pâle près de la troisième, un champignon rond et bleu pâle près de la quatrième, et une lueur blanche, parfaitement immobile, tapie près de la cinquième racine. Laquelle de ces lueurs n'est pas un champignon ?",
    answers: [
      "La lueur blanche et immobile de la cinquième racine",
      "La lueur ovale et bleu pâle de la troisième racine",
      "La lueur ronde et bleu pâle de la quatrième racine",
    ],
    correctIndex: 0,
    successFlavor:
      "Tahafée reconnaît la fausse lueur et suit les vrais champignons phosphorescents, qui la guident sans encombre à travers le bosquet vers un air plus dégagé.",
    bearFlavor:
      "Elle se laisse guider par la mauvaise lueur, blanche et immobile, qui n'était autre que l'œil de l'ours tapi dans l'ombre. Il surgit en grondant, et Tahafée ne s'échappe que de justesse, perdant un cœur dans sa fuite.",
  },
  {
    index: 5,
    category: "enigme",
    sceneTitle: "Toile de l'Araignée Ancienne",
    sceneDescription:
      "Une toile immense, tissée de fils argentés, ferme le passage entre deux chênes centenaires, et seul un esprit vif saura la franchir sans s'y prendre. Le sol tremble sous des pas lourds et pressés, tout proches désormais.",
    question:
      "L'araignée ancienne tisse sa toile entre les deux chênes, et chaque nuit la surface qu'elle recouvre double exactement. Il lui faut 30 jours pour couvrir toute la toile. Combien de jours lui a-t-il fallu pour n'en couvrir que la moitié ?",
    answers: ["29 jours", "15 jours", "28 jours"],
    correctIndex: 0,
    successFlavor:
      "Tahafée comprend que doubler chaque jour veut dire que la veille suffisait déjà à la moitié : elle repère le fil resté plus fin et s'y faufile sans un bruit, s'enfonçant plus loin, apaisée.",
    bearFlavor:
      "Tahafée se trompe de jour et tire sur un fil déjà doublé : la toile entière vibre et un grondement retentit entre les chênes. L'ours fond sur elle, elle s'échappe d'un bond de justesse, mais un cœur en moins.",
  },
  {
    index: 6,
    category: "calcul",
    sceneTitle: "Éboulis des Géants",
    sceneDescription:
      "Un éboulis de roches géantes barre la sente escarpée, et chaque saut doit être compté avec soin pour ne pas dévaler la pente. Plus bas, un grondement rocailleux répond à celui de l'ours qui remonte le chemin.",
    question:
      "Chaque saut par-dessus les blocs de l'Éboulis des Géants lui fait franchir 4 mètres. Il lui faut 6 sauts pour traverser toute la pente. Quelle distance Tahafée parcourt-elle en tout ?",
    answers: ["24 mètres", "20 mètres", "28 mètres"],
    correctIndex: 0,
    successFlavor:
      "Elle compte chaque bond sur le bout des doigts et atterrit exactement où il faut, légère et sûre, jusqu'au sommet de l'éboulis, laissant loin derrière elle le grondement rocailleux.",
    bearFlavor:
      "Un saut mal évalué la fait dévier vers une roche instable, et c'est là, entre deux blocs, que surgit l'ours grondant ! Elle s'agrippe et se rattrape à la dernière seconde, mais elle y perd un cœur.",
  },
  {
    index: 7,
    category: "culture_generale",
    sceneTitle: "Sanctuaire des Anciennes Fées",
    sceneDescription:
      "Sous des arbres immenses poussent des fleurs que seules les fées d'autrefois savaient nommer, vestiges d'un temps que Tahafée ne connaît que par les histoires de sa grand-mère. Le vent tourne soudain, chargé d'une odeur familière et inquiétante : celle de l'ours.",
    question:
      "Parmi les fleurs anciennes du sanctuaire, Tahafée remarque un étrange cercle que sa grand-mère appelait un « rond de fées ». Dans la réalité, qu'est-ce qui forme ce cercle que l'on trouve parfois dans l'herbe des prairies ?",
    answers: ["Des fourmis", "Des taupes", "Des champignons"],
    correctIndex: 2,
    successFlavor:
      "Certaine de sa réponse, Tahafée traverse le sanctuaire sans un bruit, glissant entre les fleurs anciennes comme portée par la brise.",
    bearFlavor:
      "Elle se trompe de sentier et l'odeur de l'ours devient soudain bien réelle : une masse sombre surgit entre les fleurs, et Tahafée s'enfuit en perdant un cœur au passage.",
  },
  {
    index: 8,
    category: "observation",
    sceneTitle: "Marécage des Lucioles",
    sceneDescription:
      "Des milliers de lucioles dansent au-dessus d'un marécage brumeux, brouillant les repères et cachant peut-être un passage praticable. Tahafée plisse les yeux pour distinguer la terre ferme de la vase, tandis qu'un souffle chaud agite les roseaux derrière elle.",
    question:
      "La brume et les lucioles brouillent tous les repères, mais trois rangées de pierres plates semblent relier le marécage à la rive. Sur la première, cinq pierres bien sèches luisent sous les lucioles. Sur la deuxième, quatre pierres sèches et une recouverte de mousse verte. Sur la troisième, cinq pierres qui paraissent sèches, mais des bulles ne cessent de remonter entre elles, comme si l'eau en dessous était bien plus profonde qu'il n'y paraît. Quelle rangée cache une incohérence qui la rend dangereuse à emprunter ?",
    answers: [
      "La première rangée, restée bien sèche",
      "La troisième rangée, agitée de bulles",
      "La deuxième rangée, tachée de mousse",
    ],
    correctIndex: 1,
    successFlavor:
      "Tahafée évite la rangée trompeuse et traverse par les pierres franchement sèches, atteignant la rive ferme d'un pas léger et confiant.",
    bearFlavor:
      "Elle s'engage sur la rangée instable : une pierre cède sous elle, et l'éclaboussure fait surgir l'ours des roseaux tout proches. Tahafée s'en échappe de justesse, trempée et un cœur en moins.",
  },
  {
    index: 9,
    category: "enigme",
    sceneTitle: "Grotte de l'Écho",
    sceneDescription:
      "Une grotte tapissée de cristaux renvoie chaque son en un écho troublant, et il faudra un peu de ruse pour ne pas s'y perdre. Au loin, l'écho répète aussi un grognement sourd, comme si l'ours la suivait pas à pas dans l'obscurité.",
    question:
      "Dans la grotte de l'Écho, Tahafée pousse un cri et l'entend lui revenir après 2 secondes. Le son parcourt environ 340 mètres chaque seconde. À quelle distance se trouve la paroi qui renvoie l'écho ?",
    answers: ["680 mètres", "170 mètres", "340 mètres"],
    correctIndex: 2,
    successFlavor:
      "Tahafée calcule juste la distance et suit du bout des doigts le mur qu'elle vient de localiser, sans dévier, retrouvant la sortie de la grotte sereinement.",
    bearFlavor:
      "Tahafée se trompe de distance et heurte une paroi bien plus proche qu'elle ne le croyait : l'écho renvoie alors un grondement bien réel, tout proche dans le noir. Elle rebrousse chemin de justesse, mais elle y laisse un cœur.",
  },
  {
    index: 10,
    category: "calcul",
    sceneTitle: "Pont de Lianes Suspendu",
    sceneDescription:
      "Un pont de lianes tressées se balance au-dessus d'un ravin profond, ses planches espacées demandant un calcul précis avant chaque pas. Le bois craque derrière elle : l'ours vient de trouver l'entrée du pont, lui aussi.",
    question:
      "Le pont de lianes compte 20 planches, espacées régulièrement. Pour ne pas réveiller les nœuds fragiles, Tahafée doit sauter une planche sur deux depuis le début. Combien de planches va-t-elle fouler au total ?",
    answers: ["8 planches", "12 planches", "10 planches"],
    correctIndex: 2,
    successFlavor:
      "Elle égrène son calcul à chaque enjambée et pose le pied sur la dixième et dernière planche juste avant la rive, le pont se stabilisant enfin sous ses pas légers.",
    bearFlavor:
      "Une planche comptée de travers la fait vaciller au-dessus du ravin, et c'est ce moment que choisit l'ours pour surgir à l'entrée du pont ! Elle se rattrape aux lianes et file de justesse, mais un cœur en moins après la frayeur.",
  },
  {
    index: 11,
    category: "culture_generale",
    sceneTitle: "Orée du Village Retrouvé",
    sceneDescription:
      "Entre les derniers troncs, Tahafée aperçoit enfin les lumières familières de son village, comme une promesse tenue au bout de cette longue nuit. Le cœur battant, elle sait que les siens ne sont plus qu'à quelques pas — mais l'ours gronde une dernière fois dans l'ombre.",
    question:
      "Les lumières du village scintillent enfin à l'horizon. Avant de s'élancer, Tahafée se souvient d'une leçon apprise toute petite : quel est le plus long fleuve de France ?",
    answers: ["La Loire", "La Seine", "Le Rhône"],
    correctIndex: 0,
    successFlavor:
      "Le cœur léger, Tahafée avance vers les lumières du village, presque arrivée au bout de sa longue nuit.",
    bearFlavor:
      "Un dernier grognement retentit dans l'ombre et l'ours bondit presque sur elle ; Tahafée s'échappe de justesse, à bout de souffle, mais y laisse un cœur.",
  },
];
