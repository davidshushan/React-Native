import Product from '../../models/Product.js';
import Coupon from '../../models/Coupon.js';


export const Items = [

    //FPS
    new Product(
        1, //id:
        'FPS', //category:
        'battlefield', //productName:
        179, // productPrice: 179,
        //description:
        "Battlefields changing before your eyes. A cutting-edge arsenal at your disposal. The grand return of all-out warfare. Adapt and overcome in massive-scale 128 player battles* where dynamic storms, environmental hazards, total combat freedom, and Battlefield's signature destruction spark a new breed of Only in Battlefield moments.",
        true, //isOff: 
        10, //offPersentage: 
        "2021", //year
        require('../database/images/products/videoGames/FPS/battlefield/battlefield-2042.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/FPS/battlefield/battlefield-2042.jpg'),
            require('../database/images/products/videoGames/FPS/battlefield/battlefield-2042-1.jpg'),
            require('../database/images/products/videoGames/FPS/battlefield/battlefield-2042-2.jpg'),
            require('../database/images/products/videoGames/FPS/battlefield/battlefield-2042-3.jpg'),
            
        ], 1
    ),

    new Product(
        2, //id:
        'FPS', //category:
        'Call-Of-Duty-4', //productName:
        150, // productPrice: 179,
        //description:
        "The new action-thriller from the award-winning team at Infinity Ward, the creators of the Call of Duty® series, delivers the most intense and cinematic action experience ever. Call of Duty 4: Modern Warfare arms gamers with an arsenal of advanced and powerful modern day firepower and transports them to the most treacherous hotspots around the globe to take on a rogue enemy group threatening the world.",
        true, //isOff:
        10, //offPersentage: 
        "2007", //year
        require('../database/images/products/videoGames/FPS/COD4/Call-of-Duty-4.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/FPS/COD4/Call-of-Duty-4.jpg'),
            require('../database/images/products/videoGames/FPS/COD4/Call-of-Duty-4-1.jpg'),
            require('../database/images/products/videoGames/FPS/COD4/Call-of-Duty-4-2.jpg'),
            require('../database/images/products/videoGames/FPS/COD4/Call-of-Duty-4-2.jpg'),
        ], 2
    ),

    new Product(
        3, //id:
        'FPS', //category:
        'farCry', //productName:
        150, // productPrice: 179,
        //description:
        "You are a gun for hire, trapped in a war-torn African state, stricken with malaria and forced to make deals with corrupt warlords on both sides of the conflict in order to make this country your home. You must identify and exploit your enemies' weaknesses, neutralizing their superior numbers and firepower with surprise, subversion, cunning and of course brute force.",
        true, //isOff:
        18, //offPersentage: 
        "2008", //year
        require('../database/images/products/videoGames/FPS/farCry/farCry.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/FPS/farCry/farCry.jpg'),
            require('../database/images/products/videoGames/FPS/farCry/farCry-1.jpg'),
            require('../database/images/products/videoGames/FPS/farCry/farCry-2.jpg'),
            require('../database/images/products/videoGames/FPS/farCry/farCry-3.jpg'),
        ], 3
    ),

    new Product(
        4, //id:
        'FPS', //category:
        'halo', //productName:
        200, // productPrice:
        //description:
        "When all hope is lost and humanity’s fate hangs in the balance, the Master Chief is ready to confront the most ruthless foe he’s ever faced. Step inside the armor of humanity’s greatest hero to experience an epic adventure and explore the massive scale of the Halo ring. To experience the campaign, purchase Halo Infinite (Campaign).",
        true, //isOff:
        10, //offPersentage: 
        "2021", //year
        require('../database/images/products/videoGames/FPS/halo/Halo_Infinite.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/FPS/halo/Halo_Infinite.jpg'),
            require('../database/images/products/videoGames/FPS/halo/Halo_Infinite-1.jpg'),
            require('../database/images/products/videoGames/FPS/halo/Halo_Infinite-2.jpg'),
            require('../database/images/products/videoGames/FPS/halo/Halo_Infinite-3.jpg'),
        ], 4
    ),

//     //moba

    new Product(
        5, //id:
        'MOBA', //category:
        'marvel-super-war', //productName:
        100, // productPrice:
        //description:
        "Marvel Super War is similar to other MOBA games in which players can choose between several game modes. It is usually 5v5 players, and the characters consist of 6 classes: Fighter, Energy, Marksman, Assassin, Tank, and Support. Players can go solo or in a group, and each player can select 2 of 10 tactics available in the game to support the selected character. Players can also use Power Cores, imbued with 3 supporting cores in which each main core consists of 6 types of cores; based on the 6 Infinity Stones. Each Power Core has different results for each player depending on class.",
        true, //isOff:
        10, //offPersentage: 
        "2019", //year
        //productImage: 
        require('../database/images/products/videoGames/MOBA/marvel-super-war/marvel-super-war.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/MOBA/marvel-super-war/marvel-super-war.jpg'),
            require('../database/images/products/videoGames/MOBA/marvel-super-war/marvel-super-war-1.jpg'),
            require('../database/images/products/videoGames/MOBA/marvel-super-war/marvel-super-war-2.jpg'),
            require('../database/images/products/videoGames/MOBA/marvel-super-war/marvel-super-war-3.jpg'),
        ], 5
    ),

    new Product(
        6, //id:
        'MOBA', //category:
        'Pokémon Unite', //productName:
        140, // productPrice:
        //description:
        "Pokémon Unite is a multiplayer online battle arena game, with standard matches consisting of two teams of five players. Each match is time-limited, and the team with the highest total score by the end of each match wins.[6] There is also quick battles, which has 4 people per team, and is 5 minutes long. A team can also win if the opposing team surrenders. Surrendering can only happen if the match reaches the halfway mark, and if a majority vote among the team members is reached. If there is a tie, the team that scored the tied score first wins.",
        false, //isOff:
        0, //offPersentage: 
        "2021", //year
        //productImage: 
        require('../database/images/products/videoGames/MOBA/pokemon-unite/pokemon-unite.jpg'),
        false, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/MOBA/pokemon-unite/pokemon-unite.jpg'),
            require('../database/images/products/videoGames/MOBA/pokemon-unite/pokemon-unite-1.jpg'),
            require('../database/images/products/videoGames/MOBA/pokemon-unite/pokemon-unite-2.jpg'),
            require('../database/images/products/videoGames/MOBA/pokemon-unite/pokemon-unite-3.jpg'),
        ], 6
    ),



    new Product(
        7, //id:
        'MOBA', //category:
        'League of Legends', //productName:
        120, // productPrice:
        //description:
        "League of Legends is a multiplayer online battle arena (MOBA) game in which the player controls a character ('champion') with a set of unique abilities from an isometric perspective.[2][3] As of November 2021, there are 157 champions available to play.[4] Over the course of a match, champions gain levels by accruing experience points (XP) through killing enemies.[5] Items can be acquired to increase champions' strength,[6] and are bought with gold, which players accrue passively over time and earn actively by defeating the opposing team's minions,[2] champions, or defensive structures.[5][6] In the main game mode, Summoner's Rift, items are purchased through a shop menu available to players only when their champion is in the team's base.[2] Each match is discrete; levels and items do not transfer from one match to another.[7]",
        true, //isOff:
        10, //offPersentage: 
        "2009", //year
        //productImage: 
        require('../database/images/products/videoGames/MOBA/league-of-legends/league-of-legends.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/MOBA/league-of-legends/league-of-legends.jpg'),
            require('../database/images/products/videoGames/MOBA/league-of-legends/league-of-legends-1.jpg'),
            require('../database/images/products/videoGames/MOBA/league-of-legends/league-of-legends-2.jpg'),
            require('../database/images/products/videoGames/MOBA/league-of-legends/league-of-legends-3.jpg'),
        ], 7
    ),



//     //RPG
    new Product(
        9, //id:
        'RPG', //category:
        'star-wars', //productName:
        122, // productPrice:
        //description:
        `Players join as members of either of the two main factions – the Galactic Republic and the Sith Empire. Although each faction is led by a benevolent or malevolent leader, it is emphasized that an individual member may possess a morality at any point along the light/dark spectrum. The project's key focus is to differentiate between the player's faction and morality.[18] For instance, a member with ties to the Sith Empire following the lightside while attempting to achieve their own ends, which may be misaligned or different from a sith's vision.

        Player advancement occurs by a combination of mission completion, exploration, and defeating enemies. New skills, unlocked by level, are taught by trainers and can be learned in game at a multitude of locations. Heroic missions exist that require the cooperation of multiple players to complete objectives, and can be repeated normally on a daily basis.
        
        While each class in The Old Republic favors a certain play style (ranged/melee damage, healing or support skills, or tanking), customization combined with companion characters allow for a class to be able to tackle many different situations, with or without the support of other player characters, and without requiring specific other classes in order to move forward.`,
        true, //isOff:
        20, //offPersentage: 
        "2011", //year
        //productImage: 
        require('../database/images/products/videoGames/RPG/star-wars/star-wars.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RPG/star-wars/star-wars.jpg'),
            require('../database/images/products/videoGames/RPG/star-wars/star-wars-1.jpg'),
            require('../database/images/products/videoGames/RPG/star-wars/star-wars-2.jpg'),
            require('../database/images/products/videoGames/RPG/star-wars/star-wars-3.jpg'),
        ], 9
    ),

    new Product(
        10, //id:
        'RPG', //category:
        'The Witcher 3', //productName:
        185, // productPrice:
        //description:
        `The Witcher 3: Wild Hunt is an action role-playing game with a third-person perspective. Players control Geralt of Rivia, a monster slayer known as a Witcher.[1] Geralt walks, runs, rolls and dodges, and (for the first time in the series) jumps, climbs and swims.[2][3] He has a variety of weapons, including bombs, a crossbow and two swords (one steel and one silver).[4] The steel sword is used primarily to kill humans while the silver sword is more effective against creatures and monsters.[5] Players can draw out, switch and sheathe their swords at will. There are two modes of melee attack; light attacks are fast but weak, and heavy attacks are slow but strong.[6] Players can block and counter enemy attacks with their swords.[4] Swords have limited endurance and require regular repair.[7] In addition to physical attacks, Geralt has five magical signs at his disposal: Aard, Axii, Igni, Yrden and Quen.[8] Aard prompts Geralt to unleash a telekinetic blast, Axii confuses enemies, Igni burns them, Yrden slows them down and Quen offers players a temporary, protective shield.[9] The signs use stamina, and cannot be used indefinitely.[10] Players can use mutagens to increase Geralt's magic power. Geralt loses health when attacked by enemies, although wearing armour can help reduce health loss. Health is restored with meditation or consumables, such as food and potions.[4] Players occasionally control Ciri, Geralt's adoptive daughter who can teleport short distances.`,
        true, //isOff:
        15, //offPersentage: 
        "2015", //year
        //productImage: 
        require('../database/images/products/videoGames/RPG/the-witcher/the-witcher.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RPG/the-witcher/the-witcher.jpg'),
            require('../database/images/products/videoGames/RPG/the-witcher/the-witcher-1.jpg'),
            require('../database/images/products/videoGames/RPG/the-witcher/the-witcher-2.jpg'),
            require('../database/images/products/videoGames/RPG/the-witcher/the-witcher-3.jpg'),
        ], 10
    ),

    new Product(
        11, //id:
        'RPG', //category:
        'God of War', //productName:
        150, // productPrice:
        //description:
        `God of War is a third-person action-adventure video game. It features an over-the-shoulder free camera, a departure from the previous installments, which featured a fixed cinematic camera (with the exception of 2007's two-dimensional side-scroller Betrayal).[6] Cinematographically, the game is presented in a continuous shot, with no camera cuts or loading screens.[7] Although the previous main installment, Ascension (2013), introduced multiplayer to the series, this installment is single-player-only.[4] Regarding the level structure, director Cory Barlog said "it's open, but it is not an open world."[8] Due to its openness, a fast travel feature is unlocked later in the game.[9] Swimming, an ability in previous games, was cut;[10] players instead use a boat to traverse bodies of water.[9] Unlike previous games, which allowed players to jump freely at anytime, jumping can now only be done at designated areas, such as at a rock face or ledge. Throughout the game, players battle Norse mythological foes, like dark elves, wulvers, and draugrs,[11] as well as Gullveig and the revenants, beings warped by seiðr magic, among many others.[12] Valkyries appear as optional boss battles. Among the many side quests, players can free the imprisoned dragons Fáfnir, Otr, and Reginn—dwarves who were turned into dragons—in addition to battling one called Hræzlyr, a story-based boss battle.`,
        false, //isOff:
        0, //offPersentage: 
        "2018", //year
        //productImage: 
        require('../database/images/products/videoGames/RPG/god-of-war/god-of-war.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RPG/god-of-war/god-of-war.jpg'),
            require('../database/images/products/videoGames/RPG/god-of-war/god-of-war-1.jpg'),
            require('../database/images/products/videoGames/RPG/god-of-war/god-of-war-2.jpg'),
            require('../database/images/products/videoGames/RPG/god-of-war/god-of-war-3.jpg'),
        ], 11
    ),



//     //RTS

    new Product(
        13, //id:
        'RTS', //category:
        'Age of Empires IV', //productName:
        130, // productPrice:
        //description:
        `There are 8 civilizations available at the release date;[2] the English, the Chinese, the Mongols, the Delhi Sultanate, the French, the Abbasid Dynasty, the Holy Roman Empire, and the Rus.`,
        true, //isOff:
        15, //offPersentage: 
        "2021", //year
        //productImage: 
        require('../database/images/products/videoGames/RTS/age-of-empires-iv/age-of-empires-iv.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RTS/age-of-empires-iv/age-of-empires-iv.jpg'),
            require('../database/images/products/videoGames/RTS/age-of-empires-iv/age-of-empires-iv-1.jpg'),
            require('../database/images/products/videoGames/RTS/age-of-empires-iv/age-of-empires-iv-2.jpg'),
            require('../database/images/products/videoGames/RTS/age-of-empires-iv/age-of-empires-iv-3.jpg'),
        ], 13
    ),

    new Product(
        14, //id:
        'RTS', //category:
        'StarCraft II', //productName:
        195, // productPrice:
        //description:
        `StarCraft II: Wings of Liberty features the return of the three species from the original game: Protoss, Terran, and Zerg.[4] In the Terran campaign, the original StarCraft briefing room is replaced with an interactive version of the battlecruiser Hyperion, with Jim Raynor, a bitter and hard-drinking mercenary captain, as the central character. In a departure from previous Blizzard games, the campaign is non-linear, with Raynor taking jobs for money and using that money to buy additional units and upgrades. Although each play through will vary, the result remains consistent, keeping the storyline linear. Blizzard's Vice President Rob Pardo stressed that each campaign will function very differently.[9] The Terran campaign, Wings of Liberty, places players in a mercenary-style campaign, as Terran rebel group Raynor's Raiders raise funds by taking assignments from outside groups. The second release, Heart of the Swarm, is Zerg-focused and has role-playing elements. Sarah Kerrigan is the focus of the campaign, and the story revolves around the possibility of her redemption. The Protoss-themed Legacy of the Void is the third expansion, with the Protoss Artanis attempting to reunite the Protoss tribes in order to stop Amon, a fallen Xel'Naga.`,
        false, //isOff:
        0, //offPersentage: 
        "2010", //year
        //productImage: 
        require('../database/images/products/videoGames/RTS/star-craft-II/star-craft-II.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RTS/star-craft-II/star-craft-II.jpg'),
            require('../database/images/products/videoGames/RTS/star-craft-II/star-craft-II-1.jpg'),
            require('../database/images/products/videoGames/RTS/star-craft-II/star-craft-II-2.jpg'),
            require('../database/images/products/videoGames/RTS/star-craft-II/star-craft-II-3.jpg'),
        ], 14
    ),

    new Product(
        15, //id:
        'RTS', //category:
        'Total War: Rome II', //productName:
        175, // productPrice:
        //description:
        `Total War: Rome II is set in Europe, the Mediterranean, and the Near East in the Classical antiquity period. The grand single-player campaign begins in 272 BC and lasts for 300 years. However, the player also has the option to play further, as there are no timed victory conditions.

        Like its predecessor, Rome II blends turn-based grand strategy and civilization management with real-time tactical battles. The Warscape engine powers the game's visuals and new unit cameras allow players to focus on individual soldiers on the real-time battlefield, which may contain thousands of combatants at the same time. Creative Assembly has stated that it wished to bring out the more human side of war, with soldiers reacting as their comrades get killed around them, and officers inspiring men with heroic speeches.[8]
        
        Rome II features more sophisticated portrayals of each culture and civilization of the period, which in its predecessor had been portrayed anachronistically. The Creative Assembly tried to ensure the uniqueness of different cultures and fighting forces. Lead unit designer Jack Lusted stated that instead of the "rebel nation" used to represent minor states in the original Rome: Total War, Rome II features a large number of smaller, individual nations and city-states represented by their own factions. Each ethnic group has a unique play-style. A tribe of Gallic barbarians looks and feels different from a disciplined Roman legion. Different agents and technologies are implemented for different factions.[9] There are over 500 different land units in the game, including mercenaries. Over 30 different city variants avoid siege battles feeling and playing out the same every time.`,
        true, //isOff:
        35, //offPersentage: 
        "2013", //year
        //productImage: 
        require('../database/images/products/videoGames/RTS/rome-II-total-war/rome-II-total-war.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/RTS/rome-II-total-war/rome-II-total-war.jpg'),
            require('../database/images/products/videoGames/RTS/rome-II-total-war/rome-II-total-war-1.jpg'),
            require('../database/images/products/videoGames/RTS/rome-II-total-war/rome-II-total-war-2.jpg'),
            require('../database/images/products/videoGames/RTS/rome-II-total-war/rome-II-total-war-3.jpg'),
        ], 15
    ),


//     //sport

    new Product(
        17, //id:
        'sport', //category:
        'NBA 2K22', //productName:
        285, // productPrice:
        //description:
        `NBA 2K22 is a 2021 basketball simulation video game developed by Visual Concepts and published by 2K Sports, based on the National Basketball Association (NBA). It is the 23rd installment in the NBA 2K franchise and the successor to NBA 2K21. The game was released on September 10, 2021 for Microsoft Windows, Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One, and Xbox Series X/S.`,
        true, //isOff:
        37, //offPersentage: 
        "2021", //year
        //productImage: 
        require('../database/images/products/videoGames/sport/NBA-2K22/NBA-2K22.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/sport/NBA-2K22/NBA-2K22.jpg'),
            require('../database/images/products/videoGames/sport/NBA-2K22/NBA-2K22-1.jpg'),
            require('../database/images/products/videoGames/sport/NBA-2K22/NBA-2K22-2.jpg'),
            require('../database/images/products/videoGames/sport/NBA-2K22/NBA-2K22-3.jpg'),
        ], 17
    ),

    new Product(
        18, //id:
        'sport', //category:
        'FIFA 21', //productName:
        120, // productPrice:
        //description:
        `FIFA 21 is an association football simulation video game published by Electronic Arts as part of the FIFA series.[1] It is the 28th installment in the FIFA series, and was released on 9 October 2020 for Microsoft Windows, Nintendo Switch, PlayStation 4 and Xbox One. Enhanced versions for the PlayStation 5 and Xbox Series X and Series S were released on 3 December 2020, in addition to a version for Stadia in March 2021.`,
        false, //isOff:
        0, //offPersentage: 
        "2020", //year
        //productImage: 
        require('../database/images/products/videoGames/sport/FIFA-21/FIFA-21.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/sport/FIFA-21/FIFA-21.jpg'),
            require('../database/images/products/videoGames/sport/FIFA-21/FIFA-21-1.jpg'),
            require('../database/images/products/videoGames/sport/FIFA-21/FIFA-21-2.jpg'),
            require('../database/images/products/videoGames/sport/FIFA-21/FIFA-21-3.jpg'),
        ], 18
    ),

    new Product(
        19, //id:
        'sport', //category:
        'Forza Horizon 5', //productName:
        160, // productPrice:
        //description:
        `Forza Horizon 5 is a 2021 racing video game developed by Playground Games and published by Xbox Game Studios. It is the twelfth main instalment in the Forza series and the game is set in a fictionalised representation of Mexico. It was released on 9 November 2021 for Microsoft Windows, Xbox One, and Xbox Series X/S.

        The game received critical acclaim and became a commercial success upon release; it launched to over ten million players in the first week, the biggest-ever launch for an Xbox Game Studios game. The game was nominated for three jury-voted awards at The Game Awards 2021, winning all three of its nominations and tying with Hazelight's It Takes Two for most wins, and was also nominated for the public-voted Players' Voice award, which went to fellow Xbox Game Studios title Halo Infinite.`,
        true, //isOff:
        15, //offPersentage: 
        "2021", //year
        //productImage: 
        require('../database/images/products/videoGames/sport/Forza-Horizon-5/Forza-Horizon-5.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/sport/Forza-Horizon-5/Forza-Horizon-5.jpg'),
            require('../database/images/products/videoGames/sport/Forza-Horizon-5/Forza-Horizon-5-1.jpg'),
            require('../database/images/products/videoGames/sport/Forza-Horizon-5/Forza-Horizon-5-2.jpg'),
            require('../database/images/products/videoGames/sport/Forza-Horizon-5/Forza-Horizon-5-3.jpg'),
        ], 19
    ),


//     //Sandbox

    new Product(
        21, //id:
        'Sandbox', //category:
        'Minecraft', //productName:
        80, // productPrice:
        //description:
        `Minecraft is a Sandbox video game developed by Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Notch stepping down and Jens "Jeb" Bergensten taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with over 238 million copies sold and nearly 140 million monthly active users as of 2021.`,
        true, //isOff:
        50, //offPersentage: 
        "2011", //year
        //productImage: 
        require('../database/images/products/videoGames/Sandbox/Minecraft/Minecraft.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/Sandbox/Minecraft/Minecraft.jpg'),
            require('../database/images/products/videoGames/Sandbox/Minecraft/Minecraft-1.jpg'),
            require('../database/images/products/videoGames/Sandbox/Minecraft/Minecraft-2.jpg'),
            require('../database/images/products/videoGames/Sandbox/Minecraft/Minecraft-3.jpg'),
        ], 21
    ),

    new Product(
        22, //id:
        'Sandbox', //category:
        'Grand Theft Auto V', //productName:
        85, // productPrice:
        //description:
        `Grand Theft Auto V is a 2013 action-adventure game developed by Rockstar North and published by Rockstar Games. It is the seventh main entry in the Grand Theft Auto series, following 2008's Grand Theft Auto IV, and the fifteenth instalment overall. Set within the fictional state of San Andreas, based on Southern California, the single-player story follows three protagonists—retired bank robber Michael De Santa, street gangster Franklin Clinton, and drug dealer and gunrunner Trevor Philips—and their attempts to commit heists while under pressure from a corrupt government agency and powerful criminals. The open world design lets players freely roam San Andreas' open countryside and the fictional city of Los Santos, based on Los Angeles.`,
        false, //isOff:
        0, //offPersentage: 
        "2013", //year
        //productImage: 
        require('../database/images/products/videoGames/Sandbox/Grand-Theft-Auto-V/Grand-Theft-Auto-V.jpg'),
        false, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/Sandbox/Grand-Theft-Auto-V/Grand-Theft-Auto-V.jpg'),
            require('../database/images/products/videoGames/Sandbox/Grand-Theft-Auto-V/Grand-Theft-Auto-V-1.jpg'),
            require('../database/images/products/videoGames/Sandbox/Grand-Theft-Auto-V/Grand-Theft-Auto-V-2.jpg'),
            require('../database/images/products/videoGames/Sandbox/Grand-Theft-Auto-V/Grand-Theft-Auto-V-3.jpg'),
        ], 22
    ),

    new Product(
        23, //id:
        'Sandbox', //category:
        'Hitman 3', //productName:
        150, // productPrice:
        //description:
        `Hitman 3 (stylized as HITMAN III) is a 2021 stealth game developed and published by IO Interactive. It is the sequel to the 2018 video game Hitman 2, the eighth main installment in the Hitman series and the third and final entry in the World of Assassination trilogy. In the single-player story, the game concludes the plot arc started in Hitman and follows the genetically-engineered assassin Agent 47 and his allies as they hunt down the Partners, the leaders of the secretive organization Providence controlling the world's affairs.

        The game is presented from a third-person perspective, with a focus on interactive elements in 47's environment. Within each map, 47 can walk around the map freely. The player can complete challenges within each mission or complete side missions usually with one fixed target that get progressively harder known as "escalations" in order to unlock new items.`,
        true, //isOff:
        25, //offPersentage: 
        "2021", //year
        //productImage: 
        require('../database/images/products/videoGames/Sandbox/Hitman-III/Hitman-III.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/videoGames/Sandbox/Hitman-III/Hitman-III.jpg'),
            require('../database/images/products/videoGames/Sandbox/Hitman-III/Hitman-III-1.jpg'),
            require('../database/images/products/videoGames/Sandbox/Hitman-III/Hitman-III-2.jpg'),
            require('../database/images/products/videoGames/Sandbox/Hitman-III/Hitman-III-3.jpg'),
        ], 23
    ),

]


export const Coupons = [

    // {
    //     id: 1,
    //     name: '1',
    //     Discount: 0.9,
    // },

    new Coupon(
        100, //id:
        '1', //couponName
        0.9 //Discount:
    ),



    new Coupon(
        101, //id:
        'coupon-2-15%', //couponName
        0.85 //Discount:
    ),
    new Coupon(
        102, //id:
        'coupon-3-20%', //couponName
        0.8 //Discount:
    ),

    new Coupon(
        103, //id:
        'coupon-4-25%', //couponName
        0.75 //Discount:
    )
]

export const listTab = [

    {
        key: 1,
        category: 'All'

    },
    {
        key: 2,
        category: 'FPS'
    },
    {
        key: 3,
        category: 'MOBA'
    },

    {
        key: 4,
        category: 'RPG',
    },

    {
        key: 5,
        category: 'RTS',
    },

    {
        key: 6,
        category: 'sport',
    },

    {
        key: 7,
        category: 'Sandbox',
    },
];