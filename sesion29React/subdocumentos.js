use cinema
db.createCollection("peliculas")

db.peliculas.insert([{
    ...             "id": 1,
    ...             "nombre": "Forrest Gump",
    ...             "anhoLanzamiento": "1994",
    ...             "director": "Robert Zemeckis",
    ...             "genero": "Comedia",
    ...             "elenco": "Tom Hanks, Gary Sinise, Robin Wright"
    ...         }, {
    ...             "id": 2,
    ...             "nombre": "El Padrino",
    ...             "anhoLanzamiento": "1972",
    ...             "director": "Francis Ford Coppola",
    ...             "genero": "Mafia",
    ...             "elenco": "Marlon Brando, Al Pacino, James Caan"
    ...         }, {
    ...             "id": 3,
    ...             "nombre": "E.T.",
    ...             "anhoLanzamiento": "1982",
    ...             "director": "Steven Spielberg",
    ...             "genero": "Familiar",
    ...             "elenco": "Henry Thomas, Drew Barrymore, Dee Wallace"
    ...         }, {
    ...             "id": 4,
    ...             "nombre": "La Lista de Schindler",
    ...             "anhoLanzamiento": "1993",
    ...             "director": "Steven Spielberg",
    ...             "genero": "Drama",
    ...             "elenco": "Liam Neeson, Ben Kingsley, Ralph Fiennes"
    ...         }, {
    ...             "id": 5,
    ...             "nombre": "Salvar al soldado Ryan",
    ...             "anhoLanzamiento": "1998",
    ...             "director": "Steven Spielberg",
    ...             "genero": "Bélica",
    ...             "elenco": "Tom Hanks, Tom Sizemore, Edward Burns"
    ...         }, {
    ...             "id": 6,
    ...             "nombre": "El sexto sentido",
    ...             "anhoLanzamiento": "1999",
    ...             "director": "M. Night Shyamalan",
    ...             "genero": "Drama",
    ...             "elenco": "Bruce Willis, Haley Joel Osment, Toni Collette"
    ...         }, {
    ...             "id": 7,
    ...             "nombre": "Pulp Fiction",
    ...             "anhoLanzamiento": "1994",
    ...             "director": "Tarantino",
    ...             "genero": "Acción",
    ...             "elenco": "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta"
    ...         }, {
    ...             "id": 8,
    ...             "nombre": "300",
    ...             "anhoLanzamiento": "2006",
    ...             "director": "Zack Snyder",
    ...             "genero": "Acción",
    ...             "elenco": "Gerard Butler, Lena Headey, Dominic West, David Wenham"
    ...         }])

db.createCollection("genero")

db.genero.insert([{
        ...             "nombre": "Drama"
        ... 
        ...         },
        ...         {
        ...             "nombre": "Comedia"
        ... 
        ...         },
        ...         {
        ...             "nombre": "Familiar"
        ... 
        ...         },
        ...         {
        ...             "nombre": "Acción"
        ... 
        ...         }
        ...     ])

db.peliculas.find({"anhoLanzamiento":{$gt:2010}}).pretty()


