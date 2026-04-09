import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Phone, MessageCircle, Scale, Shield, Award, Clock, Users, ShoppingCart, Home as HomeIcon, Building, Briefcase } from 'lucide-react'
import { Link } from 'react-router-dom'
import balanceImage from '../assets/2n8lhMswimEV.png'
import lawyerImage from '../assets/NjhNReq54iSe.jpg'

const Home = () => {
  const whatsappNumber = "5515996651411"
  const whatsappMessage = encodeURIComponent("Olá! Gostaria de saber mais sobre os serviços jurídicos.")
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const handleWhatsAppClick = () => {
    window.open(whatsappUrl, '_blank')
  }

  const handleCallClick = () => {
    window.open('tel:+5515996651411', '_self')
  }

  const areas = [
    {
      title: "Direito do Consumidor",
      description: "Defenda seus direitos como consumidor contra práticas abusivas",
      icon: <ShoppingCart className="h-6 w-6 text-blue-600" />,
      link: "/direito-consumidor"
    },
    {
      title: "Direito Civil",
      description: "Soluções jurídicas para questões pessoais e patrimoniais",
      icon: <Users className="h-6 w-6 text-blue-600" />,
      link: "/direito-civil"
    },
    {
      title: "Indenizações e Cobranças",
      description: "Recupere seus direitos e valores com segurança jurídica",
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      link: "/indenizacoes-cobrancas"
    },
    {
      title: "Direito Imobiliário",
      description: "Proteja seu patrimônio imobiliário com assessoria especializada",
      icon: <HomeIcon className="h-6 w-6 text-blue-600" />,
      link: "/direito-imobiliario"
    },
    {
      title: "Direito Empresarial",
      description: "Assessoria jurídica completa para seu negócio prosperar",
      icon: <Briefcase className="h-6 w-6 text-blue-600" />,
      link: "/direito-empresarial"
    }
  ]

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
                Especialistas em Soluções Jurídicas
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                Defendemos seus direitos com experiência, dedicação e resultados comprovados
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handleWhatsAppClick}
                  size="lg"
                  className="whatsapp-button text-white px-8 py-4 text-lg font-semibold"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Fale Conosco Agora
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
                src={lawyerImage} 
                alt="Advocacia Profissional"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas Áreas de Especialização
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos atendimento especializado em diversas áreas do direito
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {areas.map((area, index) => (
              <Card key={index} className="law-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-blue-100 rounded-lg">
                      {area.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {area.title}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {area.description}
                  </p>
                  <Link to={area.link}>
                    <Button variant="outline" className="w-full">
                      Saiba Mais
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src={lawyerImage} 
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
                  <span className="text-gray-700">experiencia comprovada</span>
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
                <li><Link to="/direito-consumidor" className="hover:text-white">Direito do Consumidor</Link></li>
                <li><Link to="/direito-civil" className="hover:text-white">Direito Civil</Link></li>
                <li><Link to="/indenizacoes-cobrancas" className="hover:text-white">Indenizações e Cobranças</Link></li>
                <li><Link to="/direito-imobiliario" className="hover:text-white">Direito Imobiliário</Link></li>
                <li><Link to="/direito-empresarial" className="hover:text-white">Direito Empresarial</Link></li>
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

export default Home

