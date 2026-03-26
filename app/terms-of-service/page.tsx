import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-focus-blue to-focus-navy text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h1>Terms of Service</h1>
          <p className="text-white/85 mt-3">
            Terms that apply when using Focus Ministry website pages and forms.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 flex-1">
        <article className="max-w-4xl mx-auto space-y-8">
          <div>
            <h3 className="text-focus-navy mb-2">Use of Site</h3>
            <p className="text-gray-600">
              You agree to use this site lawfully and not misuse forms, data, or content.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">Donations and Submissions</h3>
            <p className="text-gray-600">
              Donation and partnership submissions are subject to verification and applicable payment
              processing requirements.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">Content Ownership</h3>
            <p className="text-gray-600">
              Website content belongs to Focus Ministry unless otherwise stated.
            </p>
          </div>
          <div>
            <h3 className="text-focus-navy mb-2">Changes to Terms</h3>
            <p className="text-gray-600">
              Terms may be updated periodically to reflect operational or legal updates.
            </p>
          </div>
        </article>
      </section>

      <Footer />
    </div>
  )
}

