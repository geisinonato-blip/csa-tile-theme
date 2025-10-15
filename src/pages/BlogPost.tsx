import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import fabricaImage from "@/assets/fabrica-aerea.png";
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
      title: "A História da Cerâmica Santo Antônio: Tradição, Qualidade e Raízes em Ribeirão das Neves",
      date: "15 de Janeiro, 2024",
      image: fabricaImage,
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A <strong>Cerâmica Santo Antônio</strong> nasceu de um sonho simples e poderoso: transformar o solo de <strong>Justinópolis</strong>, em <strong>Ribeirão das Neves (MG)</strong>, em um símbolo de construção, resistência e esperança.
            Desde o início, cada tijolo fabricado carrega uma história de <strong>trabalho, união familiar e dedicação</strong> — valores que até hoje definem a marca.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🌾 De um sonho familiar a uma referência regional</h2>
          <p className="leading-relaxed mb-4">
            O que começou de forma artesanal, no terreno onde morava o fundador <strong>Antônio Cândido Filho (o querido Seu Antônio)</strong>, tornou-se uma <strong>fábrica sólida e respeitada</strong>, atendendo <strong>Belo Horizonte, Contagem, Venda Nova, Santa Luzia, Vespasiano e toda a região metropolitana</strong>.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🔥 O início: tijolo por tijolo, um legado construído com esforço</h2>
          <p className="leading-relaxed mb-4">
            Nos primeiros anos, o cenário era desafiador.
            Não havia galpões estruturados, e os tijolos eram <strong>cobertos com lonas para proteger da chuva</strong>. Cada temporal trazia prejuízos, mas também fortalecia a vontade de seguir em frente.
          </p>
          <p className="leading-relaxed mb-4">
            Com o apoio dos filhos, amigos e vizinhos, Seu Antônio <strong>transformou dificuldades em aprendizado</strong> e fez da cerâmica um exemplo de <strong>persistência e resiliência mineira</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            Aos poucos, vieram as melhorias: o primeiro barracão, os fornos a lenha, a modernização do maquinário e o aumento da produção — sempre mantendo o cuidado artesanal que fez a <strong>Cerâmica Santo Antônio</strong> ser reconhecida como uma das <strong>melhores fábricas de tijolos da região de Justinópolis</strong>.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🏗️ Crescimento com propósito</h2>
          <p className="leading-relaxed mb-4">
            Com o passar das décadas, a empresa foi ganhando estrutura, ampliando a equipe e consolidando parcerias com <strong>depósitos de construção e construtoras</strong> de toda a Grande BH.
            A produção cresceu, mas o propósito nunca mudou: <strong>entregar qualidade com preço justo</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            Hoje, a <strong>Cerâmica Santo Antônio</strong> é referência quando o assunto é <strong>tijolos 8 e 12 furos</strong>, fabricados com rigor técnico, matéria-prima selecionada e um compromisso inegociável com o cliente.
          </p>
          <p className="leading-relaxed mb-4">
            A empresa se orgulha de ter mantido o mesmo espírito familiar do início, onde <strong>cada funcionário é parte da história e cada cliente, uma extensão dessa trajetória</strong>.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🚚 Da fábrica ao canteiro: agilidade e confiança</h2>
          <p className="leading-relaxed mb-4">
            Além da qualidade dos produtos, a cerâmica se destaca pelo <strong>atendimento rápido e frete eficiente</strong>.
            Com frota própria e logística organizada, garante <strong>entregas pontuais</strong> em toda a região metropolitana de Belo Horizonte — especialmente em <strong>Ribeirão das Neves, Justinópolis, Contagem, Venda Nova, Santa Luzia e Vespasiano</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            Essa agilidade é um dos diferenciais que mais fideliza os clientes.
            Quem compra uma vez, volta — e indica.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🧩 Tradição que atravessa gerações</h2>
          <p className="leading-relaxed mb-4">
            Mais do que uma fábrica, a <strong>Cerâmica Santo Antônio</strong> representa um <strong>legado de família</strong>.
            Hoje, os descendentes do fundador continuam a missão com o mesmo cuidado e paixão, mantendo viva a essência de quem acreditou que <strong>um tijolo pode ir muito além da construção: pode erguer histórias, famílias e futuros</strong>.
          </p>

          <h2 className="text-2xl font-bold text-primary mt-8 mb-4">🌟 Compromisso com o futuro</h2>
          <p className="leading-relaxed mb-4">
            Com uma gestão moderna, atenção à sustentabilidade e foco na satisfação do cliente, a Cerâmica Santo Antônio segue crescendo, <strong>mantendo-se como símbolo de tradição e qualidade em Minas Gerais</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            Porque mais do que produzir tijolos, a CSA <strong>constrói confiança</strong> — tijolo por tijolo, obra por obra, geração após geração.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-primary">
              🌟 Tradição, qualidade e confiança que atravessam gerações — atendendo BH, Justinópolis e toda a região metropolitana com excelência.
            </p>
          </div>
        </div>
      )
    },
    "origem-csa-trajetoria-fundador": {
      title: "A História do Fundador da Cerâmica Santo Antônio: Trabalho, Família e Tijolo por Tijolo",
      date: "22 de Janeiro, 2024",
      image: fabricaImage,
      content: (
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            A história da <strong>Cerâmica Santo Antônio</strong> começa muito antes dos primeiros tijolos serem moldados.
            Ela nasce com <strong>Antônio Cândido Filho</strong>, conhecido com carinho em toda <strong>Justinópolis</strong> como <strong>"Seu Antônio" ou "Sinô"</strong> — um homem simples, trabalhador e com uma visão rara: construir algo que durasse mais que o tempo.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">De agricultor dedicado a empreendedor visionário</h3>
          <p className="leading-relaxed mb-4">
            Antes de ser ceramista, Seu Antônio era <strong>agricultor</strong>. Ele cultivava verduras frescas que vendia pessoalmente no tradicional <strong>Mercado da Avenida Olegário Maciel</strong>, em Belo Horizonte.
            Foi ali, entre bancas e conversas com fregueses, que ele aprendeu o verdadeiro valor da dedicação e da confiança — princípios que levaria para toda a sua vida.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">O primeiro caminhão e o espírito de colaboração</h3>
          <p className="leading-relaxed mb-4">
            Para facilitar o transporte das verduras, <strong>Seu Antônio comprou seu primeiro caminhão</strong>.
            Mas ele não o usava apenas para o próprio negócio — também ajudava outros agricultores da região, transportando suas colheitas.
            Era assim: <strong>trabalho duro, amizade e solidariedade</strong> caminhando lado a lado.
          </p>
          <p className="leading-relaxed mb-4">
            Com o tempo, ele expandiu sua plantação, tornando-se também <strong>grande produtor de tomates e morangos</strong>.
            Quando decidiu encerrar o ciclo como agricultor, arrendou o terreno para familiares continuarem o trabalho — uma prova do seu compromisso em <strong>preservar as raízes e fortalecer a família</strong>.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">Uma nova fase: o transporte coletivo</h3>
          <p className="leading-relaxed mb-4">
            Empreendedor nato, Seu Antônio <strong>adquiriu uma pequena empresa de ônibus</strong>.
            Mesmo atuando por pouco tempo no ramo, essa experiência mostrou-lhe a importância da <strong>organização e da logística</strong>, habilidades que se tornariam fundamentais na próxima grande jornada da sua vida: <strong>a fabricação de tijolos</strong>.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">O nascimento da Cerâmica Santo Antônio</h3>
          <p className="leading-relaxed mb-4">
            Foi em seu próprio terreno, onde residia com a família, que <strong>nasceu a Cerâmica Santo Antônio</strong>.
            No início, as dificuldades eram muitas — <strong>não havia galpão</strong>, e os <strong>tijolos recém-fabricados eram cobertos com lonas</strong> improvisadas para proteger da chuva.
          </p>
          <p className="leading-relaxed mb-4">
            Quando o tempo virava, era <strong>correria geral</strong>:
          </p>
          
          <blockquote className="border-l-4 border-primary bg-primary/5 p-4 my-6 italic">
            <p className="leading-relaxed">
              "Ao primeiro sinal de chuva, todos saíam de casa correndo para cobrir as pilhas de tijolos."
            </p>
          </blockquote>

          <p className="leading-relaxed mb-4">
            Essa lembrança, contada com emoção pelos filhos até hoje, resume bem o espírito que construiu a cerâmica: <strong>união familiar, esforço coletivo e amor pelo que se faz</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            Mesmo enfrentando perdas e prejuízos em dias de temporal, <strong>Seu Antônio não desistiu</strong>.
            Ele sabia que cada tijolo representava mais do que barro e fogo — era o símbolo de <strong>trabalho, persistência e fé no futuro</strong>.
          </p>

          <h3 className="text-2xl font-bold text-primary mt-8 mb-4">🧩 Tijolo por tijolo, a base de uma tradição</h3>
          <p className="leading-relaxed mb-4">
            O que começou como uma pequena produção artesanal se transformou, ao longo dos anos, em uma <strong>referência em qualidade e confiança</strong> em <strong>Ribeirão das Neves e toda a região metropolitana de Belo Horizonte</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            A <strong>Cerâmica Santo Antônio</strong> não é apenas uma fábrica — é um <strong>legado familiar</strong> construído sobre valores sólidos: <strong>honestidade, resiliência e amor pelo trabalho</strong>.
          </p>
          <p className="leading-relaxed mb-4">
            E é por isso que, mesmo décadas depois, o nome <strong>Santo Antônio</strong> segue sendo sinônimo de <strong>tradição, qualidade e preço justo</strong> — porque nasceu das mãos de alguém que acreditava que <strong>as maiores obras da vida são construídas em família</strong>.
          </p>

          <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mt-8">
            <p className="text-lg font-semibold text-primary">
              👊 De agricultor a empreendedor: uma jornada de superação que construiu não apenas uma cerâmica, mas um legado de trabalho, união e tradição.
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
