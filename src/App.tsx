import { useEffect, useState } from 'react';

const email = 'ucb.seam@gmail.com';
const instagram = 'https://www.instagram.com/ucbseam';
const sascSite = 'https://ucbsasc.org';
const base = import.meta.env.BASE_URL;

// Sign-up form links. Paste the Google Form URLs here when they open.
// Every "Sign up" button on the page points at these. While a link is empty,
// buttons scroll to the sign-up section, which offers an email reminder instead.
const menteeForm = '';
const mentorForm = '';

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

const perks = [
  'Two or three college mentors you can ask about applications, majors, and paying for school.',
  'A financial aid workshop that covers FAFSA, the California Dream Act, the CSS Profile, and where to find scholarships.',
  'A panel of college students answering your questions, including one who transferred from community college.',
  'Workshops on Southeast Asian American history and the politics that affect our families.',
  'Two nights in the Berkeley dorms with campus tours, guest speakers, and a cultural banquet. We pay for all of it.',
];

const facts = [
  { term: 'Cost', detail: 'Free. We pay for your travel, the dorms, and meals at the conference.' },
  { term: 'When', detail: 'Friday and Saturday evenings in May on Zoom, then a weekend in early June at Berkeley.' },
  { term: 'Time', detail: 'In 2025 that was eight two-hour Zoom meetings and one weekend.' },
  { term: 'Where', detail: "Online first, so you don't need to live near Berkeley." },
  { term: '2025', detail: '23 high schoolers and 11 mentors in four family groups.' },
];

const steps = [
  {
    title: 'Sign up',
    when: 'Fall to spring',
    body: 'Mentors sign up first and do training over the winter. Mentee sign-ups open after that. Before the first meeting we sort everyone into family groups.',
  },
  {
    title: 'Zoom meetings',
    when: 'May 9 to 31',
    body: 'Friday and Saturday evenings, 6 to 8 pm. Most nights are a workshop or a panel. Cameras on, please.',
  },
  {
    title: 'Weekend at Berkeley',
    when: 'June 6 to 8',
    body: 'Friday to Sunday on campus, staying in the dorms with your family group.',
  },
];

type Session = { date: string; title: string; body?: string };

const sessions: Session[] = [
  {
    date: 'May 9',
    title: 'Welcome night',
    body: 'Speed-dating rounds with questions like "would you rather fight one horse-sized duck or 100 duck-sized horses?" Then the family reveal.',
  },
  {
    date: 'May 10',
    title: 'Post-secondary pathways and financial aid',
    body: 'Four-year schools, community college and transferring, trade school, the military. Then FAFSA, the California Dream Act, the CSS Profile, and where to look for scholarships.',
  },
  {
    date: 'May 16',
    title: 'College and career panel',
    body: "Four mentors talked about their majors, transferring from community college, and what they'd tell themselves in high school.",
  },
  { date: 'May 17', title: 'Social night' },
  { date: 'May 23', title: 'Southeast Asian history, 50 years after 1975' },
  { date: 'May 24', title: 'Politics and how it affects our communities' },
  { date: 'May 30', title: 'Last workshop and a short social' },
  { date: 'May 31', title: 'Closing night', body: 'Logistics for the conference.' },
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
    body: "Your child doesn't pay anything. SEAM covers housing, meals, and travel. If you pay for something to get them there, like BART fare, keep the receipt. We send a reimbursement form after the conference, and the check comes from the ASUC (Berkeley's student government) in two to four weeks. Only personal spending, like snacks or merch, isn't covered.",
  },
  {
    title: 'Who works with your child',
    body: "Every mentor and committee member is a certified mandated reporter under California's Child Abuse and Neglect Reporting Act (CANRA). We follow UC Berkeley's policy on activities involving minors, and mentors never meet alone with a mentee.",
  },
  {
    title: 'Staying overnight',
    body: "Mentees share double rooms with other mentees of the same gender. Mentors and committee members room separately on the same floor so they can supervise. Bedding and towels are provided. You'll get a permission form to sign before the conference.",
  },
  {
    title: 'Getting there',
    body: "You're welcome to drop off and pick up. If that doesn't work, we set up travel groups led by committee members: BART from San Jose and the South Bay, and carpools from the East Bay and Southern California.",
  },
  {
    title: 'If someone gets sick',
    body: "Please keep your child home if they have Covid symptoms or tested positive in the last 10 days, and email us. If they get sick during the weekend, we'll test them and call you to pick them up, since the campus has no rooms for isolating.",
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

// Shows the phone-only sign-up bar once the hero buttons scroll away,
// and hides it again when the sign-up section itself is on screen.
const useSignupBar = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('hero-actions');
    const signup = document.getElementById('sign-up');
    if (!hero || !signup || !('IntersectionObserver' in window)) return;

    const visible = new Map<Element, boolean>();
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => visible.set(e.target, e.isIntersecting));
      setShow(!visible.get(hero) && !visible.get(signup));
    });
    observer.observe(hero);
    observer.observe(signup);
    return () => observer.disconnect();
  }, []);

  return show;
};

const App = () => {
  const showBar = useSignupBar();

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
              Southeast Asian <span className="brush">Mentorship</span>
            </h1>
            <p className="lede">
              We match Southeast Asian high school students with college mentors. You meet on Zoom in May, then spend a
              weekend together at UC Berkeley in June.
            </p>
            <p className="free-note">It&apos;s free. We pay for your travel, the dorms, and meals.</p>
            <div className="buttons" id="hero-actions">
              <a className="button button-big" href={menteeHref}>
                Sign up as a mentee
              </a>
              <a className="button button-big button-ghost" href={mentorHref}>
                Become a mentor
              </a>
            </div>
            <p className="hero-parents">
              Parent or guardian? <a href="#parents">Here&apos;s what you should know.</a>
            </p>
          </div>
          <div className="wrap">
            <div className="hero-frame">
              <img
                className="hero-photo"
                src={`${base}hero.webp`}
                alt="About thirty SEAM mentees and mentors, most in cultural clothes, posing with their hands framing their faces in a courtyard"
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
            <h2>What you get as a mentee</h2>
            <ul className="perks">
              {perks.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <p className="about-note">
              SEAM is run by the <a href={sascSite}>Southeast Asian Student Coalition</a> (SASC), a student group at UC
              Berkeley.
            </p>
          </div>
          <dl className="facts">
            {facts.map((f) => (
              <div key={f.term}>
                <dt>{f.term}</dt>
                <dd>{f.detail}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="band band-mint" id="how-it-works">
          <div className="wrap">
            <h2>How it works</h2>
            <p className="intro">
              These are the 2025 dates. The schedule is about the same each year, and we post the new dates on{' '}
              <a href={instagram}>Instagram</a>.
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
                  <summary>All eight Zoom meetings from 2025</summary>
                  <ul>
                    {sessions.map((s) => (
                      <li key={s.date}>
                        <span className="when">{s.date}</span>
                        <div>
                          <h3>{s.title}</h3>
                          {s.body && <p>{s.body}</p>}
                        </div>
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

        <section className="wrap split families" id="families">
          <div>
            <h2>Family groups</h2>
            <p>
              Every mentee is put in a family of five or six high schoolers and two or three mentors. Families are named
              after flowers. In 2025 they were Hibiscus, Chrysanthemum, Orchid, and Plumeria, and the theme was
              &quot;Roots of the past, petals of the future.&quot;
            </p>
            <p>
              Your family decides how often to meet and how, whether that&apos;s a Zoom call or a group chat. At your
              first meeting you fill out an agreement together about expectations and meeting times.
            </p>
            <p>
              There are no one-on-one meetings. Every meeting needs at least two mentors with one mentee, or one mentor
              with two mentees. Texting one-on-one is fine as long as it&apos;s about mentorship.
            </p>
            <p>
              Mentors aren&apos;t trained counselors. For things like mental health or a medical issue, please reach out
              to a professional or your school counselor.
            </p>
          </div>
          <div className="agreements">
            <h3>Community agreements</h3>
            <p>We go over these at the start of meetings.</p>
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
                alt="About forty SEAM mentors and mentees in matching light blue shirts sitting on the steps of Sproul Hall at dusk"
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
                  For most people this is the best part, since it&apos;s the first time your family meets in person. In
                  2025 we stayed in the Unit 2 dorms and ate at Crossroads dining hall. There were campus tours,
                  workshops led by Southeast Asian guest speakers, time with your family, and a cultural banquet at the
                  end.
                </p>
                <p>
                  <strong>You don&apos;t pay for any of it.</strong> We cover the dorms and meals, and we get you there:
                  BART groups from San Jose and the South Bay, and carpools from the East Bay and Southern California,
                  each led by someone on the committee.
                </p>
                <p>
                  Check-in was 10 am Friday at Unit 2 (2650 Haste St), and pick-up was 5 pm Sunday on the West Crescent
                  lawn. Bring three days of clothes, toiletries, a school ID, some spending money, and a cultural outfit
                  for the banquet.
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
                caption="Conference meals are paid for"
                width={1000}
                height={750}
              />
            </div>
          </div>
        </section>

        <section className="wrap parents" id="parents">
          <h2>For parents and guardians</h2>
          <p className="intro">
            Questions can go to <a href={`mailto:${email}`}>{email}</a>. We try to answer within a business day.
          </p>
          <div className="parent-grid">
            {parentInfo.map((item) => (
              <div key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="wrap split mentor" id="mentors">
          <div>
            <h2>For college students</h2>
            <p>
              You don&apos;t have to go to Berkeley to be a mentor. One of our 2025 mentors was at a community college.
            </p>
            <p>
              Mentors keep in touch with their family group, come to the Zoom meetings in May, and come to the
              conference in June. A few also speak on the career panel. The conference is free for you too, travel
              included.
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
          <Photo
            src={`${base}workshop.webp`}
            alt="A speaker presenting a workshop titled Reclaiming our Mental Health as Southeast Asians to students seated in a classroom"
            caption='Irene Phuong Van presenting "Reclaiming our Mental Health as Southeast Asians"'
            width={1440}
            height={1085}
          />
        </section>

        <section className="wrap split history" id="history">
          <div>
            <h2>History</h2>
            <p>SASC has run programs for Southeast Asian high school students since it started in 2000.</p>
            <h3>Our mission</h3>
            <blockquote>&quot;{mission}&quot;</blockquote>
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

        <section className="band band-ink" id="sign-up">
          <div className="wrap">
            <h2>Sign up</h2>
            <p className="signup-intro">
              Sign-ups for the next cycle aren&apos;t open yet. Leave your email and we&apos;ll tell you when they are,
              or watch <a href={instagram}>@ucbseam</a>. Questions go to{' '}
              <a href={`mailto:${email}?subject=SEAM`}>{email}</a>.
            </p>
            <div className="signups">
              <SignupCard
                title="Mentees"
                who="For Southeast Asian high school students, and students from other underserved communities. It's free, and we pay for travel, the dorms, and meals at the conference."
                when="Mentee sign-ups usually open in January."
                form={menteeForm}
                label="Sign up as a mentee"
                role="mentee"
                tone="mint"
              />
              <SignupCard
                title="Mentors"
                who="For college students who can make the May meetings and the June conference. Your conference costs are covered too."
                when="Mentor sign-ups usually open in the fall."
                form={mentorForm}
                label="Sign up as a mentor"
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
            SEAM is a program of the <a href={sascSite}>Southeast Asian Student Coalition</a> at UC Berkeley.
            <br />
            <a href={`mailto:${email}`}>{email}</a> · <a href={instagram}>@ucbseam on Instagram</a>
          </p>
        </div>
      </footer>

      <div className={`signup-bar${showBar ? ' is-visible' : ''}`} aria-hidden={!showBar}>
        <span>Free, travel and dorms included</span>
        <a className="button" href="#sign-up" tabIndex={showBar ? 0 : -1}>
          Sign up
        </a>
      </div>
    </>
  );
};

export default App;
