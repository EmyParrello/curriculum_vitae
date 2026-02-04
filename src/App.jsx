import { Avatar } from '@ark-ui/react/avatar'
import { Tabs } from '@ark-ui/react/tabs'
import { Accordion } from '@ark-ui/react/accordion'

const workHistory = [
  {
    value: 'dallonses',
    role: 'Frontend Developer',
    company: 'Dallonses Agency',
    companyUrl: '',
    dates: 'February 2019 – Present',
    details: [
      'Second software engineer to join the agency, eventually taking the lead role in all projects.',
      'Built interfaces with HTML5, CSS3, JavaScript, React, Tailwind CSS, Vite, Next.js, and React Native.',
      'Delivered motion-rich experiences using Motion, Ark UI components, Radix, and Tanstack.'
    ]
  },
  {
    value: 'restorer',
    role: 'Conservator and Restorer of Cultural Property',
    company: 'Freelance',
    companyUrl: '',
    dates: 'February 2014 – December 2017',
    details: [
      'Restoration of movable and immovable property across textile, wood, and paper supports (canvas, panel painting, polychrome carving, altarpieces, books, graphic and archival documents).',
      'Handled study and documentation, analysis, consolidation, cleaning, protection, and presentation of artworks.',
      'Projects delivered in Barcelona and Zaragoza, Spain.'
    ]
  }
]

const featuredProjects = [
  {
    title: "Orquestrador d'Infraestructures de la Generalitat de Catalunya",
    description: 'Blablabla'
  },
  {
    title: 'Wikiparfum',
    description: 'Blablabla'
  },
  {
    title: 'Primavera Sound Website and App',
    description: 'Blablabla'
  },
  {
    title: 'Scopely Website',
    description: 'Blablabla'
  },
  {
    title: 'Klein Website',
    description: 'Blablabla'
  },
  {
    title: 'Chefslink Website and App',
    description: 'Blablabla'
  },
  {
    title: 'HP Virtual Booth',
    description: 'Blablabla'
  },
  {
    title: 'Socialpoint Website',
    description: 'Blablabla'
  }
]

const projects = [
  {
    title: 'Northern Youth Soccer League Website',
    description: 'Website development using HTML and CSS.'
  },
  {
    title: 'Transparent Government In Fact Website',
    description:
      'USA Congress website that displays live data from ProPublica API through AJAX calls. Made using HTML, CSS, JavaScript, Vue.js and Bootstrap.'
  },
  {
    title: 'Ubiqum Bookstore Web App',
    description:
      'Bookstore web app with dynamic search engine. Gets information from an API through AJAX calls. Made using HTML, CSS, JavaScript and Vue.js.'
  },
  {
    title: 'Weather by City Web App',
    description:
      'Web app that displays weather by searching a city, getting information from an API through AJAX calls. Made using HTML, CSS, JavaScript and Vue.js.'
  },
  {
    title: 'Ubiqum Foosball League Mobile Web App',
    description:
      'Responsive single page application, deployed on Firebase. Made using HTML, CSS, JavaScript, and Vue.js.'
  },
  {
    title: 'Salvo Battleship Game',
    description:
      'Multiplayer online game built with Java, Spring Boot, JavaScript, Vue.js, HTML and CSS.'
  }
]

const education = [
  {
    title: 'Full Stack Java Developer',
    institution: 'Full-time Bootcamp',
    dates: 'September 2018 – February 2019',
    details: [
      'Learning by Doing methodology with project-based delivery.',
      'Focused on HTML5, CSS3, JavaScript, Vue.js, Java 8, Spring Boot, Firebase, and Bootstrap.'
    ]
  },
  {
    title: '3D Generalist – 3D Modeling and Animation',
    institution: 'Animum Creativity Advanced School',
    dates: 'January 2018 – July 2018',
    details: ['Autodesk 3D Studio Max.']
  },
  {
    title: 'Degree in Conservation and Restoration of Cultural Property',
    institution: 'Universitat de Barcelona',
    dates: 'September 2009 – June 2014',
    details: []
  }
]

const technicalSkills = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Vue.js',
  'Java 8',
  'Spring Boot',
  'Firebase',
  'Bootstrap',
  'WordPress',
  'Adobe Photoshop',
  'Adobe Illustrator',
  'Autodesk 3D Studio Max',
  'Digital Photography & Photo Edition'
]

const softSkills = [
  'Organized',
  'Fast learner',
  'Motivated',
  'Responsible',
  'Sociable',
  'Creative',
  'Energetic',
  'Independent',
  'Teamwork'
]

const languages = ['Spanish', 'English', 'Catalan']

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__content">
          <Avatar.Root className="avatar">
            <Avatar.Image src="/images/avatar.jpg" alt="Emilse Parrello" />
            <Avatar.Fallback>EP</Avatar.Fallback>
          </Avatar.Root>
          <div>
            <p className="eyebrow">Curriculum Vitae</p>
            <h1>Emilse Parrello</h1>
            <p className="role">Full Stack Developer</p>
          </div>
        </div>
        <div className="hero__meta">
          <div>
            <span className="label">Email</span>
            <a href="mailto:eparrello@gmail.com">eparrello@gmail.com</a>
          </div>
          <div>
            <span className="label">Phone</span>
            <a href="tel:+34687514350">687 514 350</a>
          </div>
          <div>
            <span className="label">Location</span>
            <span>Barcelona</span>
          </div>
          <div>
            <span className="label">LinkedIn</span>
            <a href="https://linkedin.com/in/emilseparrello">linkedin.com/in/emilseparrello</a>
          </div>
          <div>
            <span className="label">GitHub</span>
            <a href="https://github.com/EmyParrello">github.com/EmyParrello</a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card about">
          <h2>About</h2>
          <p>
            Looking for new challenges, aiming to improve skills, expand knowledge and grow personal
            and professionally, always with a positive attitude and an open mind.
          </p>
        </section>

        <section className="card">
          <Tabs.Root defaultValue="work" className="tabs">
            <Tabs.List className="tabs__list">
              <Tabs.Trigger value="work">Work Experience</Tabs.Trigger>
              <Tabs.Trigger value="projects">Projects</Tabs.Trigger>
              <Tabs.Trigger value="education">Education</Tabs.Trigger>
              <Tabs.Trigger value="skills">Skills</Tabs.Trigger>
              <Tabs.Trigger value="languages">Languages</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="work" className="tabs__content">
              <Accordion.Root multiple defaultValue={[workHistory[0].value]}>
                {workHistory.map((role) => (
                  <Accordion.Item key={role.value} value={role.value} className="accordion__item">
                    <Accordion.ItemTrigger className="accordion__trigger">
                      <div>
                        <h3>{role.role}</h3>
                        <p className="muted">{role.company}</p>
                      </div>
                      <span className="pill">{role.dates}</span>
                    </Accordion.ItemTrigger>
                    <Accordion.ItemContent className="accordion__content">
                      <ul>
                        {role.details.map((detail, index) => (
                          <li key={`${role.value}-${index}`}>{detail}</li>
                        ))}
                      </ul>
                    </Accordion.ItemContent>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </Tabs.Content>

            <Tabs.Content value="projects" className="tabs__content">
              <div className="stack">
                <div>
                  <h3 className="section-title">Featured Projects</h3>
                  <div className="project-grid">
                    {featuredProjects.map((project) => (
                      <div key={project.title} className="project-card">
                        <h4>{project.title}</h4>
                        <p className="muted">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="section-title">Additional Projects</h3>
                  <div className="project-grid">
                    {projects.map((project) => (
                      <div key={project.title} className="project-card">
                        <h4>{project.title}</h4>
                        <p className="muted">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="education" className="tabs__content">
              <div className="stack">
                {education.map((item) => (
                  <article key={item.title} className="education__item">
                    <div>
                      <h3>{item.title}</h3>
                      <p className="muted">{item.institution}</p>
                    </div>
                    <span className="pill">{item.dates}</span>
                    {item.details.length > 0 && (
                      <ul>
                        {item.details.map((detail, index) => (
                          <li key={`${item.title}-${index}`}>{detail}</li>
                        ))}
                      </ul>
                    )}
                  </article>
                ))}
              </div>
            </Tabs.Content>

            <Tabs.Content value="skills" className="tabs__content">
              <div className="skills-grid">
                <div className="skills-card">
                  <h3>Technical Skills</h3>
                  <div className="chip-grid">
                    {technicalSkills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="skills-card">
                  <h3>Skills</h3>
                  <div className="chip-grid">
                    {softSkills.map((skill) => (
                      <span key={skill} className="chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Tabs.Content>

            <Tabs.Content value="languages" className="tabs__content">
              <div className="language-grid">
                {languages.map((language) => (
                  <div key={language} className="language-card">
                    <h3>{language}</h3>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </section>
      </main>
    </div>
  )
}
