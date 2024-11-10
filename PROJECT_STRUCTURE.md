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
│   ├── Mentor 1.jpeg
│   ├── Mentor 2.jpeg
│   ├── Mentor 3.png
│   ├── Newsletter.png
│   ├── arcade1.png
│   ├── arcade2.png
│   ├── art1.jpeg
│   ├── art2.jpeg
│   ├── art3.jpeg
│   ├── art4.jpeg
│   ├── art5.jpeg
│   ├── avatar.png
│   ├── avatar1.png
│   ├── certi 1.svg
│   ├── certi 2.svg
│   ├── certi 3.svg
│   ├── certi 4.png
│   ├── certi 5.png
│   ├── cicd1.png
│   ├── cicd2.jpg
│   ├── cicd3.jpg
│   ├── cicd4.jpg
│   ├── cicd5.jpg
│   ├── dev1.jpeg
│   ├── dev2.jpeg
│   ├── dev3.jpeg
│   ├── dev4.jpeg
│   ├── dev5.jpeg
│   ├── dev6.jpeg
│   ├── dev7.jpeg
│   ├── devprod1.jpeg
│   ├── devprod2.png
│   ├── devprod3.jpeg
│   ├── devprod4.png
│   ├── devprod5.jpeg
│   ├── devprod6.jpeg
│   ├── doodl3.png
│   ├── doodle1.png
│   ├── doodle2.jpeg
│   ├── exp1.png
│   ├── exp2.jpeg
│   ├── exp3.jpeg
│   ├── exp4.jpeg
│   ├── exp5.jpeg
│   ├── exp6.jpeg
│   ├── exp7.jpeg
│   ├── gen-studio.png
│   ├── gen-studio2.svg
│   ├── genai1.jpg
│   ├── genai2.webp
│   ├── goal.webp
│   ├── gro1.png
│   ├── gro2.png
│   ├── gro3.svg
│   ├── gro4.svg
│   ├── hack1.jpg
│   ├── hall1.jpeg
│   ├── hall2.jpeg
│   ├── hall3.jpeg
│   ├── img1.jpg
│   ├── inovate1.png
│   ├── inovate2.png
│   ├── inovate3.png
│   ├── mission.webp
│   ├── os1.png
│   ├── os2.ico
│   ├── os3.svg
│   ├── os4.png
│   ├── press1.jpg
│   ├── sdk1.png
│   ├── sdk2.png
│   ├── sdk3.png
│   ├── sdk4.png
│   ├── ser1.png
│   ├── ser2.png
│   ├── ser3.svg
│   ├── ser4.svg
│   ├── sopt4.jpg
│   ├── sponser2.jpeg
│   ├── sponsership1.jpeg
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
│   ├── summer_learning_hero.png
│   ├── t-shirt1.jpeg
│   ├── t-shirt2.jpeg
│   ├── t-shirt3.jpeg
│   ├── t-shirt4.jpeg
│   ├── t-shirt5.jpeg
│   ├── t-shirt6.jpeg
│   ├── t-shirt7.jpeg
│   ├── t-shirt8.jpeg
│   ├── t-shirt9.jpeg
│   ├── techeq1.webp
│   ├── techeq2.webp
│   ├── truth1.png
│   ├── vision.webp
│   ├── voy1.png
│   ├── voy2.jpeg
│   ├── voy3.png
│   └── week1.png
├── repo_structure.txt
├── security.md
├── src/
│   ├── app/
│   │   ├── (pages)/
│   │   │   ├── About/
│   │   │   │   └── page.jsx
│   │   │   ├── AddEvent/
│   │   │   │   └── page.jsx
│   │   │   ├── AddHackathon/
│   │   │   │   └── page.jsx
│   │   │   ├── AddProjects/
│   │   │   │   └── page.jsx
│   │   │   ├── AddSpotlight/
│   │   │   │   └── page.jsx
│   │   │   ├── AddStories/
│   │   │   │   └── page.jsx
│   │   │   ├── Blogs/
│   │   │   │   ├── Blogs.js
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── Certifications/
│   │   │   │   └── page.jsx
│   │   │   ├── Chapters/
│   │   │   │   └── page.jsx
│   │   │   ├── Contact/
│   │   │   │   ├── Contactus.svg
│   │   │   │   ├── conatct.json
│   │   │   │   ├── contact.css
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
│   │   │   ├── HelpDesk/
│   │   │   │   └── page.jsx
│   │   │   ├── HelpWithFuture/
│   │   │   │   └── page.jsx
│   │   │   ├── Practitioners/
│   │   │   │   └── page.jsx
│   │   │   ├── PrivacyPolicy/
│   │   │   │   └── page.jsx
│   │   │   ├── Projects/
│   │   │   │   ├── Card.jsx
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   └── page.jsx
│   │   │   ├── ResetPassword/
│   │   │   │   └── page.jsx
│   │   │   ├── Resources/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── page.jsx
│   │   │   │   └── resources.js
│   │   │   ├── ReverseEngineeringLab/
│   │   │   │   └── page.jsx
│   │   │   ├── RulesAndRegulations/
│   │   │   │   └── page.jsx
│   │   │   ├── SignIn/
│   │   │   │   └── page.jsx
│   │   │   ├── SignUp/
│   │   │   │   └── page.jsx
│   │   │   ├── SingleEvent/
│   │   │   │   └── [id]/
│   │   │   │       └── page.jsx
│   │   │   ├── Stories-Achievements/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── achievements.js
│   │   │   │   └── page.jsx
│   │   │   ├── Subscribe/
│   │   │   │   └── page.jsx
│   │   │   ├── TeamsGallery/
│   │   │   │   ├── Teams.js
│   │   │   │   └── page.jsx
│   │   │   ├── TechToolkits/
│   │   │   │   ├── page.jsx
│   │   │   │   └── techStacks.js
│   │   │   ├── TermsAndConditions/
│   │   │   │   └── page.jsx
│   │   │   ├── Voyages/
│   │   │   │   └── page.jsx
│   │   │   ├── ai-art-gallery/
│   │   │   │   └── page.jsx
│   │   │   ├── ai-ml/
│   │   │   │   └── page.jsx
│   │   │   ├── alumini/
│   │   │   │   └── page.jsx
│   │   │   ├── analyst-reports/
│   │   │   │   └── page.jsx
│   │   │   ├── analytics-pipelines/
│   │   │   │   └── page.jsx
│   │   │   ├── application-dev/
│   │   │   │   └── page.jsx
│   │   │   ├── arcade/
│   │   │   │   └── page.jsx
│   │   │   ├── careers/
│   │   │   │   ├── [id]/
│   │   │   │   │   └── page.jsx
│   │   │   │   ├── opportunities.js
│   │   │   │   └── page.jsx
│   │   │   ├── cicd/
│   │   │   │   └── page.jsx
│   │   │   ├── code-exchange/
│   │   │   │   └── page.jsx
│   │   │   ├── compute-tech/
│   │   │   │   └── page.jsx
│   │   │   ├── confession/
│   │   │   │   └── page.jsx
│   │   │   ├── db-overview/
│   │   │   │   └── page.jsx
│   │   │   ├── detox-zone/
│   │   │   │   └── page.jsx
│   │   │   ├── dev-nightmare/
│   │   │   │   └── page.jsx
│   │   │   ├── devStudent/
│   │   │   │   └── page.jsx
│   │   │   ├── devfest/
│   │   │   │   └── page.jsx
│   │   │   ├── devprod/
│   │   │   │   └── page.jsx
│   │   │   ├── distributed-hybrid/
│   │   │   │   └── page.jsx
│   │   │   ├── doodle/
│   │   │   │   └── page.jsx
│   │   │   ├── easter-egg/
│   │   │   │   └── page.jsx
│   │   │   ├── expertdev/
│   │   │   │   └── page.jsx
│   │   │   ├── explore/
│   │   │   │   └── page.jsx
│   │   │   ├── future-tech/
│   │   │   │   └── page.jsx
│   │   │   ├── garage/
│   │   │   │   └── page.jsx
│   │   │   ├── gen-studio/
│   │   │   │   └── page.jsx
│   │   │   ├── genai/
│   │   │   │   └── page.jsx
│   │   │   ├── generative-ai-overview/
│   │   │   │   └── page.jsx
│   │   │   ├── get-started/
│   │   │   │   └── page.jsx
│   │   │   ├── gitContributors/
│   │   │   │   └── page.jsx
│   │   │   ├── google-cloud-learning/
│   │   │   │   └── page.jsx
│   │   │   ├── growth/
│   │   │   │   └── page.jsx
│   │   │   ├── hall-of-fame/
│   │   │   │   └── page.jsx
│   │   │   ├── helpCenter/
│   │   │   │   └── page.jsx
│   │   │   ├── hosting/
│   │   │   │   └── page.jsx
│   │   │   ├── how-apply/
│   │   │   │   └── page.jsx
│   │   │   ├── industry-solutions/
│   │   │   │   └── page.jsx
│   │   │   ├── inovate/
│   │   │   │   └── page.jsx
│   │   │   ├── inovation-hub/
│   │   │   │   └── page.jsx
│   │   │   ├── ioext/
│   │   │   │   └── page.jsx
│   │   │   ├── join-partner/
│   │   │   │   └── page.jsx
│   │   │   ├── lens-page/
│   │   │   │   └── page.jsx
│   │   │   ├── localdev/
│   │   │   │   └── page.jsx
│   │   │   ├── louge/
│   │   │   │   └── page.jsx
│   │   │   ├── merchendise/
│   │   │   │   └── page.jsx
│   │   │   ├── moonshots/
│   │   │   │   └── page.jsx
│   │   │   ├── mystery/
│   │   │   │   └── page.jsx
│   │   │   ├── networking-overview/
│   │   │   │   └── page.jsx
│   │   │   ├── observability-view/
│   │   │   │   └── page.jsx
│   │   │   ├── operating-system/
│   │   │   │   └── page.jsx
│   │   │   ├── orginizer/
│   │   │   │   └── page.jsx
│   │   │   ├── participationterms/
│   │   │   │   └── page.jsx
│   │   │   ├── partners/
│   │   │   │   └── page.jsx
│   │   │   ├── polls/
│   │   │   │   └── page.jsx
│   │   │   ├── press-corner/
│   │   │   │   └── page.jsx
│   │   │   ├── retro/
│   │   │   │   └── page.jsx
│   │   │   ├── sandbox/
│   │   │   │   └── page.jsx
│   │   │   ├── sdk/
│   │   │   │   └── page.jsx
│   │   │   ├── security-overview/
│   │   │   │   └── page.jsx
│   │   │   ├── service-health/
│   │   │   │   └── page.jsx
│   │   │   ├── services/
│   │   │   │   └── page.jsx
│   │   │   ├── sponsership/
│   │   │   │   └── page.jsx
│   │   │   ├── storage-overview/
│   │   │   │   └── page.jsx
│   │   │   ├── stories/
│   │   │   │   └── page.jsx
│   │   │   ├── storytime/
│   │   │   │   └── page.jsx
│   │   │   ├── student-challenge/
│   │   │   │   └── page.jsx
│   │   │   ├── sustainable/
│   │   │   │   └── page.jsx
│   │   │   ├── tech-stack-explorer/
│   │   │   │   └── page.jsx
│   │   │   ├── techequity/
│   │   │   │   └── page.jsx
│   │   │   ├── timeline/
│   │   │   │   └── page.jsx
│   │   │   ├── transform/
│   │   │   │   └── page.jsx
│   │   │   ├── truth/
│   │   │   │   └── page.jsx
│   │   │   ├── volunteer/
│   │   │   │   └── page.jsx
│   │   │   ├── weekly/
│   │   │   │   └── page.jsx
│   │   │   ├── whitepapers/
│   │   │   │   └── page.jsx
│   │   │   ├── who-apply/
│   │   │   │   └── page.jsx
│   │   │   └── womentechmakers/
│   │   │       └── page.jsx
│   │   ├── api/
│   │   │   ├── Certifications/
│   │   │   │   ├── data.js
│   │   │   │   └── route.js
│   │   │   ├── SendResetPassword/
│   │   │   │   ├── image.png
│   │   │   │   └── route.js
│   │   │   ├── addhackathon/
│   │   │   │   └── route.js
│   │   │   ├── addstoriesapi/
│   │   │   │   └── route.js
│   │   │   ├── chapters/
│   │   │   │   ├── data.js
│   │   │   │   └── route.js
│   │   │   ├── generate-content/
│   │   │   │   └── route.js
│   │   │   └── subscribe/
│   │   │       └── route.js
│   │   ├── favicon.ico
│   │   ├── fonts/
│   │   │   ├── GeistMonoVF.woff
│   │   │   └── GeistVF.woff
│   │   ├── globals.css
│   │   ├── images/
│   │   │   ├── ai_img.jpg
│   │   │   ├── gdsc-logo.png
│   │   │   └── teamMember.jpg
│   │   ├── layout.js
│   │   ├── not-found.jsx
│   │   └── page.js
│   ├── components/
│   │   ├── Chatbot.jsx
│   │   ├── GTranslateLoader.js
│   │   ├── Global/
│   │   │   ├── AddEventForm.jsx
│   │   │   ├── AddHackathonForm.jsx
│   │   │   ├── AddProjectsForm.jsx
│   │   │   ├── AddSpotlightForm.jsx
│   │   │   ├── AddStoriesForm.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── HelpWithFutureForm.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProductsNavbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── SuspenseLoader.jsx
│   │   └── ui/
│   │       ├── achievements.jsx
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
│   │       ├── form.jsx
│   │       ├── homepage.jsx
│   │       ├── hover-card.jsx
│   │       ├── input.jsx
│   │       ├── label.jsx
│   │       ├── loading.jsx
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
│   │       ├── stories.jsx
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
│   │   └── utils.js
│   └── public/
│       └── GDSC-RCIIT Logo.png
└── tailwind.config.js
```
<!-- END_STRUCTURE -->