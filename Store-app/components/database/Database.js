import Product from '../../models/Product.js';
import Coupon from '../../models/Coupon.js';
import Category from '../../models/Category.js';

// export const COLOURS = {
//     white: '#ffffff',
//     black: '#000000',
//     green: '#00AC76',
//     red: '#C04345',
//     blue: '#0043F9',
//     backgroundLight: '#F0F0F3',
//     backgroundMedium: '#B9B9B9',
//     backgroundDark: '#777777',
//     Aqua: '#00FFFF',

// }

export const Items = [

    //Basketball

    new Product(
        1, //id:
        'Basketball', //category:
        'air-zoom', //productName:
        179, // productPrice: 179,
        //description:
        "Meet Nike Basketball's gravity-defying game shoe offering what could be the most responsive cushioning system ever devised. The double-stacked Zoom Air works in unison with an external jump frame made from PEBAX® that's lightweight, springy and strong. The woven exoskeleton-like upper helps you feel fully connected, so you can move with confidence and power and defeat the force that holds you down.",
        true, //isOff:
        10, //offPersentage: 
        require('../database/images/products/shoes/Basketball/air-zoom/air-zoom-1.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Basketball/air-zoom/air-zoom-1.jpg'),
            require('../database/images/products/shoes/Basketball/air-zoom/air-zoom-2.jpg'),
            require('../database/images/products/shoes/Basketball/air-zoom/air-zoom-3.jpg'),
            require('../database/images/products/shoes/Basketball/air-zoom/air-zoom-4.jpg'),
        ]
    ),

    new Product(
        2, //id:
        'Basketball', //category:
        'kd14-team', //productName:
        150, // productPrice: 179,
        //description:
        "The KD14 (Team) is designed to help versatile, relentless players like KD feel fresh all game. Multilayer mesh and a midfoot strap help reduce you foot's movements inside the shoe. Full-length Zoom Air cushioning plus Cushlon foam give back energy for lasting performance.",
        true, //isOff:
        10, //offPersentage: 
        require('../database/images/products/shoes/Basketball/kd14-team/kd14-team-1.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Basketball/kd14-team/kd14-team-1.jpg'),
            require('../database/images/products/shoes/Basketball/kd14-team/kd14-team-2.jpg'),
            require('../database/images/products/shoes/Basketball/kd14-team/kd14-team-3.jpg'),
            require('../database/images/products/shoes/Basketball/kd14-team/kd14-team-4.jpg'),
        ]
    ),

    new Product(
        3, //id:
        'Basketball', //category:
        'kd14', //productName:
        150, // productPrice: 179,
        //description:
        "Kevin Durant lurks on the wing, waiting for the right time to strike before slicing his way through defenses. The KD14 is designed to help versatile, relentless players like KD feel fresh all game. Multilayer mesh and a midfoot strap help reduce you foot's movements inside the shoe. Full-length Zoom Air cushioning plus Cushlon foam give back energy for lasting performance.",
        true, //isOff:
        18, //offPersentage: 
        require('../database/images/products/shoes/Basketball/kd14/kd14-1.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Basketball/kd14/kd14-1.jpg'),
            require('../database/images/products/shoes/Basketball/kd14/kd14-2.jpg'),
            require('../database/images/products/shoes/Basketball/kd14/kd14-3.jpg'),
            require('../database/images/products/shoes/Basketball/kd14/kd14-4.jpg'),
        ]
    ),

    new Product(
        4, //id:
        'Basketball', //category:
        'lebron', //productName:
        200, // productPrice:
        //description:
        "LeBron thrives when stakes are high and the pressure's on. The LeBron 19 harnesses that energy with a locked-in fit and an updated cushioning system. The snug inner sleeve is pulled together by a sculpted overlay that the laces feed through to help prevent the foot from moving inside the shoe. Embedded pods in the tongue and around the collar help reduce weight, keep the ankle aligned, and give players the secure feel and confidence to go all out when the game is on the line.",
        true, //isOff:
        10, //offPersentage: 
        require('../database/images/products/shoes/Basketball/lebron/lebron-1.jpg'), //productImage: 
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Basketball/lebron/lebron-1.jpg'),
            require('../database/images/products/shoes/Basketball/lebron/lebron-2.jpg'),
            require('../database/images/products/shoes/Basketball/lebron/lebron-3.jpg'),
            require('../database/images/products/shoes/Basketball/lebron/lebron-4.jpg'),
        ]
    ),

    //Football

    new Product(
        5, //id:
        'Football', //category:
        'alpha-menace', //productName:
        100, // productPrice:
        //description:
        "The Nike Alpha Menace Pro 2 Mid RW takes inspiration from the way Russell Wilson plays the game, with a repeating logo on the Swoosh that embodies his electric style on the field. The essence of his phenomenal footwork and physical ability is combined with a design inspired by the Pacific Northwest.",
        true, //isOff:
        10, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Football/alpha-menace/alpha-menace-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Football/alpha-menace/alpha-menace-1.jpg'),
            require('../database/images/products/shoes/Football/alpha-menace/alpha-menace-2.jpg'),
            require('../database/images/products/shoes/Football/alpha-menace/alpha-menace-3.jpg'),
            require('../database/images/products/shoes/Football/alpha-menace/alpha-menace-4.jpg'),
        ]
    ),

    new Product(
        6, //id:
        'Football', //category:
        'force-savage', //productName:
        140, // productPrice:
        //description:
        "Dig in with the Nike Force Savage Elite 2. Its durable exterior is detailed with molding at the toe. A Nike Fastflex outsole sets you up with an articulate design so you can freely move in every direction.",
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Football/force-savage/force-savage-1.jpg'),
        false, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Football/force-savage/force-savage-1.jpg'),
            require('../database/images/products/shoes/Football/force-savage/force-savage-2.jpg'),
            require('../database/images/products/shoes/Football/force-savage/force-savage-3.jpg'),
            require('../database/images/products/shoes/Football/force-savage/force-savage-4.jpg'),
        ]
    ),



    new Product(
        7, //id:
        'Football', //category:
        'vapor-edge', //productName:
        120, // productPrice:
        //description:
        "The Nike Vapor Edge Pro 360 offers a new degree of quickness. Its internal full-foot plate creates flexible support, while wide stud placements let you cut like never before.",
        true, //isOff:
        10, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Football/vapor-edge/vapor-edge-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Football/vapor-edge/vapor-edge-1.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge/vapor-edge-2.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge/vapor-edge-3.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge/vapor-edge-4.jpg'),
        ]
    ),

    new Product(
        8, //id:
        'Football', //category:
        'vapor-edge-elite', //productName:
        200, // productPrice:
        //description:
        "Engineered for speed, the Nike Vapor Edge Elite 360 Flyknit offers a new degree of agility. Its internal full-foot plate creates flexible support, while wide stud placements let you cut fast. 360 degrees of Flyknit construction around your foot combines with a NikeSkin overlay to create a lightweight, fast feel with a sock-like fit.",
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-1.jpg'),
        false, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-1.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-2.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-3.jpg'),
            require('../database/images/products/shoes/Football/vapor-edge-elite/vapor-edge-elite-4.jpg'),
        ]
    ),


    //Jordan
    new Product(
        9, //id:
        'Jordan', //category:
        'air-jordan-centre', //productName:
        122, // productPrice:
        //description:
        `The Air Jordan 1 Centre Court puts a sophisticated spin on 1 of sneaker history's most iconic designs. It's made with full-grain leather and suede in the upper, plus a double layer of cushioning under the heel. An exploded Wings logo stitched down along the back of the shoe adds distinction.`,
        true, //isOff:
        20, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Jordan/air-jordan-centre/air-jordan-centre-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Jordan/air-jordan-centre/air-jordan-centre-1.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-centre/air-jordan-centre-2.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-centre/air-jordan-centre-3.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-centre/air-jordan-centre-4.jpg'),
        ]
    ),

    new Product(
        10, //id:
        'Jordan', //category:
        'air-jordan-psychic', //productName:
        185, // productPrice:
        //description:
        `The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordan's first signature sneaker with a quick and easy 1-handed entry system. There are no laces to tie, just a wraparound zipper and 2 straps to secure a custom fit.`,
        true, //isOff:
        15, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Jordan/air-jordan-psychic/air-jordan-psychic-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Jordan/air-jordan-psychic/air-jordan-psychic-1.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-psychic/air-jordan-psychic-2.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-psychic/air-jordan-psychic-3.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan-psychic/air-jordan-psychic-4.jpg'),
        ]
    ),

    new Product(
        11, //id:
        'Jordan', //category:
        'jordan-delta', //productName:
        150, // productPrice:
        //description:
        `The Jordan Delta Breathe takes notes from anime culture with its iridescence and fresh color-blocked look. Its breathable design is made with a variety of high-tech and natural materials, plus a cushioned midsole for responsiveness.`,
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Jordan/jordan-delta/jordan-delta-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Jordan/jordan-delta/jordan-delta-1.jpg'),
            require('../database/images/products/shoes/Jordan/jordan-delta/jordan-delta-2.jpg'),
            require('../database/images/products/shoes/Jordan/jordan-delta/jordan-delta-3.jpg'),
            require('../database/images/products/shoes/Jordan/jordan-delta/jordan-delta-4.jpg'),
        ]
    ),

    new Product(
        12, //id:
        'Jordan', //category:
        'air-jordan', //productName:
        140, // productPrice:
        //description:
        `The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordan's first signature sneaker with a quick and easy 1-handed entry system. There are no laces to tie, just a wraparound zipper and 2 straps to secure a custom fit.`,
        true, //isOff:
        15, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Jordan/air-jordan/air-jordan-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Jordan/air-jordan/air-jordan-1.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan/air-jordan-2.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan/air-jordan-3.jpg'),
            require('../database/images/products/shoes/Jordan/air-jordan/air-jordan-4.jpg'),
        ]
    ),

    //LifeStyle

    new Product(
        13, //id:
        'LifeStyle', //category:
        'air-force-1', //productName:
        130, // productPrice:
        //description:
        `The "Nike Athletic Club," Nike's fictional athletics team, brings '70s inspiration to streetwear staples. Mixing retro fun with iconic hoops style, this AF1 delivers a fresh spin on what you know best: stitched overlays, bold colors and the perfect amount of hoops style to make heads turn. Era-echoing leather is smoother than backboard glass, while letterman style "AF-1" patching on the heel adds a varsity finish.`,
        true, //isOff:
        15, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/LifeStyle/air-force-1/air-force-1-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/LifeStyle/air-force-1/air-force-1-1.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-force-1/air-force-1-2.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-force-1/air-force-1-3.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-force-1/air-force-1-4.jpg'),
        ]
    ),

    new Product(
        14, //id:
        'LifeStyle', //category:
        'air-max', //productName:
        195, // productPrice:
        //description:
        `Bring back the nostalgia of long summer days from your childhood with a hot color palette and a wavy mesh that alludes to the mesmerizing optical illusion of heat rising off the blacktop. Classic layers get a new level of appeal with material choices, pop colors and metallic silver that hearkens back to the real OG: Nike Air Max 97 By You.`,
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/LifeStyle/air-max/air-max-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/LifeStyle/air-max/air-max-1.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max/air-max-2.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max/air-max-3.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max/air-max-4.jpg'),
        ]
    ),

    new Product(
        15, //id:
        'LifeStyle', //category:
        'air-max-plus', //productName:
        175, // productPrice:
        //description:
        `The Air Jordan 1 Hi FlyEase combines the coveted style of Michael Jordan's first signature sneaker with a quick and easy 1-handed entry system. There are no laces to tie, just a wraparound zipper and 2 straps to secure a custom fit.`,
        true, //isOff:
        35, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/LifeStyle/air-max-plus/air-max-plus-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/LifeStyle/air-max-plus/air-max-plus-1.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max-plus/air-max-plus-2.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max-plus/air-max-plus-3.jpg'),
            require('../database/images/products/shoes/LifeStyle/air-max-plus/air-max-plus-4.jpg'),
        ]
    ),

    new Product(
        16, //id:
        'LifeStyle', //category:
        'blazer-mid', //productName:
        100, // productPrice:
        //description:
        `In the '70s, Nike was the new shoe on the block. So new in fact, we were still breaking into the basketball scene and testing prototypes on the feet of our local team. Of course, the design improved over the years, but the name stuck. The Nike Blazer Mid '77 Vintage—classic since the beginning.`,
        true, //isOff:
        10, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/LifeStyle/blazer-mid/blazer-mid-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/LifeStyle/blazer-mid/blazer-mid-1.jpg'),
            require('../database/images/products/shoes/LifeStyle/blazer-mid/blazer-mid-2.jpg'),
            require('../database/images/products/shoes/LifeStyle/blazer-mid/blazer-mid-3.jpg'),
            require('../database/images/products/shoes/LifeStyle/blazer-mid/blazer-mid-4.jpg'),
        ]
    ),
    //Running

    new Product(
        17, //id:
        'Running', //category:
        'air-zoom-alphafly', //productName:
        285, // productPrice:
        //description:
        `Gear up for your next personal best with the Nike Air Zoom Alphafly NEXT% Flyknit Ekiden. It gives you the greatest energy return of all our racing shoes with a propulsive feel through the finish line. The design is light, breathable and backed by data to help keep you comfortable.`,
        true, //isOff:
        37, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Running/air-zoom-alphafly/air-zoom-alphafly-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Running/air-zoom-alphafly/air-zoom-alphafly-1.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-alphafly/air-zoom-alphafly-2.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-alphafly/air-zoom-alphafly-3.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-alphafly/air-zoom-alphafly-4.jpg'),
        ]
    ),

    new Product(
        18, //id:
        'Running', //category:
        'air-zoom-pegasus', //productName:
        120, // productPrice:
        //description:
        `Your workhorse with wings returns. The Nike Air Zoom Pegasus 38 continues to put a spring in your step, using the same responsive foam as its predecessor. Mesh in the upper combines the comfort and durability you want with a fit that nods back to the classic Peg.`,
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Running/air-zoom-pegasus/air-zoom-pegasus-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Running/air-zoom-pegasus/air-zoom-pegasus-1.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-pegasus/air-zoom-pegasus-2.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-pegasus/air-zoom-pegasus-3.jpg'),
            require('../database/images/products/shoes/Running/air-zoom-pegasus/air-zoom-pegasus-4.jpg'),
        ]
    ),

    new Product(
        19, //id:
        'Running', //category:
        'react-infinity-run', //productName:
        160, // productPrice:
        //description:
        `The Nike React Infinity Run Flyknit 2 continues to help keep you running. A refreshed upper combines Flyknit and Flywire technology for support and breathability where you need it. A wider forefoot provides stability to prevent rolling, while the high foam heights provide soft responsiveness and long-lasting comfort. It's still one of our most tested shoes, designed to help you feel the potential when your foot hits the pavement.`,
        true, //isOff:
        15, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Running/react-infinity-run/react-infinity-run-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Running/react-infinity-run/react-infinity-run-1.jpg'),
            require('../database/images/products/shoes/Running/react-infinity-run/react-infinity-run-2.jpg'),
            require('../database/images/products/shoes/Running/react-infinity-run/react-infinity-run-3.jpg'),
            require('../database/images/products/shoes/Running/react-infinity-run/react-infinity-run-4.jpg'),
        ]
    ),

    new Product(
        20, //id:
        'Running', //category:
        'zoom-tempo', //productName:
        200, // productPrice:
        //description:
        `Match your tempo in our road running shoes that mixes durability with soft yet snappy cushioning that helps push you towards your personal best. Super responsive ZoomX foam gives you a smooth ride from beginning to end. It's built like a racer but made for your everyday training routine. ZoomX Bold colors celebrate the world coming together for sport.`,
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Running/zoom-tempo/zoom-tempo-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Running/zoom-tempo/zoom-tempo-1.jpg'),
            require('../database/images/products/shoes/Running/zoom-tempo/zoom-tempo-2.jpg'),
            require('../database/images/products/shoes/Running/zoom-tempo/zoom-tempo-3.jpg'),
            require('../database/images/products/shoes/Running/zoom-tempo/zoom-tempo-4.jpg'),
        ]
    ),
    //Soccer

    new Product(
        21, //id:
        'Soccer', //category:
        'gt2-elite', //productName:
        80, // productPrice:
        //description:
        `Building on the Phantom GT, the Nike Phantom GT2 MG has an updated design and patterning that are engineered to help you place your shots with pinpoint accuracy. Off-center lacing provides a clean strike zone to help you dribble, pass and score with precision.`,
        true, //isOff:
        50, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Soccer/gt2-elite/gt2-elite-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Soccer/gt2-elite/gt2-elite-1.jpg'),
            require('../database/images/products/shoes/Soccer/gt2-elite/gt2-elite-2.jpg'),
            require('../database/images/products/shoes/Soccer/gt2-elite/gt2-elite-3.jpg'),
            require('../database/images/products/shoes/Soccer/gt2-elite/gt2-elite-4.jpg'),
        ]
    ),

    new Product(
        22, //id:
        'Soccer', //category:
        'mercurial-superfly', //productName:
        85, // productPrice:
        //description:
        `Designed for turf, the Nike Mercurial Superfly 8 Academy TF is a unique design that brings together the essential components of speed to deliver optimal touch and traction.`,
        false, //isOff:
        0, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Soccer/mercurial-superfly/mercurial-superfly-1.jpg'),
        false, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Soccer/mercurial-superfly/mercurial-superfly-1.jpg'),
            require('../database/images/products/shoes/Soccer/mercurial-superfly/mercurial-superfly-2.jpg'),
            require('../database/images/products/shoes/Soccer/mercurial-superfly/mercurial-superfly-3.jpg'),
            require('../database/images/products/shoes/Soccer/mercurial-superfly/mercurial-superfly-4.jpg'),
        ]
    ),

    new Product(
        23, //id:
        'Soccer', //category:
        'phantom', //productName:
        150, // productPrice:
        //description:
        `Building on the Phantom GT, the Nike Phantom GT2 Pro Dynamic Fit FG has an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-center lacing provides a clean strike zone for skillful dribbling, passing and shooting.`,
        true, //isOff:
        25, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Soccer/phantom/phantom-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Soccer/phantom/phantom-1.jpg'),
            require('../database/images/products/shoes/Soccer/phantom/phantom-2.jpg'),
            require('../database/images/products/shoes/Soccer/phantom/phantom-3.jpg'),
            require('../database/images/products/shoes/Soccer/phantom/phantom-4.jpg'),
        ]
    ),

    new Product(
        24, //id:
        'Soccer', //category:
        'tiempo-legend', //productName:
        230, // productPrice:
        //description:
        `The Nike Tiempo Legend 8 Elite FG takes the legendary touch of premium kangaroo leather and adds foot-hugging Quadfit mesh in the lining and a wraparound Flyknit tongue that feels supportive under your arch.`,
        true, //isOff:
        75, //offPersentage: 

        //productImage: 
        require('../database/images/products/shoes/Soccer/tiempo-legend/tiempo-legend-1.jpg'),
        true, //isAvailable: 
        //productImageList: 
        [
            require('../database/images/products/shoes/Soccer/tiempo-legend/tiempo-legend-1.jpg'),
            require('../database/images/products/shoes/Soccer/tiempo-legend/tiempo-legend-2.jpg'),
            require('../database/images/products/shoes/Soccer/tiempo-legend/tiempo-legend-3.jpg'),
            require('../database/images/products/shoes/Soccer/tiempo-legend/tiempo-legend-4.jpg'),
        ]
    ),



]


export const Coupons = [

    // {
    //     id: 1,
    //     name: 'coupon-1-10%',
    //     Discount: 10,
    // },
    {
        id: 1,
        name: '1',
        Discount: 0.9,
    },

    new Coupon(
        1, //id:
        '1', //couponName
        0.9 //Discount:
    ),



    new Coupon(
        2, //id:
        'coupon-2-15%', //couponName
        0.85 //Discount:
    ),
    new Coupon(
        3, //id:
        'coupon-3-20%', //couponName
        0.8 //Discount:
    ),

    new Coupon(
        4, //id:
        'coupon-4-25%', //couponName
        0.75 //Discount:
    )
]

export const listTab = [

    {
        category: 'All'
    },
    {
        category: 'Basketball'
    },
    {
        category: 'Football'
    },

    {
        category: 'Jordan',
    },

    {
        category: 'LifeStyle',
    },

    {
        category: 'Running',
    },

    {
        category: 'Soccer',
    },
];