import Image from "next/image"
import { Mail, Phone, MapPin, Linkedin, FileText, ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Mourad ELJALIL</h1>
              <h2 className="text-xl md:text-2xl mb-6">Étudiant en dernière année du cycle ingénieur</h2>
              <h3 className="text-lg md:text-xl mb-6">Spécialité Développement Logiciel et Intelligence Artificielle - ISEN Brest</h3>
              <p className="text-lg mb-8">
                Actuellement en alternance chez Rapido'Devis en tant que Responsable Application & Data Engineer. 
                Passionné par l'informatique et les statistiques, je contribue à des projets innovants alliant IA et développement logiciel.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition"
                >
                  Me contacter
                </a>
                <a
                  href="#projects"
                  className="border border-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition"
                >
                  Voir mes projets
                </a>
              </div>
            </div>
           
          </div>
        </div>
       
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">À propos de moi</h2>
          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionné par l'informatique et les statistiques, je vise à mettre en pratique mes compétences tout en contribuant à des
              projets innovants au sein de votre entreprise. Je suis toujours avide d'apprendre pour
              acquérir de nouvelles compétences. Actuellement en alternance en tant que Responsable Application & Data Engineer, 
              je développe des solutions alliant IA, data engineering et développement d'applications.
            </p>
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <p className="text-gray-700">mourad.eljalil29@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Téléphone</h3>
                  <p className="text-gray-700">+33664403408</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Localisation</h3>
                  <p className="text-gray-700">29200 BREST</p>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">LinkedIn</h3>
                  <a
                    href="https://linkedin.com/in/eljalilmourad/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    linkedin.com/in/eljalilmourad/
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="w-5 h-5 text-blue-600 mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-gray-900">Véhicule</h3>
                  <p className="text-gray-700">Véhicule personnel</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Expériences Professionnelles</h2>

          <div className="max-w-5xl mx-auto space-y-8">
            {/* Alternance */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg shadow-lg p-8 border-l-4 border-blue-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-900 mb-2">Responsable Application | Data Engineer</h3>
                  <p className="text-lg text-blue-700 font-medium">Rapido'Devis - Brest</p>
                  <p className="text-sm text-gray-600 italic">Alternance | Octobre 2025 - Septembre 2026</p>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Data Engineering & pipelines de données :</strong> PostgreSQL, Polars, Python, FastAPI</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Développement & supervision du moteur IA :</strong> LLM (OpenAI, Mistral), NLP, Whisper</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Intégration IA & applications web :</strong> Gradio</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Gestion et maintenance de l'application mobile :</strong> iOS/Android, Stores, JIRA</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Coordination technique :</strong> Agile, Git, équipes & prestataires</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Analyse des besoins métiers</strong> du secteur du bâtiment</span>
                </li>
              </ul>
            </div>

            {/* Stage Rapido Devis */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg shadow-lg p-8 border-l-4 border-green-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Chef de projet IT & Data Engineer</h3>
                  <p className="text-lg text-green-700 font-medium">Rapido Devis - Plougastel-Daoulas</p>
                  <p className="text-sm text-gray-600 italic">Stage | Mai 2025 - Septembre 2025</p>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Automatisation du CRM via Make (Integromat) :</strong> synchronisation WordPress ⇄ Airtable ⇄ Brevo pour supprimer les tâches manuelles</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Pilotage IT :</strong> rédaction de la roadmap JIRA, gestion des sprints, animation de réunions techniques</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Mise en place d'une API REST</strong> entre WordPress et l'application mobile (création automatique des comptes abonnés)</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Conception et modélisation de la base de données PostgreSQL :</strong> schéma relationnel, scripts SQL, métadonnées</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Développement de pipelines Python :</strong> Polars, FastAPI, SQLAlchemy</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Création de templates métiers normalisés</strong> (électricité, plomberie, isolation...) pour entraîner le moteur IA</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-green-600 mt-1 mr-2 flex-shrink-0" />
                  <span><strong>Participation à la levée de fonds</strong> et représentation de l'entreprise sur des salons tech (Paris Immo IA Days, Brest IA Days, Shaka Biarritz 2025)</span>
                </li>
              </ul>
            </div>

            {/* Stage TREMEN SAS */}
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg shadow-lg p-8 border-l-4 border-purple-600">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-900 mb-2">Développement d'Application Web</h3>
                  <p className="text-lg text-purple-700 font-medium">TREMEN SAS - Brest</p>
                  <p className="text-sm text-gray-600 italic">Stage | Juillet 2024 - Août 2024</p>
                </div>
              </div>
              <ul className="space-y-3 mt-4">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Conception de la base de données avec <strong>UMLET et MySQL Workbench</strong></span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Maquette de l'interface utilisateur développée avec <strong>Figma</strong></span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Utilisation de <strong>PHP CodeIgniter, HTML, CSS, JavaScript, Ajax, et SQL</strong> pour l'application web</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Gestion de versions via <strong>Git</strong> pour un suivi efficace du développement</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mt-1 mr-2 flex-shrink-0" />
                  <span>Intégration de <strong>Jest</strong> pour des tests unitaires pendant le développement</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Compétences</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Technical Skills */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-6 text-blue-700">Compétences Techniques</h3>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Programmation</h4>
                <div className="flex flex-wrap gap-2">
                  {["C/C++", "Python", "Java", "R"].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Base de données</h4>
                <div className="flex flex-wrap gap-2">
                  {["MySQL", "MySQL Workbench", "PostgreSQL"].map((skill) => (
                    <span key={skill} className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Outils et Systèmes d'exploitation</h4>
                <div className="flex flex-wrap gap-2">
                  {["Windows", "Linux", "Git", "VS Code", "IntelliJ", "Make"].map((skill) => (
                    <span key={skill} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h4 className="font-semibold text-gray-800 mb-3">Développement Web</h4>
                <div className="flex flex-wrap gap-2">
                  {["HTML/CSS", "PHP", "JavaScript", "Ajax", "Gradio"].map((skill) => (
                    <span key={skill} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-800 mb-3">Développement Logiciel & Data Engineering</h4>
                <div className="flex flex-wrap gap-2">
                  {["AWS", "Salesforce", "API REST", "Docker", "FastAPI", "Polars", "SQLAlchemy"].map((skill) => (
                    <span key={skill} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Soft Skills & Languages */}
            <div>
              <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                <h3 className="text-xl font-bold mb-6 text-blue-700">Atouts</h3>
                <ul className="space-y-3">
                  {[
                    "Capacité à travailler en équipe",
                    "Collaboration et communication",
                    "Écoute active",
                    "Partage des connaissances",
                    "Capacité d'adaptation aux nouvelles technologies",
                    "Curiosité et autonomie",
                    "Apprentissage continu",
                    "Flexibilité et innovation",
                  ].map((skill) => (
                    <li key={skill} className="flex items-center">
                      <ChevronRight className="w-5 h-5 text-blue-600 mr-2" />
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-md p-8">
                <h3 className="text-xl font-bold mb-6 text-blue-700">Langues</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Français</span>
                      <span>Bilingue</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Anglais</span>
                      <span>Courant</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">Arabe</span>
                      <span>Natif</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: "100%" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Experience */}
      <section id="education-experience" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Education */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Formation</h2>
              <div className="space-y-8">
                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg">Deuxième année cycle d'ingénieur</h3>
                  <p className="text-gray-600 mb-2">ISEN Brest | Septembre 2024 - Septembre 2025</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg">Première année cycle d'ingénieur</h3>
                  <p className="text-gray-600 mb-2">ISEN Brest | Septembre 2023 - Juillet 2024</p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-blue-600">
                  <h3 className="font-bold text-lg">Classes préparatoires intégrées (MPSI/PCSI)</h3>
                  <p className="text-gray-600 mb-2">ISEN Brest | Septembre 2020 - Juillet 2022</p>
                </div>
              </div>
            </div>

            {/* Experience */}
            <div>
              <h2 className="text-3xl font-bold mb-8">Expérience Professionnelle</h2>
              <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
                <h3 className="font-bold text-lg">Stage | Développement d'Application Web</h3>
                <p className="text-gray-600 mb-4">TREMEN SAS, Brest | 07.2024 - 08.2024</p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Conception de la base de données avec UMLET et MySQL Workbench.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>
                      Maquette de l'interface utilisateur développée avec Figma. Utilisation de PHP CodeIgniter, HTML,
                      CSS, JavaScript, Ajax, et SQL pour l'application web.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Gestion de versions via Git pour un suivi efficace du développement.</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="w-5 h-5 text-green-600 mt-0.5 mr-2 flex-shrink-0" />
                    <span>Intégration de Jest pour des tests unitaires pendant le développement.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Projets Académiques</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-blue-200">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 text-white">
                <h3 className="font-bold text-lg">Développement d'une IHM de simulateur d'aviron</h3>
                <p className="text-sm opacity-90">ISEN Brest | Février 2025 - Avril 2025</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Conception et développement en agilité d'une interface graphique permettant de simuler une expérience
                  réaliste d'aviron. Intégration d'intelligence artificielle pour améliorer l'expérience utilisateur et connexion avec un microcontrôleur STM32.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Python", "IA", "STM32", "Git", "Méthodes agiles"].map((tech) => (
                    <span key={tech} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-green-200">
              <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                <h3 className="font-bold text-lg">Application de gestion des arbres - Saint-Quentin</h3>
                <p className="text-sm opacity-90">ISEN Brest | Mai 2024 - Juin 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Réalisation d'une application de gestion des arbres dans la ville de Saint-Quentin avec l'IA / Big
                  data / Développement Web. Création d'une interface complète avec API et analyse de données.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["R", "Python", "API", "Bootstrap", "GitLab", "PhpMyAdmin", "HTML/CSS", "JavaScript", "PHP"].map(
                    (tech) => (
                      <span key={tech} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-purple-200">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 p-4 text-white">
                <h3 className="font-bold text-lg">Optimisation du chargement de conteneurs</h3>
                <p className="text-sm opacity-90">ISEN Brest | Avril 2024 - Mai 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Optimisation du chargement de conteneurs via des algorithmes heuristiques et exacts. Mise en œuvre de solutions d'optimisation combinatoire pour résoudre des problèmes de bin packing en 3D.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Python</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Algorithmes</span>
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">Optimisation</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-orange-200">
              <div className="bg-gradient-to-r from-orange-600 to-orange-700 p-4 text-white">
                <h3 className="font-bold text-lg">Système intégré de lecture de musique numérique/analogique</h3>
                <p className="text-sm opacity-90">ISEN Brest | Mars 2024 - Avril 2024</p>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4">
                  Programmation en langage C d'une carte STM32 avec CubeMix, montage de composantes SMD sur une carte
                  analogique, traitement du signal avec Matlab.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Langage C", "STM32", "CubeMix", "Montage SMD", "Matlab"].map((tech) => (
                    <span key={tech} className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Me Contacter</h2>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Votre email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Sujet
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Sujet de votre message"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition w-full md:w-auto"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Mourad Eljalil. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a href="mailto:mourad.eljalil29@gmail.com" className="hover:text-blue-400 transition">
              <Mail className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/eljalilmourad/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  )
}

