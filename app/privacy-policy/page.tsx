"use client"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: April 15, 2025</p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">1. Introduction</h2>
                <p>
                  Welcome to FaithLink ("we," "our," or "us"). We respect your privacy and are committed to protecting
                  your personal data. This privacy policy will inform you about how we look after your personal data
                  when you visit our website and use our services, and tell you about your privacy rights and how the
                  law protects you.
                </p>
                <p>
                  Please read this privacy policy carefully before using our Services. If you have any questions about
                  our privacy practices, please refer to the end of this privacy policy for information on how to
                  contact us.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">2. Data We Collect About You</h2>
                <p>
                  Personal data, or personal information, means any information about an individual from which that
                  person can be identified. It does not include data where the identity has been removed (anonymous
                  data).
                </p>
                <p>
                  We may collect, use, store and transfer different kinds of personal data about you which we have
                  grouped together as follows:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>Identity Data</strong> includes first name, last name, username or similar identifier,
                    title, date of birth, and gender.
                  </li>
                  <li>
                    <strong>Contact Data</strong> includes billing address, delivery address, email address, and
                    telephone numbers.
                  </li>
                  <li>
                    <strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser
                    type and version, time zone setting and location, browser plug-in types and versions, operating
                    system and platform, and other technology on the devices you use to access this website.
                  </li>
                  <li>
                    <strong>Usage Data</strong> includes information about how you use our website and services.
                  </li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">3. How We Use Your Personal Data</h2>
                <p>
                  We will only use your personal data when the law allows us to. Most commonly, we will use your
                  personal data in the following circumstances:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Where we need to perform the contract we are about to enter into or have entered into with you.
                  </li>
                  <li>
                    Where it is necessary for our legitimate interests (or those of a third party) and your interests
                    and fundamental rights do not override those interests.
                  </li>
                  <li>Where we need to comply with a legal obligation.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">4. Data Security</h2>
                <p>
                  We have put in place appropriate security measures to prevent your personal data from being
                  accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we
                  limit access to your personal data to those employees, agents, contractors and other third parties who
                  have a business need to know.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">5. Data Retention</h2>
                <p>
                  We will only retain your personal data for as long as reasonably necessary to fulfill the purposes we
                  collected it for, including for the purposes of satisfying any legal, regulatory, tax, accounting or
                  reporting requirements.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">6. Your Legal Rights</h2>
                <p>
                  Under certain circumstances, you have rights under data protection laws in relation to your personal
                  data, including the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Request access to your personal data.</li>
                  <li>Request correction of your personal data.</li>
                  <li>Request erasure of your personal data.</li>
                  <li>Object to processing of your personal data.</li>
                  <li>Request restriction of processing your personal data.</li>
                  <li>Request transfer of your personal data.</li>
                  <li>Right to withdraw consent.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">7. Contact Us</h2>
                <p>
                  If you have any questions about this privacy policy or our privacy practices, please contact us at:
                </p>
                <p>
                  <strong>Email:</strong> privacy@faithlink.com
                  <br />
                  <strong>Address:</strong> 123 Faith Street, Suite 100, San Francisco, CA 94103
                  <br />
                  <strong>Phone:</strong> (555) 123-4567
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BackToTop />
    </div>
  )
}
