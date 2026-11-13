import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  Compass,
  GraduationCap,
  Layers3,
  LibraryBig,
  Mail,
  MapPin,
  Menu,
  NotebookPen,
  Phone,
  Play,
  Sparkles,
  UsersRound,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import booksHero from "@/assets/turnkey-publisher-books.jpg";
import learningSpace from "@/assets/turnkey-learning-space.jpg";

const navigation = [
  ["Home", "home"],
  ["About us", "about"],
  ["Products", "products"],
  ["Academic support", "support"],
  ["Stockists", "stockists"],
  ["Careers", "careers"],
  ["Contact", "contact"],
] as const;

const bestSellers = [
  { title: "The Living World", subject: "SCIENCE · GRADES 6–8", description: "Discover the natural world with clear explanations and curious, hands-on learning.", cover: "cover-nature", mark: "A closer look at\nour living world", badge: "POPULAR" },
  { title: "Numbers in Motion", subject: "MATHEMATICS · GRADES 4–6", description: "Build confident problem-solvers, one practical idea at a time.", cover: "cover-numbers", mark: "Make every\nnumber count", badge: "BESTSELLER" },
  { title: "Words & Worlds", subject: "ENGLISH · GRADES 5–8", description: "Thoughtful reading and writing for a world of ideas.", cover: "cover-words", mark: "Read widely.\nThink deeply.", badge: "FAVOURITE" },
];

const latestBooks = [
  { title: "Our Changing Planet", subject: "GENERAL SCIENCE · GRADES 7–9", cover: "cover-planet", mark: "OUR\nCHANGING\nPLANET" },
  { title: "Everyday Mathematics", subject: "MATHEMATICS · GRADES 3–5", cover: "cover-math", mark: "MATHS\nALL AROUND US" },
  { title: "Stories to Share", subject: "ENGLISH · GRADES 4–6", cover: "cover-stories", mark: "STORIES\nTO SHARE" },
  { title: "The Curious Mind", subject: "LEARNING SKILLS · GRADES 6–8", cover: "cover-curious", mark: "KEEP ASKING\nWHY?" },
];

const reasons = [
  { icon: BookOpen, title: "Quality you can trust", text: "Carefully developed content that makes every page clear, engaging, and useful." },
  { icon: UsersRound, title: "Educator-led thinking", text: "Created with the experience of authors and teachers at the heart of every resource." },
  { icon: Compass, title: "Curriculum with purpose", text: "Learning materials designed to support classroom goals and meaningful progress." },
  { icon: Sparkles, title: "Learning for today", text: "Fresh approaches bring familiar subjects to life for a new generation of learners." },
];

const supportItems = [
  { icon: Play, title: "Tutorials", text: "Helpful learning resources that make challenging topics easier to understand." },
  { icon: Check, title: "Complete solutions", text: "Clear academic support to help students practise, review, and move forward." },
  { icon: UsersRound, title: "Online workshops", text: "Interactive learning opportunities for students, teachers, and school communities." },
  { icon: Layers3, title: "SLO-based syllabus", text: "Resources structured around learning outcomes and modern syllabus needs." },
];

const achievements = [
  { value: 20, suffix: "+", label: "Publishing series" },
  { value: 140, suffix: "+", label: "Books published" },
  { value: 30, suffix: "+", label: "Dealer partners" },
  { value: 500, suffix: "+", label: "Happy customers" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Turnkey Publishers | Learning, thoughtfully published" },
      { name: "description", content: "Explore educational books, curriculum-focused publications, and academic support from Turnkey Publishers in Karachi." },
      { property: "og:title", content: "Turnkey Publishers | Learning, thoughtfully published" },
      { property: "og:description", content: "Educational books and academic resources designed to support students, teachers, and institutions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [newsletterSent, setNewsletterSent] = useState(false);
  const [countsActive, setCountsActive] = useState(false);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((element) => revealObserver.observe(element));

    const statsObserver = new IntersectionObserver((entries) => {
      if (entries[0]?.isIntersecting) {
        setCountsActive(true);
        statsObserver.disconnect();
      }
    }, { threshold: 0.3 });
    if (statsRef.current) statsObserver.observe(statsRef.current);

    return () => {
      revealObserver.disconnect();
      statsObserver.disconnect();
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement"><span className="announcement-dot" /> Proudly publishing for brighter futures <span className="announcement-divider">·</span> Karachi, Pakistan</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Turnkey Publishers home" onClick={closeMenu}>
          <span className="brand-symbol"><BookOpen aria-hidden="true" /></span>
          <span className="brand-name">turnkey<span>publishers</span></span>
        </a>
        <nav className={`desktop-nav ${menuOpen ? "nav-open" : ""}`} aria-label="Main navigation">
          {navigation.map(([label, target]) => <a key={target} href={`#${target}`} onClick={closeMenu}>{label}</a>)}
        </nav>
        <Button asChild className="header-cta"><a href="#contact">Let’s talk <ArrowRight aria-hidden="true" /></a></Button>
        <Button variant="ghost" size="icon" className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X /> : <Menu />}
        </Button>
      </header>

      <section className="hero-section" id="home">
        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow"><span /> MAKING ROOM FOR WHAT’S NEXT</p>
            <h1>Empowering education through <span>quality publishing.</span></h1>
            <p className="hero-description">Discover educational books and learning resources made to inspire students, support teachers, and open up new possibilities.</p>
            <div className="hero-actions">
              <Button asChild size="lg"><a href="#products">Explore our books <ArrowRight aria-hidden="true" /></a></Button>
              <a className="text-link" href="#about"><span className="play-icon"><Play aria-hidden="true" /></span> Get to know us</a>
            </div>
            <div className="hero-footnote"><span className="avatar-stack"><i>✦</i><i>✎</i><i>◉</i></span><span>Thoughtfully made for curious minds</span></div>
          </div>
          <div className="hero-art" aria-label="A bright collection of educational books">
            <div className="hero-art-wash" />
            <img src={booksHero} alt="A curated collection of educational books and learning materials" width={1536} height={1024} fetchPriority="high" />
            <div className="floating-note"><span className="note-icon"><GraduationCap /></span><span><strong>Learning that lasts</strong><small>One good book at a time</small></span></div>
            <div className="image-caption"><span>01 / 03</span><span>Ideas that open doors <ArrowDown aria-hidden="true" /></span></div>
          </div>
          <div className="hero-side-label">GOOD BOOKS. BRIGHTER TOMORROWS.</div>
        </div>
        <div className="hero-bottom-rule"><span>TURN THE PAGE</span><a href="#about" aria-label="Scroll to about us"><ArrowDown aria-hidden="true" /></a><span>01 — 05</span></div>
      </section>

      <section className="intro-strip" id="about">
        <div className="intro-inner reveal"><p className="eyebrow">A LITTLE ABOUT US</p><h2>We believe a great education begins with <span>a great resource.</span></h2><p>Turnkey Publishers brings care, creativity, and classroom experience to every book we make—helping learning feel more accessible, one idea at a time.</p><a className="inline-link" href="#why">Our approach <ArrowRight aria-hidden="true" /></a></div>
        <div className="intro-aside"><span className="intro-aside-number">T / P</span><span>Publishing with<br />purpose since day one</span></div>
      </section>

      <section className="section products-section" id="products">
        <div className="section-inner">
          <div className="section-heading reveal"><div><p className="eyebrow">HANDPICKED FOR YOU</p><h2>Books that make<br /><span>learning come alive.</span></h2></div><p>From the first spark of curiosity to the confidence of a new skill, explore the books that readers return to.</p></div>
          <div className="books-grid">
            {bestSellers.map((book, index) => <article className={`book-card reveal reveal-delay-${index + 1}`} key={book.title}>
              <BookCover cover={book.cover} mark={book.mark} badge={book.badge} />
              <div className="book-info"><p className="book-subject">{book.subject}</p><h3>{book.title}</h3><p className="book-description">{book.description}</p><a className="book-link" href="#contact">View details <ArrowRight aria-hidden="true" /></a></div>
            </article>)}
          </div>
          <div className="section-end-link"><a className="outline-link" href="#latest">Explore all publications <ArrowRight aria-hidden="true" /></a><span>Thoughtfully chosen. Ready to discover.</span></div>
        </div>
      </section>

      <section className="latest-section" id="latest">
        <div className="section-inner">
          <div className="latest-heading reveal"><div><p className="eyebrow">FRESH OFF THE PRESS</p><h2>Just published.</h2></div><a className="inline-link" href="#contact">Ask us about our catalogue <ArrowRight aria-hidden="true" /></a></div>
          <div className="latest-grid">{latestBooks.map((book, index) => <article className={`latest-card reveal reveal-delay-${index + 1}`} key={book.title}><BookCover cover={book.cover} mark={book.mark} /><div className="latest-card-copy"><span>{book.subject}</span><h3>{book.title}</h3><a href="#contact" aria-label={`Ask about ${book.title}`}><ArrowRight aria-hidden="true" /></a></div></article>)}</div>
          <p className="latest-footnote"><span /> New ideas, finding their way into more hands.</p>
        </div>
      </section>

      <section className="why-section section" id="why">
        <div className="section-inner why-layout">
          <div className="why-image-wrap reveal"><img src={learningSpace} alt="An open educational book and globe in a light-filled learning space" width={1440} height={1008} loading="lazy" /><div className="image-side-note">CURIOSITY<br />STARTS HERE</div><div className="why-image-label"><span>OUR WHY</span><span>Keep the questions coming.</span></div></div>
          <div className="why-copy reveal"><p className="eyebrow">WHY TURNKEY</p><h2>Every learner deserves <span>a little more.</span></h2><p className="why-intro">Good educational publishing does more than explain a subject. It makes room for questions, connections, and that wonderful moment when it all clicks.</p>
            <div className="reason-list">{reasons.map(({ icon: Icon, title, text }, index) => <article key={title} className="reason-item"><span className="reason-index">0{index + 1}</span><span className="reason-icon"><Icon aria-hidden="true" /></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div>
        </div>
      </section>

      <section className="support-section" id="support">
        <div className="section-inner"><div className="support-heading reveal"><p className="eyebrow">BEYOND THE BOOK</p><h2>A little extra support<br /><span>goes a long way.</span></h2><p>Learning is a journey. We’re here with the resources, guidance, and fresh perspectives to help along the way.</p></div>
          <div className="support-grid">{supportItems.map(({ icon: Icon, title, text }, index) => <article key={title} className={`support-card reveal reveal-delay-${index + 1}`}><span className="support-index">0{index + 1} / 04</span><span className="support-icon"><Icon aria-hidden="true" /></span><h3>{title}</h3><p>{text}</p><a href="#contact" aria-label={`Learn more about ${title}`}><ArrowRight aria-hidden="true" /></a></article>)}</div>
          <p className="support-bottom"><NotebookPen aria-hidden="true" /> Learning support, thoughtfully put together.</p>
        </div>
      </section>

      <section className="stats-section" ref={statsRef}>
        <div className="section-inner stats-inner"><div className="stats-title reveal"><p className="eyebrow">A FEW MILESTONES</p><h2>A lot to be<br /><span>proud of.</span></h2><p>Growing together with learners, educators, and booksellers across the community.</p></div><div className="stats-grid">{achievements.map((stat, index) => <div className={`stat-item reveal reveal-delay-${index + 1}`} key={stat.label}><span className="stat-index">0{index + 1}</span><div><strong>{countsActive ? stat.value : 0}<span>{stat.suffix}</span></strong><p>{stat.label}</p></div><span className="stat-line" /></div>)}</div></div>
      </section>

      <section className="stockists-section" id="stockists"><div className="stockists-inner reveal"><div className="stockists-mark"><LibraryBig aria-hidden="true" /></div><div><p className="eyebrow">FIND US NEAR YOU</p><h2>Good books belong<br />in <span>good company.</span></h2><p>Looking for a Turnkey book? Get in touch and we’ll help you find a stockist near you.</p></div><a className="stockists-link" href="#contact">Find a stockist <ArrowRight aria-hidden="true" /></a></div></section>

      <section className="newsletter-section" id="careers"><div className="newsletter-inner"><div className="newsletter-copy reveal"><p className="eyebrow">A NOTE FROM TURNKEY</p><h2>Stay curious.<br /><span>Stay connected.</span></h2><p>Hear about our latest books, learning resources, and news from the world of education.</p></div><form className="newsletter-form reveal" onSubmit={(event) => { event.preventDefault(); setNewsletterSent(true); }}><label htmlFor="newsletter-email">Your email address</label><div className="newsletter-field"><Mail aria-hidden="true" /><input id="newsletter-email" type="email" placeholder="you@example.com" required aria-label="Email address" /><Button type="submit" size="lg" aria-label="Subscribe to newsletter">{newsletterSent ? <>You’re on the list <Check /></> : <>Keep me posted <ArrowRight /></>}</Button></div><p className="form-note">{newsletterSent ? "Thanks for your interest. Email subscriptions are not connected yet." : "A thoughtful update, now and then. No clutter."}</p></form></div></section>

      <section className="contact-section" id="contact"><div className="section-inner contact-inner"><div className="contact-heading reveal"><p className="eyebrow">WE’D LOVE TO HEAR FROM YOU</p><h2>Let’s make<br /><span>something matter.</span></h2><p>Questions about our books, academic support, or working together? Our team would be glad to help.</p><a className="contact-email" href="mailto:hello@turnkeypublishers.com">hello@turnkeypublishers.com <ArrowRight aria-hidden="true" /></a><small>Email shown as a contact placeholder.</small></div><div className="contact-details reveal"><div className="contact-detail"><span><MapPin aria-hidden="true" /></span><div><p>COME SAY HELLO</p><h3>Our Karachi office</h3><address>27/C, Mezzanine Floor,<br />13th Commercial Street, Phase II Ext,<br />DHA, Karachi</address></div></div><div className="contact-detail"><span><Phone aria-hidden="true" /></span><div><p>GIVE US A CALL</p><h3>Contact our team</h3><span className="detail-placeholder">Phone number coming soon</span></div></div><div className="contact-detail"><span><ChevronDown aria-hidden="true" /></span><div><p>WHEN WE’RE AROUND</p><h3>Office hours</h3><span className="detail-placeholder">Please contact us to arrange a visit</span></div></div><div className="contact-map"><span className="map-mark"><MapPin aria-hidden="true" /></span><span className="map-label">DHA · KARACHI</span><span className="map-caption">27/C, 13th Commercial Street<br />Phase II Ext</span></div></div></div></section>

      <footer className="site-footer"><div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-symbol"><BookOpen aria-hidden="true" /></span><span className="brand-name">turnkey<span>publishers</span></span></a><p className="footer-description">Thoughtfully made educational books and learning resources for curious minds and brighter futures.</p><div className="footer-social"><a href="mailto:hello@turnkeypublishers.com" aria-label="Email Turnkey Publishers"><Mail aria-hidden="true" /></a><a href="#contact" aria-label="Contact Turnkey Publishers"><Phone aria-hidden="true" /></a></div><div className="footer-links"><div><h3>EXPLORE</h3><a href="#home">Home</a><a href="#about">About us</a><a href="#products">Products</a><a href="#support">Academic support</a></div><div><h3>MORE</h3><a href="#stockists">Stockists</a><a href="#careers">Careers</a><a href="#contact">Contact us</a><a href="#latest">Latest books</a></div></div></div><div className="footer-bottom"><span>© 2026 Turnkey Publishers. All rights reserved.</span><span>MADE FOR MINDS THAT NEVER STOP GROWING <Sparkles aria-hidden="true" /></span><a href="#home" aria-label="Back to top">Back to top ↑</a></div></footer>
    </main>
  );
}

function BookCover({ cover, mark, badge }: { cover: string; mark: string; badge?: string }) {
  return <div className={`book-cover ${cover}`}><span className="cover-brand">T / P <span>TURNKEY PUBLISHERS</span></span><span className="cover-mark">{mark}</span><span className="cover-art"><span /><span /><span /></span><span className="cover-subject">LEARNING SERIES · EDUCATION</span>{badge ? <span className="cover-badge">{badge}</span> : null}</div>;
}