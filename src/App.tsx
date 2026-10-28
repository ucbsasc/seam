const email = 'ucb.seam@gmail.com';
const instagram = 'https://www.instagram.com/ucbseam';
const sascSite = 'https://ucbsasc.org';
const base = import.meta.env.BASE_URL;

const mission =
  'To empower high school youth and mentors by utilizing academic advising and mentorship as a way of addressing political and socio-economic issues facing the Southeast Asian community; to build a two-way exchange of knowledge and resources, instilling within both mentees and mentors the power to create social change.';

const steps = [
  {
    title: 'Applications',
    when: 'Spring',
    body: 'Berkeley students apply to be mentors and high school students apply to be mentees. We pair each mentee with a mentor before the workshops start.',
  },
  {
    title: 'Workshops on Zoom',
    when: 'May 9 to 31, 2025',
    body: 'For about four weeks, mentors and mentees attend virtual workshops together.',
  },
  {
    title: 'Conference at Berkeley',
    when: 'June 6 to 8, 2025',
    body: 'Mentors and mentees meet in person for three days and two nights on campus. SEAM covers all expenses, so food and housing are paid for.',
  },
];

const history = [
  {
    year: '2000',
    body: 'SASC started after a Southeast Asian conference at Berkeley. In December, members held a Southeast Asian Youth Summit for high school students, college students, educators, and community workers.',
  },
  {
    year: '2002',
    body: 'The first Summer Institute brought Southeast Asian high school students to stay on campus for a few days of college workshops, free of charge.',
  },
  {
    year: '2007',
    body: 'SASC members started mentoring students from South East Asian Youth Leaders (SEAYL) in Richmond.',
  },
  {
    year: '2008',
    body: 'The mentorship was renamed SEAM, the Southeast Asian Mentorship program.',
  },
  {
    year: '2019–20',
    body: 'After a hiatus, SEAM restarted as an online program and opened up to high school students outside the Bay Area.',
  },
];

type PhotoProps = { src: string; alt: string; caption: string; width: number; height: number };

const Photo = ({ src, alt, caption, width, height }: PhotoProps) => (
  <figure className="photo">
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    <figcaption>{caption}</figcaption>
  </figure>
);

const ContactButtons = ({ dark = false }: { dark?: boolean }) => (
  <div className="buttons">
    <a className={dark ? 'button button-light' : 'button'} href={`mailto:${email}?subject=SEAM`}>
      Email SEAM
    </a>
    <a className={dark ? 'button button-ghost-light' : 'button button-ghost'} href={instagram} target="_blank" rel="noopener">
      @ucbseam on Instagram
    </a>
  </div>
);

const App = () => (
  <>
    <header className="topbar">
      <div className="wrap topbar-inner">
        <a className="brand" href={base}>
          <img src={`${base}favicon.png`} alt="" width={36} height={36} />
          <span>SEAM</span>
        </a>
        <a className="topbar-link" href={sascSite}>
          Part of SASC at UC Berkeley
        </a>
      </div>
    </header>

    <main>
      <section className="hero wrap">
        <div className="hero-text">
          <h1>Southeast Asian Mentorship</h1>
          <div>
            <p className="lede">
              UC Berkeley students mentoring Southeast Asian high schoolers through college applications and whatever
              comes after.
            </p>
            <ContactButtons />
          </div>
        </div>
        <img
          className="hero-photo"
          src={`${base}group.webp`}
          alt="SEAM mentors and mentees posing together in a classroom in front of a hand-lettered Southeast Asian Mentorship sign"
          width={1440}
          height={1080}
        />
      </section>

      <section className="wrap split about">
        <img
          className="logo"
          src={`${base}logo.png`}
          alt="SEAM logo: the word Seam in green script above two hands holding a pink lotus"
          width={800}
          height={800}
        />
        <div>
          <h2>About SEAM</h2>
          <p>
            SEAM pairs UC Berkeley students with Southeast Asian high school students. When it started, SEAM worked
            mainly with students from Richmond and the surrounding Bay Area, holding workshops and activities that
            supported high school youth academically and politically. Mentees now join from all over California.
          </p>
          <p>
            Mentors help their mentees with college applications and with planning for after high school. Workshops
            also cover Southeast Asian history and identity.
          </p>
        </div>
      </section>

      <section className="band band-mint">
        <div className="wrap">
          <h2>How it works</h2>
          <p className="intro">
            The program has two parts: a few weeks of workshops on Zoom and a conference at Berkeley. We encourage
            everyone to do both. The dates below are from 2025, and next year&apos;s will be around the same time.
          </p>
          <div className="split split-wide">
            <ol className="schedule">
              {steps.map((step) => (
                <li key={step.title}>
                  <span className="when">{step.when}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Photo
              src={`${base}traditional.webp`}
              alt="SEAM mentees posing in traditional clothes, making heart shapes with their arms"
              caption="Mentees in traditional clothes"
              width={1440}
              height={1440}
            />
          </div>
        </div>
      </section>

      <section className="wrap split mentor">
        <div>
          <h2>Being a mentor</h2>
          <p>
            As a mentor, you contact your mentee once a week, encourage them to come to our workshops, and come to the
            workshops yourself. You also support them with whatever they want to pursue after high school.
          </p>
          <p>We expect mentors to come to the summer conference too. Food, housing, and other costs are covered.</p>
        </div>
        <Photo
          src={`${base}workshop.webp`}
          alt="A speaker presenting a workshop titled Reclaiming our Mental Health as Southeast Asians to students seated in a classroom"
          caption="Irene Phuong Van presenting “Reclaiming our Mental Health as Southeast Asians”"
          width={1440}
          height={1085}
        />
      </section>

      <section className="wrap split history">
        <div>
          <h2>History</h2>
          <p>SASC has run programs for Southeast Asian high school students since it started in 2000.</p>
          <Photo
            src={`${base}fundraiser.webp`}
            alt="SEAM officers smiling at a fundraising table selling strawberry sago under the SASC banner"
            caption="Officers selling strawberry sago to raise money for SEAM"
            width={1440}
            height={1440}
          />
        </div>
        <ol className="timeline">
          {history.map((item) => (
            <li key={item.year}>
              <span className="year">{item.year}</span>
              <p>{item.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="band band-lotus">
        <div className="wrap narrow">
          <h2>Mission</h2>
          <blockquote>“{mission}”</blockquote>
        </div>
      </section>

      <section className="band band-ink" id="contact">
        <div className="wrap narrow">
          <h2>Get involved</h2>
          <p>
            Applications for next year aren&apos;t open yet. We&apos;ll post on Instagram when they are. If you have
            questions, email us at <strong>{email}</strong>.
          </p>
          <ContactButtons dark />
        </div>
      </section>
    </main>

    <footer className="footer">
      <div className="wrap">
        SEAM is a program of the <a href={sascSite}>Southeast Asian Student Coalition</a> at UC Berkeley.
      </div>
    </footer>
  </>
);

export default App;
