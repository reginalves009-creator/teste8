// Banco de dados dos livros da livraria
const livros = [
    {
        id: 1,
        titulo: "O massacre da família Hope",
        autor: "Riley Sager",
        categoria: "Suspense",
        preco: 24.48,
        selo: "Mais Vendido",
        capaCor: "linear-gradient(135deg, #4A2B36 0%, #7B3F4C 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTneovHUtYQS7RHoni-Q4q0crWceSPGxM18CrAhKuM22DSPwQyeDyfJD8U&s=10",
        sinopse: "Em 1929, a família Hope foi brutalmente assassinada em sua mansão no Maine, e a única sobrevivente foi Lenora, então com dezessete anos. Décadas depois, uma cuidadora é contratada para cuidar de Lenora, agora muda e presa a uma cadeira de rodas, mas logo descobre que a história oficial esconde segredos sombrios."
    },
    {
        id: 2,
        titulo: "É Assim que Acaba",
        autor: "Colleen Hoover",
        categoria: "Romance",
        preco: 24.60,
        selo: "Edição Limitada",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #4A2B36 100%)",
        imagem: "https://m.media-amazon.com/images/I/91r5G8RxqfL.jpg",
        sinopse: "Lily nem sempre teve uma vida fácil, mas isso nunca a impediu de trabalhar arduamente para conquistar a vida tão sonhada. Ao se apaixonar por Ryle, um neurocirurgião brilhante, ela acredita ter encontrado o relacionamento perfeito, até que segredos do passado vêm à tona."
    },
    {
        id: 3,
        titulo: "Grays anatomia básica",
        autor: "Richard Drake",
        categoria: "Ficção Medica",
        preco: 79.90,
        selo: "Edições Clássicas / Históricas",
        capaCor: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
        imagem: "https://covers.vitalbook.com/vbid/9788595151789/width/480",
        sinopse: "Obra de referência essencial que apresenta os fundamentos da anatomia humana com ilustrações detalhadas, correlações clínicas e abordagens práticas para estudantes e profissionais da área da saúde."
    },
    {
        id: 4,
        titulo: "Harry Potter e a Pedra Filosofal",
        autor: "J.K. Rowling",
        categoria: "Romântico",
        preco: 49.90,
        selo: "Edição Limitada",
        capaCor: "linear-gradient(135deg, #8B0000 0%, #A52A2A 100%)",
        imagem: "https://rocco.com.br/wp-content/uploads/2024/04/9786555324013.jpg",
        sinopse: "Harry Potter é um garoto órfão que vive infeliz com seus tios até receber uma carta misteriosa no seu aniversário de onze anos: um convite para estudar na Escola de Magia e Bruxaria de Hogwarts."
    },
    {
        id: 5,
        titulo: "O Senhor dos Anéis",
        autor: "J.R.R. Tolkien",
        categoria: "Fantasia",
        preco: 59.90,
        selo: "Edição Especial",
        capaCor: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0fPRI-8I3AkjCvzaizhqUbu8W_VG93eHax83Cf1qixw&s=10",
        sinopse: "Em uma terra fantástica e única chamada Terra-média, um hobbit recebe de presente de seu tio um anel mágico e maligno que precisa ser destruído antes que caia nas mãos do Senhor do Escuro, Sauron."
    },
    {
        id: 6,
        titulo: "As Crônicas de Nárnia - Edição de Luxo: A última batalha",
        autor: "C.S. Lewis",
        categoria: "Ação",
        preco: 69.90,
        selo: "Edição Especial",
        capaCor: "linear-gradient(135deg, #2C3E50 0%, #34495E 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=-vfEEAAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0nMc2aV1n2VTD_aLtLDsci8ox2aQ&w=1280",
        sinopse: "Nos últimos dias de Nárnia, a terra enfrenta seu desafio mais sombrio: não um invasor de fora, mas um inimigo interno que usa mentiras e traição. Apenas o rei Tirian e seus aliados podem lutar pela verdade."
    },
    {
        id: 7,
        titulo: "It: A Coisa",
        autor: "Stephen King",
        categoria: "Terror",
        preco: 64.90,
        selo: "Clássico do Terror",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/91g9Dvtf+jL.jpg",
        sinopse: "Durante as férias de 1958, em uma pacata cidadezinha chamada Derry, um grupo de sete amigos começa a ver coisas estranhas. Um conta que viu um palhaço, outro que viu uma múmia. Finalmente, acabam descobrindo que estavam todos vendo a mesma coisa: um ser sobrenatural e maligno."
    },

    {
        id:8,
        titulo:"O Segredo Final",
        autor:"Dan Brown",
        categoria:"Ação",
        preco: 33.24,
        selo:"Editora Arqueiro",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem:"https://images-na.ssl-images-amazon.com/images/I/619zAI-cZmL._AC_UL232_SR232,232_.jpg",
        sinopse:"Durante uma viagem a Praga para assistir a uma palestra da cientista Katherine Solomon, o simbologista Robert Langdon vê um assassinato brutal transformar o evento em caos. Com o desaparecimento de Katherine e de um manuscrito explosivo sobre a consciência humana, Langdon entra em uma corrida eletrizante por Londres e Nova York enquanto é perseguido por uma poderosa organização."

    },

    {
        id: 9,
        titulo:"Duna (Crônicas de Duna Livro 1)",
        autor:"Frank Herbert." ,
        categoria:"Ação" ,
        preco:  60.48 ,
        selo: " Aleph.",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/817WfcVZakL.jpg",
        sinopse:"No planeta desértico de Arrakis, única fonte da substância mais valiosa do universo, o jovem Paul Atreides e sua família são alvos de uma traição política devastadora. Para sobreviver e vingar seu povo, Paul precisa liderar os nativos fremen em uma batalha épica pelo controle do planeta."

    },

    {
        id: 10,
        titulo:"O Cemitério",
        autor: "Stephen King",
        categoria:" Terror ",
        preco: 67.14,
        selo: "Suma",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRAWPv_IFTXUMAIOvp_4tEw0dlZTmPeyvaSKwUYthydwytLCrmYkT7TGIkOyj8msMGtoAc9wqNbSBmtclNQw-sOo_CTfrcF",
        sinopse:"Após se mudar com a família para o interior do Maine, o médico Louis Creed descobre um antigo cemitério de animais no bosque que esconde uma força maligna capaz de trazer os mortos de volta à vida — mas com consequências terríveis."
    },

    {
        id: 11,
        titulo:"Melhor do que nos filmes",
        autor: "Lynn Painter",
        categoria:"Romance",
        preco:79.90  ,
        selo: "Sem selo disponivel",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=otmtEAAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U06dlHoIS32jzK-8MYbATy1s2q5vw&w=1280",
        sinopse:" Elizabeth Buxbaum adora comédias românticas e quer conquistar o amor de infância, Michael Young, no último ano do ensino médio. Para isso, pede ajuda ao vizinho que considera irritante, Wesley Bennett, e acaba repensando suas ideias sobre o amor"
    },

    {
        id: 11,
        titulo:"Imagens estranhas",
        autor: "Uketsu",
        categoria:"Suspense",
        preco: 31.30 ,
        selo: "Selo Suma (Grupo Companhia das Letras)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=OdpFEQAAQBAJ&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U18Sr2h3KcfboNbNM6LHW2Ozyr_Bg&w=1280",
        sinopse:" Desenhos aparentemente simples e inocentes escondem mistérios ligados entre si. O leitor acompanha ilustrações feitas por uma gestante, o desenho de uma criança sobre a própria casa e o traço de uma vítima de homicídio para montar o quebra-cabeça por trás de cada imagem"
    },

   {
        id: 12,
        titulo:"Nós já moramos aqui",
        autor: "Marcus Kliewer",
        categoria:"Suspense",
        preco:  36.10,
        selo: "Editora Intrínseca",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=MB9rEQAAQBAJ&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1lPOaHKWrKR3jts9A53Y1wZgQRxA&w=1280",
        sinopse:"Casadas, Charlie e Eve compram uma casa antiga no interior do Oregon para reformar. Quando uma família chega dizendo que morou ali décadas atrás e Eve permite a entrada, desaparecimentos, aparições e eventos estranhos fazem Eve duvidar da própria realidade."
    },

    {
        id: 13,
        titulo:"Pedra Papel Tesoura",
        autor: "Alice Feeney",
        categoria:"Suspense",
        preco: 49.89 ,
        selo: "DarkSide Books ",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=qjn_EQAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0zYXX21UvKyUJ2zxZcKnYiLFryQg&w=1280",
        sinopse:" Tentando salvar um casamento de dez anos marcado por ressentimentos, Adam e Amelia Wright viajam para um retiro isolado. Uma tempestade de neve e segredos do casal transformam o fim de semana em um jogo psicológico tenso."
    },

    {
        id: 14,
        titulo:"Romance com o Duque (Tessa Dare)",
        autor: "Tessa Dare",
        categoria:"Romance",
        preco: 69.80,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=n5vTCwAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U112hU8lu9MMaWSWSqir9umvUsIww&w=1280",
        sinopse:"Isolde Izzy Goodnight, filha de um escritor de contos de fadas, herda um castelo em ruínas onde vive um duque recluso e de língua afiada, dando início a uma história romântica com humor e reviravoltas"
    },

    {
        id: 15,
        titulo:"Um defeito de cor – Edição especial (Ana Maria Gonçalves)",
        autor: "Ana Maria Gonçalves",
        categoria:"Romance ",
        preco: 209.90,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=nK2GEAAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3hcKjnSvvtXqHCaIEKhHAmKoh5fw&w=1280",
        sinopse:" Acompanha a trajetória de Kehinde, sequestrada aos oito anos no Reino do Daomé e levada para a Bahia, relatando seus amores, perdas, busca por um filho, alforria e retorno à África no século XIX."
    },

    {
        id: 16,
        titulo:"O Físico: A epopeia de um médico medieval",
        autor: "Noah Gordon",
        categoria:"Ficção Medica",
        preco: 97.67 ,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/content?id=1OGqgwTfDxIC&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U2BlR19h6vV0r6jYZA4pSZrC2K17A&w=1280",
        sinopse:" Na Inglaterra do século XI, o órfão Rob J. Cole descobre o dom de prever a morte e aprende os primeiros passos da cura com um cirurgião itinerante. Determinado a aprimorar a medicina, viaja até a Pérsia para estudar com grandes mestres da época, enfrentando desafios culturais, perigos e o conflito entre ciência e fé"
    },

    {
        id: 17,
        titulo:"Quarta Asa (Rebecca Yarros)",
        autor: "Rebecca Yarros ",
        categoria:"Romance",
        preco: 74.93,
        selo: "Fantasia / Romantasia",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRso64UNxaiXerquoRdM9Vt580fPbQJwO816_xwrxX_GQ8D2TX4XpxVzk5w-MRmWGWtkaqN&s",
        sinopse:"Violet Sorrengail esperava ingressar na Divisão dos Escribas, mas sua mãe, general comandante de Navarre, a obriga a entrar no brutal treinamento para cavaleiros de dragões na Academia Militar Basgiath, onde a regra é se formar ou morrer em meio a intrigas e ameaças ao reino."
    },

    {
        id: 18,
        titulo:"A Vida Invisível de Addie LaRue (V.E. Schwab)",
        autor: "V.E. Schwab | Categoria: Fantasia",
        categoria:"Romance",
        preco: 72.10,
        selo: "Galera / Grupo Editorial Record",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=zPo0EAAAQBAJ&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1mYrZscIRfrgwzFj5eqn4CJeKSpg&w=1280",
        sinopse:"Na França de 1714, Addie LaRue faz um pacto pela vida eterna, mas recebe a maldição de ser esquecida por todos assim que saem de sua presença — até que, trezentos anos depois, em uma livraria, encontra alguém que se lembra dela."
    },

    {
        id: 19,
        titulo:"01 - Jujutsu Kaisen - Batalha de Feiticeiros",
        autor: "Gege Akutami.",
        categoria:"Mangás",
        preco: 49.49  ,
        selo: "Planet Mangá",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDp286EavjWYZv4QXKY-O_gOuefVL8NXkzhMG_wKYv6CcDRzLUvgn0_KVx&s=10",
        sinopse:"O estudante colegial Yuuji Itadori possui grande força física e participa do Clube de Ocultismo. Após seus colegas retirarem o selo de um objeto amaldiçoado e atraírem criaturas chamadas maldições, Itadori entra em ação para salvá-los."
    },

    {
        id: 20,
        titulo:"01 - Chainsaw Man",
        autor: "Tatsuki Fujimoto.",
        categoria:" Mangás",
        preco: 35.18,
        selo: "Planet Mangá",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/51fn+xj2ubL._SY445_SX342_ML2_.jpg",
        sinopse:"Denji é um jovem endividado que trabalha como caçador de demônios ao lado de Pochita, seu demônio de estimação. Após uma traição brutal, ele ganha uma nova chance de vida fundido a um demônio-motosserra."
    },

    {
        id: 21,
        titulo:"One Piece 3 em 1 Vol. 16",
        autor: " Eiichiro Oda",
        categoria:"Mangás ",
        preco:89.90 ,
        selo: "Planet Mangá (Panini)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://preview.redd.it/finally-caught-up-with-the-anime-aaaand-thriller-bark-is-v0-s79g7tljumbg1.jpeg?auto=webp&s=8f84f475e34883a81342dc67d6c47a4b73e6f430",
        sinopse:"Compila os volumes 46, 47 e 48. Ace alcança o infame Barba Negra enquanto o Bando do Chapéu de Palha entra no Triângulo Amaldiçoado. Presos na ilha fantasma Thriller Bark, a tripulação se divide e precisa enfrentar zumbis e o temível Shichibukai Gecko Moria, que rouba sombras e controla a arma secreta Oars"
    },

    {
        id: 22,
        titulo:"O circo da noite — Erin Morgenstern",
        autor: "Erin Morgenstern",
        categoria:"Fantasia",
        preco: 108.50,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=fU6pEAAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U2qzmdFhIpfrYzQ8OAjbj9UINHkyQ&w=1280",
        sinopse:"Um circo misterioso que só abre à noite (Le Cirque des Rêves) serve de cenário para um duelo mágico entre dois jovens treinados desde a infância, Celia e Marco, que acabam se apaixonando."  
    },

    {
        id: 23,
        titulo:"O príncipe cruel (Vol. 1 O Povo do Ar)",
        autor: " Holly Black",
        categoria:"Fantasia",
        preco: 64.90,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=YYoREQAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U3yK9p9IVaSWzLuFjqmq_2CK7Tojw&w=1280",
        sinopse:" Jude, uma garota mortal criada no traiçoeiro Reino das Fadas após o assassinato dos pais, enfrenta o cruel príncipe Cardan para conquistar espaço na corte e proteger suas irmãs em meio a intrigas e traições."
    },

    {
        id: 24,
        titulo:"Sob Pressão: A Rotina de Guerra de Um Médico Brasileiro",
        autor: "Márcio Maranhão / Karla Monteiro",
        categoria:"Ficção Medica",
        preco:  39.90 ,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=y2U-DwAAQBAJ&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U3oobA9kG9NtnDWVCRUOTaYZZGECw&w=1280",
        sinopse:"Relato real do médico Márcio Maranhão (com texto de Karla Monteiro) sobre os desafios das emergências hospitalares e da saúde pública no Brasil."
    },

    {
        id: 25,
        titulo:"O vilarejo ",
        autor: "Raphael Montes (com ilustrações de Marcelo Damm)",
        categoria:"Terror",
        preco: 53.31 ,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=qM5xCgAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U1tHhfLfcV_vy4Vh8hwL7QQdVfjEA&w=1280",
        sinopse:"Fala sobre moradores de um vilarejo isolado em lenta degradação sob neve e fome, inspiradas nos sete pecados capitais e nos demônios de Peter Binsfeld."
    },

    {
        id: 26,
        titulo:"Fragmentos do Horror ",
        autor: "Junji Ito",
        categoria:"Terror",
        preco: 84.90,
        selo: "Terror / Mangá (Tokyo Terror)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRStKWuh5vYcL0z3fWBuv3VQGOiFGp_RhtjFddwx6YBSpIuMUCrdh4Jbmdj&s=10",
        sinopse:"Coletânea de nove histórias curtas que misturam surrealismo e horror grotesco, incluindo uma mansão de madeira que gira sobre seus moradores e um funeral em que os mortos não descansam."
    },

    {
        id: 27,
        titulo:"O Exorcista",
        autor: " William Peter Blatty",
        categoria:"Terror",
        preco:  44.71 ,
        selo: "HarperCollins Brasil",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://harpercollins.com.br/cdn/shop/files/9788522015443_1200x1200.jpg?v=1792661544",
        sinopse:"Quando a jovem Regan, de 11 anos, começa a apresentar comportamentos violentos e inexplicáveis pela medicina, sua mãe recorre ao padre Damien Karras para enfrentar uma entidade demoníaca."
    },

    {
        id: 28,
        titulo:"O Cavaleiro dos Sete Reinos",
        autor: "George R. R. Martin.",
        categoria:" Ação",
        preco:  83.88 ,
        selo: "Suma (Grupo Companhia das Letras) — Edição Especial em capa dura.",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb9oedidl3FrR4tkOiN1G7FVuqjfRNtHvmUDSuUEXYcQ&s=10",
        sinopse:" Ambientado décadas antes de As Crônicas de Gelo e Fogo, acompanha as jornadas de Sor Duncan, o Alto, e seu jovem escudeiro Egg por Westeros em busca de glória, enfrentando torneios, duelos e intrigas políticas."
    },

    {
        id: 29,
        titulo:"A Guerra dos Furacões",
        autor: "Thea Guanzon.",
        categoria:"Ação",
        preco: 42.98 ,
        selo: "Alt (Globo Livros).",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/61i+gJ6noEL._AC_UF1000,1000_QL80_.jpg",
        sinopse:"Nas linhas de frente de uma guerra brutal, Talasyn, uma soldada com o poder extinto da luz, e Alaric, o implacável herdeiro do Império da Noite que domina as sombras, precisam formar uma frágil aliança no campo de batalha quando suas magias se fundem"
    },

    {
        id: 30,
        titulo:"Eles Merecem a Morte",
        autor: "Peter Swanson.",
        categoria:"Ação",
        preco: 11.23 ,
        selo: "Globo Livros.",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/91Nb6iEr81L._UF1000,1000_QL80_.jpg",
        sinopse:"Após confessar a uma desconhecida no aeroporto o desejo de matar sua esposa infiel, Ted inicia uma perigosa corrida contra o tempo em que assassinos, vítimas e um detetive tentam estar sempre dois passos à frente para sobreviver."
    },

    {
        id: 31,
        titulo:"Jantar Secreto — Raphael Montes",
        autor: "Raphael Montes",
        categoria:"Suspense",
        preco: 61.59,
        selo: "Companhia das Letras",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=2o0pEQAAQBAJ&hl=pt-PT&pg=PA1&img=1&zoom=3&bul=1&sig=ACfU3U1q0nk0Wy8ZySrXjhW6aIfI3A2bqQ&w=1280",
        sinopse:"Jovens de uma cidade pequena do Paraná mudam-se para Copacabana, no Rio de Janeiro, e passam a organizar jantares secretos para a elite carioca a fim de pagar o aluguel e a faculdade, envolvendo-se em crimes e segredos sombrios."
    },

    {
        id: 32,
        titulo:"Verity — Colleen Hoover:",
        autor: "Colleen Hoover",
        categoria:"Suspense ",
        preco:32.45  ,
        selo: " Galera (Grupo Editorial Record)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://books.google.com.br/books/publisher/content?id=9igGEQAAQBAJ&hl=pt-PT&pg=PP1&img=1&zoom=3&bul=1&sig=ACfU3U0GKmyc-qC4ffmXwoqaA2PNqpk7tg&w=1280",
        sinopse:"A escritora Lowen Ashleigh é contratada para concluir a série de Verity Crawford após um acidente grave e encontra uma autobiografia reveladora na casa da família que muda tudo ao seu redor."
    },

    {
        id: 33,
        titulo:"O que os Médicos Não Contam",
        autor: "Matt McCarthy.",
        categoria:"",
        preco: 25.12,
        selo: "Planeta ",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/61lYfbPjlbL.jpg",
        sinopse:"Com humor ácido e honestidade, o dr. Matt McCarthy narra sua transição da faculdade em Harvard para a prática como residente plantonista, revelando os desafios reais, os erros iniciais e o lado humano dos profissionais nos hospitais."
    },

    {
        id: 34,
        titulo:"Histórias de Médico",
        autor: "Fábio Monastero.",
        categoria:"Ficção Medica",
        preco:70.20 ,
        selo: " Editora Mizuno.",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://www.editoramizuno.com.br/cdn/shop/files/3b0c8b82ccaad2cd934ddf8c26f2a283.jpg?v=1729777593",
        sinopse:"Coletânea de contos e crônicas bem-humoradas vividas ao longo da carreira de um cirurgião brasileiro, retratando plantões, trotes de residência e episódios curiosos da medicina paulista sem foco em dramas pesados."
    },

    {
        id: 35,
        titulo:"A Incrível História da Medicina",
        autor: "Jean-Noël Fabiani (ilustrações de Philippe Bercovici).",
        categoria:"Ficção Medica ",
        preco: 45.52,
        selo: "HarperCollins Brasil",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/81fWbNpT8bL.jpg",
        sinopse:"Narrada em quadrinhos com bom humor, a obra percorre a evolução da medicina desde a pré-história e as primeiras médicas do Egito Antigo até a invenção das vacinas, cirurgias modernas e o combate à covid-19."
    },

    {
        id: 36,
        titulo:"Tempestade de Ônix",
        autor: "Rebecca Yarros",
        categoria:"Fantasia",
        preco: 56.60,
        selo: "Planeta Minotauro",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPvwc_z71zP4fyj682-uRo83ZQQoJXamXjQXdKFtU4PuR_ej_dxnJxJ0A5yScwWpRh4FOSQ&s",
        sinopse:" Após quase dezoito meses no Instituto Militar Basgiath e com a guerra declarada, Violet Sorrengail viaja além das defesas de Aretia em busca de aliados para Navarre enquanto guarda um segredo decisivo para proteger dragões, família e aliados."
    },

    {
        id: 37,
        titulo:"A Crônica do Matador do Rei - Livro 1",
        autor: "Patrick Rothfuss",
        categoria:"Fantasia",
        preco: 64.90,
        selo: "Editora Arqueiro",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/91b8oNwaV1L.jpg",
        sinopse:"Kvothe é um homem que se tornou uma lenda ainda em vida: um mago notório, músico talentoso e assassino infame. Escondido sob uma identidade falsa em uma pacata hospedaria, ele decide finalmente contar a verdadeira história de sua vida desde a infância em uma trupe itinerante."
    },

    {
        id: 38,
        titulo:"Trono de Vidro (Volume 1)",
        autor: "Sarah J. Maas",
        categoria:"Fantasia",
        preco:52.90 ,
        selo: "Galera Record",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU1GYdR3HniKW8nAGa4cJNPOyht0A8BtElA-cPl4f-ci2A8fuOkk0rj6YU&s=10",
        sinopse:"Aos dezoito anos, Celaena Sardothien é a assassina mais temida de Adarlan. Condenada a trabalhos forçados nas minas de sal, ela recebe uma proposta inesperada do príncipe herdeiro: conquistar sua liberdade vencendo um torneio mortal para se tornar a campeã do rei."
    },

    {id: 39,
        titulo:"Demon Slayer: Kimetsu no Yaiba - Vol. 1",
        autor: "Koyoharu Gotouge",
        categoria:"Mangás",
        preco: 34.90,
        selo: "Planet Mangá (Panini)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/81owI24VWWL._AC_UF1000,1000_QL80_.jpg",
        sinopse:"No Japão da era Taisho, o bondoso Tanjiro Kamado ganha a vida vendendo carvão. Sua rotina pacífica desmorona quando sua família é massacrada por um demônio e sua irmã mais nova, Nezuko, é transformada em uma criatura demoníaca, levando-o a se tornar um caçador de onis para encontrar a cura."
    },

    {
        id: 40,
        titulo:"Attack on Titan (Ataque dos Titãs) - Vol. 1",
        autor: "Hajime Isayama",
        categoria:"Mangás",
        preco: 36.90,
        selo: "Planet Mangá (Panini)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/91M9VaZWxOL.jpg",
        sinopse:"Há mais de um século, a humanidade vive confinada atrás de três muralhas gigantescas para se proteger dos Titãs, criaturas colossais que devoram humanos. Quando um Titã Colossal rompe a muralha externa, o jovem Eren Yeager jura exterminar todos eles."
    },

    {
        id: 41,
        titulo:"Spy x Family - Vol. 1",
        autor: "Tatsuya Endo",
        categoria:"Mangás",
        preco: 37.90,
        selo: "Planet Mangá (Panini)",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/71vMGRog+iL.jpg",
        sinopse:"Para cumprir uma missão secreta que pode evitar uma guerra entre duas nações, o agente de elite Twilight precisa formar uma família falsa em uma semana. O que ele não sabe é que sua filha adotiva é telepata e sua esposa de fachada é uma assassina profissional."
    },

    {
        id: 42,
        titulo:"Grande Sertão: Veredas",
        autor: "João Guimarães Rosa.",
        categoria:"Outros",
        preco: 24.90,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://m.media-amazon.com/images/I/91KUbozCH5L.jpg",
        sinopse:"O ex-jagunço Riobaldo narra suas travessias pelo sertão de Minas Gerais, refletindo sobre o bem e o mal, a violência das disputas entre bandos e seu amor proibido e misterioso pelo companheiro de armas Diadorim."
    },

    {
        id: 43,
        titulo:"O Auto da Compadecida",
        autor: "Ariano Suassuna",
        categoria:"Outros",
        preco: 30.00,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://martinsfontespaulista.vteximg.com.br/arquivos/ids/1618802-1000-1000/838884.jpg?v=638454376957800000",  
        sinopse:"Ambientada no sertão nordestino, a peça acompanha as astúcias de João Grilo e seu companheiro Chicó para sobreviver às dificuldades e enganar figuras locais como o padre, o sacristão, o padeiro e sua esposa. Após episódios cômicos e a chegada de um bando de cangaceiros, os personagens enfrentam um julgamento sobrenatural com a presença do diabo, de Jesus e de Nossa Senhora (a Compadecida), que intercede pelos réus"
    },

    {
        id: 44,
        titulo:"O Pequeno Príncipe - Edição de luxo Almofadada",
        autor: "Antoine de Saint-Exupéry",
        categoria:"Outros",
        preco: 17.33,
        selo: "Editora Principis",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9EjGuGd8f5FvaQlpvFwLXm_FNwP9OlSgrtkPtuhaR8Q&s=10",
        sinopse:"Um piloto perdido no deserto do Saara encontra um jovem príncipe vindo de um pequeno asteroide. A narrativa poética e filosófica aborda amizade, amor, imaginação e o olhar dos adultos sobre o mundo."
    },

    {
        id: 45,
        titulo:"Noites Brancas",
        autor: "Fiódor Dostoiévski",
        categoria:"Outros",
        preco: 25.00 ,
        selo: "Edição de luxo almofadada ",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://http2.mlstatic.com/D_NQ_NP_752104-MLB113715444203_062026-O.webp",
        sinopse:"Durante as noites claras do verão de São Petersburgo, um jovem sonhador e solitário conhece Nástenka e vive encontros intensos e breves marcados por esperança, afeto e desilusão."
    },

    {
        id: 46,
        titulo:"O Livro dos Dinossauros e da Vida Pré-Histórica",
        autor: "Anusuya Chinsamy-Turan",
        categoria:"Outros",
        preco: 79.70,
        selo: "",
        capaCor: "linear-gradient(135deg, #1F1B1C 0%, #8B0000 100%)",
        imagem: "https://sextante.com.br/cdn/shop/files/Olivrodosdinossaurosedavidapre_u-histo_urica.png?v=1768246353",
        sinopse:"Viagem no tempo até as origens da vida na Terra, reunindo fotos de fósseis, ilustrações e curiosidades sobre mais de 90 espécies de plantas e animais pré-históricos, incluindo tiranossauro, tricerátops, magnólias e mamute-lanoso."
    },

];

let curtidos = JSON.parse(localStorage.getItem('alemDasPaginas_curtidos')) || [];
let sacola = JSON.parse(localStorage.getItem('sacolasoffcanvas')) || [];

function garantirModalNoHTML() {
    if (document.getElementById('modalDetalhesLivro')) return;

    const modalHTML = `
        <div class="modal fade" id="modalDetalhesLivro" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content border-0 rounded-4 overflow-hidden shadow">
                    <div class="modal-header border-0 pb-0">
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Fechar"></button>
                    </div>
                    <div class="modal-body p-4 pt-2" id="conteudoModalLivro"></div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function serializarLivro(livro) {
    return JSON.stringify(livro)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function renderizarLivros() {
    const grid = document.getElementById('livrosGrid');
    if (!grid) return;
    grid.innerHTML = '';

    const categoriaDaPagina = (document.body.getAttribute('data-categoria') || 'Todas').trim().toLowerCase();

    const livrosFiltrados = livros.filter(livro => {
        if (categoriaDaPagina === 'todas') return true;
        return livro.categoria.trim().toLowerCase() === categoriaDaPagina;
    });

    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
        resultsCount.innerText = `Mostrando ${livrosFiltrados.length} obras`;
    }

    if (livrosFiltrados.length === 0) {
        grid.innerHTML = '<div class="col-12"><p class="text-muted">Nenhuma obra encontrada nesta categoria.</p></div>';
        return;
    }

    livrosFiltrados.forEach(livro => {
        const isFavorito = curtidos.some(item => item.id === livro.id);
        const livroJson = serializarLivro(livro);

        grid.innerHTML += `
            <div class="col">
                <div class="card livro-card h-100 shadow-sm p-3">
                    <button type="button" onclick='abrirDetalhesLivro(${livroJson})' class="btn-capa-clicavel border-0 bg-transparent p-0 mb-3 rounded-3 overflow-hidden" title="Clique para ver a sinopse">
                        <img src="${livro.imagem}" alt="Capa do livro ${livro.titulo}" class="capa-principal rounded-3">
                    </button>

                    <span class="badge bg-light text-dark border align-self-start mb-2">${livro.selo}</span>
                    <h6 class="fw-bold font-serif mb-1" style="font-size: 1.15rem;">${livro.titulo}</h6>
                    <p class="text-muted small mb-2">${livro.autor}</p>
                    
                    <div class="mt-auto d-flex justify-content-between align-items-center pt-2 border-top">
                        <span class="fw-bold" style="color: var(--vinho-destaque);">R$ ${livro.preco.toFixed(2).replace('.', ',')}</span>
                        <div class="d-flex gap-2">
                            <button type="button" onclick='alternarCurtida(${livroJson})' class="btn-coracao ${isFavorito ? 'favoritado text-danger' : 'text-dark'} border-0 bg-transparent" title="Curtir">
                                <i class="fa-${isFavorito ? 'solid' : 'regular'} fa-heart fs-5"></i>
                            </button>
                            <button type="button" onclick='adicionarNaSacola(${livroJson})' class="btn btn-sm btn-dark rounded-pill px-3">Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
}

function abrirDetalhesLivro(livro) {
    garantirModalNoHTML();

    const container = document.getElementById('conteudoModalLivro');
    const modalEl = document.getElementById('modalDetalhesLivro');
    if (!container || !modalEl) return;

    const livroJson = serializarLivro(livro);

    container.innerHTML = `
        <div class="row g-4 align-items-center">
            <div class="col-md-5 text-center">
                <img src="${livro.imagem}" alt="${livro.titulo}" class="img-fluid rounded-3 shadow" style="max-height: 340px; object-fit: contain; background-color: var(--bg-main); padding: 12px;">
            </div>
            
            <div class="col-md-7 d-flex flex-column">
                <span class="badge align-self-start mb-2" style="background-color: var(--vinho-destaque);">${livro.selo}</span>
                <h3 class="font-serif fw-bold mb-1">${livro.titulo}</h3>
                <p class="text-muted mb-3">Por <strong>${livro.autor}</strong> • Categoria: ${livro.categoria}</p>
                
                <h6 class="fw-bold text-uppercase small text-muted mb-1">Sinopse</h6>
                <p class="mb-4" style="line-height: 1.6; text-align: justify;">
                    ${livro.sinopse || 'Sinopse indisponível para esta edição no momento.'}
                </p>
                
                <div class="mt-auto pt-3 border-top d-flex align-items-center justify-content-between">
                    <div>
                        <small class="text-muted d-block">Valor da edição</small>
                        <span class="fs-4 fw-bold" style="color: var(--vinho-destaque);">R$ ${Number(livro.preco).toFixed(2).replace('.', ',')}</span>
                    </div>
                    <button type="button" onclick='comprarPeloModal(${livroJson})' class="btn btn-dark rounded-pill px-4 py-2 fw-semibold">
                        <i class="fa-solid fa-bag-shopping me-2"></i>Comprar Agora
                    </button>
                </div>
            </div>
        </div>
    `;

    if (typeof bootstrap !== 'undefined') {
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
    }
}

function comprarPeloModal(livro) {
    const modalEl = document.getElementById('modalDetalhesLivro');
    const instancia = modalEl && typeof bootstrap !== 'undefined' ? bootstrap.Modal.getInstance(modalEl) : null;
    if (instancia) instancia.hide();

    adicionarNaSacola(livro);
}

function abrirOffcanvas(idElemento) {
    const el = document.getElementById(idElemento);
    if (!el || typeof bootstrap === 'undefined') return;
    bootstrap.Offcanvas.getOrCreateInstance(el).show();
}

function alternarCurtida(livro) {
    const indice = curtidos.findIndex(item => item.id === livro.id);
    if (indice === -1) {
        curtidos.push(livro);
    } else {
        curtidos.splice(indice, 1);
    }
    localStorage.setItem('alemDasPaginas_curtidos', JSON.stringify(curtidos));
    renderizarLivros();
    renderizarCurtidos();
    abrirOffcanvas('curtidosOffcanvas');
}

function adicionarNaSacola(livro) {
    sacola.push(livro);
    localStorage.setItem('sacolasoffcanvas', JSON.stringify(sacola));
    renderizarSacola();
    abrirOffcanvas('sacolasoffcanvas');
}

function removerDaSacola(indice) {
    sacola.splice(indice, 1);
    localStorage.setItem('sacolasoffcanvas', JSON.stringify(sacola));
    renderizarSacola();
}

function finalizarCompra() {
    if (sacola.length === 0) return;
    alert('Sua compra foi finalizada com sucesso!');
    sacola = [];
    localStorage.removeItem('sacolasoffcanvas');
    renderizarSacola();

    const el = document.getElementById('sacolasoffcanvas');
    const instancia = el && typeof bootstrap !== 'undefined' ? bootstrap.Offcanvas.getInstance(el) : null;
    if (instancia) instancia.hide();
}

function renderizarCurtidos() {
    const contador = document.getElementById('favCount');
    const container = document.getElementById('listaCurtidos');
    if (contador) contador.textContent = curtidos.length;
    if (!container) return;

    if (curtidos.length === 0) {
        container.innerHTML = '<p class="text-muted text-center my-4">Nenhum livro curtido ainda.</p>';
        return;
    }

    container.innerHTML = curtidos.map(livro => {
        const dadosLivro = serializarLivro(livro);
        return `
            <div class="item-gaveta d-flex align-items-center justify-content-between gap-2">
                <div class="d-flex align-items-center gap-2">
                    <img src="${livro.imagem || ''}" alt="${livro.titulo}" style="width: 45px; height: 65px; object-fit: cover;" class="rounded">
                    <div>
                        <div class="fw-bold small">${livro.titulo}</div>
                        <div class="text-muted small">${livro.autor || ''}</div>
                        <div class="small fw-semibold">R$ ${Number(livro.preco).toFixed(2).replace('.', ',')}</div>
                    </div>
                </div>
                <div class="d-flex gap-1">
                    <button type="button" class="btn btn-sm btn-dark rounded-pill px-2" onclick='adicionarNaSacola(${dadosLivro})' title="Comprar">
                        Comprar
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-danger rounded-circle" onclick='alternarCurtida(${dadosLivro})' title="Remover">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

function renderizarSacola() {
    const contador = document.getElementById('cartCount');
    const container = document.getElementById('listaSacola');
    const totalEl = document.getElementById('valorTotalSacola');

    if (contador) contador.textContent = sacola.length;
    if (!container) return;

    if (sacola.length === 0) {
        container.innerHTML = '<p class="text-muted text-center my-4">Sua sacola está vazia.</p>';
        if (totalEl) totalEl.textContent = '0,00';
        return;
    }

    const total = sacola.reduce((soma, item) => soma + Number(item.preco), 0);

    container.innerHTML = sacola.map((livro, indice) => `
        <div class="item-gaveta d-flex align-items-start justify-content-between gap-2">
            <div class="d-flex align-items-start gap-2">
                <img src="${livro.imagem || ''}" alt="${livro.titulo}" style="width: 48px; height: 68px; object-fit: cover;" class="rounded">
                <div>
                    <span class="badge bg-secondary mb-1">${livro.selo || 'Livro'}</span>
                    <div class="fw-bold small">${livro.titulo}</div>
                    <div class="text-muted" style="font-size: 0.78rem;">Autor: ${livro.autor || ''}</div>
                    <div class="text-muted" style="font-size: 0.78rem;">Categoria: ${livro.categoria || ''}</div>
                    <div class="fw-bold text-success small mt-1">R$ ${Number(livro.preco).toFixed(2).replace('.', ',')}</div>
                </div>
            </div>
            <button type="button" class="btn btn-sm btn-outline-dark rounded-circle" onclick="removerDaSacola(${indice})" title="Remover item">
                <i class="fa-solid fa-xmark"></i>
            </button>
        </div>
    `).join('');

    if (totalEl) {
        totalEl.textContent = total.toFixed(2).replace('.', ',');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    garantirModalNoHTML();
    renderizarLivros();
    renderizarCurtidos();
    renderizarSacola();

    const btnFinalizar = document.getElementById('checkoutButton');
    if (btnFinalizar) {
        btnFinalizar.addEventListener('click', finalizarCompra);
    }
});