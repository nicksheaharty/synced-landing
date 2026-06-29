(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,38592,e=>{"use strict";var i=e.i(47167),a=e.i(43476),r=e.i(71645);let s=i.default.env.NEXT_PUBLIC_BASE_PATH??"";function t({small:e}){return(0,a.jsxs)("span",{style:{fontFamily:"p22-mackinac-pro, serif",fontSize:e?"1rem":"1.25rem",fontWeight:700,letterSpacing:"-0.01em",lineHeight:1,color:"hsl(var(--fg))"},children:["Synced",(0,a.jsx)("span",{style:{color:"hsl(var(--primary))"},children:"."}),"It"]})}e.s(["default",0,function(){let[e,i]=(0,r.useState)(!1);return(0,r.useEffect)(()=>{let e=()=>i(window.scrollY>20);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,r.useEffect)(()=>{let e=document.querySelector(".bg-container"),i=i=>{e&&(e.style.setProperty("--mouse-x",`${i.clientX}px`),e.style.setProperty("--mouse-y",`${i.clientY}px`))};window.addEventListener("pointermove",i);let a=document.querySelectorAll(".legal-card"),r=e=>{let i=e.currentTarget,a=i.getBoundingClientRect(),r=e.clientX-a.left,s=e.clientY-a.top;i.style.setProperty("--card-mouse-x",`${r}px`),i.style.setProperty("--card-mouse-y",`${s}px`)};return a.forEach(e=>{e.addEventListener("mousemove",r)}),()=>{window.removeEventListener("pointermove",i),a.forEach(e=>{e.removeEventListener("mousemove",r)})}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-container",children:[(0,a.jsx)("div",{className:"bg-grid-base"}),(0,a.jsx)("div",{className:"bg-grid-glow"}),(0,a.jsx)("div",{className:"cursor-glow"}),(0,a.jsx)("div",{className:"ambient-blob-1"}),(0,a.jsx)("div",{className:"ambient-blob-2"}),(0,a.jsx)("div",{className:"ambient-blob-3"})]}),(0,a.jsx)("nav",{className:`synced-nav${e?" scrolled":""}`,children:(0,a.jsxs)("div",{className:"container nav-inner",children:[(0,a.jsxs)("a",{href:`${s}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,a.jsx)("img",{src:`${s}/icon-light.png`,alt:"",width:26,height:26,className:"nav-icon"}),(0,a.jsx)(t,{})]}),(0,a.jsxs)("nav",{className:"nav-links",children:[(0,a.jsx)("a",{href:`${s}/#features`,className:"nav-link",children:"Features"}),(0,a.jsx)("a",{href:`${s}/#agencies`,className:"nav-link",children:"Compliance"}),(0,a.jsx)("a",{href:`${s}/#pricing`,className:"nav-link",children:"Pricing"}),(0,a.jsx)("a",{href:`${s}/#team`,className:"nav-link",children:"Team"})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[(0,a.jsx)("a",{href:"https://meet.synced.it",className:"nav-link",style:{fontSize:"0.78rem",fontWeight:500},children:"Legacy App"}),(0,a.jsx)("a",{href:"https://app.synced.it",className:"btn-primary",children:"Get Started"})]})]})}),(0,a.jsx)("main",{className:"flex flex-col flex-1 relative z-2",children:(0,a.jsx)("section",{className:"legal-section",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"legal-card",children:[(0,a.jsxs)("div",{className:"legal-header",children:[(0,a.jsx)("span",{className:"eyebrow",children:"Last updated: June 23, 2026"}),(0,a.jsx)("h1",{className:"legal-title",children:"Terms of Service"}),(0,a.jsx)("p",{className:"legal-subtitle",children:"By using Synced, you agree to these Terms. Let's make sure we are aligned on rules, responsibilities, and disclaimers."})]}),(0,a.jsxs)("div",{className:"legal-body",children:[(0,a.jsx)("h2",{children:"1. Acceptance of Terms"}),(0,a.jsx)("p",{children:'By accessing, registering for, or using the services provided by Synced ("we," "our," or "us") via Synced.it (the "Platform" or "Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our Platform.'}),(0,a.jsx)("h2",{children:"2. Description of Service"}),(0,a.jsx)("p",{children:"Synced provides compliance exam coordination infrastructure designed to help financial institutions, banks, fintechs, and compliance professionals manage regulatory examinations (e.g. SEC, OCC, FDIC, CFPB). Features include team availability synchronization, deadline tracking, request coordination, and audit logs."}),(0,a.jsx)("h2",{children:"3. Account Registration & Google Integrations"}),(0,a.jsx)("p",{children:"To unlock the scheduling and automated request tracking features, you must log in or connect your account using Google OAuth."}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Credential Security:"})," You represent that you have the authority to link your professional Google account. You are solely responsible for maintaining security around your credentials and workspace permissions."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Authorization Scope:"})," By authorizing Synced to connect to your Google account, you grant us permission to access specific integrations:",(0,a.jsx)("br",{}),"- ",(0,a.jsx)("em",{children:"Email (Gmail):"})," To scan for regulatory notification metadata and parse dates to surface response deadlines.",(0,a.jsx)("br",{}),"- ",(0,a.jsx)("em",{children:"Calendar:"})," To read availability blocks for scheduling and to write coordination meetings and alert timelines."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Revocation:"})," You can disconnect these integration permissions at any point through your Synced dashboard or your Google Account Security dashboard."]})]}),(0,a.jsx)("h2",{children:"4. Compliance Disclaimer & User Responsibilities"}),(0,a.jsxs)("p",{children:[(0,a.jsx)("strong",{children:"IMPORTANT:"})," Synced is an administrative and organizational utility tool."]}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Not Legal Advice:"})," The Platform's alerts, deadline calculations, parsed request summaries, and compliance logs do not constitute regulatory compliance advice, legal counsel, or official supervision audit findings."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Final Verification:"})," You and your organization retain ultimate responsibility for meeting statutory deadlines, responding to document requests, and satisfying regulatory mandates. You must independently check official examiner portals and communications to verify the completeness and accuracy of all deadlines."]})]}),(0,a.jsx)("h2",{children:"5. Acceptable Use Policy"}),(0,a.jsx)("p",{children:"You agree not to misuse the Service. You shall not:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Attempt to breach or bypass security, rate limits, or access controls."}),(0,a.jsx)("li",{children:"Use the Service to process, store, or transmit illegal or malicious material, or violate privacy rights."}),(0,a.jsx)("li",{children:"Reverse engineer, duplicate, or lease components of the Synced platform, designs, or underlying code."})]}),(0,a.jsx)("h2",{children:"6. Intellectual Property"}),(0,a.jsx)("p",{children:"Synced retains all right, title, and interest in and to the Platform, including code, design systems, layouts, brand logos, assets, and documentation. You retain all ownership rights in any data, emails, or calendar items you sync or upload to the Platform."}),(0,a.jsx)("h2",{children:"7. Limitation of Liability & Disclaimers"}),(0,a.jsx)("p",{children:'THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.'}),(0,a.jsx)("p",{children:"TO THE MAXIMUM EXTENT PERMITTED BY LAW, SYNCED SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO, LOSS OF PROFITS, LOSS OF REVENUE, REGULATORY FINES OR AUDIT FINDINGS, OR DATA LOSS RESULTING FROM (I) THE USE OR THE INABILITY TO USE THE PLATFORM; (II) THE ACCURACY OF SURFACED DEADLINES; OR (III) ANY UNSCHEDULED SERVICE DOWNTIME OR DATA CORRUPTION."}),(0,a.jsx)("h2",{children:"8. Governing Law"}),(0,a.jsx)("p",{children:"These Terms and any dispute arising from your use of the Platform shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law principles."}),(0,a.jsx)("h2",{children:"9. Term and Termination"}),(0,a.jsxs)("p",{children:["We reserve the right to suspend or terminate your workspace access at any time, with or without cause or notice, if we believe you are in violation of these Terms or engaged in activities harmful to other Platform users. You may terminate your account at any time by requesting deletion at ",(0,a.jsx)("a",{href:"mailto:nick@storiara.com",className:"text-link",children:"nick@storiara.com"}),"."]}),(0,a.jsx)("h2",{children:"10. Changes to Terms"}),(0,a.jsx)("p",{children:"We may periodically revise these Terms. If a revision is material, we will notify you by email or via a banner in the application dashboard. Your continued use of Synced after modifications take effect indicates your acceptance of the updated Terms."}),(0,a.jsx)("h2",{children:"11. Contact Us"}),(0,a.jsx)("p",{children:"If you have any questions or feedback regarding these Terms, please contact us at:"}),(0,a.jsx)("p",{className:"contact-email",children:(0,a.jsx)("a",{href:"mailto:nick@storiara.com",children:"nick@storiara.com"})})]})]})})})}),(0,a.jsx)("footer",{className:"site-footer relative z-2",children:(0,a.jsxs)("div",{className:"container footer-inner",children:[(0,a.jsxs)("a",{href:`${s}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,a.jsx)("img",{src:`${s}/icon-light.png`,alt:"",width:20,height:20,className:"nav-icon"}),(0,a.jsx)(t,{small:!0})]}),(0,a.jsxs)("nav",{className:"footer-links",children:[(0,a.jsx)("a",{href:"mailto:nick@storiara.com",className:"footer-link",children:"Contact"}),(0,a.jsx)("a",{href:`${s}/privacy`,className:"footer-link",children:"Privacy"}),(0,a.jsx)("a",{href:`${s}/terms`,className:"footer-link",children:"Terms"})]}),(0,a.jsx)("span",{className:"footer-copy",children:"© 2026 Synced.it"})]})}),(0,a.jsx)("style",{children:`
        /* ── Page-specific Styles ── */
        .legal-section {
          padding: 8rem 0 5rem;
          position: relative;
        }

        .legal-card {
          position: relative;
          overflow: hidden;
          background: color-mix(in srgb, hsl(var(--card)) 65%, transparent);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid hsl(var(--border) / 0.6);
          border-radius: 16px;
          padding: clamp(1.5rem, 5vw, 3.5rem);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.015);
          transition: border-color 0.4s ease, box-shadow 0.4s ease;
        }

        .legal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(350px circle at var(--card-mouse-x, -999px) var(--card-mouse-y, -999px), hsl(var(--primary) / 0.06), transparent 80%);
          opacity: 1;
          pointer-events: none;
          z-index: 0;
        }

        .legal-card > * {
          position: relative;
          z-index: 1;
        }

        .legal-header {
          border-bottom: 1px solid hsl(var(--border) / 0.6);
          padding-bottom: 2rem;
          margin-bottom: 2.5rem;
        }

        .legal-title {
          font-size: clamp(2rem, 5vw, 3rem);
          font-weight: 700;
          letter-spacing: -0.025em;
          color: hsl(var(--fg));
          margin-top: 0.5rem;
          margin-bottom: 1rem;
        }

        .legal-subtitle {
          font-size: clamp(1rem, 2vw, 1.15rem);
          color: hsl(var(--muted-fg));
          line-height: 1.6;
          max-width: 720px;
        }

        .legal-body {
          color: hsl(var(--fg));
        }

        .legal-body h2 {
          font-size: 1.35rem;
          font-weight: 700;
          letter-spacing: -0.01em;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: hsl(var(--fg));
        }

        .legal-body p {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          margin-bottom: 1.25rem;
        }

        .legal-body ul {
          list-style-type: none;
          padding: 0;
          margin: 0 0 1.5rem 0;
        }

        .legal-body li {
          font-size: 0.9375rem;
          line-height: 1.7;
          color: hsl(var(--muted-fg));
          margin-bottom: 0.75rem;
          padding-left: 1.25rem;
          position: relative;
        }

        .legal-body li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.65rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: hsl(var(--primary));
        }

        .text-link {
          color: hsl(var(--primary));
          text-decoration: underline;
          transition: opacity 0.2s;
        }

        .text-link:hover {
          opacity: 0.8;
        }

        .contact-email {
          font-weight: 600;
          font-size: 1rem !important;
        }

        .contact-email a {
          color: hsl(var(--primary));
          text-decoration: none;
        }
        .contact-email a:hover {
          text-decoration: underline;
        }
      `})]})}])}]);