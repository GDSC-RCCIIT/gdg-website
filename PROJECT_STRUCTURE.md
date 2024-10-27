## Project Structure ✨

<!-- START_STRUCTURE -->
```
├── LICENSE
├── PROJECT_STRUCTURE.md
├── README.md
├── code_of_conduct.md
├── components.json
├── contributing.md
├── data.json
├── jsconfig.json
├── next.config.mjs
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── public/
│   ├── Logo.svg
│   ├── Newsletter.png
│   ├── avatar.png
│   ├── avatar1.png
│   ├── dev1.jpeg
│   ├── dev2.jpeg
│   ├── dev3.jpeg
│   ├── dev4.jpeg
│   ├── dev5.jpeg
│   ├── dev6.jpeg
│   ├── dev7.jpeg
│   ├── exp1.png
│   ├── exp2.jpeg
│   ├── exp3.jpeg
│   ├── exp4.jpeg
│   ├── exp5.jpeg
│   ├── exp6.jpeg
│   ├── exp7.jpeg
│   ├── goal.webp
│   ├── hack1.jpg
│   ├── img1.jpg
│   ├── mission.webp
│   ├── sopt4.jpg
│   ├── spot1.jpg
│   ├── spot2.jpg
│   ├── spot3.jpg
│   ├── story1.jpeg
│   ├── story2.png
│   ├── story3.png
│   ├── story4.jpeg
│   ├── story5.png
│   ├── story6.png
│   ├── story7.png
│   └── vision.webp
├── repo_structure.txt
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── About/
│   │   │   │   └── page.jsx
│   │   │   ├── Events/
│   │   │   │   ├── EventItem.js
│   │   │   │   ├── Events.css
│   │   │   │   └── page.jsx
│   │   │   ├── FAQsForum/
│   │   │   │   ├── FAQs.js
│   │   │   │   ├── Posts.css
│   │   │   │   ├── Posts.js
│   │   │   │   └── page.jsx
│   │   │   ├── GeminiAI/
│   │   │   │   └── page.jsx
│   │   │   ├── Hackathon/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── PrivacyPolicy/
│   │   │   │   └── page.jsx
│   │   │   ├── Projects/
│   │   │   │   ├── Card.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── Resources/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── page.jsx
│   │   │   │   └── resources.js
│   │   │   ├── RulesAndRegulations/
│   │   │   │   └── page.jsx
│   │   │   ├── SignIn/
│   │   │   │   └── page.jsx
│   │   │   ├── SignUp/
│   │   │   │   └── page.jsx
│   │   │   ├── SingleEvent/
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx
│   │   │   ├── Subscribe/
│   │   │   │   └── page.jsx
│   │   │   ├── TeamsGallery/
│   │   │   │   ├── Teams.js
│   │   │   │   └── page.jsx
│   │   │   ├── TermsAndConditions/
│   │   │   │   └── page.jsx
│   │   │   ├── api/
│   │   │   │   └── generate/
│   │   │   │       └── route.js
│   │   │   ├── careers/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── opportunities.js
│   │   │   │   └── page.jsx
│   │   │   ├── expertdev/
│   │   │   │   └── page.jsx
│   │   │   ├── how-apply/
│   │   │   │   └── page.jsx
│   │   │   ├── localdev/
│   │   │   │   └── page.jsx
│   │   │   ├── orginizer/
│   │   │   │   └── page.jsx
│   │   │   ├── participationterms/
│   │   │   │   └── page.jsx
│   │   │   ├── stories/
│   │   │   │   └── page.jsx
│   │   │   ├── who-apply/
│   │   │   │   └── page.jsx
│   │   │   └── womentechmakers/
│   │   │       └── page.jsx
│   │   ├── api/
│   │   │   └── subscribe/
│   │   │       └── route.js
│   │   ├── favicon.ico
│   │   ├── fonts/
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── images/
│   │   │   ├── ai_img.jpg
│   │   │   └── teamMember.jpg
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── Chatbot.jsx
│   │   ├── GTranslateLoader.js
│   │   ├── Global/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   └── Hero.jsx
│   │   └── ui/
│   │       ├── aspect-ratio.jsx
│   │       ├── back2top.jsx
│   │       ├── badge.jsx
│   │       ├── breadcrumb.jsx
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── carousel.jsx
│   │       ├── collapsible.jsx
│   │       ├── command.jsx
│   │       ├── dialog.jsx
│   │       ├── drawer.jsx
│   │       ├── dropdown-menu.jsx
│   │       ├── homepage.jsx
│   │       ├── hover-card.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── menubar.jsx
│   │       ├── navigation-menu.jsx
│   │       ├── notification.jsx
│   │       ├── progress-bar.jsx
│   │       ├── progress.jsx
│   │       ├── resizable.jsx
│   │       ├── select.jsx
│   │       ├── separator.jsx
│   │       ├── sheet.jsx
│   │       ├── skeleton.jsx
│   │       ├── sonner.jsx
│   │       ├── switch.jsx
│   │       ├── tabs.jsx
│   │       ├── textarea.jsx
│   │       ├── toast.jsx
│   │       ├── toaster.jsx
│   │       └── tooltip.jsx
│   ├── hooks/
│   │   └── use-toast.js
│   ├── lib/
│   │   ├── Hackathon.js
│   │   ├── Projects.js
│   │   ├── cpp-content.js
│   │   └── utils.js
│   └── public/
│       └── GDSC-RCIIT Logo.png
└── tailwind.config.js
```
<!-- END_STRUCTURE -->