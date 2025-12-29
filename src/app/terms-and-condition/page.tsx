import React from "react";

export default function TermsAndConditions() {
  return (
    <section className="relative bg-white border-t border-black">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20 text-black">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold font-lexend">
            Terms & Conditions
          </h1>
          <p className="mt-2 text-sm md:text-base font-public text-black/70">
            Last Updated: <strong>December 29, 2025</strong>
          </p>
        </header>

        {/* Intro */}
        <p className="font-public text-base md:text-lg leading-relaxed mb-8">
          These Terms and Conditions govern your use of this website and its
          content. By accessing or using this site, you agree to be bound by
          these Terms. If you do not agree with any part of these Terms, you
          should not use the Service.
        </p>

        {/* Content Sections */}
        <div className="space-y-10 font-public text-base md:text-lg leading-relaxed">

          {/* Interpretation */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Interpretation
            </h2>
            <p>
              The words with capitalized initial letters have meanings defined
              under the following conditions. These definitions apply whether
              they appear in singular or plural form.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Definitions
            </h2>
            <p className="mb-4">
              For the purposes of these Terms and Conditions:
            </p>

            <ul className="space-y-4">
              <li>
                <strong>Service</strong> refers to the website and any related
                content, tools, or services provided through it.
              </li>

              <li>
                <strong>User</strong> means any individual who accesses or uses
                the Service.
              </li>

              <li>
                <strong>We</strong>, <strong>Us</strong>, or <strong>Our</strong>
                refers to the operator of the Service.
              </li>

              <li>
                <strong>Content</strong> refers to all text, visuals, code,
                tutorials, opinions, and materials published on the Service.
              </li>
            </ul>
          </section>

          {/* Use of the Service */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Use of the Service
            </h2>
            <p>
              You agree to use the Service only for lawful purposes and in a way
              that does not infringe the rights of others or restrict their use
              and enjoyment of the Service.
            </p>
          </section>

          {/* Disclaimer */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Disclaimer
            </h2>
            <p>
              All content on this website is provided for informational and
              educational purposes only. While reasonable efforts are made to
              keep the information accurate and up to date, no guarantees are
              made regarding completeness, reliability, or accuracy.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Limitation of Liability
            </h2>
            <p>
              To the fullest extent permitted by law, We shall not be liable for
              any direct, indirect, incidental, or consequential damages
              resulting from your use of, or inability to use, the Service.
            </p>
          </section>

          {/* Changes */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Changes to These Terms
            </h2>
            <p>
              These Terms and Conditions may be updated at any time without prior
              notice. Continued use of the Service after changes are posted
              constitutes acceptance of the updated Terms.
            </p>
          </section>

        </div>
      </div>
    </section>
  );
}
