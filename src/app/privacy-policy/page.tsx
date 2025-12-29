import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="relative bg-white border-t border-black">
      <div className="max-w-4xl mx-auto px-6 md:px-10 py-16 md:py-20 text-black">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-extrabold font-lexend">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm md:text-base font-public text-black/70">
            Last Updated: <strong>December 29, 2025</strong>
          </p>
        </header>

        {/* Intro */}
        <p className="font-public text-base md:text-lg leading-relaxed mb-8">
          This Privacy Policy describes the policies and procedures on the
          collection, use, and disclosure of Your information when You use the
          Service. It also explains Your privacy rights and how the law protects
          You.
        </p>

        <p className="font-public text-base md:text-lg leading-relaxed mb-10">
          We use Your personal data to provide and improve the Service. By using
          the Service, You agree to the collection and use of information in
          accordance with this Privacy Policy.
        </p>

        {/* Content Sections */}
        <div className="space-y-10 font-public text-base md:text-lg leading-relaxed">

          {/* Interpretation */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Interpretation
            </h2>
            <p>
              The words of which the initial letter is capitalized have meanings
              defined under the following conditions. The following definitions
              shall have the same meaning regardless of whether they appear in
              singular or plural form.
            </p>
          </section>

          {/* Definitions */}
          <section>
            <h2 className="text-xl md:text-2xl font-bold font-lexend mb-3">
              Definitions
            </h2>
            <p className="mb-4">
              For the purposes of this Privacy Policy:
            </p>

            <ul className="space-y-4">
              <li>
                <strong>Account</strong> means a unique account created for You
                to access the Service or parts of the Service.
              </li>

              <li>
                <strong>Business</strong> refers to the entity that collects
                personal information and determines the purposes and means of
                processing such information, either alone or jointly with
                others.
              </li>

              <li>
                <strong>Company</strong> (referred to as “We”, “Us”, or “Our” in
                this Agreement) refers to the operator of the Service.
              </li>

              <li>
                <strong>Data Controller</strong> refers to the entity that
                determines the purposes and means of processing personal data
                under applicable data protection laws.
              </li>
            </ul>
          </section>

        </div>
      </div>
    </section>
  );
}
