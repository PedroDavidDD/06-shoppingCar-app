const warriorRanks = [
    { rankName: "Recluta", description: "Guerrero en entrenamiento, sin experiencia real.", element: "ninguno", rarity: "común", powerLevel: 1 },
    { rankName: "Soldado", description: "Lucha en batallas, sigue órdenes de superiores.", element: "ninguno", rarity: "común", powerLevel: 2 },
    { rankName: "Veterano", description: "Soldado con experiencia, sobrevive muchas batallas.", element: "ninguno", rarity: "poco común", powerLevel: 5 },
    { rankName: "Sargento", description: "Líder de un pequeño grupo de soldados.", element: "ninguno", rarity: "poco común", powerLevel: 7 },
    { rankName: "Capitán", description: "Comanda tropas en el campo de batalla.", element: "ninguno", rarity: "raro", powerLevel: 12 },
    { rankName: "Caballero", description: "Guerrero con entrenamiento formal, rango nobiliario.", element: "acero", rarity: "raro", powerLevel: 18 },
    { rankName: "Paladín", description: "Caballero con habilidades sagradas o mágicas.", element: "luz", rarity: "épico", powerLevel: 25 },
    { rankName: "Señor de la Guerra", description: "Comandante supremo de ejércitos.", element: "fuego", rarity: "legendario", powerLevel: 40 },
    { rankName: "Heraldo de la Batalla", description: "Guerrero legendario, símbolo de guerra.", element: "trueno", rarity: "legendario", powerLevel: 50 },
    { rankName: "Campeón del Rey", description: "Mejor luchador del reino, casi invencible.", element: "acero", rarity: "legendario", powerLevel: 60 },
    { rankName: "Maestro Espadachín", description: "Domina el arte de la espada, puede derrotar ejércitos solo.", element: "viento", rarity: "mítico", powerLevel: 75 },
    { rankName: "Gran Guerrero", description: "Reconocido por su poder, puede destruir castillos con su fuerza.", element: "tierra", rarity: "mítico", powerLevel: 90 },
    { rankName: "Héroe Legendario", description: "Supera los límites humanos, equivalente a un ejército.", element: "divino", rarity: "mítico", powerLevel: 100 },
    { rankName: "Avatar de la Guerra", description: "Semidiós de la batalla, poder casi divino.", element: "caos", rarity: "divino", powerLevel: 150 },
    { rankName: "Guardián del Reino Celestial", description: "Protector de dioses o mundos divinos.", element: "celestial", rarity: "divino", powerLevel: 200 }
];

const mageRanks = [
    { rankName: "Aprendiz de Mago", description: "Estudia los principios básicos de la magia.", element: "arcano", rarity: "común", powerLevel: 1 },
    { rankName: "Mago", description: "Puede lanzar hechizos simples.", element: "arcano", rarity: "común", powerLevel: 5 },
    { rankName: "Hechicero", description: "Domina varias ramas de la magia, más poderoso.", element: "elemental", rarity: "poco común", powerLevel: 15 },
    { rankName: "Brujo", description: "Magia más avanzada, incluye pactos con entidades.", element: "oscuridad", rarity: "raro", powerLevel: 30 },
    { rankName: "Nigromante", description: "Controla la magia de la muerte y los no-muertos.", element: "muerte", rarity: "épico", powerLevel: 45 },
    { rankName: "Mago Arcano", description: "Maestro de la energía mágica pura.", element: "arcano", rarity: "épico", powerLevel: 60 },
    { rankName: "Archimago", description: "Uno de los magos más poderosos del mundo.", element: "arcano", rarity: "legendario", powerLevel: 80 },
    { rankName: "Sabio Arcano", description: "Conocimiento profundo de la magia, estudia su origen.", element: "conocimiento", rarity: "legendario", powerLevel: 100 },
    { rankName: "Maestro de la Realidad", description: "Puede alterar el mundo con magia.", element: "espacio-tiempo", rarity: "mítico", powerLevel: 150 },
    { rankName: "Gran Hechicero Supremo", description: "Nivel más alto de un mortal en la magia.", element: "divino", rarity: "mítico", powerLevel: 180 },
    { rankName: "Avatar Mágico", description: "Magia ilimitada, ya no es humano.", element: "divino", rarity: "divino", powerLevel: 250 },
    { rankName: "Dios Mágico", description: "Deidad de la magia, controla toda la energía del mundo.", element: "divino", rarity: "divino", powerLevel: 500 }
];

const nobleRanks = [
    { rankName: "Escudero", description: "Asistente de un caballero.", element: "ninguno", rarity: "común", powerLevel: 1 },
    { rankName: "Caballero", description: "Guerrero noble con tierras o título.", element: "acero", rarity: "raro", powerLevel: 10 },
    { rankName: "Hidalgo", description: "Noble sin tierras, pero de linaje aristocrático.", element: "ninguno", rarity: "poco común", powerLevel: 5 },
    { rankName: "Señor Feudal", description: "Gobierna tierras pequeñas.", element: "tierra", rarity: "raro", powerLevel: 20 },
    { rankName: "Barón", description: "Controla varias aldeas o castillos.", element: "tierra", rarity: "raro", powerLevel: 25 },
    { rankName: "Vizconde", description: "Subordinado de un conde, gobierna regiones.", element: "tierra", rarity: "raro", powerLevel: 30 },
    { rankName: "Conde", description: "Gobierna un condado con poder militar.", element: "tierra", rarity: "épico", powerLevel: 40 },
    { rankName: "Marqués", description: "Administra territorios estratégicos en las fronteras.", element: "tierra", rarity: "épico", powerLevel: 50 },
    { rankName: "Duque", description: "Uno de los nobles más poderosos del reino.", element: "tierra", rarity: "legendario", powerLevel: 80 },
    { rankName: "Príncipe/Princesa", description: "Heredero del trono.", element: "divino", rarity: "mítico", powerLevel: 120 },
    { rankName: "Rey/Reina", description: "Gobernante de un reino.", element: "divino", rarity: "mítico", powerLevel: 150 },
    { rankName: "Emperador/Emperatriz", description: "Regente de un vasto imperio.", element: "celestial", rarity: "divino", powerLevel: 300 }
];

const specialRanks = [
    { rankName: "Héroe Elegido", description: "Bendecido por los dioses para salvar el mundo.", element: "luz", rarity: "legendario", powerLevel: 120 },
    { rankName: "Rey Demonio", description: "Gobernante supremo de los demonios.", element: "oscuridad", rarity: "divino", powerLevel: 300 },
    { rankName: "Titán de la Guerra", description: "Ser inmortal que encarna la guerra.", element: "caos", rarity: "divino", powerLevel: 400 },
    { rankName: "Soberano Celestial", description: "Ser divino que gobierna sobre los dioses.", element: "celestial", rarity: "divino", powerLevel: 600 },
    { rankName: "Dios Supremo", description: "Máxima entidad en la existencia.", element: "omnipotencia", rarity: "divino", powerLevel: 1000 }
];

const rarities = [
    {   
        name: "común",
        probability: 10,        
        price: 100,
        description: "Fácil de encontrar, poca importancia o poder." },
    {   
        name: "poco común",
        probability: 15,        
        price: 200,
        description: "Un poco más raro, generalmente más fuerte o influyente." },
    {   
        name: "raro",
        probability: 20,        
        price: 500,
        description: "Distinguido y con habilidades superiores a los demás." },
    {   
        name: "épico",
        probability: 25,        
        price: 700,
        description: "Poderoso y con gran renombre en la historia." },
    {   
        name: "legendario",
        probability: 30,        
        price: 2000,
        description: "Héroe, líder o entidad de importancia histórica única." },
    {   
        name: "mítico",
        probability: 35,        
        price: 3000,
        description: "Casi inalcanzable, con poderes más allá de la lógica humana." },
    {   
        name: "divino",
        probability: 40,        
        price: 5000,
        description: "Relacionado con dioses o seres supremos, poder absoluto." }
];

export function getRandomRarity() {
    let random = Math.floor(Math.random() * 100);

    for (let rarity of rarities) {
        if (random < rarity.probability) {
            return rarity.name;
        }
        random -= rarity.probability;
    }
}

export function getPriceRarity( randomRarity ) {
    for (let rarity of rarities) {
        if (randomRarity === rarity.name) {
            return rarity.price;
        }
    } 
}

export const allRanks = [...warriorRanks, ...mageRanks, ...nobleRanks, ...specialRanks];
