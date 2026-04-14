# Guia de Deployment - Rota do Marketing

Este documento descreve como fazer o deployment da landing page da Rota do Marketing no GitHub e Netlify.

## Pré-requisitos

- Node.js 18+ instalado
- npm ou pnpm instalado
- Conta no GitHub
- Conta no Netlify (gratuita)

## 1. Preparar o Repositório GitHub

### 1.1 Criar um novo repositório no GitHub

1. Acesse [github.com](https://github.com) e faça login
2. Clique em "+" no canto superior direito e selecione "New repository"
3. Nomeie o repositório como `rota-do-marketing`
4. Adicione uma descrição: "Landing page de alta conversão para serviços de tráfego pago"
5. Selecione "Public" para que seja acessível
6. Clique em "Create repository"

### 1.2 Fazer push do código para o GitHub

```bash
# No diretório do projeto
cd /home/ubuntu/rota-do-marketing

# Inicializar repositório git (se não estiver inicializado)
git init

# Adicionar remote do GitHub
git remote add origin https://github.com/SEU_USUARIO/rota-do-marketing.git

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit: Landing page Rota do Marketing"

# Fazer push para main
git branch -M main
git push -u origin main
```

## 2. Deploy no Netlify

### 2.1 Conectar Netlify ao GitHub

1. Acesse [netlify.com](https://netlify.com) e faça login (ou crie uma conta gratuita)
2. Clique em "Add new site" → "Import an existing project"
3. Selecione "GitHub" como provedor
4. Autorize o Netlify a acessar sua conta GitHub
5. Selecione o repositório `rota-do-marketing`

### 2.2 Configurar Build Settings

Na página de configuração do Netlify:

- **Base directory**: deixe em branco (raiz do projeto)
- **Build command**: `pnpm build`
- **Publish directory**: `dist/public`

### 2.3 Variáveis de Ambiente (Opcional)

Se precisar adicionar variáveis de ambiente:

1. Vá para "Site settings" → "Build & deploy" → "Environment"
2. Clique em "Edit variables"
3. Adicione as variáveis necessárias

### 2.4 Deploy

1. Clique em "Deploy site"
2. Aguarde o build ser concluído (geralmente 2-3 minutos)
3. Seu site estará disponível em uma URL como: `https://rota-do-marketing.netlify.app`

## 3. Domínio Customizado (Opcional)

### 3.1 Adicionar domínio customizado no Netlify

1. Vá para "Site settings" → "Domain management"
2. Clique em "Add custom domain"
3. Digite seu domínio (ex: `rotadomarketing.com.br`)
4. Siga as instruções para configurar os DNS records

## 4. Atualizações Futuras

Sempre que você fizer alterações no código:

```bash
# Fazer commit das mudanças
git add .
git commit -m "Descrição das mudanças"

# Fazer push para GitHub
git push origin main
```

O Netlify detectará automaticamente as mudanças e fará o deploy novamente.

## 5. Estrutura do Projeto

```
rota-do-marketing/
├── client/
│   ├── public/          # Arquivos estáticos (favicon, robots.txt)
│   ├── src/
│   │   ├── pages/       # Páginas React
│   │   ├── components/  # Componentes reutilizáveis
│   │   ├── App.tsx      # Componente principal
│   │   ├── main.tsx     # Entry point
│   │   └── index.css    # Estilos globais (Tailwind)
│   └── index.html       # Template HTML
├── server/              # Código do servidor (não usado em web-static)
├── package.json         # Dependências do projeto
└── vite.config.ts       # Configuração do Vite
```

## 6. Troubleshooting

### Build falha com erro de dependências

```bash
# Limpar cache e reinstalar dependências
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

### Site não atualiza após push

1. Verifique se o push foi bem-sucedido: `git log --oneline`
2. Vá para o Netlify e verifique o histórico de deploys
3. Se necessário, faça um redeploy manual no Netlify

### Imagens não carregam

As imagens são servidas via CDN e estão configuradas com URLs absolutas. Verifique se as URLs das imagens em `client/src/pages/Home.tsx` estão corretas.

## 7. Contato e Suporte

Para dúvidas sobre o deployment:
- Documentação Netlify: https://docs.netlify.com
- Documentação Vite: https://vitejs.dev
- Documentação GitHub: https://docs.github.com

---

**Última atualização**: Abril 2026
