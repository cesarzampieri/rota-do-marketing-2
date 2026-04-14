import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ArrowRight, CheckCircle, MessageCircle, MapPin, TrendingUp, Users, Star, ChevronDown, MessageCircle as WhatsAppIcon } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

/**
 * Design: Moderno e Energético - rotadomarketing.com.br
 * Paleta: Preto (#0F0F0F), Laranja (#FF6B35), Verde neon (#00DD00), Branco (#FFFFFF)
 * Tipografia: Poppins Bold (títulos) + Inter Regular (corpo)
 * Layout: Hero assimétrico, seções alternadas, espaçamento generoso
 * Animações: Fade-in ao scroll, hover suave em buttons
 */

const WHATSAPP_NUMBER = "5543988306859";
const WHATSAPP_MESSAGE = "Vim pelo site e gostaria de mais informações sobre os serviços de tráfego pago.";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export default function Home() {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const services = [
    {
      id: "google-ads",
      title: "Google Ads",
      description: "Gestão completa de campanhas na Rede de Pesquisa do Google. Aumento de visibilidade e conversões com estratégia certificada.",
      icon: TrendingUp,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333353355/RRnWHRVuodTvaUEqwadhWE/google-ads-service-5iS2xwZ6qZ6pDPTZbyNNyi.webp",
    },
    {
      id: "meta-ads",
      title: "Meta Ads",
      description: "Campanhas estratégicas no Facebook e Instagram. Alcance seu público-alvo com precisão e maximize o ROI.",
      icon: Users,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333353355/RRnWHRVuodTvaUEqwadhWE/meta-ads-service-LdFfrWZzkBVvnNhYYsUZEx.webp",
    },
    {
      id: "google-meu-negocio",
      title: "Google Meu Negócio",
      description: "Otimização completa do seu perfil. Aumente visibilidade local, avaliações e clientes na sua região.",
      icon: MapPin,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333353355/RRnWHRVuodTvaUEqwadhWE/google-meu-negocio-cAmkrQtfvkRQMxi77BLeif.webp",
    },
    {
      id: "landing-pages",
      title: "Criação de Landing Pages",
      description: "Landing pages de alta conversão desenvolvidas com foco em resultados. Design profissional, otimização para SEO e velocidade garantida.",
      icon: MessageCircle,
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663333353355/RRnWHRVuodTvaUEqwadhWE/hero-banner-XxXxXxXxXxXxXxXx.webp",
    },
  ];

  const benefits = [
    "7 dias de gestão gratuita para analisar se faz sentido",
    "Você controla o investimento nos anúncios",
    "Certificação Google Ads (Rede de Pesquisa)",
    "Formação com Adriano Gianini",
    "Atendimento no Brasil e no exterior",
    "Resultados mensuráveis e transparentes",
  ];

  const testimonials = [
    {
      id: 1,
      name: "João Silva",
      role: "Empresário - Londrina, PR",
      text: "Profissional sério e comprometido. As campanhas trouxeram resultado desde o primeiro mês e o suporte pelo WhatsApp faz toda a diferença.",
      rating: 5,
      initials: "JS",
    },
    {
      id: 2,
      name: "Maria Costa",
      role: "Clínica Estética - São Paulo, SP",
      text: "Antes eu jogava dinheiro fora em anúncios sem retorno. Com a gestão do César, finalmente consigo acompanhar o resultado de cada real investido.",
      rating: 5,
      initials: "MC",
    },
    {
      id: 3,
      name: "Ricardo Pereira",
      role: "Loja Online - Curitiba, PR",
      text: "Relatórios claros, atendimento rápido e estratégia que faz sentido para o meu negócio. Recomendo sem hesitar.",
      rating: 5,
      initials: "RP",
    },
  ];

  const metrics = [
    { label: "Anos no Digital", value: "+17" },
    { label: "Clientes Atendidos", value: "+50" },
    { label: "ROI Médio", value: "4.5x" },
    { label: "Taxa de Retenção", value: "95%" },
  ];

  const faqs = [
    {
      id: 1,
      question: "Como funciona o período de 7 dias grátis?",
      answer: "Durante 7 dias, você terá acesso à gestão completa de suas campanhas. Você pode acompanhar os resultados em tempo real e decidir se deseja continuar. Sem compromisso!",
    },
    {
      id: 2,
      question: "Quanto custa o serviço após os 7 dias?",
      answer: "O valor depende do volume de investimento em anúncios e da complexidade da estratégia. Fazemos uma análise gratuita para montar uma proposta personalizada.",
    },
    {
      id: 3,
      question: "Vocês trabalham com qual orçamento mínimo?",
      answer: "Trabalhamos com empresas de qualquer tamanho. O orçamento mínimo recomendado é de R$ 500/mês para resultados significativos, mas podemos adaptar conforme sua realidade.",
    },
    {
      id: 4,
      question: "Quais são os resultados que posso esperar?",
      answer: "Os resultados variam conforme o segmento e estratégia, mas nossos clientes costumam ver aumento de 30-50% em leads/vendas nos primeiros 30 dias.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container flex items-center justify-between py-4">
          <div className="text-2xl font-bold">
            <span className="text-foreground">Rota do</span>
            <span className="text-primary">Marketing</span>
          </div>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium"
          >
            <MessageCircle size={18} />
            Fale Conosco
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
        <div className="container flex justify-center">
          <div className="fade-in-up max-w-2xl w-full text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
              Aumente suas vendas com tráfego pago estratégico
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Gestão profissional de Google Ads, Meta Ads e otimização de Google Meu Negócio. Teste gratuitamente por 7 dias e veja os resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:shadow-lg">
                  Começar 7 Dias Grátis
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto px-8 py-6 text-base font-semibold border-2 border-accent text-accent hover:bg-accent hover:text-background transition-colors duration-200"
                >
                  Saiba Mais
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-accent mb-3">O QUE FAZEMOS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas em tráfego pago e presença digital para impulsionar seu negócio
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg hover:border-accent transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredService(service.id)}
                  onMouseLeave={() => setHoveredService(null)}
                >
                  {/* Service Image */}
                  <div className="h-48 overflow-hidden bg-secondary">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>

                  {/* Service Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className="text-primary" size={24} />
                      <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
                    </div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                      <Button className="w-full bg-primary hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-200">
                        Solicitar Informações
                      </Button>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container flex justify-center">
          {/* Benefits List - Centered */}
          <div className="fade-in-up max-w-2xl w-full">
            <div className="text-sm font-semibold text-accent mb-3 text-center">POR QUE ESCOLHER</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Por que escolher a Rota do Marketing?
            </h2>

            <ul className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-4">
                  <CheckCircle className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span className="text-lg text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:shadow-lg">
                  Comece Agora
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Metrics Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-accent mb-3">NÚMEROS QUE FALAM</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Resultados Comprovados
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric) => (
              <div key={metric.label} className="fade-in-up text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {metric.value}
                </div>
                <p className="text-muted-foreground font-medium">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-accent mb-3">DEPOIMENTOS</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              O que dizem nossos clientes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="fade-in-up bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <div className="text-sm font-semibold text-accent mb-3">DÚVIDAS FREQUENTES</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="fade-in-up bg-card border border-border rounded-lg overflow-hidden hover:border-accent transition-all duration-300"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === faq.id ? null : faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors duration-200"
                >
                  <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedFaq === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {expandedFaq === faq.id && (
                  <div className="px-6 py-4 border-t border-border bg-secondary">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center fade-in-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Pronto para impulsionar seu negócio?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco via WhatsApp e descubra como podemos aumentar suas vendas com estratégias de tráfego pago comprovadas.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer">
                <Button className="w-full sm:w-auto bg-primary hover:opacity-90 text-white px-8 py-6 text-base font-semibold rounded-lg transition-all duration-200 hover:shadow-lg">
                  <MessageCircle className="mr-2" size={18} />
                  Fale Conosco no WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-border" />

      {/* Footer */}
      <footer className="py-12 bg-card border-t border-border">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">
                <span className="text-foreground">Rota do</span>
                <span className="text-primary">Marketing</span>
              </h3>
              <p className="text-muted-foreground">
                Gestão profissional de tráfego pago para impulsionar seu negócio.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-foreground">Serviços</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Google Ads</li>
                <li>Meta Ads</li>
                <li>Google Meu Negócio</li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4 text-foreground">Contato</h4>
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:opacity-80 transition-opacity"
              >
                WhatsApp: +55 43 98830-6859
              </a>
            </div>
          </div>

          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-6">
              <Link href="/privacy-policy">
                <a className="text-primary hover:opacity-80 transition-opacity text-sm font-medium">
                  Política de Privacidade
                </a>
              </Link>
              <span className="text-border">•</span>
              <Link href="/terms-of-use">
                <a className="text-primary hover:opacity-80 transition-opacity text-sm font-medium">
                  Termos de Uso
                </a>
              </Link>
            </div>
            <p className="text-center text-muted-foreground text-sm">
              © 2026 C Zampieri Ltda. CNPJ: 13.311.957/0001-09. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-[#25D366] hover:bg-[#20BA5A] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 animate-pulse"
          >
            <WhatsAppIcon size={28} className="text-white" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="left" className="bg-foreground text-background font-semibold">
          Fale conosco!
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
