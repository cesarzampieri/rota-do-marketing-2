import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function PrivacyPolicy() {
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
          <h1 className="text-xl font-bold">Política de Privacidade</h1>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 md:py-24">
        <div className="container max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

            <p className="text-muted-foreground mb-6">
              <strong>Última atualização:</strong> 14 de abril de 2026
            </p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Introdução</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                A <strong>C Zampieri Ltda</strong>, inscrita no CNPJ <strong>13.311.957/0001-09</strong>, por meio do site <strong>Rota do Marketing</strong> (doravante "nós", "nosso" ou "Empresa"), está comprometida em proteger sua privacidade e garantir que você tenha uma experiência positiva em nosso site.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso site e interage conosco, especialmente através do WhatsApp.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Conformidade com a LGPD</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nós operamos em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e com a Constituição Federal Brasileira. Seus dados pessoais são tratados com segurança e sigilo, respeitando todos os princípios da legislação vigente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Informações que Coletamos</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Coletamos informações de você de várias formas:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Informações fornecidas voluntariamente:</strong> Quando você clica em um botão de CTA (Call-to-Action) e é redirecionado para o WhatsApp, você pode compartilhar seu nome, telefone, email e mensagens.</li>
                <li><strong>Informações de navegação:</strong> Coletamos dados sobre como você interage com nosso site, incluindo páginas visitadas, tempo gasto e cliques.</li>
                <li><strong>Cookies e tecnologias similares:</strong> Usamos Google Analytics para entender o comportamento dos visitantes.</li>
                <li><strong>Dados de dispositivo:</strong> Endereço IP, tipo de navegador, sistema operacional e informações de localização aproximada.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Como Usamos Suas Informações</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Responder suas consultas e fornecer suporte ao cliente via WhatsApp</li>
                <li>Enviar informações sobre nossos serviços de tráfego pago (Google Ads, Meta Ads, Google Meu Negócio)</li>
                <li>Melhorar nosso site e personalizar sua experiência</li>
                <li>Analisar o desempenho do site e otimizar campanhas de marketing</li>
                <li>Cumprir obrigações legais e regulamentares</li>
                <li>Prevenir fraude e atividades ilícitas</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Compartilhamento de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                <strong>Nós NÃO vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros</strong> para fins de marketing direto, exceto:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Plataformas de comunicação:</strong> Seus dados são compartilhados com o WhatsApp (Meta Platforms) apenas para facilitar a comunicação que você iniciou.</li>
                <li><strong>Ferramentas de análise:</strong> Google Analytics recebe dados anônimos sobre seu comportamento no site.</li>
                <li><strong>Obrigações legais:</strong> Quando exigido por lei, autoridades governamentais ou para proteger nossos direitos.</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Segurança de Dados</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Implementamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, alteração, divulgação ou destruição. Isso inclui:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Criptografia de dados em trânsito (HTTPS)</li>
                <li>Acesso restrito a dados pessoais apenas por funcionários autorizados</li>
                <li>Monitoramento contínuo de segurança</li>
                <li>Conformidade com padrões de proteção de dados</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Seus Direitos (LGPD)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                De acordo com a LGPD, você tem os seguintes direitos:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li><strong>Acesso:</strong> Solicitar acesso aos dados pessoais que mantemos sobre você</li>
                <li><strong>Correção:</strong> Solicitar correção de dados imprecisos ou incompletos</li>
                <li><strong>Exclusão:</strong> Solicitar a exclusão de seus dados (direito ao esquecimento)</li>
                <li><strong>Portabilidade:</strong> Solicitar a transferência de seus dados para outro fornecedor</li>
                <li><strong>Oposição:</strong> Opor-se ao processamento de seus dados</li>
                <li><strong>Revogação de consentimento:</strong> Revogar seu consentimento a qualquer momento</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Para exercer qualquer desses direitos, entre em contato conosco através do WhatsApp: <strong>+55 43 98830-6859</strong>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Retenção de Dados</h2>
              <p className="text-muted-foreground leading-relaxed">
                Mantemos seus dados pessoais apenas pelo tempo necessário para cumprir os fins para os quais foram coletados, ou conforme exigido por lei. Após esse período, seus dados serão excluídos ou anonimizados de forma segura.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">9. Cookies e Rastreamento</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Nosso site utiliza cookies e ferramentas de análise (Google Analytics) para:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Melhorar a experiência do usuário</li>
                <li>Analisar o tráfego do site</li>
                <li>Entender como você usa nossos serviços</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Você pode desabilitar cookies em suas configurações de navegador. No entanto, isso pode afetar a funcionalidade do site.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">10. Links para Terceiros</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nosso site pode conter links para sites de terceiros. Não somos responsáveis pelas práticas de privacidade desses sites. Recomendamos que você revise as políticas de privacidade deles antes de fornecer informações pessoais.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">11. Contato do Encarregado de Dados (DPO)</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco:
              </p>
              <div className="bg-card border border-border rounded-lg p-6 text-muted-foreground">
                <p><strong>C Zampieri Ltda</strong></p>
                <p>CNPJ: 13.311.957/0001-09</p>
                <p>WhatsApp: +55 43 98830-6859</p>
                <p>Email: cesarzampieri@outlook.com</p>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">12. Alterações a Esta Política</h2>
              <p className="text-muted-foreground leading-relaxed">
                Podemos atualizar esta Política de Privacidade periodicamente. Qualquer alteração será publicada nesta página com a data de atualização. Seu uso contínuo do site após alterações constitui sua aceitação da Política de Privacidade revisada.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-foreground">13. Lei Aplicável</h2>
              <p className="text-muted-foreground leading-relaxed">
                Esta Política de Privacidade é regida pelas leis da República Federativa do Brasil, especialmente pela Lei Geral de Proteção de Dados (LGPD).
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
