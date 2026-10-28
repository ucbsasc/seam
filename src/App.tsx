const email = 'ucb.seam@gmail.com';
const instagram = 'https://www.instagram.com/ucbseam';
const sascSite = 'https://ucbsasc.org';
const base = import.meta.env.BASE_URL;

// Sign-up form links. Paste the Google Form URLs here when they open.
// Every "Sign up" button on the page points at these. While a link is empty,
// buttons scroll to the sign-up section, which offers an email reminder instead.
const menteeForm = '';
const mentorForm = 'https://docs.google.com/forms/d/e/1FAIpQLSfN6obe4wYn4DyU6QQiNAaFyJz5cepl6K3cpANG9GpQ2TAydg/viewform';

const menteeHref = menteeForm || '#sign-up';
const mentorHref = mentorForm || '#sign-up';

const reminder = (role: string) =>
  `mailto:${email}?subject=${encodeURIComponent(`Remind me when SEAM ${role} sign-ups open`)}`;

const mission =
  'To empower high school youth and mentors by utilizing academic advising and mentorship as a way of addressing political and socio-economic issues facing the Southeast Asian community; to build a two-way exchange of knowledge and resources, instilling within both mentees and mentors the power to create social change.';

const nav = [
  { href: '#how-it-works', label: 'How it works' },
  { href: '#conference', label: 'The weekend' },
  { href: '#parents', label: 'Parents' },
  { href: '#mentors', label: 'Mentors' },
];

const facts = [
  { term: 'Who', detail: 'Southeast Asian high school students. Mentors are college students.' },
  { term: 'Cost', detail: 'Nothing. Travel, the dorms, and meals at the conference are covered.' },
  { term: 'When', detail: 'Evening Zoom meetings in May, then a weekend at Berkeley in June.' },
  { term: 'Where', detail: "Mostly online, so you don't need to live near Berkeley." },
];

const steps = [
  {
    title: 'Sign up',
    when: 'Fall to spring',
    body: 'Mentors sign up first and go through training. Mentee sign-ups open after that. Before the first meeting we sort everyone into family groups.',
  },
  {
    title: 'Zoom meetings',
    when: 'May',
    body: 'Friday and Saturday evenings. Most nights are a workshop or a panel, and some are just for hanging out. Cameras on, please.',
  },
  {
    title: 'Weekend at Berkeley',
    when: 'June',
    body: 'Friday to Sunday on campus, staying in the dorms with your family group.',
  },
];

type Session = { title: string; body?: string };

const sessions: Session[] = [
  {
    title: 'Welcome night',
    body: 'Speed-dating rounds with questions like "would you rather fight one horse-sized duck or 100 duck-sized horses?" Then the family reveal.',
  },
  {
    title: 'Post-secondary pathways and financial aid',
    body: 'Four-year schools, community college and transferring, trade school, the military. Then FAFSA, the California Dream Act, the CSS Profile, and where to look for scholarships.',
  },
  {
    title: 'College and career panel',
    body: "Mentors talked about their majors, transferring from community college, and what they'd tell themselves in high school.",
  },
  { title: 'Southeast Asian American history' },
  { title: 'Politics and how it affects our communities' },
  { title: 'Social nights' },
];

// Worded the way they appear in the 2025 manual and slides.
const agreements = [
  'Using "I" statements',
  'What is said here, stays here. What is learned here, leaves here. (Vegas Rule)',
  'Call in, not call out',
  'Honoring silence. Silence is also a way of reflecting and thinking.',
  'Creating a tight-knit community',
  'Show up imperfectly and challenge ourselves',
  'Step up, step down',
];

const parentInfo = [
  {
    title: 'Cost',
    body: "Your child doesn't pay anything. SEAM covers housing, meals, and travel. If you pay for something to get them there, like BART fare, keep the receipt. We send a reimbursement form after the conference, and the check comes from the ASUC (Berkeley's student government) a few weeks later. Only personal spending, like snacks or merch, isn't covered.",
  },
  {
    title: 'Who works with your child',
    body: "Every mentor and committee member is a certified mandated reporter under California's Child Abuse and Neglect Reporting Act (CANRA). As a registered student organization, we follow UC Berkeley's policy on activities involving minors, and mentors never meet alone with a mentee.",
  },
  {
    title: 'Staying overnight',
    body: "Mentees share double rooms with other mentees of the same gender. Mentors and committee members room separately on the same floor so they can supervise. Bedding and towels are provided. You'll get a permission form to sign before the conference.",
  },
  {
    title: 'Getting there',
    body: "You're welcome to drop off and pick up. If that doesn't work, we set up BART groups and carpools led by committee members, and we send exact times and places before the weekend.",
  },
  {
    title: 'If someone gets sick',
    body: "Please keep your child home if they have Covid symptoms or recently tested positive, and email us. If they get sick during the weekend, we'll test them and call you to pick them up, since the campus has no rooms for isolating.",
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
    year: '2012',
    body: "SEAM shut down because there wasn't enough funding.",
  },
  {
    year: '2019',
    body: 'Berkeley students brought SEAM back as an online program, which opened it up to high school students outside the Bay Area. Covid put it on hold again soon after.',
  },
  {
    year: '2022–23',
    body: 'The first cohort since 2019, and the first to meet both online and in person.',
  },
];

type PhotoProps = { src: string; alt: string; caption: string; width: number; height: number; className?: string };

const Photo = ({ src, alt, caption, width, height, className = 'photo' }: PhotoProps) => (
  <figure className={className}>
    <img src={src} alt={alt} width={width} height={height} loading="lazy" />
    <figcaption>{caption}</figcaption>
  </figure>
);

type SignupProps = { title: string; who: string; when: string; form: string; label: string; role: string; tone: 'mint' | 'lotus' };

const SignupCard = ({ title, who, when, form, label, role, tone }: SignupProps) => (
  <div className={`signup signup-${tone}`}>
    <h3>{title}</h3>
    <p>{who}</p>
    {form ? (
      <a className="button" href={form}>
        {label}
      </a>
    ) : (
      <>
        <p className="signup-when">Not open yet. {when}</p>
        <a className="button" href={reminder(role)}>
          Email me when it opens
        </a>
      </>
    )}
  </div>
);

const App = () => {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="topbar">
        <div className="wrap topbar-inner">
          <a className="brand" href={base}>
            <img src={`${base}favicon.png`} alt="" width={36} height={36} />
            <span>SEAM</span>
          </a>
          <nav className="topbar-nav" aria-label="On this page">
            {nav.map((item) => (
              <a key={item.href} className="topbar-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <a className="topbar-cta" href="#sign-up">
            Sign up
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero">
          <div className="wrap hero-text">
            <h1>
              Southeast Asian{' '}
              <span className="brush">
                Mentorship
                <span className="lotus-wrap">
                  <svg className="brush-stroke" viewBox="0 0 640 80" aria-hidden="true">
                    <path d="M4 74 C 200 62, 420 60, 520 70 C 572 75, 624 72, 606 56 C 588 42, 565 49, 593 27" />
                  </svg>
                  <img className="hero-lotus" src={`${base}lotus.png`} alt="" width={120} height={123} />
                </span>
              </span>
            </h1>
            <p className="lede">
              We&apos;re a registered student organization at UC Berkeley that pairs Southeast Asian high schoolers
              with college mentors. You meet your mentors on Zoom in May, then spend a weekend with them on campus in
              June. It doesn&apos;t cost you anything.
            </p>
            <div className="buttons" id="hero-actions">
              <a className="button button-big" href={menteeHref}>
                Sign up as a mentee
              </a>
              <a className="button button-big button-ghost" href={mentorHref}>
                Become a mentor
              </a>
            </div>
            <p className="hero-parents">
              Parent or guardian? <a href="#parents">Start here</a>. Questions go to{' '}
              <a href={`mailto:${email}`}>{email}</a>.
            </p>
          </div>
          <div className="wrap">
            <div className="hero-frame">
              <img
                className="hero-photo"
                src={`${base}hero.webp`}
                alt="A big group of SEAM mentees and mentors, most in cultural clothes, posing with their hands framing their faces in a courtyard"
                width={1600}
                height={900}
                fetchPriority="high"
              />
              <img className="hero-badge" src={`${base}logo.png`} alt="" width={800} height={800} />
            </div>
          </div>
        </section>

        <section className="wrap split about" id="about">
          <div>
            <h2>Hi, we&apos;re SEAM</h2>
            <p>
              SEAM is a registered student organization (RSO) at UC Berkeley. We have our own committee and run
              independently, under the umbrella of the <a href={sascSite}>Southeast Asian Student Coalition</a>{' '}
              (SASC). Every spring we put high schoolers in small groups with college mentors and help them figure
              out what comes after graduation. That could be a four-year school, community college, trade school, or
              something else, and we talk about how to pay for it, down to the FAFSA and the California Dream Act.
            </p>
            <p>
              It&apos;s also a lot of fun. Our Zoom meetings start with questions like &quot;how many pigeons could you
              reasonably carry?&quot; and the weekend at Berkeley ends with everyone dressed up in cultural clothes for
              a banquet.
            </p>
            <p>
              People sometimes ask how it&apos;s free. We fundraise for it (that&apos;s us selling strawberry sago in
              the photo further down), so cost doesn&apos;t keep anyone out.
            </p>
          </div>
          <div className="basics">
            <h3>The basics</h3>
            <dl className="facts">
              {facts.map((f) => (
                <div key={f.term}>
                  <dt>{f.term}</dt>
                  <dd>{f.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section className="wrap speakers" id="speakers">
          <h2>Who you&apos;ll hear from</h2>
          <div className="speaker-grid">
            <article className="speaker speaker-main">
              <img
                src={`${base}speaker.webp`}
                alt="Dr. Harvey Dong standing with three SEAM students in front of a hand-lettered Southeast Asian Mentorship banner"
                width={1200}
                height={900}
                loading="lazy"
              />
              <div className="speaker-text">
                <h3>Dr. Harvey Dong</h3>
                <p className="speaker-role">Teaches Asian American Studies at UC Berkeley</p>
                <p>
                  As a Cal student in 1969, Dr. Dong was part of the Third World Liberation Front strike, the student
                  movement that led to Berkeley&apos;s Ethnic Studies department. He went on to run Eastwind Books of
                  Berkeley, an Asian American bookstore, for more than 25 years. He came out to speak with our students
                  and stayed for photos.
                </p>
              </div>
            </article>
            <article className="speaker">
              <img
                src={`${base}workshop.webp`}
                alt="Irene Phuong Van presenting a workshop titled Reclaiming our Mental Health as Southeast Asians to students seated in a classroom"
                width={1440}
                height={1085}
                loading="lazy"
              />
              <div className="speaker-text">
                <h3>Irene Phuong Van</h3>
                <p>Led a workshop for our students called &quot;Reclaiming our Mental Health as Southeast Asians.&quot;</p>
              </div>
            </article>
          </div>
        </section>

        <section className="band band-mint" id="how-it-works">
          <div className="wrap">
            <h2>How it works</h2>
            <p className="intro">
              The schedule is about the same every year. We post exact dates on <a href={instagram}>Instagram</a>{' '}
              once they&apos;re set.
            </p>
            <div className="split split-wide">
              <div>
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
                <details className="sessions">
                  <summary>What the Zoom meetings covered last time</summary>
                  <ul>
                    {sessions.map((s) => (
                      <li key={s.title}>
                        <h3>{s.title}</h3>
                        {s.body && <p>{s.body}</p>}
                      </li>
                    ))}
                  </ul>
                </details>
              </div>
              <Photo
                src={`${base}family.webp`}
                alt="A small group of SEAM students, some in cultural clothes, posing in front of a striped wooden wall next to a foosball table"
                caption="Hanging out during the conference"
                width={1200}
                height={900}
              />
            </div>
          </div>
        </section>

        <section className="wrap families" id="families">
          <div className="split families-top">
            <div>
              <h2>Family groups</h2>
              <p>
                Every mentee joins a small family group with a few other high schoolers and a couple of mentors.
                Families are named after flowers, like Hibiscus and Orchid.
              </p>
              <p>
                Your family decides how often to meet and how, whether that&apos;s a Zoom call or a group chat. At your
                first meeting you fill out an agreement together about expectations and meeting times.
              </p>
              <p>
                For safety, mentors don&apos;t meet one-on-one with a mentee. Texting is fine as long as it&apos;s about
                mentorship.
              </p>
              <p>
                Mentors aren&apos;t trained counselors. For things like mental health or a medical issue, please reach
                out to a professional or your school counselor.
              </p>
            </div>
            <Photo
              src={`${base}orchid.webp`}
              alt="A family group in matching SEAM shirts holding up a hand-drawn poster that says Orchids"
              caption="The Orchid family and their poster"
              width={1200}
              height={900}
            />
          </div>
          <div className="agreements">
            <div>
              <h3>Community agreements</h3>
              <p>We go over these at the start of meetings.</p>
            </div>
            <ul>
              {agreements.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="band band-lotus conference" id="conference">
          <div className="wrap">
            <figure className="banner">
              <img
                src={`${base}sproul.webp`}
                alt="A big group of SEAM mentors and mentees in matching light blue shirts sitting on the steps of Sproul Hall at dusk"
                width={1600}
                height={608}
                loading="lazy"
              />
              <figcaption>Mentors and mentees on the Sproul Hall steps</figcaption>
            </figure>
            <div className="split">
              <div>
                <h2>The weekend at Berkeley</h2>
                <p>
                  For most people this is the best part, since it&apos;s the first time your family meets in person. We
                  stay in the campus dorms and eat at the dining hall. There are campus tours, workshops with guest
                  speakers, time with your family, and a cultural banquet at the end.
                </p>
                <p>
                  The dorms and meals are covered. If you need a ride, we organize BART groups and carpools, each with
                  someone from the committee.
                </p>
                <p>
                  We send drop-off and pick-up details before the weekend. Bring a few days of clothes, toiletries, a
                  school ID, some spending money, and a cultural outfit for the banquet.
                </p>
                <div className="buttons">
                  <a className="button" href={menteeHref}>
                    Sign up as a mentee
                  </a>
                </div>
              </div>
              <Photo
                src={`${base}food.webp`}
                alt="Mentees in cultural clothes holding full plates next to a long table of catered trays, one making a peace sign at the camera"
                caption="Food during the conference"
                width={1000}
                height={750}
              />
            </div>
          </div>
        </section>

        <section className="wrap parents" id="parents">
          <div className="split parents-top">
            <div>
              <h2>For parents and guardians</h2>
              <p>
                Questions can go to <a href={`mailto:${email}`}>{email}</a>. We try to answer within a business day.
              </p>
            </div>
            <div className="parent-cost">
              <h3>{parentInfo[0].title}</h3>
              <p>{parentInfo[0].body}</p>
            </div>
          </div>
          <div className="parent-grid">
            {parentInfo.slice(1).map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="band band-mint" id="mentors">
          <div className="wrap split mentor">
            <div>
              <h2>For college students</h2>
              <p className="mentor-lede">You don&apos;t have to go to Berkeley to be a mentor.</p>
            </div>
            <div>
              <p>
                Mentors keep in touch with their family group, come to the Zoom meetings in May, and come to the
                conference in June. A few also speak on the career panel. Your conference costs are covered too.
              </p>
              <p>
                Before the program starts you do mentor training and California&apos;s mandated reporter (CANRA)
                training, since you&apos;ll be working with minors.
              </p>
              <div className="buttons">
                <a className="button" href={mentorHref}>
                  Become a mentor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="wrap history-section" id="history">
          <div className="split history">
            <div>
              <h2>History</h2>
              <p>
                SEAM grew out of SASC, which has run programs for Southeast Asian high school students since it started
                in 2000.
              </p>
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
          </div>
          <div className="mission-quote">
            <h3>Our mission</h3>
            <blockquote>&quot;{mission}&quot;</blockquote>
          </div>
        </section>

        <section className="band band-ink" id="sign-up">
          <div className="wrap">
            <h2>Sign up</h2>
            <p className="signup-intro">
              Mentor applications are open now. Mentee sign-ups open later, so send us an email and we&apos;ll let you
              know, or keep an eye on <a href={instagram}>@ucbseam</a>. Questions go to{' '}
              <a href={`mailto:${email}?subject=SEAM`}>{email}</a>.
            </p>
            <div className="signups">
              <SignupCard
                title="Mentees"
                who="For Southeast Asian high school students, and students from other underserved communities."
                when="Mentee sign-ups usually open in January."
                form={menteeForm}
                label="Sign up as a mentee"
                role="mentee"
                tone="mint"
              />
              <SignupCard
                title="Mentors"
                who="For college students who can make the May meetings and the June conference."
                when="Mentor sign-ups usually open in the fall."
                form={mentorForm}
                label="Apply to be a mentor"
                role="mentor"
                tone="lotus"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <img src={`${base}logo.png`} alt="" width={72} height={72} loading="lazy" />
          <p>
            SEAM is a registered student organization at UC Berkeley, under the <a href={sascSite}>Southeast Asian Student Coalition</a>.
            <br />
            <a href={`mailto:${email}`}>{email}</a> · <a href={instagram}>@ucbseam on Instagram</a>
          </p>
        </div>
      </footer>

    </>
  );
};

export default App;
