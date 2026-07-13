(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,89064,e=>{"use strict";var r=e.i(47167),a=e.i(43476),s=e.i(71645);let i=r.default.env.NEXT_PUBLIC_BASE_PATH??"";function t({small:e}){return(0,a.jsxs)("span",{style:{fontFamily:"p22-mackinac-pro, serif",fontSize:e?"1rem":"1.25rem",fontWeight:700,letterSpacing:"-0.01em",lineHeight:1,color:"hsl(var(--fg))"},children:["Synced",(0,a.jsx)("span",{style:{color:"hsl(var(--primary))"},children:"."}),"It"]})}e.s(["default",0,function(){let[e,r]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=()=>r(window.scrollY>20);return window.addEventListener("scroll",e,{passive:!0}),()=>window.removeEventListener("scroll",e)},[]),(0,s.useEffect)(()=>{let e=document.querySelector(".bg-container"),r=r=>{e&&(e.style.setProperty("--mouse-x",`${r.clientX}px`),e.style.setProperty("--mouse-y",`${r.clientY}px`))};window.addEventListener("pointermove",r);let a=document.querySelectorAll(".legal-card"),s=e=>{let r=e.currentTarget,a=r.getBoundingClientRect(),s=e.clientX-a.left,i=e.clientY-a.top;r.style.setProperty("--card-mouse-x",`${s}px`),r.style.setProperty("--card-mouse-y",`${i}px`)};return a.forEach(e=>{e.addEventListener("mousemove",s)}),()=>{window.removeEventListener("pointermove",r),a.forEach(e=>{e.removeEventListener("mousemove",s)})}},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"bg-container",children:[(0,a.jsx)("div",{className:"bg-grid-base"}),(0,a.jsx)("div",{className:"bg-grid-glow"}),(0,a.jsx)("div",{className:"cursor-glow"}),(0,a.jsx)("div",{className:"ambient-blob-1"}),(0,a.jsx)("div",{className:"ambient-blob-2"}),(0,a.jsx)("div",{className:"ambient-blob-3"})]}),(0,a.jsx)("nav",{className:`synced-nav${e?" scrolled":""}`,children:(0,a.jsxs)("div",{className:"container nav-inner",children:[(0,a.jsxs)("a",{href:`${i}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,a.jsx)("img",{src:`${i}/icon-light.png`,alt:"",width:26,height:26,className:"nav-icon"}),(0,a.jsx)(t,{})]}),(0,a.jsxs)("nav",{className:"nav-links",children:[(0,a.jsx)("a",{href:`${i}/#features`,className:"nav-link",children:"Features"}),(0,a.jsx)("a",{href:`${i}/#agencies`,className:"nav-link",children:"Compliance"}),(0,a.jsx)("a",{href:`${i}/#pricing`,className:"nav-link",children:"Pricing"}),(0,a.jsx)("a",{href:`${i}/#team`,className:"nav-link",children:"Team"})]}),(0,a.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"1.25rem"},children:[(0,a.jsx)("a",{href:"https://meet.synced.it",className:"nav-link",style:{fontSize:"0.78rem",fontWeight:500},children:"Legacy App"}),(0,a.jsx)("a",{href:"https://app.synced.it",className:"btn-primary",children:"Get Started"})]})]})}),(0,a.jsx)("main",{className:"flex flex-col flex-1 relative z-2",children:(0,a.jsx)("section",{className:"legal-section",children:(0,a.jsx)("div",{className:"container",children:(0,a.jsxs)("div",{className:"legal-card",children:[(0,a.jsxs)("div",{className:"legal-header",children:[(0,a.jsx)("span",{className:"eyebrow",children:"Last updated: July 13, 2026"}),(0,a.jsx)("h1",{className:"legal-title",children:"Privacy Policy"}),(0,a.jsx)("p",{className:"legal-subtitle",children:"We believe in plain language. Here is a clear breakdown of what data we collect, why we collect it, and how we protect it when you use Synced."})]}),(0,a.jsxs)("div",{className:"legal-body",children:[(0,a.jsx)("h2",{children:"1. Overview"}),(0,a.jsx)("p",{children:'Synced ("we," "our," or "us") provides coordination, AI document assistance, and exam readiness infrastructure for banks and fintech companies. To help teams coordinate meetings, manage deadlines, search and reference documentation, and build a compliance audit trail, we integrate with Google APIs to access calendars, contacts, files, and email communications. This Privacy Policy details how we handle that information.'}),(0,a.jsx)("h2",{children:"2. Information We Collect"}),(0,a.jsx)("p",{children:"We only request and collect the minimal amount of information required to deliver the core scheduling, document assistance, and regulatory deadline tracking services of Synced. Specifically:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Account Authentication & Profile Details:"})," When you sign up via Google OAuth, we collect your primary email address (",(0,a.jsx)("code",{children:"userinfo.email"}),") and profile information (",(0,a.jsx)("code",{children:"userinfo.profile"}),") to authenticate your identity, secure your login, and set up your workspace profile."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Calendar Information (Read & Write):"})," If you connect your Google Calendar (using the ",(0,a.jsx)("code",{children:".../auth/calendar"})," scope), we retrieve calendar availability to find conflict-free meeting times, and create or modify calendar events per your request. Write access is necessary for the app's core feature of scheduling and updating meetings."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Contacts Information (Read-only):"})," If you connect your contacts (using the ",(0,a.jsx)("code",{children:".../auth/contacts.readonly"})," and ",(0,a.jsx)("code",{children:".../auth/contacts.other.readonly"})," scopes), we retrieve your contacts via the People API to automatically autocomplete and fill invitee email addresses when scheduling meetings or sending invites."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Drive Files (Read-only):"})," If you authorize access to Google Drive (using the ",(0,a.jsx)("code",{children:".../auth/drive.readonly"})," scope), our AI assistant searches your Drive files to locate relevant existing materials and reads or extracts content from them to answer your queries or compile context for your tasks."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Email Communications (Gmail Read & Write):"})," If you connect your Gmail account (using the ",(0,a.jsx)("code",{children:".../auth/gmail.readonly"})," and ",(0,a.jsx)("code",{children:".../auth/gmail.modify"})," scopes), our system searches messages and retrieves message details/headers to compile context, summarize email threads, and answer your questions. We also use these scopes to create draft replies and send emails, with each draft requiring your explicit approval before sending."]})]}),(0,a.jsxs)("div",{className:"legal-callout",children:[(0,a.jsx)("h3",{children:"Google API Limited Use Disclosure"}),(0,a.jsxs)("p",{children:["Synced’s use and transfer of information received from Google APIs to any other app will adhere to the"," ",(0,a.jsx)("a",{href:"https://developers.google.com/terms/api-services-user-data-policy",target:"_blank",rel:"noopener noreferrer",className:"text-link",children:"Google API Services User Data Policy"}),", including the ",(0,a.jsx)("strong",{children:"Limited Use"})," requirements."]})]}),(0,a.jsx)("h2",{children:"3. How We Use Google OAuth Data"}),(0,a.jsx)("p",{children:"We process data collected via Google OAuth strictly to support the functionalities of the Synced platform. We follow these strict guardrails:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"No Ad Targeting:"})," We will never sell, lease, or rent your personal information or data collected via Google APIs. We do not share this data with any third-party ad networks, data brokers, or advertising platforms."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"No AI/ML Model Training:"})," We do not use personal data received from Google Workspace APIs (including email contents, calendar entries, files, or contacts) to train, retrain, or fine-tune generalized Artificial Intelligence (AI) or Machine Learning (ML) models."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Limited Human Access:"})," Our developers and employees will not read your calendar events, emails, files, or contacts unless you request support resolving a specific technical bug, you explicitly consent in writing to help us debug an issue, or it is necessary for security investigations (e.g., detecting abuse or responding to malware)."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Restricted Sharing:"})," We only transfer Google user data to third parties if it is necessary to provide or improve our user-facing features (such as secure databases and hosting providers), comply with applicable law, or as part of a merger or acquisition."]})]}),(0,a.jsx)("h2",{children:"4. Data Security & Storage"}),(0,a.jsx)("p",{children:"All credentials and synced metadata (such as deadline events and email parse logs) are encrypted in transit using industry-standard TLS protocols and encrypted at rest within our secure databases (e.g. Firebase Firestore). We employ strict firewalls, vulnerability logging, and access controls to prevent unauthorized access."}),(0,a.jsx)("h2",{children:"5. User Controls: Revoking and Deleting"}),(0,a.jsx)("p",{children:"You are in full control of your integrations and credentials at all times:"}),(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Revoking Access:"})," You can disconnect your Google Calendar or Gmail account at any time directly in your Synced settings. Alternatively, you can revoke Synced's access to your Google account via the"," ",(0,a.jsx)("a",{href:"https://myaccount.google.com/permissions",target:"_blank",rel:"noopener noreferrer",className:"text-link",children:"Google Security Settings page"}),"."]}),(0,a.jsxs)("li",{children:[(0,a.jsx)("strong",{children:"Data Deletion:"})," If you close your account or request data deletion, all stored tokens, credentials, and cached calendar or email meta-records will be permanently expunged from our database records."]})]}),(0,a.jsx)("h2",{children:"6. Contact Us"}),(0,a.jsx)("p",{children:"If you have questions about this Privacy Policy, your data rights, or how to delete your account, please email us directly:"}),(0,a.jsx)("p",{className:"contact-email",children:(0,a.jsx)("a",{href:"mailto:nick@storiara.com",children:"nick@storiara.com"})})]})]})})})}),(0,a.jsx)("footer",{className:"site-footer relative z-2",children:(0,a.jsxs)("div",{className:"container footer-inner",children:[(0,a.jsxs)("a",{href:`${i}/`,"aria-label":"Synced home",className:"nav-logo",children:[(0,a.jsx)("img",{src:`${i}/icon-light.png`,alt:"",width:20,height:20,className:"nav-icon"}),(0,a.jsx)(t,{small:!0})]}),(0,a.jsxs)("nav",{className:"footer-links",children:[(0,a.jsx)("a",{href:"mailto:nick@storiara.com",className:"footer-link",children:"Contact"}),(0,a.jsx)("a",{href:`${i}/privacy`,className:"footer-link",children:"Privacy"}),(0,a.jsx)("a",{href:`${i}/terms`,className:"footer-link",children:"Terms"})]}),(0,a.jsx)("span",{className:"footer-copy",children:"© 2026 Synced.it"})]})}),(0,a.jsx)("style",{children:`
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

        .legal-callout {
          background: hsl(var(--primary) / 0.04);
          border-left: 3px solid hsl(var(--primary));
          padding: 1.5rem;
          border-radius: 6px;
          margin: 2rem 0;
        }

        .legal-callout h3 {
          font-size: 1rem;
          font-weight: 700;
          margin: 0 0 0.5rem 0;
          color: hsl(var(--fg));
        }

        .legal-callout p {
          margin: 0;
          font-size: 0.9rem;
          line-height: 1.6;
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