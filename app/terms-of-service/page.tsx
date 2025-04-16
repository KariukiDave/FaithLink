"use client"
import { Navigation } from "@/components/shared/navigation"
import { Footer } from "@/components/shared/footer"
import { BackToTop } from "@/components/shared/back-to-top"

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
            <div className="text-gray-700 space-y-6">
              <p className="text-sm text-gray-500">Last Updated: April 15, 2025</p>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using FaithLink's services, website, and applications (collectively, the "Services"),
                  you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may
                  not access or use the Services.
                </p>
                <p>
                  We may modify these Terms at any time. If we do so, we will notify you by publishing the modified
                  Terms on our website or through the Services. Your continued use of the Services after we publish the
                  modified Terms constitutes your acceptance of the modified Terms.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">2. Description of Services</h2>
                <p>
                  FaithLink provides a church management platform that includes features for membership management,
                  communication, event planning, small group coordination, and other ministry-related tools. The
                  specific features and functionality available to you will depend on your subscription plan.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">3. Account Registration and Security</h2>
                <p>
                  To use certain features of the Services, you must register for an account. You agree to provide
                  accurate, current, and complete information during the registration process and to update such
                  information to keep it accurate, current, and complete.
                </p>
                <p>
                  You are responsible for safeguarding your account credentials and for all activities that occur under
                  your account. You agree to notify us immediately if you become aware of any unauthorized use of your
                  account or any other breach of security.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">4. Subscription and Payments</h2>
                <p>
                  Some of our Services require payment of fees. If you choose a paid subscription, you agree to pay all
                  fees in accordance with the fees, charges, and billing terms in effect at the time a fee is due and
                  payable.
                </p>
                <p>
                  You may cancel your subscription at any time, but no refunds will be provided for any unused portion
                  of a subscription period. We reserve the right to change our pricing terms at any time, and such
                  changes will apply to your next billing cycle.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">5. User Content</h2>
                <p>
                  Our Services allow you to upload, submit, store, send, or receive content, including but not limited
                  to text, photos, videos, and other materials ("User Content"). You retain ownership of any
                  intellectual property rights that you hold in that User Content.
                </p>
                <p>
                  By uploading, submitting, storing, sending, or receiving User Content to or through our Services, you
                  grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify,
                  create derivative works, communicate, publish, publicly perform, publicly display, and distribute such
                  User Content for the limited purpose of providing the Services to you and your organization.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">6. Prohibited Conduct</h2>
                <p>You agree not to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit
                    other users from fully enjoying the Services.
                  </li>
                  <li>Use the Services in any way that violates applicable laws or regulations.</li>
                  <li>
                    Use the Services to distribute unsolicited promotional or commercial content or other unwanted or
                    mass solicitations.
                  </li>
                  <li>Collect or store personal data about other users without their express permission.</li>
                  <li>Impersonate or misrepresent your affiliation with any person or entity.</li>
                </ul>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">7. Termination</h2>
                <p>
                  We may terminate or suspend your access to and use of the Services at our sole discretion, without
                  notice, for any reason, including if we believe that you have violated these Terms. Upon termination,
                  your right to access and use the Services will immediately cease.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">8. Disclaimer of Warranties</h2>
                <p>
                  THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                  IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
                  PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">9. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL FAITHLINK, ITS AFFILIATES,
                  DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL,
                  CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR
                  OTHER INTANGIBLE LOSSES, THAT RESULT FROM THE USE OF, OR INABILITY TO USE, THE SERVICES.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">10. Governing Law</h2>
                <p>
                  These Terms and your use of the Services shall be governed by and construed in accordance with the
                  laws of the State of California, without giving effect to any principles of conflicts of law.
                </p>
              </div>

              <div className="space-y-4">
                <h2 className="text-xl font-bold mt-8">11. Contact Information</h2>
                <p>If you have any questions about these Terms, please contact us at:</p>
                <p>
                  <strong>Email:</strong> legal@faithlink.com
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
