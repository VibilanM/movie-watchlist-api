import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const userId = "";

const movies = [
    {
        title: "Free Guy",
        overview: "Guy lives a seemingly peaceful life as a bank teller. However, an encounter with a pretty but mysterious woman makes him realise that he is a non-playable character in a massive online video game.",
        director: "Shawn Levy",
        writer: "Matt Lieberman and Zak Penn",
        cast: ["Ryan Reynolds", "Jodie Comer", "Lil Rel Howery", "Joe Keery", "Taika Waititi"],
        releaseYear: 2021,
        genres: ["Action", "Adventure", "Comedy"],
        runtime: 115,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/1c/Free_Guy_2021_Poster.jpg",
        language: "English",
        rating: 7.1,
        trailerUrl: "https://www.youtube.com/watch?v=X2m-08cOAbc&pp=ygUQZnJlZSBndXkgdHJhaWxlcg%3D%3D"
    },
    {
        title: "The Suicide Squad",
        overview: "A government agent manipulates supervillains to become a part of a dangerous team in exchange for reduced sentences. They get sent to Corto Maltese, where they must destroy a laboratory.",
        director: "James Gunn",
        writer: "James Gunn",
        cast: ["Margot Robbie", "Idris Elba", "John Cena", "Viola Davis"],
        releaseYear: 2021,
        genres: ["Action", "Adventure", "Sci-Fi", "Comedy", "Superhero"],
        runtime: 132,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/06/The_Suicide_Squad_%28film%29_poster.jpg",
        language: "English",
        rating: 7.2,
        trailerUrl: "https://youtu.be/GIxI_gJz-H8"
    },
    {
        title: "Once Upon a Time... in Hollywood",
        overview: "Rick, a washed-out actor, and Cliff, his stunt double, struggle to recapture fame and success in 1960s Los Angeles. In their mission, they must tackle several twists and turns.",
        director: "Quentin Tarantino",
        writer: "Quentin Tarantino",
        cast: ["Leonardo DiCaprio", "Brad Pitt", "Margot Robbie"],
        releaseYear: 2019,
        genres: ["Comedy", "Drama", "Crime"],
        runtime: 161,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a6/Once_Upon_a_Time_in_Hollywood_poster.png",
        language: "English",
        rating: 7.6,
        trailerUrl: "https://youtu.be/ELeMaP8EPAA"
    },
    {
        title: "Avengers: Endgame",
        overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
        director: "Anthony Russo and Joe Russo",
        writer: "Christopher Markus and Stephen McFeely",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth", "Scarlett Johansson", "Jeremy Renner"],
        releaseYear: 2019,
        genres: ["Action", "Adventure", "Sci-Fi", "Superhero"],
        runtime: 181,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg",
        language: "English",
        rating: 8.4,
        trailerUrl: "https://www.youtube.com/watch?v=TcMBFSGVi1c"
    },
    {
        title: "Blade Runner 2049",
        overview: "A new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what remains of society into chaos. K's discovery leads him on a quest to find Rick Deckard, a former LAPD blade runner who has been missing for 30 years.",
        director: "Denis Villeneuve",
        writer: "Hampton Fancher and Michael Green",
        cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks", "Robin Wright", "Jared Leto"],
        releaseYear: 2017,
        genres: ["Sci-Fi", "Drama", "Mystery"],
        runtime: 163,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9b/Blade_Runner_2049_poster.png",
        language: "English",
        rating: 8.0,
        trailerUrl: "https://www.youtube.com/watch?v=gCcx85zbxz4"
    },
    {
        title: "Deadpool 2",
        overview: "Wisecracking mercenary Deadpool meets Russell, an angry teenage mutant who lives at an orphanage. When Cable, a fun-loving soldier from the future, weaponizes Russell, Deadpool realizes that he needs some help; he soon joins forces with Bedlam, Shatterstar, Domino and other mutants to protect Russell.",
        director: "David Leitch",
        writer: "Paul Wernick & Rhett Rheese and Ryan Reynolds",
        cast: ["Ryan Reynolds", "Josh Brolin", "Morena Baccarin", "Julian Dennison", "Zazie Beetz", "T.J. Miller"],
        releaseYear: 2018,
        genres: ["Action", "Adventure", "Comedy", "Sci-Fi"],
        runtime: 119,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/c/cf/Deadpool_2_poster.jpg",
        language: "English",
        rating: 7.6,
        trailerUrl: "https://www.youtube.com/watch?v=20TUF8BirPM"
    },
    {
        title: "Dunkirk",
        overview: "Allies soldiers from Belgium, the British Empire, and France are surrounded by the German Army and evacuated during a fierce battle in World War II.",
        director: "Christopher Nolan",
        writer: "Christopher Nolan",
        cast: ["Fionn Whitehead", "Tom Glynn-Carney", "Jack Lowden", "Harry Styles", "Aneurin Barnard", "James D'Arcy"],
        releaseYear: 2017,
        genres: ["Action", "Drama", "History", "War"],
        runtime: 106,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/1/15/Dunkirk_Film_poster.jpg",
        language: "English",
        rating: 7.8,
        trailerUrl: "https://www.youtube.com/watch?v=F-eMt3SrfFU"
    },
    {
        title: "Arrival",
        overview: "A linguist is recruited by the military to assist in translating the communication of an extraterrestrial species that has initiated contact with Earth.",
        director: "Denis Villeneuve",
        writer: "Eric Heisserer",
        cast: ["Amy Adams", "Jeremy Renner", "Forest Whitaker", "Michael Stuhlbarg", "Tzi Ma"],
        releaseYear: 2016,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        runtime: 116,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/d/df/Arrival_2016_poster.png",
        language: "English",
        rating: 7.9,
        trailerUrl: "https://www.youtube.com/watch?v=tFDBes3Wmek"
    },
    {
        title: "Zodiac",
        overview: "Between 1968 and 1983, a San Francisco cartoonist becomes an amateur detective obsessed with tracking down the Zodiac Killer, an unidentified individual who terrorizes the Northern California area with a killing spree.",
        director: "David Fincher",
        writer: "James Vanderbilt",
        cast: ["Jake Gyllenhaal", "Mark Ruffalo", "Robert Downey Jr.", "Anthony Edwards", "Brian Cox"],
        releaseYear: 2007,
        genres: ["Crime", "Drama", "Mystery"],
        runtime: 157,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/3/3a/Zodiac2007Poster.jpg",
        language: "English",
        rating: 7.7,
        trailerUrl: "https://www.youtube.com/watch?v=y9y7mnW15s0"
    },
    {
        title: "The Sixth Sense",
        overview: "Malcolm Crowe, a child psychologist, starts treating a young boy, Cole, who encounters dead people. Cole helps Malcolm reconcile with his estranged wife.",
        director: "M. Night Shyamalan",
        writer: "M. Night Shyamalan",
        cast: ["Bruce Willis", "Haley Joel Osment", "Toni Collette", "Olivia Williams", "Donnie Wahlberg"],
        releaseYear: 1999,
        genres: ["Drama", "Mystery", "Thriller"],
        runtime: 107,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/a/a9/The_Sixth_Sense_poster.png",
        language: "English",
        rating: 8.2,
        trailerUrl: "https://www.youtube.com/watch?v=J8C-yM-Yp1E"
    },
    {
        title: "Blade Runner",
        overview: "A blade runner must pursue and terminate four replicants who stole a ship in space and have returned to Earth to find their creator.",
        director: "Ridley Scott",
        writer: "Hampton Fancher and David Peoples",
        cast: ["Harrison Ford", "Rutger Hauer", "Sean Young", "Edward James Olmos", "M. Emmet Walsh"],
        releaseYear: 1982,
        genres: ["Action", "Sci-Fi", "Thriller"],
        runtime: 117,
        posterUrl: "https://upload.wikimedia.org/wikipedia/en/9/9f/Blade_Runner_%281982_poster%29.png",
        language: "English",
        rating: 8.1,
        trailerUrl: "https://www.youtube.com/watch?v=eogpIG53Cis"
    }
];

async function main() {
    console.log("Start seeding...");

    // Check if we have a user
    let user;
    if (userId) {
        user = await prisma.user.findUnique({
            where: { id: userId }
        });
    }

    if (!user) {
        // Find the first user in the database
        user = await prisma.user.findFirst();
    }

    if (!user) {
        // Create a default seed user if none exists
        user = await prisma.user.create({
            data: {
                name: "Seed User",
                email: "seeduser@example.com",
                password: "password123", // In a real production seed we would hash, but simple seed is fine
            }
        });
        console.log(`Created seed user: ${user.email} (${user.id})`);
    } else {
        console.log(`Using existing user: ${user.email} (${user.id})`);
    }

    for (const movie of movies) {
        const movieData = {
            ...movie,
            createdBy: user.id
        };

        // Check if movie already exists for this user to avoid duplicates
        const existingMovie = await prisma.movie.findFirst({
            where: {
                title: movie.title,
                createdBy: user.id
            }
        });

        if (existingMovie) {
            console.log(`Movie "${movie.title}" already exists, updating...`);
            await prisma.movie.update({
                where: { id: existingMovie.id },
                data: movieData
            });
        } else {
            console.log(`Creating movie "${movie.title}"...`);
            await prisma.movie.create({
                data: movieData
            });
        }
    }

    console.log("Seeding finished.");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });