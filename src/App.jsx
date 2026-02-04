import { Avatar } from '@ark-ui/react/avatar'
import { Tabs } from '@ark-ui/react/tabs'
import { Accordion } from '@ark-ui/react/accordion'

const workHistory = [
  {
    value: 'glovo',
    role: 'Data Engineer & Data Platform Engineer',
    company: 'Glovo',
    companyUrl: 'https://glovoapp.com',
    dates: 'Oct 2020 - Present',
    details: [
      'Glovo is the app that allows you to get the best products of your city in a few minutes. We connect users, businesses and couriers to make that possible.',
      'Originally joining the central Data Engineering team to manage all data pipelines for the company using Luigi and Jenkins as orchestration stack, and Redshift as our data warehouse.',
      'Led the transition to a data mesh architecture and the Data Platform team, introducing Airflow, Trino, Glue, Kubernetes, ArgoCD, and Terraform.',
      'Designed, implemented, and oversaw Trino infrastructure with several clusters serving hundreds of thousands of queries per day.'
    ]
  },
  {
    value: 'letgo',
    role: 'BI Data Engineer',
    company: 'Letgo',
    companyUrl: 'https://letgo.com/about-letgo',
    dates: 'May 2019 - Aug 2020',
    details: [
      'Provided stakeholders with relevant data in a timely manner, managing over a hundred pipelines in Airflow.',
      'Delivered data to analysts, data scientists, trust and safety, customer care, finance, and leadership teams.'
    ]
  },
  {
    value: 'payxpert',
    role: 'Data Engineer (Freelance)',
    company: 'PayXpert',
    companyUrl: 'https://payxpert.com',
    dates: 'Nov 2017 - Nov 2018',
    details: [
      'Designed a custom ETL pipeline for automated bank reconciliations.',
      'Implemented an open source HR management solution across the company.',
      'Automated data retrieval from FTP sources using VPN and SSH keys.'
    ]
  },
  {
    value: 'freelance',
    role: 'Finance Manager & Data Engineer (Freelance)',
    company: 'Digamelon & La Famiglia',
    companyUrl: 'http://digamelon.net',
    dates: 'Nov 2016 - Oct 2018',
    details: [
      'Developed an ETL pipeline from Zendesk to a MySQL instance in AWS RDS.',
      'Deployed Grafana on AWS EC2 to plot data in real-time dashboards.',
      'Implemented Odoo 8 (formerly OpenERP).' 
    ]
  },
  {
    value: 'kott',
    role: 'Founder',
    company: 'Kott Müller',
    companyUrl: '',
    dates: 'Nov 2015 - Oct 2016',
    details: [
      'Created a locally produced shoes brand and managed everything from building the site to logistics, finance, and marketing.',
      'Learned the importance of complementary skillsets and choosing the right partners.',
      'Recognized the need to focus on fundamentals before scaling complex structures.'
    ]
  },
  {
    value: 'northweek',
    role: 'Finance Manager',
    company: 'Northweek',
    companyUrl: 'https://northweek.com',
    dates: 'Oct 2014 - Oct 2015',
    details: [
      'Built the accounting team and implemented infrastructure to deliver accounting statements and reports.'
    ]
  },
  {
    value: 'kpmg',
    role: 'Accounting Audit Intern',
    company: 'KPMG',
    companyUrl: '',
    dates: 'Jan 2013 - Dec 2013',
    details: [
      'Engaged in field work on audit reports for clients including Artificial Solutions, DSV, Omnicom Media Group, Ricoh, TRAM, and Wallenius Wilhelmsen Logistics.'
    ]
  }
]

const education = [
  {
    title: 'Data Analytics with Machine Learning',
    institution: 'Ubiqum Code Academy',
    dates: 'Nov 2018 - Apr 2019',
    details: [
      'Investigated customer buying patterns and predicted profitability.',
      'Completed market basket analysis to discover associations between products.',
      'Built IoT analytics on energy consumption.',
      'Predicted indoor location through WiFi signals.',
      'Created an API + dashboard to plot datathon results.'
    ]
  },
  {
    title: 'Bachelor in Economics',
    institution: 'University of Barcelona',
    dates: 'Sep 2008 - Jun 2012',
    details: []
  }
]

const languages = [
  { name: 'English', level: 'Native / Fluent' },
  { name: 'Spanish', level: 'Native / Fluent' },
  { name: 'Catalan', level: 'Professional' }
]

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
            <p className="role">Data Platform Engineer</p>
          </div>
        </div>
        <div className="hero__meta">
          <div>
            <span className="label">Location</span>
            <span>Barcelona</span>
          </div>
          <div>
            <span className="label">GitHub</span>
            <a href="http://git.gparrello.com">github.com/gparrello</a>
          </div>
          <div>
            <span className="label">LinkedIn</span>
            <a href="http://linkedin.gparrello.com">linkedin.com/in/gparrello</a>
          </div>
          <div>
            <span className="label">Calendar</span>
            <a href="http://calendar.gparrello.com">calendly.com/gparrello</a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="card about">
          <h2>About</h2>
          <p>
            DevOps engineer focused in data platform infrastructure. Economics major and musician,
            passionate about data and technology. As an avid self-hoster, interested in open source
            software, privacy, and decentralization.
          </p>
        </section>

        <section className="card">
          <Tabs.Root defaultValue="work" className="tabs">
            <Tabs.List className="tabs__list">
              <Tabs.Trigger value="work">Work Experience</Tabs.Trigger>
              <Tabs.Trigger value="education">Education</Tabs.Trigger>
              <Tabs.Trigger value="languages">Languages</Tabs.Trigger>
            </Tabs.List>

            <Tabs.Content value="work" className="tabs__content">
              <Accordion.Root multiple defaultValue={[workHistory[0].value]}>
                {workHistory.map((role) => (
                  <Accordion.Item key={role.value} value={role.value} className="accordion__item">
                    <Accordion.ItemTrigger className="accordion__trigger">
                      <div>
                        <h3>{role.role}</h3>
                        <p className="muted">
                          {role.companyUrl ? (
                            <a href={role.companyUrl}>{role.company}</a>
                          ) : (
                            role.company
                          )}
                        </p>
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

            <Tabs.Content value="languages" className="tabs__content">
              <div className="language-grid">
                {languages.map((language) => (
                  <div key={language.name} className="language-card">
                    <h3>{language.name}</h3>
                    <p className="muted">{language.level}</p>
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
