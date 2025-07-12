"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Mountain, Users, Camera, Heart, Menu, X, Check, MapPin, Calendar, Award, Compass, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

export default function AventuraAndina() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navegación */}
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} scrollY={scrollY} />

      {/* Sección Hero */}
      <HeroSection />

      {/* Sección Características */}
      <CaracteristicasSection />

      {/* Sección Nosotros */}
      <NosotrosSection />

      {/* Sección Precios */}
      <PreciosSection />

      {/* Sección Registrarse */}
      <RegistrarseSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

function Navigation({
  isMenuOpen,
  setIsMenuOpen,
  scrollY,
}: {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
  scrollY: number
}) {
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
        scrollY > 50 ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className={`text-2xl font-bold tracking-wide transition-colors ${
            scrollY > 50 ? "text-orange-600" : "text-white"
          } hover:text-orange-500`}
        >
          Aventura Andina
        </Link>

        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="#caracteristicas"
            className={`font-medium transition-colors ${
              scrollY > 50 ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-300"
            }`}
          >
            Características
          </Link>
          <Link
            href="#nosotros"
            className={`font-medium transition-colors ${
              scrollY > 50 ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-300"
            }`}
          >
            Nosotros
          </Link>
          <Link
            href="#precios"
            className={`font-medium transition-colors ${
              scrollY > 50 ? "text-gray-700 hover:text-orange-600" : "text-white hover:text-orange-300"
            }`}
          >
            Precios
          </Link>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105">
            Registrarse
          </Button>
        </div>

        {/* Botón Menú Móvil */}
        <button
          className={`md:hidden transition-colors ${scrollY > 50 ? "text-gray-800" : "text-white"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navegación Móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg md:hidden">
            <div className="flex flex-col space-y-4 px-6 py-6">
              <Link
                href="#caracteristicas"
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
              >
                Características
              </Link>
              <Link href="#nosotros" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Nosotros
              </Link>
              <Link href="#precios" className="text-gray-700 hover:text-orange-600 font-medium transition-colors">
                Precios
              </Link>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium w-fit">
                Registrarse
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Imagen de Fondo */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-mountain.jpg"
          alt="Pareja de viajeros en la Montaña de Colores, Perú"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      {/* Contenido Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up">
          Descubre la Magia de los Andes
        </h1>
        <p className="text-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
          Vive experiencias auténticas en paisajes únicos. Conecta con culturas milenarias y crea recuerdos inolvidables
          en cada aventura.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-400">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 hover:scale-105">
            Comenzar Aventura
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 bg-transparent"
          >
            Ver Destinos
          </Button>
        </div>
      </div>

      {/* Indicador de Scroll */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}

function CaracteristicasSection() {
  const caracteristicas = [
    {
      icon: <Mountain className="w-8 h-8" />,
      titulo: "Rutas Exclusivas",
      descripcion:
        "Accede a senderos únicos y paisajes espectaculares que pocos han explorado. Cada ruta está cuidadosamente seleccionada por expertos locales.",
      imagen: "/images/trekking-group.png",
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Experiencias Culturales",
      descripcion:
        "Sumérgete en tradiciones ancestrales, aprende de comunidades locales y participa en ceremonias auténticas que enriquecerán tu alma.",
      imagen: "/images/cultural-experience.png",
    },
    {
      icon: <Camera className="w-8 h-8" />,
      titulo: "Momentos Únicos",
      descripcion:
        "Captura paisajes de ensueño y momentos irrepetibles. Nuestros guías conocen los mejores spots para fotografías que durarán toda la vida.",
      imagen: "/images/mountain-camp.png",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      titulo: "Conexión Auténtica",
      descripcion:
        "Forma vínculos genuinos con otros viajeros y locales. Cada experiencia está diseñada para crear conexiones humanas profundas y duraderas.",
      imagen: "/images/hero-mountain.jpg",
    },
  ]

  return (
    <section id="caracteristicas" className="py-20 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">¿Por Qué Elegir Aventura Andina?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Ofrecemos experiencias transformadoras que van más allá del turismo tradicional
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {caracteristicas.map((caracteristica, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group bg-white overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={caracteristica.imagen || "/placeholder.svg"}
                  alt={caracteristica.titulo}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-500 text-white rounded-full mb-3">
                    {caracteristica.icon}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">{caracteristica.titulo}</h3>
                <p className="text-gray-600 leading-relaxed">{caracteristica.descripcion}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function NosotrosSection() {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cultural-experience.png"
                alt="Experiencia cultural auténtica en los Andes"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-2xl shadow-lg">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm">Aventuras Realizadas</div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Nuestra Pasión por la Aventura</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Somos un equipo de exploradores apasionados que ha dedicado más de una década a descubrir los secretos
              mejor guardados de los Andes. Nuestra misión es compartir la magia de estos paisajes únicos y las culturas
              ancestrales que los habitan.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Cada expedición está diseñada con respeto hacia las comunidades locales y el medio ambiente, garantizando
              experiencias auténticas que benefician a todos los involucrados.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center p-4 bg-orange-50 rounded-xl">
                <Globe className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">15+</div>
                <div className="text-gray-600">Países Explorados</div>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-xl">
                <Award className="w-8 h-8 text-red-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-800">98%</div>
                <div className="text-gray-600">Satisfacción</div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Guías locales certificados y experimentados</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Compromiso con el turismo sostenible</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" />
                </div>
                <span className="text-gray-700">Experiencias personalizadas para cada viajero</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function PreciosSection() {
  const planes = [
    {
      nombre: "Básico",
      precio: "$299",
      periodo: "/persona",
      descripcion: "Perfecto para aventureros principiantes",
      caracteristicas: [
        "Trekking de 3 días",
        "Guía local incluido",
        "Transporte básico",
        "Alojamiento en camping",
        "Comidas incluidas",
        "Seguro de viaje básico",
      ],
      popular: false,
      color: "from-gray-500 to-gray-600",
    },
    {
      nombre: "Pro",
      precio: "$599",
      periodo: "/persona",
      descripcion: "La experiencia completa andina",
      caracteristicas: [
        "Trekking de 7 días",
        "Guía especializado bilingüe",
        "Transporte privado",
        "Alojamiento en eco-lodges",
        "Todas las comidas gourmet",
        "Experiencias culturales",
        "Seguro premium",
        "Fotografía profesional",
      ],
      popular: true,
      color: "from-orange-500 to-red-500",
    },
    {
      nombre: "Empresa",
      precio: "$999",
      periodo: "/persona",
      descripcion: "Expedición de lujo personalizada",
      caracteristicas: [
        "Expedición de 10+ días",
        "Guía privado exclusivo",
        "Helicóptero incluido",
        "Hoteles de lujo",
        "Chef personal",
        "Ceremonias privadas",
        "Seguro VIP",
        "Documentación completa",
        "Soporte 24/7",
      ],
      popular: false,
      color: "from-yellow-500 to-orange-500",
    },
  ]

  return (
    <section id="precios" className="py-20 bg-gradient-to-br from-gray-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Elige Tu Aventura</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Planes diseñados para diferentes tipos de exploradores y presupuestos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {planes.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${
                plan.popular ? "ring-2 ring-orange-500 scale-105" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                    Más Popular
                  </span>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  <Compass className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-800 mb-2">{plan.nombre}</CardTitle>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-gray-800">{plan.precio}</span>
                  <span className="text-gray-600">{plan.periodo}</span>
                </div>
                <p className="text-gray-600">{plan.descripcion}</p>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.caracteristicas.map((caracteristica, caracteristicaIndex) => (
                    <li key={caracteristicaIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700">{caracteristica}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-3 rounded-full font-bold transition-all duration-300 ${
                    plan.popular
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  Reservar Ahora
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function RegistrarseSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-500 via-red-500 to-yellow-500 text-white relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">¿Listo para Tu Próxima Aventura?</h2>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          Únete a miles de aventureros que ya han descubierto la magia de los Andes. Tu próxima experiencia inolvidable
          te está esperando.
        </p>

        <Card className="max-w-md mx-auto bg-white/10 backdrop-blur-md border-white/20">
          <CardContent className="p-8">
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-white font-medium">
                  Nombre Completo
                </Label>
                <Input
                  id="nombre"
                  type="text"
                  placeholder="Tu nombre"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white font-medium">
                  Correo Electrónico
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-white font-medium">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  type="tel"
                  placeholder="+1 234 567 8900"
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
                />
              </div>

              <Button className="w-full bg-white text-orange-600 hover:bg-gray-100 py-3 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105">
                Comenzar Mi Aventura
              </Button>

              <p className="text-sm opacity-80 text-center">
                Al registrarte, recibirás información exclusiva sobre nuestras expediciones y ofertas especiales.
              </p>
            </form>
          </CardContent>
        </Card>

        {/* Estadísticas */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">2,500+</div>
            <div className="text-sm opacity-80">Aventureros Felices</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">50+</div>
            <div className="text-sm opacity-80">Rutas Únicas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold mb-2">4.9★</div>
            <div className="text-sm opacity-80">Calificación Promedio</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-orange-400">Aventura Andina</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
              Conectando viajeros con la magia de los Andes a través de experiencias auténticas y sostenibles.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Globe className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Camera className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors cursor-pointer">
                <Heart className="w-5 h-5" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Destinos</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Montaña de Colores
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Camino Inca
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Salar de Uyuni
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Laguna Humantay
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Trekking Guiado
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Experiencias Culturales
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Fotografía de Viaje
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Turismo Sostenible
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contacto</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Cusco, Perú</span>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>+51 984 123 456</span>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  info@aventuraandina.com
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-orange-400 transition-colors">
                  Soporte 24/7
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">© 2024 Aventura Andina. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Política de Privacidad
            </Link>
            <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
              Términos de Servicio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
