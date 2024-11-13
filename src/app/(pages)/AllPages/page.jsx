import Link from 'next/link';
import React from 'react';

const AllPages = () => {
  const pages = [
    { name: 'About', path: '/About' },
    { name: 'Add Event', path: '/AddEvent' },
    { name: 'Add Hackathon', path: '/AddHackathon' },
    { name: 'Add Projects', path: '/AddProjects' },
    { name: 'Add Spotlight', path: '/AddSpotlight' },
    { name: 'Add Stories', path: '/AddStories' },
    { name: 'Blogs', path: '/Blogs' },
    { name: 'Certifications', path: '/Certifications' },
    { name: 'Chapters', path: '/Chapters' },
    { name: 'Contact', path: '/Contact' },
    { name: 'Events', path: '/Events' },
    { name: 'FAQs Forum', path: '/FAQsForum' },
    { name: 'Gemini AI', path: '/GeminiAI' },
    { name: 'Hackathon', path: '/Hackathon' },

    { name: 'Help Desk', path: '/HelpDesk' },
    { name: 'Help With Future', path: '/HelpWithFuture' },
    { name: 'Practitioners', path: '/Practitioners' },
    { name: 'Privacy Policy', path: '/PrivacyPolicy' },
    { name: 'Projects', path: '/Projects' },
    { name: 'Reset Password', path: '/ResetPassword' },
    { name: 'Resources', path: '/Resources' },
    { name: 'Reverse Engineering Lab', path: '/ReverseEngineeringLab' },
    { name: 'Rules And Regulations', path: '/RulesAndRegulations' },
    { name: 'Sign In', path: '/SignIn' },
    { name: 'Sign Up', path: '/SignUp' },
    { name: 'Stories-Achievements', path: '/Stories-Achievements' },
    { name: 'Subscribe', path: '/Subscribe' },
    { name: 'Teams Gallery', path: '/TeamsGallery' },
    { name: 'Tech Toolkits', path: '/TechToolkits' },
    { name: 'Terms And Conditions', path: '/TermsAndConditions' },
    { name: 'Voyages', path: '/Voyages' },
    { name: 'AI Art Gallery', path: '/ai-art-gallery' },
    { name: 'AI/ML', path: '/ai-ml' },
    { name: 'Alumini', path: '/alumini' },
    { name: 'Analyst Reports', path: '/analyst-reports' },
    { name: 'Analytics Pipelines', path: '/analytics-pipelines' },
    { name: 'Application Dev', path: '/application-dev' },
    { name: 'Arcade', path: '/arcade' },
    { name: 'Careers', path: '/careers' },
    { name: 'CICD', path: '/cicd' },
    { name: 'Code Exchange', path: '/code-exchange' },
    { name: 'Compute Tech', path: '/compute-tech' },
    { name: 'Confession', path: '/confession' },
    { name: 'DB Overview', path: '/db-overview' },
    { name: 'Detox Zone', path: '/detox-zone' },
    { name: 'Dev Nightmare', path: '/dev-nightmare' },
    { name: 'DevStudent', path: '/devStudent' },
    { name: 'DevFest', path: '/devfest' },
    { name: 'DevProd', path: '/devprod' },
    { name: 'Distributed Hybrid', path: '/distributed-hybrid' },
    { name: 'Doodle', path: '/doodle' },
    { name: 'Easter Egg', path: '/easter-egg' },
    { name: 'ExpertDev', path: '/expertdev' },
    { name: 'Explore', path: '/explore' },
    { name: 'Future Tech', path: '/future-tech' },
    { name: 'Garage', path: '/garage' },
    { name: 'Gen Studio', path: '/gen-studio' },
    { name: 'GenAI', path: '/genai' },
    { name: 'Generative AI Overview', path: '/generative-ai-overview' },
    { name: 'Get Started', path: '/get-started' },
    { name: 'Git Contributors', path: '/gitContributors' },
    { name: 'Google Cloud Learning', path: '/google-cloud-learning' },
    { name: 'Growth', path: '/growth' },
    { name: 'Hall of Fame', path: '/hall-of-fame' },
    { name: 'Help Center', path: '/helpCenter' },
    { name: 'Hosting', path: '/hosting' },
    { name: 'How Apply', path: '/how-apply' },
    { name: 'Industry Solutions', path: '/industry-solutions' },
    { name: 'Inovate', path: '/inovate' },
    { name: 'Inovation Hub', path: '/inovation-hub' },
    { name: 'IOExt', path: '/ioext' },
    { name: 'Join Partner', path: '/join-partner' },
    { name: 'Lens Page', path: '/lens-page' },
    { name: 'LocalDev', path: '/localdev' },
    { name: 'Louge', path: '/louge' },
    { name: 'Merchendise', path: '/merchendise' },
    { name: 'Moonshots', path: '/moonshots' },
    { name: 'Mystery', path: '/mystery' },
    { name: 'Networking Overview', path: '/networking-overview' },
    { name: 'Observability View', path: '/observability-view' },
    { name: 'Operating System', path: '/operating-system' },
    { name: 'Orginizer', path: '/orginizer' },
    { name: 'Participation Terms', path: '/participationterms' },
    { name: 'Partners', path: '/partners' },
    { name: 'Polls', path: '/polls' },
    { name: 'Press Corner', path: '/press-corner' },
    { name: 'Retro', path: '/retro' },
    { name: 'Sandbox', path: '/sandbox' },
    { name: 'SDK', path: '/sdk' },
    { name: 'Security Overview', path: '/security-overview' },
    { name: 'Service Health', path: '/service-health' },
    { name: 'Services', path: '/services' },
    { name: 'Sponsership', path: '/sponsership' },
    { name: 'Storage Overview', path: '/storage-overview' },
    { name: 'Stories', path: '/stories' },
    { name: 'Storytime', path: '/storytime' },
    { name: 'Student Challenge', path: '/student-challenge' },
    { name: 'Sustainable', path: '/sustainable' },
    { name: 'Tech Stack Explorer', path: '/tech-stack-explorer' },
    { name: 'TechEquity', path: '/techequity' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'Transform', path: '/transform' },
    { name: 'Truth', path: '/truth' },
    { name: 'Volunteer', path: '/volunteer' },
    { name: 'Weekly', path: '/weekly' },
    { name: 'Whitepapers', path: '/whitepapers' },
    { name: 'Who Apply', path: '/who-apply' },
    { name: 'Women Tech Makers', path: '/womentechmakers' }
  ];

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">All Pages</h1>
      <ul className="space-y-2">
        {pages.map((page, index) => (
          <li key={index}>
            <Link href={page.path} className="text-blue-500 hover:underline">
              {page.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllPages;