import { NextResponse } from "next/server";

let posts: Post[] = [
  {
    id: 1,
    title: "Impacto da Volatilidade dos Preços do Petróleo na Economia Global",
    description:
      "A flutuação constante dos preços do petróleo afeta setores como transporte e produção industrial, criando desafios para a estabilidade econômica de países que dependem da commodity.",
    content:
      "A volatilidade dos preços do petróleo continua a impactar a economia global, afetando desde os custos de transporte até a produção industrial. Com flutuações frequentes devido a tensões geopolíticas e mudanças na oferta e demanda, países dependentes de importações e exportações de petróleo enfrentam desafios significativos para manter a estabilidade econômica.",
    date: "2024-05-19",
  },
  {
    id: 2,
    title: "Transição Energética: O Papel do Petróleo no Futuro Sustentável",
    description:
      "Mesmo com o avanço das energias renováveis, o petróleo continua vital para a matriz energética mundial. Políticas e investimentos são necessários para reduzir gradualmente a dependência dos combustíveis fósseis.",
    content:
      "Apesar dos esforços crescentes em direção a uma transição energética sustentável, o petróleo ainda desempenha um papel crucial na matriz energética mundial. A necessidade de equilibrar a demanda atual com iniciativas de energia limpa exige políticas bem delineadas e investimentos substanciais em tecnologia renovável para reduzir gradualmente a dependência dos combustíveis fósseis.",
    date: "2024-05-20",
  },
  {
    id: 3,
    title:
      "Exploração e Produção de Petróleo no Ártico: Controvérsias e Desafios",
    description:
      "A exploração de petróleo no Ártico é uma questão polêmica, envolvendo promessas de novos recursos energéticos e preocupações ambientais, além das dificuldades técnicas de operar em um ambiente extremo.",
    content:
      "A exploração de petróleo no Ártico permanece um tema controverso, com debates acirrados entre ambientalistas e a indústria petrolífera. As promessas de novos recursos energéticos são confrontadas com os riscos ambientais e as complexidades técnicas da exploração em condições extremas, levantando questões sobre a viabilidade e os impactos a longo prazo dessa atividade.",
    date: "2024-05-20",
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (id) {
    const post = posts.find((p) => p.id === Number(id));
    if (post) {
      return NextResponse.json(post);
    } else {
      return NextResponse.json({ message: "Post not found" }, { status: 404 });
    }
  }

  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const { title, content, description } = await request.json();
  // make it dynamic
  // const date = Date.now().toString();
  const date = "2024-05-20";
  const newPost = { id: posts.length + 1, title, content, description, date };
  posts.push(newPost);
  return NextResponse.json(newPost, { status: 201 });
}
