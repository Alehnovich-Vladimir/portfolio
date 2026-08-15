export const products = [
    {
        id: 2,
        img: "https://i.ibb.co/BNcD42t/R-Gym.png",
        link: "https://github.com/Alehnovich-Vladimir/R_Gym-Store",
        title: "R Gym Store",
        tag: "Commerce",
        kind: "web",
        description: "Online store for rhythmic gymnastics products.",
    },
    {
        id: 3,
        img: "https://i.ibb.co/n6WfKrs/ozon.png",
        link: "https://alehnovich-vladimir.github.io/O-ZONE/",
        title: "O-ZONE",
        tag: "JavaScript",
        kind: "web",
        description: "Marketplace interface experiment with product filtering.",
    },
    {
        id: 4,
        img: "https://i.ibb.co/S6M4qVL/food-delivery.png",
        link: "https://alehnovich-vladimir.github.io/Food-delivery-website/",
        title: "Food Delivery",
        tag: "Landing",
        kind: "web",
        description: "Responsive food delivery website with a bright visual style.",
    },
    {
        id: 5,
        img: "https://i.ibb.co/PFcHV12/weiss.png",
        link: "https://alehnovich-vladimir.github.io/Weiss/",
        title: "Weiss",
        tag: "Layout",
        kind: "web",
        description: "Pixel-focused webpage layout and adaptive presentation.",
    },
    {
        id: 6,
        img: "https://i.ibb.co/KFVgQFN/wildlife.png",
        link: "https://alehnovich-vladimir.github.io/Wildlife/",
        title: "Wildlife",
        tag: "HTML/CSS",
        kind: "web",
        description: "Nature-themed page with careful desktop and mobile layout.",
    },
    {
        id: 9,
        img: {
            ru: "/project-screens/my-language-studio.webp",
            en: "/project-screens/my-language-studio-en.webp",
            es: "/project-screens/my-language-studio-es.webp",
        },
        title: "My Language Studio",
        tag: "Learning platform",
        kind: "development",
        description: "Language-learning platform with structured Spanish and English courses from A0 to C1.",
    },
    {
        id: 10,
        img: {
            ru: "/project-screens/keylab.webp",
            en: "/project-screens/keylab-en.webp",
            es: "/project-screens/keylab-es.webp",
        },
        title: "KeyLab",
        tag: "Business website",
        kind: "development",
        description: "Website for an automotive electronics workshop focused on keys, immobilizers and electronic control units.",
    },
]

export const apps = [
    {
        id: "my-route",
        name: "My Route",
        status: "Live on Google Play",
        platform: "Android",
        storeLink: "https://play.google.com/store/apps/details?id=com.alexvovan.myrouteapp",
        privacyLink: "/privacy-policy.html",
        screenshots: {
            en: [
                {
                    src: "/app-screens/my-route-home-en.jpg",
                    label: "Home screen",
                },
                {
                    src: "/app-screens/my-route-map-en.jpg",
                    label: "Travel map",
                },
            ],
            es: [
                {
                    src: "/app-screens/my-route-home-es.jpg",
                    label: "Pantalla principal",
                },
                {
                    src: "/app-screens/my-route-map-es.jpg",
                    label: "Mapa de viajes",
                },
            ],
            ru: [
                {
                    src: "/app-screens/my-route-home.jpg",
                    label: "Главный экран",
                },
                {
                    src: "/app-screens/my-route-map.jpg",
                    label: "Карта путешествий",
                },
            ],
        },
        summary: "A travel, route-planning and city-exploration app for building walking routes, saving trips and keeping travel memories.",
        features: ["maps and routes", "city discovery", "local travel album"],
        screenTitle: "Valencia walk",
        screenMeta: "4 places  2.8 km",
    },
    {
        id: "my-photobook",
        name: "My PhotoBook",
        status: "Closed testing on Google Play",
        platform: "Android now, iPhone next",
        privacyLink: "/my-photobook-privacy-policy.html",
        screenshots: {
            en: [
                {
                    src: "/app-screens/my-photobook-home-en.jpg",
                    label: "Albums screen",
                },
            ],
            es: [
                {
                    src: "/app-screens/my-photobook-home-es.jpg",
                    label: "Pantalla de álbumes",
                },
            ],
            ru: [
                {
                    src: "/app-screens/my-photobook-home-ru.jpg",
                    label: "Экран альбомов",
                },
            ],
        },
        summary: "A mobile photobook maker for albums, captions, printable layouts and PDF export that keeps user content local.",
        features: ["photo albums", "PDF export", "print layouts"],
        screenTitle: "Summer album",
        screenMeta: "24 photos  PDF ready",
    },
]
