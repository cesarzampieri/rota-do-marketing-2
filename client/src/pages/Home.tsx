import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, MessageCircle, MapPin, TrendingUp, Users } from "lucide-react";
import { useState } from "react";

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
  ];

  const benefits = [
    "7 dias de gestão gratuita para analisar se faz sentido",
    "Você controla o investimento nos anúncios",
    "Certificação Google Ads (Rede de Pesquisa)",
    "Formação com Adriano Gianini",
    "Atendimento no Brasil e no exterior",
    "Resultados mensuráveis e transparentes",
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
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Text Content */}
            <div className="fade-in-up">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-foreground">
                Aumente suas vendas com tráfego pago estratégico
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Gestão profissional de Google Ads, Meta Ads e otimização de Google Meu Negócio. Teste gratuitamente por 7 dias e veja os resultados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Right: Hero Image */}
            <div className="relative fade-in">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663333353355/RRnWHRVuodTvaUEqwadhWE/hero-banner-iCwTYJjXn8BMdiRNEM3T42.webp"
                alt="Dashboard de Marketing Digital"
                className="w-full h-auto rounded-lg shadow-lg"
              />
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
            <p className="text-center text-muted-foreground text-sm">
              © 2026 C Zampieri Ltda. CNPJ: 13.311.957/0001-09. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
