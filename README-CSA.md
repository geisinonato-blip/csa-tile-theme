# 🧱 Site Cerâmica Santo Antônio

Site institucional completo da **Cerâmica Santo Antônio (CSA)**, fábrica de tijolos localizada em Ribeirão das Neves, Minas Gerais.

## 🎯 Objetivo

Gerar orçamentos e pedidos diretos via WhatsApp, atraindo depósitos, construtoras e clientes finais.

## ✨ Funcionalidades

- ✅ **Hero Section** impactante com CTA WhatsApp
- ✅ **Catálogo de Produtos** (tijolos 8 e 12 furos, 3 classificações)
- ✅ **Calculadora de Tijolos** funcional com envio direto ao WhatsApp
- ✅ **Seção Sobre** com história da empresa desde 1976
- ✅ **Área de Entrega** com regiões atendidas
- ✅ **Blog** com 3 artigos completos e otimizados
- ✅ **Diferenciais** da cerâmica
- ✅ **CTAs estratégicos** em todas as seções
- ✅ **Footer completo** com informações de contato
- ✅ **Botão flutuante WhatsApp**
- ✅ **100% Responsivo** (mobile-first)
- ✅ **SEO Completo** (meta tags, schema JSON-LD, sitemap)

## 📱 Informações de Contato

- **WhatsApp**: (31) 98468-0246
- **Endereço**: Rua Antônio Cândido Rocha, 05, Labanca (Justinópolis), Ribeirão das Neves – MG, CEP 33900-670
- **Horário**: Segunda a sexta, 7h às 17h
- **Domínio**: tijoloscsa.com.br

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **Vite** (build tool)
- **Tailwind CSS** (estilização)
- **Shadcn/ui** (componentes)
- **React Router** (navegação)
- **Lucide React** (ícones)

## 🚀 Como Executar Localmente

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview do build
npm run preview
```

## 📦 Deploy

Consulte o arquivo `DEPLOYMENT-GUIDE.md` para instruções detalhadas de deploy na Hostinger ou outras plataformas.

## 🎨 Design System

O projeto utiliza um design system completo com cores da identidade da cerâmica:

- **Primária**: Terracota/Vermelho Tijolo
- **Secundária**: Marrom Terra
- **Acento**: Amarelo Queimado
- **Background**: Tons neutros claros

Todas as cores utilizam HSL e estão definidas em `src/index.css` e `tailwind.config.ts`.

## 📊 SEO

O site está completamente otimizado para SEO local:

- Meta tags completas (title, description, keywords)
- Schema JSON-LD para LocalBusiness
- Open Graph e Twitter Cards
- Sitemap XML
- Semântica HTML5 correta
- Alt text em todas as imagens
- Conteúdo otimizado com palavras-chave:
  - Comprar tijolos em BH
  - Comprar tijolos em Justinópolis
  - Comprar tijolos em Ribeirão das Neves
  - Comprar tijolos em Venda Nova
  - Fábrica de tijolos MG
  - Tijolos 8 furos
  - Tijolos 12 furos

## 📱 Integração WhatsApp

Todos os CTAs e formulários direcionam para o WhatsApp oficial:
- Número: (31) 98468-0246
- Mensagens pré-formatadas para facilitar o atendimento
- Calculadora envia detalhes do orçamento automaticamente

## 🧮 Calculadora de Tijolos

Funcionalidade exclusiva que permite ao cliente:
- Selecionar tipo de tijolo (8 ou 12 furos)
- Adicionar múltiplas paredes
- Informar dimensões de portas/janelas
- Calcular automaticamente a quantidade necessária
- Enviar orçamento detalhado via WhatsApp

Fórmula: `tijolos = área_total × 17` (já inclui margem de segurança)

## 📝 Blog

3 artigos completos e otimizados:
1. **História da Cerâmica Santo Antônio** — 1976 até hoje
2. **A origem da CSA e trajetória do fundador**
3. **Tipos de tijolos**: 8 e 12 furos — resistência, economia e uso ideal

Cada artigo possui:
- 500-700 palavras
- SEO otimizado
- Imagens relevantes
- Estrutura semântica correta

## 🎭 Mascote CSA

O site inclui um mascote personalizado (tijolo antropomórfico com capacete amarelo) que aparece em:
- Seção de Diferenciais
- CTAs principais
- Elementos decorativos

## 📁 Estrutura do Projeto

```
src/
├── assets/              # Imagens geradas
│   ├── logo-csa.png
│   ├── hero-tijolos.jpg
│   ├── mascote-csa.png
│   ├── tijolo-8-furos.jpg
│   ├── tijolo-12-furos.jpg
│   └── fabrica-ceramica.jpg
├── components/          # Componentes React
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Products.tsx
│   ├── Features.tsx
│   ├── Delivery.tsx
│   ├── About.tsx
│   ├── Calculator.tsx
│   ├── Blog.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── FloatingWhatsApp.tsx
│   └── ui/             # Componentes Shadcn
├── pages/              # Páginas
│   ├── Index.tsx       # Home
│   ├── BlogPost.tsx    # Template de artigos
│   └── NotFound.tsx    # 404
├── index.css           # Design system
└── App.tsx             # Configuração de rotas
```

## 🎯 Próximos Passos

Após o deploy, considere:

1. **Google Business Profile** — Criar/otimizar perfil
2. **Google Analytics** — Acompanhar visitantes
3. **Google Search Console** — Monitorar SEO
4. **Campanhas Google Ads** — Para palavras-chave locais
5. **Fotos Reais** — Substituir imagens geradas por fotos da fábrica
6. **Depoimentos** — Adicionar avaliações de clientes
7. **Promoções** — Seção de ofertas sazonais

## 📄 Licença

Desenvolvido para Cerâmica Santo Antônio. Todos os direitos reservados.

---

**Desenvolvido com ❤️ usando Lovable**
**Data: Janeiro 2024**
