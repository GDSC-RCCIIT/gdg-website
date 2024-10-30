import React from 'react';

// Terms Content Section
const TermsContent = () => (
    <div className="px-6 py-12 max-w-4xl mx-auto text-gray-800">
        <h1 className="text-3xl font-bold mb-6">GDG Event Participation Terms</h1>
        <p className="mb-6">
            Welcome to the Google Developer Group program site. Thanks for your interest in participating in a local GDG event.
        </p>
        <p className="mb-6">
            Please read these GDG Event Participation terms (the “Terms”) carefully because they are the agreement between you and Google.
            By using or logging into gdg.community.dev (the “Site”) or participating in any GDG event you confirm that you understand and agree to these Terms.
        </p>
        <p className="mb-6">
            Google may change these Terms from time to time. Revised Terms will be posted to the Site.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">GDG Community Entities</h2>
        <p className="mb-6">
            Please note that GDG chapters and GDG events are not hosted, organized, or run by Google or its affiliates. GDG chapters and GDG events are run by independent
            community organizers who are passionate about Google, our services and products. GDG community organizers are not agents or employees of Google and are not
            compensated by Google. The views expressed by GDG community organizers (or expressed by any other GDG members) do not necessarily reflect the views of Google.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Meeting Conduct</h2>
        <p className="mb-6">
            While GDG events have different purposes, all GDG organizers, GDG chapter members and attendees should maintain a friendly, safe, supportive and harassment-free environment
            and follow posted and/or applicable event guidelines, including the global community code of conduct.
        </p>
        <p className="mb-6">
            Unacceptable behavior will not be tolerated. Anyone engaged in unacceptable behavior may be exited from the GDG(s), Site(s) or resources, including future event participation.
            Unacceptable behavior may also result in prohibition from registering for or attending future GDG events.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Assumption of Risk</h2>
        <p className="mb-6">
            Your participation in and attendance of a GDG event or any related activities is completely voluntary. To the maximum extent permitted under applicable law, you accept and
            assume all risks of any and all personal injury or damage to your personal property that you may face while attending a GDG event or related activities, and waive any claims
            against Google relating to such risks.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Photo, Video and Other Media</h2>
        <p className="mb-6">
            GDG organizers, members, other GDG event attendees and/or Google may photograph, record (both audio and video), webcast, podcast during a GDG event. Your image, likeness,
            voice, statements and other identifying characteristics may be captured and transmitted as a result. By attending and participating in a GDG event where such recording
            is taking place, as well as agreeing to these Terms, you authorize the recording and agree that Google may use such recorded content for any purpose without compensation
            to you.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Email Settings</h2>
        <p className="mb-6">
            By joining a GDG event you may receive service-related emails regarding your participation in the GDG event, the GDG program and related activities from Google.
        </p>
        <p className="mb-6">
            You can unsubscribe from emails sent by a GDG chapter at any time by navigating to your GDG Member profile on the Site and adjusting your Updates settings or by using
            the opt-out mechanism in the footer of the GDG chapter email. If you unsubscribe from GDG chapter emails you may still receive emails for GDG events in which you agree to participate.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Data Processing</h2>
        <p className="mb-6">
            By submitting your data on the Site at gdg.community.dev, you agree to have your event RSVP information collected by Google to share with local GDG organizers for the purpose
            of administering each GDG event. Google will use any information that you provide in connection with the GDG program in accordance with Google's Privacy Policy.
        </p>

        <p className="mt-8 text-sm text-gray-500">These Terms were last updated on June 12, 2020.</p>
    </div>
);

// Main GDG Event Participation Terms Page Component
const GDGEventParticipationTermsPage = () => {
    return (
        <div>
            <TermsContent />
        </div>
    );
};

export default GDGEventParticipationTermsPage;
