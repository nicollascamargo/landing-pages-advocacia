import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Scale, Shield, Award, Clock } from 'lucide-react'
import balanceImage from '../assets/2n8lhMswimEV.png'

const LandingPageLayout = ({ 
  title, 
  subtitle, 
  heroImage, 
  services, 
  benefits,
  ctaText = "Fale Conosco Agora",
  accentColor = "blue"
}) => {
  const whatsappNumber = "5515996651411"
  const whatsappMessage = encodeURIComponent(`Olá! Gostaria de saber mais sobre ${title.toLowerCase()}.`)
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+5515996651411', '_self')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <img src={balanceImage} alt="Justiça" className="h-10 w-10" />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Rogério CBJ</h1>
                <p className="text-sm text-gray-600">Advocacia</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-blue-800">
                <Phone className="h-4 w-4" />
                <span className="font-semibold">(15) 99665-1411</span>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button text-white px-4 py-2 rounded-lg font-semibold"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {title}
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {subtitle}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="whatsapp-button text-white px-8 py-4 text-lg font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  {ctaText}
                </Button>
                <Button 
                  onClick={handleCallClick}
                  variant="outline"
                  size="lg"
                  className="bg-transparent border-white text-white hover:bg-white hover:text-blue-800 px-8 py-4 text-lg font-semibold"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Ligar Agora
                </Button>
              </div>
            </div>
            <div className="animate-fade-in">
              <img 
                src={heroImage} 
                alt={title}
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="/api/placeholder/500/400" 
                alt="Advogado Rogério CBJ"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Sobre o Advogado
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Com anos de experiência em advocacia, o Dr. Rogério CBJ é especialista em diversas áreas do direito, 
                oferecendo atendimento personalizado e soluções jurídicas eficazes para seus clientes.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-yellow-500" />
                  <span className="text-gray-700">OAB Ativo</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">experiencia</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-green-600" />
                  <span className="text-gray-700">Confiável</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Scale className="h-5 w-5 text-blue-800" />
                  <span className="text-gray-700">Especialista</span>
                </div>
              </div>
              <Button 
                onClick={handleWhatsAppClick}
                className="whatsapp-button text-white px-6 py-3"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                Conversar Agora
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Posso Te Ajudar
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos soluções jurídicas completas e personalizadas para suas necessidades
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="law-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-gray-600">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por Que Escolher Nosso Escritório
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-blue-600 rounded-full">
                    {benefit.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Precisa de Ajuda Jurídica?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Entre em contato agora mesmo e receba uma consulta personalizada para seu caso
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={handleWhatsAppClick}
              size="lg"
              className="whatsapp-button text-white px-8 py-4 text-lg font-semibold"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              Conversar no WhatsApp
            </Button>
            <Button 
              onClick={handleCallClick}
              variant="outline"
              size="lg"
              className="bg-transparent border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
            >
              <Phone className="h-5 w-5 mr-2" />
              (15) 99665-1411
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img src={balanceImage} alt="Justiça" className="h-8 w-8" />
                <div>
                  <h3 className="text-lg font-bold">Rogério CBJ</h3>
                  <p className="text-sm text-gray-400">Advocacia</p>
                </div>
              </div>
              <p className="text-gray-400">
                Especialistas em soluções jurídicas personalizadas
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Áreas de Atuação</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Direito do Consumidor</li>
                <li>Direito Civil</li>
                <li>Indenizações e Cobranças</li>
                <li>Direito Imobiliário</li>
                <li>Direito Empresarial</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>(15) 99665-1411</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Rogério CBJ Advocacia. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default LandingPageLayout

