import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-focus-blue to-focus-navy text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1>Privacy Policy</h1>
          <p className="text-white/85 mt-3">
            How Focus Ministry handles and protects your information.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <article className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-focus-navy mb-2">Information We Collect</h3>
            <p className="text-gray-600">
              We may collect contact and form information that you provide through Donation,
              partnership, and contact forms.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">How We Use Information</h3>
            <p className="text-gray-600">
              Information is used to respond to requests, manage ministry communication, and
              improve website experience.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">Data Security</h3>
            <p className="text-gray-600">
              We take reasonable measures to protect submitted data and only use trusted service
              providers for processing.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">Updates</h3>
            <p className="text-gray-600">
              This policy can be updated from time to time as systems and legal requirements change.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  )
}

