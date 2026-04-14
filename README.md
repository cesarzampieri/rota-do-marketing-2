# Rota do Marketing - Landing Page

Landing page de alta conversão para serviços de tráfego pago (Google Ads, Meta Ads) e otimização de Google Meu Negócio.

## 🎯 Sobre

A **Rota do Marketing** oferece gestão profissional de campanhas de tráfego pago com:

- ✅ Certificação Google Ads (Rede de Pesquisa)
- ✅ Formação com Adriano Gianini
- ✅ 7 dias de gestão gratuita
- ✅ Atendimento no Brasil e no exterior
- ✅ Você controla o investimento nos anúncios

## 🚀 Tecnologias

- **React 19** - Framework UI
- **TypeScript** - Tipagem estática
- **Tailwind CSS 4** - Estilização
- **Vite** - Build tool
- **shadcn/ui** - Componentes UI
- **Lucide React** - Ícones

## 📁 Estrutura do Projeto

```
rota-do-marketing/
├── client/
│   ├── public/              # Arquivos estáticos
│   ├── src/
│   │   ├── pages/
│   │   │   └── Home.tsx     # Landing page principal
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── contexts/        # React contexts
│   │   ├── App.tsx          # Componente raiz
│   │   ├── main.tsx         # Entry point
│   │   └── index.css        # Estilos globais
│   └── index.html           # Template HTML
├── server/                  # Código do servidor
├── package.json             # Dependências
├── vite.config.ts           # Configuração Vite
├── tsconfig.json            # Configuração TypeScript
├── DEPLOYMENT.md            # Guia de deployment
└── README.md                # Este arquivo
```

## 🎨 Design

**Filosofia**: Minimalismo Corporativo Moderno

- **Paleta**: Branco puro, cinza escuro (#1A1A1A), azul profundo (#0052CC)
- **Tipografia**: Poppins Bold (títulos) + Inter Regular (corpo)
- **Layout**: Hero assimétrico, seções alternadas, espaçamento generoso
- **Animações**: Fade-in ao scroll, hover suave em buttons

## 🛠️ Desenvolvimento Local

### Pré-requisitos

- Node.js 18+
- pnpm (recomendado) ou npm

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/SEU_USUARIO/rota-do-marketing.git
cd rota-do-marketing

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

O site estará disponível em `http://localhost:3000`

### Build para Produção

```bash
# Build
pnpm build

# Preview do build
pnpm preview
```

## 📱 Seções da Landing Page

### 1. **Navigation**
- Logo da marca
- CTA "Fale Conosco" com link WhatsApp

### 2. **Hero Section**
- Título impactante
- Descrição do serviço
- CTAs primária e secundária
- Imagem de alta qualidade

### 3. **Services**
- 3 cards de serviços:
  - Google Ads
  - Meta Ads
  - Google Meu Negócio
- Imagens ilustrativas
- Botões de ação

### 4. **Benefits**
- Lista de 6 diferenciais
- Credenciais e certificações
- CTA para ação

### 5. **CTA Section**
- Chamada final para ação
- Link WhatsApp

### 6. **Footer**
- Links de navegação
- Contato
- CNPJ: 13.311.957/0001-09 - C Zampieri Ltda

## 📞 Contato

- **WhatsApp**: +55 43 98830-6859
- **Mensagem padrão**: "Vim pelo site e gostaria de mais informações"

## 🚀 Deployment

Veja o arquivo [DEPLOYMENT.md](./DEPLOYMENT.md) para instruções completas sobre como fazer deploy no GitHub e Netlify.

### Quick Start (Netlify)

1. Faça push do código para o GitHub
2. Conecte o repositório ao Netlify
3. Configure build settings:
   - Build command: `pnpm build`
   - Publish directory: `dist/public`
4. Deploy automático a cada push

## 📊 Performance

- ✅ Otimizado para mobile-first
- ✅ Imagens servidas via CDN
- ✅ CSS minificado com Tailwind
- ✅ JavaScript bundle otimizado
- ✅ Sem dependências desnecessárias

## 🔒 Segurança

- ✅ Sem dados sensíveis no código
- ✅ Variáveis de ambiente isoladas
- ✅ HTTPS automático no Netlify
- ✅ Headers de segurança configurados

## 📝 Licença

MIT

## 👨‍💼 Autor

**C Zampieri Ltda**
- CNPJ: 13.311.957/0001-09
- Especialista em Tráfego Pago

---

**Última atualização**: Abril 2026
