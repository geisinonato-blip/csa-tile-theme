import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fabricaImage from "@/assets/fabrica-ceramica.jpg";
import tijolo8 from "@/assets/tijolo-8-furos.jpg";
import tijolo12 from "@/assets/tijolo-12-furos.jpg";

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const articles: Record<string, {
    title: string;
    date: string;
    content: JSX.Element;
    image: string;
  }> = {
    "historia-ceramica-santo-antonio": {
      title: "História da Cerâmica Santo Antônio — 1976 até hoje",
      date: "15 de Janeiro, 2024",
      image: fabricaImage,
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A Cerâmica Santo Antônio nasceu em 1976, em um momento crucial do desenvolvimento de Ribeirão das Neves e da região metropolitana de Belo Horizonte. O que começou como um empreendimento familiar se transformou, ao longo de quase cinco décadas, em uma das cerâmicas mais respeitadas de Minas Gerais.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Os Primeiros Anos (1976-1985)</h3>
          <p className="leading-relaxed mb-4">
            No final da década de 1970, a região de Justinópolis começava a experimentar um crescimento acelerado. Foi nesse contexto que a família fundadora da CSA identificou uma oportunidade: fornecer tijolos de qualidade para atender a crescente demanda por materiais de construção.
          </p>
          <p className="leading-relaxed mb-4">
            Com um pequeno forno e um time enxuto de colaboradores, a Cerâmica Santo Antônio iniciou suas atividades focada em dois pilares que permanecem até hoje: <strong>qualidade do produto</strong> e <strong>preço justo</strong>. Desde o início, a empresa optou por um modelo de negócio direto — sem intermediários — permitindo oferecer preços competitivos sem comprometer a excelência.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Expansão e Consolidação (1985-2000)</h3>
          <p className="leading-relaxed mb-4">
            Durante os anos 1980 e 1990, a CSA investiu em modernização de equipamentos e ampliação da capacidade produtiva. Novos fornos foram construídos, permitindo que a cerâmica produzisse volumes maiores sem perder o controle rigoroso de qualidade que se tornou sua marca registrada.
          </p>
          <p className="leading-relaxed mb-4">
            Nesse período, a empresa também consolidou sua presença regional, passando a atender não apenas Ribeirão das Neves e Justinópolis, mas também Belo Horizonte, Venda Nova e Contagem. A reputação de seus tijolos — especialmente os modelos de 8 e 12 furos — espalhou-se entre construtoras, depósitos de material de construção e clientes finais.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Século XXI: Tradição e Inovação</h3>
          <p className="leading-relaxed mb-4">
            Nos anos 2000, a Cerâmica Santo Antônio enfrentou o desafio de manter sua relevância em um mercado cada vez mais competitivo e globalizado. A resposta foi clara: preservar os valores tradicionais enquanto adota práticas modernas de gestão e produção.
          </p>
          <p className="leading-relaxed mb-4">
            A empresa investiu em processos sustentáveis, melhorou a logística de entregas com frota própria e manteve o compromisso com a negociação direta. Essa combinação de tradição e modernidade permitiu que a CSA chegasse ao século XXI como referência regional.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Presente e Futuro</h3>
          <p className="leading-relaxed mb-4">
            Hoje, a Cerâmica Santo Antônio orgulha-se de sua trajetória de quase 50 anos. A empresa mantém a mesma filosofia que a guiou desde o início: <strong>produzir tijolos de alta qualidade com preço justo</strong>, servindo obras de todos os portes — de pequenas reformas residenciais a grandes empreendimentos comerciais.
          </p>
          <p className="leading-relaxed mb-4">
            Com produção própria, matéria-prima selecionada e uma equipe experiente, a CSA continua sendo a escolha preferida de quem busca <strong>comprar tijolos em BH e região metropolitana</strong> com a garantia de um nome consolidado pela história.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-primary">
              💪 De 1976 até hoje: construindo o futuro com a solidez de quase cinco décadas de tradição e compromisso com a excelência.
            </p>
          </div>
        </div>
      )
    },
    "origem-csa-trajetoria-fundador": {
      title: "A origem da CSA e trajetória do fundador",
      date: "22 de Janeiro, 2024",
      image: fabricaImage,
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Por trás da Cerâmica Santo Antônio está uma história de visão, trabalho árduo e dedicação à comunidade. Entenda como tudo começou e os valores que guiam nossa produção até hoje.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">O Começo de Tudo</h3>
          <p className="leading-relaxed mb-4">
            A história da CSA está intimamente ligada à região de Justinópolis, em Ribeirão das Neves. Na década de 1970, a área começava a se desenvolver, atraindo famílias em busca de moradias mais acessíveis próximas a Belo Horizonte. Foi nesse cenário que nosso fundador identificou uma oportunidade de servir à comunidade local.
          </p>
          <p className="leading-relaxed mb-4">
            Vindo de uma família com tradição em trabalhos manuais e construção civil, ele reconheceu que a região precisava de um fornecedor confiável de tijolos de qualidade. Mas, mais do que isso, viu a chance de criar algo duradouro — uma empresa que pudesse crescer junto com a comunidade.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Os Valores Fundamentais</h3>
          <p className="leading-relaxed mb-4">
            Desde o primeiro dia, três princípios nortearam a criação da Cerâmica Santo Antônio:
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Qualidade sem concessões:</strong> Cada tijolo produzido deveria atender aos mais altos padrões, independentemente da classificação (1ª linha, requeimado ou 2ª linha).</li>
            <li><strong>Preço justo:</strong> Eliminar intermediários para oferecer o melhor custo-benefício diretamente ao cliente.</li>
            <li><strong>Compromisso com a comunidade:</strong> Ser mais do que um fornecedor — ser um parceiro confiável para construtoras, depósitos e famílias locais.</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Crescimento e Desafios</h3>
          <p className="leading-relaxed mb-4">
            Os primeiros anos não foram fáceis. Estabelecer uma cerâmica exige investimentos significativos em equipamentos, matéria-prima e mão de obra qualificada. Mas a determinação do fundador e o apoio da família permitiram superar os obstáculos iniciais.
          </p>
          <p className="leading-relaxed mb-4">
            Aos poucos, a reputação da CSA se espalhou. Clientes satisfeitos recomendavam os tijolos para amigos, vizinhos e profissionais da construção. O boca a boca positivo foi essencial para o crescimento da empresa, que logo passou a atender não apenas Ribeirão das Neves, mas também Belo Horizonte, Venda Nova e Contagem.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Legado e Continuidade</h3>
          <p className="leading-relaxed mb-4">
            Quase 50 anos depois, a Cerâmica Santo Antônio continua fiel à visão de seu fundador. A empresa permanece comprometida com os mesmos valores de qualidade, preço justo e atendimento diferenciado que a tornaram referência regional.
          </p>
          <p className="leading-relaxed mb-4">
            Hoje, a segunda geração da família está envolvida nas operações, trazendo novas ideias enquanto preserva o legado de excelência. A missão permanece clara: fornecer os melhores tijolos de Minas Gerais, contribuindo para que cada cliente construa seus sonhos com solidez e confiança.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-primary">
              🏆 Uma história de trabalho, dedicação e compromisso — construindo não apenas tijolos, mas relações de confiança que atravessam gerações.
            </p>
          </div>
        </div>
      )
    },
    "tipos-tijolos-8-12-furos": {
      title: "Tipos de tijolos: 8 e 12 furos — resistência, economia e uso ideal",
      date: "29 de Janeiro, 2024",
      image: tijolo8,
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Escolher o tijolo certo é fundamental para o sucesso da sua obra. Entenda as diferenças entre os tijolos de 8 e 12 furos e qual é o mais adequado para cada tipo de construção.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Tijolo 8 Furos (9 x 19 x 29 cm)</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <img src={tijolo8} alt="Tijolo 8 furos" className="rounded-lg shadow-medium" />
            <div>
              <h4 className="text-xl font-semibold mb-3">Características Principais:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Dimensões: 9 x 19 x 29 cm</li>
                <li>8 furos distribuídos uniformemente</li>
                <li>Peso aproximado: 2,5 kg</li>
                <li>Ideal para paredes de vedação</li>
                <li>Excelente isolamento térmico e acústico</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-primary mb-3">Quando usar o tijolo 8 furos?</h4>
          <p className="leading-relaxed mb-4">
            O tijolo de 8 furos é a escolha mais comum para construções residenciais. Sua estrutura equilibrada oferece boa resistência mecânica, ao mesmo tempo que mantém o peso relativamente baixo — facilitando o manuseio e reduzindo a carga sobre a estrutura.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Aplicações ideais:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Paredes internas e externas de casas</li>
            <li>Sobrados e pequenos prédios</li>
            <li>Muros de fechamento</li>
            <li>Churrasqueiras e fornos</li>
            <li>Obras residenciais em geral</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Tijolo 12 Furos (14 x 19 x 29 cm)</h3>
          
          <div className="grid md:grid-cols-2 gap-6 my-6">
            <img src={tijolo12} alt="Tijolo 12 furos" className="rounded-lg shadow-medium" />
            <div>
              <h4 className="text-xl font-semibold mb-3">Características Principais:</h4>
              <ul className="list-disc list-inside space-y-2">
                <li>Dimensões: 14 x 19 x 29 cm</li>
                <li>12 furos para maior resistência</li>
                <li>Peso aproximado: 3,5 kg</li>
                <li>Ideal para paredes estruturais</li>
                <li>Superior isolamento térmico</li>
              </ul>
            </div>
          </div>

          <h4 className="text-lg font-semibold text-primary mb-3">Quando usar o tijolo 12 furos?</h4>
          <p className="leading-relaxed mb-4">
            O tijolo de 12 furos é mais robusto e oferece resistência adicional, sendo ideal para construções que exigem maior capacidade de suporte. Sua espessura maior (14 cm) também proporciona melhor isolamento térmico e acústico.
          </p>
          <p className="leading-relaxed mb-4">
            <strong>Aplicações ideais:</strong>
          </p>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li>Edifícios de múltiplos andares</li>
            <li>Paredes estruturais que receberão carga</li>
            <li>Construções comerciais e industriais</li>
            <li>Áreas que exigem maior isolamento acústico</li>
            <li>Regiões com temperaturas extremas</li>
          </ul>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Classificações de Qualidade</h3>
          <p className="leading-relaxed mb-4">
            Tanto os tijolos de 8 quanto os de 12 furos estão disponíveis em três classificações na Cerâmica Santo Antônio:
          </p>
          
          <div className="space-y-4 mb-6">
            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-bold text-lg mb-2">1ª Linha Premium</h5>
              <p>Tijolos com acabamento superior, dimensões precisas e alta resistência mecânica. Ideais para fachadas e áreas visíveis.</p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-bold text-lg mb-2">Requeimado</h5>
              <p>Tijolos com coloração mais escura devido ao processo de queima prolongada. Mais firmes, econômicos e excelentes para estruturas que ficarão revestidas.</p>
            </div>
            
            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-bold text-lg mb-2">2ª Linha</h5>
              <p>Tijolos com pequenas variações estéticas, mas que mantêm qualidade estrutural. Excelente custo-benefício para obras básicas e áreas que receberão revestimento.</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Dicas para Escolher</h3>
          <ul className="list-disc list-inside space-y-2 mb-4">
            <li><strong>Para residências térreas:</strong> Tijolo 8 furos oferece excelente relação custo-benefício</li>
            <li><strong>Para sobrados e edifícios:</strong> Tijolo 12 furos garante maior segurança estrutural</li>
            <li><strong>Para fachadas:</strong> Opte por tijolos de 1ª linha premium</li>
            <li><strong>Para economia:</strong> Requeimados e 2ª linha são ótimas opções para paredes internas</li>
            <li><strong>Para isolamento:</strong> Tijolo 12 furos é superior em conforto térmico e acústico</li>
          </ul>

          <div className="bg-accent/10 border-l-4 border-accent p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold">
              📞 Tem dúvidas sobre qual tijolo escolher para sua obra? Nossa equipe está pronta para ajudar! Entre em contato pelo WhatsApp (31) 98468-0246 e receba orientação personalizada.
            </p>
          </div>
        </div>
      )
    }
  };

  const article = slug ? articles[slug] : null;

  if (!article) {
    navigate("/");
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero do artigo */}
        <section className="relative min-h-[400px] flex items-center bg-gradient-to-r from-primary/90 to-secondary/90">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${article.image})` }}
          />
          <div className="container mx-auto px-4 relative z-10">
            <Button
              variant="ghost"
              onClick={() => navigate("/")}
              className="mb-6 text-white hover:text-white/90"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao site
            </Button>
            <div className="max-w-4xl">
              <div className="flex items-center gap-2 text-white/90 mb-4">
                <Calendar className="h-5 w-5" />
                <span>{article.date}</span>
              </div>
              <h1 className="text-white mb-6">{article.title}</h1>
            </div>
          </div>
        </section>

        {/* Conteúdo do artigo */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <article className="max-w-4xl mx-auto">
              {article.content}
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPost;
