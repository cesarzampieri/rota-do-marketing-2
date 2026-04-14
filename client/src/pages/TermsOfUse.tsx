import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function TermsOfUse() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
        <div className="container flex items-center gap-4 py-4">
          <Link href="/">
            <button className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
              <ArrowLeft size={20} />
              Voltar
            </button>
          </Link>
          <h1 className="text-xl font-bold">Termos de Uso</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

            <p className="text-muted-foreground mb-6">
              <strong>Última atualização:</strong> 14 de abril de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Aceitação dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ao acessar e usar o site <strong>Rota do Marketing</strong>, operado pela <strong>C Zampieri Ltda</strong> (CNPJ: 13.311.957/0001-09), você concorda em estar vinculado por estes Termos de Uso. Se você não concorda com qualquer parte destes termos, por favor, não use nosso site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Uso Licenciado</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Concedemos a você uma licença limitada, não exclusiva e não transferível para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Acessar e visualizar o conteúdo do site para fins pessoais</li>
                <li>Obter informações sobre nossos serviços de tráfego pago</li>
                <li>Entrar em contato conosco através dos canais disponibilizados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Restrições de Uso</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Você concorda em não:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Reproduzir, duplicar, copiar ou vender qualquer conteúdo do site sem permissão</li>
                <li>Tentar obter acesso não autorizado ao site ou seus sistemas</li>
                <li>Usar o site para fins ilegais ou prejudiciais</li>
                <li>Transmitir vírus, malware ou qualquer código malicioso</li>
                <li>Fazer scraping ou coleta automatizada de dados sem autorização</li>
                <li>Interferir com o funcionamento normal do site</li>
                <li>Usar o site para spam, phishing ou fraude</li>
                <li>Violar direitos de propriedade intelectual de terceiros</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Propriedade Intelectual</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Todo o conteúdo do site, incluindo textos, gráficos, logos, imagens, vídeos, ícones e software, é propriedade de <strong>C Zampieri Ltda</strong> ou de seus fornecedores de conteúdo e está protegido por leis de direitos autorais internacionais.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Você não pode usar, reproduzir, modificar ou distribuir qualquer conteúdo sem permissão escrita prévia.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Isenção de Garantias</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O site é fornecido "como está" e "conforme disponível". Nós não fazemos representações ou garantias de qualquer tipo, expressas ou implícitas, incluindo:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Garantia de precisão, integridade ou utilidade do conteúdo</li>
                <li>Garantia de que o site funcionará sem interrupções</li>
                <li>Garantia de que os erros serão corrigidos</li>
                <li>Garantia de resultados específicos com nossos serviços</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitação de Responsabilidade</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Em nenhuma circunstância <strong>C Zampieri Ltda</strong> será responsável por:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Danos indiretos, incidentais, especiais, consequentes ou punitivos</li>
                <li>Perda de dados, lucros ou receitas</li>
                <li>Interrupção de negócios</li>
                <li>Danos causados por terceiros</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Mesmo que tenhamos sido informados da possibilidade de tais danos.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Links Externos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelo conteúdo, precisão ou práticas de privacidade desses sites. O acesso a links externos é por sua conta e risco.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Comunicação via WhatsApp</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Ao clicar em nossos botões de CTA e entrar em contato conosco via WhatsApp, você concorda que:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Você está iniciando uma comunicação voluntária</li>
                <li>Seus dados serão compartilhados com a plataforma WhatsApp (Meta Platforms)</li>
                <li>Você está ciente de nossa Política de Privacidade</li>
                <li>Você pode receber respostas e informações sobre nossos serviços</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Modificações do Site</h2>
              <p className="text-muted-foreground leading-relaxed">
                Reservamos o direito de modificar, suspender ou descontinuar qualquer parte do site a qualquer momento, sem aviso prévio. Não somos responsáveis por qualquer perda ou dano resultante dessas modificações.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Modificações dos Termos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar estes Termos de Uso periodicamente. Qualquer alteração será publicada nesta página. Seu uso contínuo do site após alterações constitui sua aceitação dos Termos de Uso revisados.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Indenização</h2>
              <p className="text-muted-foreground leading-relaxed">
                Você concorda em indenizar e isentar <strong>C Zampieri Ltda</strong> de qualquer reclamação, demanda, perda, responsabilidade ou despesa (incluindo honorários advocatícios) decorrentes de seu uso do site ou violação destes Termos de Uso.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Informações sobre Serviços</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                As informações sobre nossos serviços (Google Ads, Meta Ads, Google Meu Negócio) fornecidas no site são apenas informativos. Nós:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Não garantimos resultados específicos</li>
                <li>Não somos responsáveis por decisões de investimento com base em informações do site</li>
                <li>Recomendamos que você realize sua própria pesquisa e análise</li>
                <li>Oferecemos 7 dias de gestão gratuita para análise inicial</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Contato</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você tiver dúvidas sobre estes Termos de Uso, entre em contato conosco:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 text-muted-foreground">
                <p><strong>C Zampieri Ltda</strong></p>
                <p>CNPJ: 13.311.957/0001-09</p>
                <p>WhatsApp: +55 43 98830-6859</p>
                <p>Email: cesarzampieri@outlook.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">14. Lei Aplicável e Jurisdição</h2>
              <p className="text-muted-foreground leading-relaxed">
                Estes Termos de Uso são regidos pelas leis da República Federativa do Brasil. Qualquer disputa decorrente destes termos será submetida aos tribunais competentes do Brasil.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">15. Severabilidade</h2>
              <p className="text-muted-foreground leading-relaxed">
                Se qualquer disposição destes Termos de Uso for considerada inválida ou inaplicável, as disposições restantes continuarão em vigor.
              </p>
            </section>

            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground">
                © 2026 C Zampieri Ltda. Todos os direitos reservados. CNPJ: 13.311.957/0001-09
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
