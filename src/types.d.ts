interface Member {
    id: string;
    login: string;
    avatar_url: string;
}


interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;

    created: string;
    episode: string[];
    origin: { name: string };
    location: { name: string };
    gender: string;
    type: string;
    dimension: string;
    residents: string[];
    url: string;
}