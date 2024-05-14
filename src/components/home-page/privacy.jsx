import React from 'react';
import Footer from './footer.component';

const Privacy = () => {
  return (
    <div className="max-w-6xl mx-auto py-8 px-4 bg-white p-8 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col gap-4 pb-4 col-span-1 ">
          <section className='flex flex-col gap-1'>
            <h2 className="text-xl font-semibold mb-2">Information We Collect:</h2>
            <p>Personal Information: When you register for our courses or services, we may collect personal information such as your name, email address, mailing address, phone number, and payment details. User Activity: We may collect information about your interactions with our website and courses, including pages visited, time spent on each page, and course progress. Device and Usage Information: We may collect information about the device you use to access our website or courses, including IP address, browser type, operating system, and referring URLs.</p>
          </section>
          <section className='flex flex-col gap-1'>
            <h2 className="text-xl font-semibold mb-2">How We Use Your Information:</h2>
            <p>Course Delivery: We use your personal information to provide you with access to our courses, communicate with you about course updates, and deliver course materials. Customer Support: We may use your information to respond to your inquiries, provide technical support, and address any issues you encounter. Improving Our Services: We analyze user activity and feedback to improve our courses, website functionality, and overall user experience. Marketing and Promotions: With your consent, we may use your contact information to send you promotional emails about new courses, special offers, or other relevant updates.</p>
          </section>
          <section className='flex flex-col gap-1'>
            <h2 className="text-xl font-semibold mb-2">Information Sharing and Disclosure:</h2>
            <p>Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our courses, processing payments, or managing our website. Legal Compliance: We may disclose your information when required by law or in response to a valid legal request. Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction. We will notify you via email or prominent notice on our website if such a transfer occurs.</p>
          </section>
        </div>
        <div className="flex flex-col gap-8 pb-4 col-span-1 ">
          <section>
            <h2 className="text-xl font-semibold mb-2">Data Security:</h2>
            <p>We take reasonable measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Your Choices and Rights:</h2>
            <p>Access and Correction: You may review and update your personal information by logging into your account on our website or contacting us directly. Opt-Out: You can opt-out of receiving promotional emails by following the unsubscribe instructions provided in each email or by contacting us. Cookies: You may adjust your browser settings to refuse cookies or alert you when cookies are being sent. However, some features of our website may not function properly without cookies.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Children's Privacy:</h2>
            <p>Our courses and services are not directed to individuals under the age of 13, and we do not knowingly collect personal information from children. If you believe that we have inadvertently collected information from a child, please contact us immediately, and we will take appropriate steps to remove the information from our systems.</p>
          </section>
          <section>
            <h2 className="text-xl font-semibold mb-2">Changes to This Privacy Policy:</h2>
            <p>We reserve the right to update or modify this Privacy Policy at any time without prior notice. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date at the top of this page.</p>
          </section>
        </div>
      </div>
    </div>
     
  );
};

export default Privacy;
