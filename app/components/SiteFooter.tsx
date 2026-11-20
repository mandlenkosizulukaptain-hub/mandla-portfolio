import Link from "next/link";

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true">&lt;/&gt;</span>;
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-scenery" aria-hidden="true">
        <svg
          className="footer-landscape"
          viewBox="0 0 1440 340"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="footer-mountains-back" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#285274" />
              <stop offset="100%" stopColor="#102d47" />
            </linearGradient>
            <linearGradient id="footer-mountains-front" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#12334d" />
              <stop offset="100%" stopColor="#081a2a" />
            </linearGradient>
            <symbol id="footer-pine" viewBox="0 0 42 100">
              <path d="M21 0 5 31h9L0 54h14L3 75h14v25h8V75h14L28 54h14L28 31h9L21 0Z" fill="currentColor" />
            </symbol>
          </defs>
          <circle cx="720" cy="135" r="95" fill="#438ac0" opacity=".08" />
          <path
            d="m0 252 130-104 82 48 137-116 99 86 100-57 122 95 128-121 94 82 124-96 109 84 100-57 115 86v158H0Z"
            fill="url(#footer-mountains-back)"
          />
          <path
            d="m0 263 121-64 91 39 104-84 115 71 107-44 97 55 119-75 102 56 94-50 104 48 98-65 188 83v107H0Z"
            fill="url(#footer-mountains-front)"
          />
          <g opacity=".82" style={{ color: "#071522" }}>
            <use href="#footer-pine" x="5" y="188" width="46" height="110" />
            <use href="#footer-pine" x="42" y="208" width="38" height="92" />
            <use href="#footer-pine" x="91" y="184" width="52" height="124" />
            <use href="#footer-pine" x="150" y="216" width="38" height="92" />
            <use href="#footer-pine" x="204" y="190" width="48" height="116" />
            <use href="#footer-pine" x="265" y="204" width="42" height="101" />
            <use href="#footer-pine" x="326" y="180" width="52" height="126" />
            <use href="#footer-pine" x="388" y="213" width="40" height="96" />
            <use href="#footer-pine" x="454" y="185" width="48" height="116" />
            <use href="#footer-pine" x="518" y="207" width="42" height="102" />
            <use href="#footer-pine" x="579" y="179" width="50" height="120" />
            <use href="#footer-pine" x="646" y="206" width="42" height="100" />
            <use href="#footer-pine" x="702" y="191" width="46" height="110" />
            <use href="#footer-pine" x="763" y="210" width="40" height="96" />
            <use href="#footer-pine" x="822" y="183" width="52" height="124" />
            <use href="#footer-pine" x="884" y="211" width="40" height="96" />
            <use href="#footer-pine" x="942" y="189" width="48" height="116" />
            <use href="#footer-pine" x="1003" y="208" width="42" height="102" />
            <use href="#footer-pine" x="1067" y="179" width="52" height="126" />
            <use href="#footer-pine" x="1129" y="211" width="40" height="96" />
            <use href="#footer-pine" x="1187" y="184" width="50" height="120" />
            <use href="#footer-pine" x="1250" y="207" width="42" height="101" />
            <use href="#footer-pine" x="1310" y="185" width="52" height="124" />
            <use href="#footer-pine" x="1371" y="202" width="48" height="116" />
          </g>
          <g
            className="footer-lookout"
            fill="none"
            stroke="#8ac9f5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            opacity=".8"
          >
            <path d="M701 142h38l22 164h-82l22-164Z" />
            <path d="M696 171h48m-44 34h40m-36 34h32m-28 33h24M710 142V86h20v56" />
            <path d="M704 86h32l-16-16-16 16Zm-9 0h50v11h-50z" />
            <path d="m701 306 19-164 19 164m-38-101 38 34m-37 0 29 28" />
            <circle cx="720" cy="50" r="3" fill="#d9f3ff" stroke="none" />
            <path d="M720 25v13m-13-1 9 9m17-9-9 9" opacity=".65" />
          </g>
          <path d="M0 315h1440v25H0z" fill="#061321" />
        </svg>
      </div>

      <div className="footer-inner">
        <div className="footer-intro">
          <Link className="brand footer-brand" href="/">
            <BrandMark />
            <span>Mandlenkosi<span className="brand-dot">.</span></span>
          </Link>
          <p>Building thoughtfully, one idea at a time.</p>
        </div>

        <div className="footer-columns">
          <nav className="footer-group" aria-label="Footer navigation">
            <h2>Explore</h2>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#connect">Connect</a>
          </nav>

          <div className="footer-group">
            <h2>Find me online</h2>
            <div className="footer-social-links">
              <a href="https://github.com/mandlenkosizulukaptain-hub" target="_blank" rel="noreferrer">
                <span className="social-mark">GH</span> GitHub
              </a>
              <a href="https://www.linkedin.com/in/mandlenkosi-zulu-kaptain-056a7a405/" target="_blank" rel="noreferrer">
                <span className="social-mark">in</span> LinkedIn
              </a>
              <a href="https://www.tiktok.com/@kap10zed?_r=1&_t=ZS-9BS9bnuPVI4" target="_blank" rel="noreferrer">
                <span className="social-mark">♪</span> TikTok
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
                <span className="social-mark">f</span> Facebook
              </a>
              <a href="https://wa.me/263777133443" target="_blank" rel="noreferrer">
                <span className="social-mark">WA</span> WhatsApp
              </a>
            </div>
          </div>

          <div className="footer-group footer-contact">
            <h2>Say hello</h2>
            <a href="mailto:mandlenkosizulukaptain@gmail.com">
              mandlenkosizulukaptain@gmail.com
            </a>
            <a href="https://wa.me/263777133443" target="_blank" rel="noreferrer">
              Message me on WhatsApp
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>&copy; Mandlenkosi Zulu</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
