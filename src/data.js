export const products = [
    {
        id: 1,
        img: "https://i.ibb.co/MMNFhzX/portfolio.png",
        link: "https://portfolio-alexvovan.vercel.app",
        title: "Portfolio",
        tag: "React",
        description: "Personal website with responsive sections and contact flow.",
    },
    {
        id: 2,
        img: "https://i.ibb.co/BNcD42t/R-Gym.png",
        link: "https://github.com/Alehnovich-Vladimir/R_Gym-Store",
        title: "R Gym Store",
        tag: "Commerce",
        description: "Catalog-style frontend for a fitness store concept.",
    },
    {
        id: 3,
        img: "https://i.ibb.co/n6WfKrs/ozon.png",
        link: "https://alehnovich-vladimir.github.io/O-ZONE/",
        title: "O-ZONE",
        tag: "JavaScript",
        description: "Marketplace interface experiment with product filtering.",
    },
    {
        id: 4,
        img: "https://i.ibb.co/S6M4qVL/food-delivery.png",
        link: "https://alehnovich-vladimir.github.io/Food-delivery-website/",
        title: "Food Delivery",
        tag: "Landing",
        description: "Responsive food delivery website with a bright visual style.",
    },
    {
        id: 5,
        img: "https://i.ibb.co/PFcHV12/weiss.png",
        link: "https://alehnovich-vladimir.github.io/Weiss/",
        title: "Weiss",
        tag: "Layout",
        description: "Pixel-focused webpage layout and adaptive presentation.",
    },
    {
        id: 6,
        img: "https://i.ibb.co/KFVgQFN/wildlife.png",
        link: "https://alehnovich-vladimir.github.io/Wildlife/",
        title: "Wildlife",
        tag: "HTML/CSS",
        description: "Nature-themed page with careful desktop and mobile layout.",
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
        status: "Preparing next release",
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
