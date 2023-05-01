interface IData {
  imgUrl: string;
  imgAlt: string;
  caption: string;
  title: string;
  description: string;
}

export const dbFake: IData[] = [
  {
    imgUrl: "https://media.gettyimages.com/id/165719514/pt/foto/peru-de-a%C3%A7%C3%A3o-de-gra%C3%A7as.jpg?s=612x612&w=0&k=20&c=AtQeX2oJ0azyE21SquI3NYqtznLMobgXxQfAipRcWoo=",
    imgAlt: "Perú de natal",
    caption: "Dezembro 10, 2022",
    title: "Aprenda a fazer o melhor peru de Natal: dicas e truques para uma receita deliciosa e suculenta",
    description: "Se você está procurando por uma receita de peru de Natal incrível, este artigo é para você. Aqui você vai encontrar dicas valiosas para escolher o peru perfeito, temperá-lo de forma saborosa e assá-lo com perfeição."
  },
  {
    imgUrl: "https://media.gettyimages.com/id/154948669/pt/foto/sopa-de-legumes.jpg?s=612x612&w=0&k=20&c=HY9RLqUrZ3YEIGoeBOPuf8m7z7eK1e-KhsXM166DThw=",
    imgAlt: "Sopa de Legumes",
    caption: "Janeiro 05, 2023",
    title: "Aprenda a fazer uma sopa de legumes deliciosa e saudável: a receita perfeita para dias frios",
    description: "Para aquecer o corpo e a alma nos dias mais frios, nada melhor do que uma sopa de legumes caseira. Neste artigo, vamos ensinar uma receita deliciosa e saudável, com legumes frescos e temperos que vão realçar o sabor. Aprenda o passo a passo para preparar essa sopa reconfortante, perfeita para aquecer as noites de inverno."
  },
  {
    imgUrl: "https://media.gettyimages.com/id/157615990/pt/foto/lasanha.jpg?s=612x612&w=0&k=20&c=-mosQOrHkEhLB7hOm6u4spZtvLGfj3gPl_yaL3TpBYU=",
    imgAlt: "Lasanha",
    caption: "Janeiro 15, 2023",
    title: "Lasanha de dar água na boca: aprenda a fazer a receita perfeita em casa",
    description: "Quem não ama uma boa lasanha? Neste artigo, vamos compartilhar a receita perfeita para uma lasanha deliciosa, com molho de tomate caseiro, massa fresca e um recheio incrível. Aprenda a fazer a lasanha perfeita, camada por camada, e surpreenda seus amigos e familiares com um prato italiano clássico feito em casa."
  },
  {
    imgUrl: "https://media.gettyimages.com/id/1336693855/pt/foto/chocolate-bundt-cake-with-chocolate-ganache.jpg?s=612x612&w=0&k=20&c=kQgzBOcLP59FAfz8tdcz7agqYTbBxknjY-XzIzzC9V4=",
    imgAlt: "Bolo de chocolate",
    caption: "Fevereiro 20, 2023",
    title: "Bolo de chocolate irresistível: aprenda a fazer a receita perfeita",
    description: "Quem resiste a um bolo de chocolate fofinho e saboroso? Neste artigo, vamos ensinar como preparar um bolo de chocolate incrível, com uma receita simples e fácil de seguir. Com dicas de como escolher os ingredientes certos e a maneira correta de misturar, você terá um bolo de chocolate irresistível em pouco tempo."
  },
]
