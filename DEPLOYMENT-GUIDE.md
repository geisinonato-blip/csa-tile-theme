# 📦 Guia de Deploy — Cerâmica Santo Antônio

## 🚀 Deploy na Hostinger (Recomendado)

### Passo 1: Build do Projeto

No seu computador, execute:

```bash
# Instalar dependências
npm install

# Criar build de produção
npm run build
```

Isso criará uma pasta `dist/` com todos os arquivos otimizados.

### Passo 2: Upload via FTP

1. Acesse o **hPanel** da Hostinger
2. Vá em **Arquivos** → **Gerenciador de Arquivos**
3. Navegue até `public_html` (ou a pasta do domínio tijoloscsa.com.br)
4. Faça upload de **todos os arquivos** da pasta `dist/`
5. Certifique-se de que o arquivo `index.html` está na raiz

### Passo 3: Configurar .htaccess (Importante!)

Crie um arquivo `.htaccess` na raiz com o seguinte conteúdo:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Habilitar compressão GZIP
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>

# Cache de arquivos estáticos
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
  ExpiresByType application/pdf "access plus 1 month"
</IfModule>
```

### Passo 4: Configurar Domínio

1. No hPanel, vá em **Domínios**
2. Certifique-se de que `tijoloscsa.com.br` está apontando para a pasta correta
3. Ative o **SSL gratuito** (HTTPS)
4. Aguarde a propagação DNS (pode levar até 24h)

---

## 🌐 Deploy Alternativo (Vercel/Netlify)

### Vercel (Gratuito):

1. Crie uma conta em [vercel.com](https://vercel.com)
2. Instale o Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. No diretório do projeto:
   ```bash
   vercel --prod
   ```
4. Configure o domínio personalizado no painel do Vercel

### Netlify (Gratuito):

1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `dist/` para o painel do Netlify
3. Configure o domínio personalizado

---

## 📝 Checklist Pré-Deploy

Antes de fazer o deploy, verifique:

- [ ] Todas as imagens foram geradas
- [ ] Todos os links do WhatsApp estão corretos
- [ ] O número (31) 98468-0246 está em todos os CTAs
- [ ] SEO meta tags estão configuradas
- [ ] O site está responsivo em mobile
- [ ] A calculadora funciona corretamente
- [ ] Links do blog funcionam
- [ ] Todas as seções têm IDs corretos para navegação

---

## 🔧 Configurações Pós-Deploy

### 1. Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. Adicione a propriedade `tijoloscsa.com.br`
3. Verifique via DNS ou meta tag
4. Envie o sitemap (se criado)

### 2. Google Business Profile

1. Crie/reivindique o perfil no Google Business
2. Adicione:
   - Nome: Cerâmica Santo Antônio
   - Endereço: Rua Antônio Cândido Rocha, 05, Labanca, Ribeirão das Neves - MG
   - Telefone: (31) 98468-0246
   - Horário: Seg-Sex 7h-17h
   - Categoria: Fábrica de tijolos / Material de Construção

### 3. Analytics (Opcional)

Para acompanhar visitantes:

1. Crie uma conta no [Google Analytics](https://analytics.google.com)
2. Adicione o código de rastreamento no `index.html`:
   ```html
   <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
   <script>
     window.dataLayer = window.dataLayer || [];
     function gtag(){dataLayer.push(arguments);}
     gtag('js', new Date());
     gtag('config', 'G-XXXXXXXXXX');
   </script>
   ```

---

## 🐛 Troubleshooting

### Problema: Página em branco

**Solução**: Verifique se o `.htaccess` foi criado corretamente e se os arquivos estão na pasta correta.

### Problema: Imagens não carregam

**Solução**: Certifique-se de que a pasta `assets/` foi enviada junto com os arquivos.

### Problema: Rotas do blog não funcionam

**Solução**: Verifique o arquivo `.htaccess` — ele é essencial para o React Router funcionar.

### Problema: CSS não carrega

**Solução**: Verifique se o arquivo `index.css` compilado está na pasta `dist/assets/`.

---

## 📞 Suporte

Para problemas técnicos, consulte:
- [Documentação Hostinger](https://support.hostinger.com/pt-BR/)
- [React Router Docs](https://reactrouter.com)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)

**Site desenvolvido com ❤️ usando Lovable**
