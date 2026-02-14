var countries = [
  { name: "India", image: "https://images.unsplash.com/photo-1548013146-72479768bada" },
  { name: "France", image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34" },
  { name: "Japan", image: "https://images.unsplash.com/photo-1549693578-d683be217e58" },
  { name: "USA", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74" },
  { name: "Italy", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpvLaL8JU5DMN5RiBCBbojOOl9wo5nYYR-AQ&s" },
  { name: "Australia", image: "https://media.istockphoto.com/id/512882300/photo/sydney-opera-house.jpg?s=612x612&w=0&k=20&c=W-CpLxrNiqZsuMzKnntkiWw3ODFaXjMfLRzU5cKY9zk=" },
  { name: "United Kingdom", image: "https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg" },
  { name: "UAE", image: "https://t3.ftcdn.net/jpg/03/81/70/28/360_F_381702827_QDIls7309rbPLydhk5PAnBRFOj0DVuhm.jpg" }
];
var places = {
  India: [
    {
      name: "Taj Mahal",
      city: "Agra",
      price: 60000,
      images: [
        "https://images.unsplash.com/photo-1564507592333-c60657eea523",
        "https://images.unsplash.com/photo-1548013146-72479768bada"
      ]
    },
    {
      name: "Jaipur Pink City",
      price: 52000,
      city: "Jaipur",
      images: [
        "https://images.unsplash.com/photo-1599661046289-e31897846e41"
      ]
    },
    {
      name: "Kerala Backwaters",
      price: 55000,
      city: "Alappuzha",
      images: [
        "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
      ]
    },
    {
      name: "Goa Beaches",
      price: 50000,
      city:"Goa",
      images: [
        "https://media.istockphoto.com/id/535168027/photo/india-goa-palolem-beach.jpg?s=612x612&w=0&k=20&c=iGV1Ue0Efj87dQirWnUpZVG1dNobUjfVvMGdKHTJ7Qg="
      ]
    },
    {
      name: "Ladakh",
      price: 65000,
      city: "Leh",
      images: [
        "https://images.unsplash.com/photo-1609947017136-9daf32a5eb16"
      ]
    }
  ],

  France: [
    {
      name: "Eiffel Tower",
      price: 75000,
      city: "Paris",
      images: [
        "https://media.istockphoto.com/id/2119799972/photo/spring-evening-view-of-the-eiffel-tower-in-paris.jpg?s=612x612&w=0&k=20&c=eToYv7xbRNVqLhyKfHoF2oQLb2YFd-RDxoOgt6zoTZo="
      ]
    },
    {
      name: "Louvre Museum",
      price: 70000,
      city: "paris",
      images: [
        "https://t4.ftcdn.net/jpg/03/03/50/09/360_F_303500976_NDJjj2c7RK7Q4tKtLs19h9yHEOKNcUpp.jpg"
      ]
    },
    {
      name: "Nice Beach",
      price: 72000,
      city: "Nice",
      images: [
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
      ]
    },
    {
      name: "Notre Dame Cathedral",
      price: 82000,
      city: "pairs",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2amQ5hf5C_zSDIo-i95g6GmqhTWcGtETSN_eVIIxUbmIYV_sZv285h1bAr0FNapb0703swiSkIFbTBN6FtowkJy9XaGlCkVLLDIaNkoEA7IwxhmbuZpP3w1urldkOH5jqy3Nb-y=s1360-w1360-h1020-rw"
      ]
    }
  ],

  Japan: [
    {
      name: "Mount Fuji",
      price: 90000,
      city: "Fujinomiya",
      images: [
        "https://media.istockphoto.com/id/502617555/photo/world-heritage-mount-fuji-and-lake-shoji.jpg?s=612x612&w=0&k=20&c=1aA-Z53dHEqc59HBiIwKJnQUKBX69BKa5dCU3E3Ck8w="
      ]
    },
    {
      name: "Tokyo City",
      price: 88000,
      city: "Tokyo",
      images: [
        "https://img.freepik.com/free-photo/aerial-view-tokyo-cityscape-with-fuji-mountain-japan_335224-148.jpg?semt=ais_user_personalization&w=740&q=80"
      ]
    },
    {
      name: "Kyoto Temples",
      price: 87000,
      city: "Kyoto",
      images: [
        "https://media.istockphoto.com/id/1477515044/photo/kyoto-japan-at-twilight-in-higashiyama.jpg?s=612x612&w=0&k=20&c=z6j9fNoCqGAZq7V3hmLKaaBxwrosna12uZDYthUb8Vw="
      ]
    },
    {
      name: "Kinkaku-ji",
      price: 120000,
      city: "Kyoto",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2bKWbHv-QrEo1J6O0j4ywRgx5AkvDvr6KBp1Ao1xbEUVI15FXcOB6gzF2EnVbWHKkw_HKibWCGgpE-P1rkMyP3kfXA9e9a3Q4ABm8-EA2fCCTOxy2S0bcUM4_pJtqgruZPl4jNK=s1360-w1360-h1020-rw"]
    },
    {
      name: "Fushimi Inari Taisha",
      price: 140000,
      city: "Kyoto",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2bjvkukgMWF0scjJprAcoP8sMIPlXwdkuD4d5F1rZJ3kgYpHbjNtYTGD4biMj9jNodtYLvxaUv-HG-_4dlkQ7wyihHZ_XdjrgTanRfAyolvy90Uo5_B0lHSeoGMyjvz6OTA7rQX=s294-w294-h220-n-k-no"]
    }
  ],
  USA: [
    {
      name: "Statue of Liberty",
      price: 95000,
      city: "New York",
      images: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Statue_of_Liberty%2C_NY.jpg/1280px-Statue_of_Liberty%2C_NY.jpg"
      ]
    },
    {
      name: "Grand Canyon",
      price: 100000,
      city: "Arizona",
      images: [
        "https://media.istockphoto.com/id/2197894218/photo/toroweap-grand-canyon-north-rim-sunset.jpg?s=612x612&w=0&k=20&c=7altIyJL93eUWVj4Yrs40ohNMTTxcRN_uPilq96t8Ps="
      ]
    },
    {
      name: "Times Square",
      price: 92000,
      city: "New York",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVyTkmBySWmx0LNt463waA04YxQOKY_aA0xg&s"
      ]
    },
    {
      name: "Golden Gate Bridge",
      price: 102000,
      city: "San Francisco",
      images: [
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqNtEL-88EulyC-WIVV0nFAP4qSK72OOgln0cgcAzZYeXFJjFfINqdJWoqWksv0s1n5z8nAYuzdZr0ipAFsp_p10gGnq57T3MZZoDUqwvm3QQf3-OedZqkYtiFNwxsiHc9lqVehoQ=w270-h312-n-k-no"
      ]
    },
    {
      name: "The Metropolitan Museum of Art",
      price: 120000,
      city: "New York",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2a_vk_-5YgeX5cRf2r5UXakJYBogIZ3bLiY0rGpJ8jAQzQdYrMNmN6SWqPwEzeGICKpqCpskY4BZS2hTY0z6mh5A72kxhacVXdsQxM5TjI74ivklUdqHDh4KnHX5KFlDAgA_R9PrA=s294-w294-h220-n-k-no"
      ]
    }

  ],

  Italy: [
    {
      name: "Colosseum",
      price: 78000,
      city: "Rome",
      images: [
        "https://images.unsplash.com/photo-1552832230-c0197dd311b5"
      ]
    },
    {
      name: "Venice Canals",
      price: 82000,
      city: "Venice",
      images: [
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
      ]
    },
    {
      name: "Leaning Tower of Pisa",
      price: 76000,
      city: "Pisa",
      images: [
        "https://images.unsplash.com/photo-1543429776-2782fc8e1acd?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      ]
    },
    {
      name: "Saint Peter’s Basilica",
      price: 120000,
      city: "Rome",
      images: [
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAweo4IIqvxRnPeB4liaG5hiblVP9dd_Dk3WmzuDUOOwvLz0k67yKsHIJjs9X2475UwDXyrz6MxqU9J7TA9TnFWRyQNYjogWls6zkl_zm5nn-rLfhs4oW-Xf6xiJ3I9B5WGMlyU--k=s294-w294-h220-n-k-no"
      ]
    },
    {
      name: "Florence cathedral",
      price: 102000,
      city: "Florence",
      images: [
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAwery82UMEPp9VHfy1xnKi7a-Hjg3kdWxRiVjnDyZb7gEZbFy26DZ4L8DhbzAsts3fxIHHv0QKzA4qwKFiMnus3D1QvWxxS9FyQf8HmCR0LJw-Xah1o6q06nAn_luPjkObKj_Xi0=s220-w165-h220-n-k-no"
      ]
    },
  ],

  Australia: [
    {
      name: "Sydney Opera House",
      price: 98000,
      city: "Sydney",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKuSPW13Q9RSkQONDDLZzgIkGrlG6Y7gAxgg&s"
      ]
    },
    {
      name: "Great Barrier Reef",
      price: 105000,
      city: "Cairns",
      images: [
        "https://media.istockphoto.com/id/1905292613/photo/reefscape-with-hard-corals-and-tropical-fish-at-the-great-barrier-reef.jpg?s=612x612&w=0&k=20&c=1NnTfrlpCRNfoabd6BaREMavRfS4PlxnL064IyGGyU4="
      ]
    },
    {
      name: "Kakadu National Park",
      price: 108000,
      city: "Darwin",
      images: [
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepzMVgFOsQIGBj2PpcwlO80NfA0DfvfTU5fKnJTVS2bJKMyUNULrKkDRMcOvIPZXlv4kXrKxF9TbS5j-408fry1-M3RqwlnKQSxu4ZyHJhaO3nUZgrdkve1pMe7560CNE-4HOwqqQ=s294-w294-h220-n-k-no"
      ]
    },
    {
      name: "Queen Victoria Market",
      price: 108000,
      city: "Sydney",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2YVONFGKAQ5xrBhydPCyDh_-V9rkiEBNtm4eEQ6j3y-VWJcuid872fV3xZQ25sJ6XETBYrQU4i8sGN_xVA4Nq6p8NuVRey1I7ekVRckzMMPEtjze8s9ulmStUpF93CAZ35xL_1qKg=s294-w294-h220-n-k-no"
      ]
    },
  ],

  "United Kingdom": [
    {
      name: "Big Ben",
      price: 85000,
      city: "London",
      images: [
        "https://images.unsplash.com/photo-1505761671935-60b3a7427bad"
      ]
    },
    {
      name: "London Bridge",
      price: 83000,
      city: "London",
      images: [
        "https://t4.ftcdn.net/jpg/02/57/75/51/360_F_257755130_JgTlcqTFxabsIKgIYLAhOFEFYmNgwyJ6.jpg"
      ]
    },
    {
      name: "The British Museum",
      price: 103000,
      city: "London",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2ZU7Aj3QioEtnxckZCQKopbSzVzvV2vi3yZm8LLkdfWW1tfh5zpbxKCzTwkYmrqoKlZMmWG-vYte5Iu9mVV2sJFSrApVtAJtYAhbLLjAXcK0OTMlhvCCIAnEXNPufb-E4aaJDuk6w=s294-w294-h220-n-k-no"
      ]
    },
    {
      name: "Tower of London",
      price: 113000,
      city: "London",
      images: [
        "https://lh3.googleusercontent.com/gpms-cs-s/AFfmt2at_j4oXlxZwclCBQEbZj9mmlFXo-S5SK8DLzQAGTzSk_UHatNwL-jXsYPiIgaAGaZQzb6bqrO56tnhJwNdlv4lMPZee6VWOpYDTCjQlV0bpLvNnNIvbDVhAGUSopPsUSbGtKOX=s294-w294-h220-n-k-no"
      ]
    }
  ],

  UAE: [
    {
      name: "Burj Khalifa",
      price: 89000,
      city: "Dubai",
      images: [
        "https://t4.ftcdn.net/jpg/03/85/46/27/360_F_385462707_owlA1exl4DBKVO7N6TvTHm447mT5VKtA.jpg"
      ]
    },
    {
      name: "Desert Safari",
      price: 75000,
      city: "Dubai",
      images: [
        "https://www.dubaidesertsafaris.com/wp-content/uploads/2024/10/8c5c729447979c8e69df69bfcf41996c.webp"
      ]
    },
    {
      name: "Dubai Mall",
      price: 115000,
      city: "Dubai",
      images: [
        "https://media.istockphoto.com/id/1090721488/photo/dubai-mall-outside.jpg?s=612x612&w=0&k=20&c=FtQUiX7BBv7u-wbjIL8kKOA0bz0Zs2KDDR3Za4S72Sg="
      ]
    }

  ]
};
