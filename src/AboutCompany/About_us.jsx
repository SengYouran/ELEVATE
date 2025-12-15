import React from "react";

const About_us = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 px-6 py-12">
        <h2 className="text-center text-5xl font-bold my-4">About Us</h2>
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Who We Are */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p className="text-lg leading-relaxed">
            ELEVATE is a fashion brand proudly operated by ZANDO CO., LTD—one of
            Cambodia’s leading fashion retailers since 2015. With over 10 stores
            and a growing online community, ELEVATE delivers affordable,
            trend-driven fashion to style-conscious youth across Cambodia and
            beyond.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Catering to fashion-forward men and women, ELEVATE is rapidly
            expanding across Cambodia, with 11 stores nationwide, including 9 in
            Phnom Penh—and growing. With an ambitious vision, we’re not just
            expanding locally; we are setting our sights on international
            markets, bringing accessible fashion to even more stylish
            enthusiasts.
          </p>
        </section>

        {/* The ELEVATE Brand */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The ELEVATE Brand</h2>
          <p className="text-lg leading-relaxed">
            ELEVATE is designed for those who live life on the move—balancing
            comfort, versatility, and affordability. Our collections reflect the
            latest fashion trends, empowering young individuals to express
            themselves freely without being confined to a single style.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-lg">
            <li>Men collection</li>
            <li>Women collection</li>
          </ul>
        </section>

        {/* The ELEVATE Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-4">The ELEVATE Experience</h2>
          <p className="text-lg leading-relaxed">
            At ELEVATE, we never settle. Our ‘always in beta’ mindset keeps us
            constantly evolving—whether it's simplifying deliveries and returns
            or innovating with new fashion experiences.
          </p>
          <ul className="list-disc list-inside mt-4 space-y-1 text-lg">
            <li>
              <strong>Seamless Shopping & Returns:</strong> Easy ordering, fast
              shipping, and hassle-free returns (Ts&Cs apply).
            </li>
            <li>
              <strong>ELEVATE Mobile App:</strong> Download now on iOS & Android
              and shop with nationwide delivery.
            </li>
          </ul>
          <p className="text-lg mt-4 font-semibold">Shop anywhere, anytime.</p>
        </section>

        {/* Stay Rewarded */}
        <section>
          <h2 className="text-2xl font-bold mb-4">
            Stay Rewarded with ELEVATE
          </h2>
          <p className="text-lg leading-relaxed">
            Loyalty comes with perks! Join the ELEVATE Loyalty Program and enjoy
            $5 cashback when you sign up on the ELEVATE app. Plus, get access to
            exclusive rewards, early collection drops, and surprise special
            offers tailored just for you on every special occasion. Stay
            tuned—exciting benefits are coming your way!
          </p>
        </section>

        {/* Customer Care */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Customer Care</h2>
          <p className="text-lg leading-relaxed">
            Got questions? Our Help Center is available from 8 AM – 8 PM, Monday
            to Sunday, and our Live Chat team is always ready to assist. Whether
            it's sizing, orders, or style advice—we’ve got you covered!
          </p>
        </section>

        {/* Visit Us */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Visit Us</h2>
          <p className="text-lg leading-relaxed">
            ELEVATE is more than just an online fashion destination—we’re here
            for you in-store too! Visit us at our headquarters or one of our 11
            store locations across Cambodia.
          </p>
          <p className="mt-2 text-lg font-medium">Official Address:</p>
          <p className="text-lg">
            ELEVATE Headquarters
            <br />
            No.#113C (Second Floor), Mao Tse Tung Blvd, Sangkat Toul Svay Prey,
            Beong Keng Kang, Phnom Penh, 120104, Cambodia
          </p>
          <p className="mt-2 text-lg">
            Need help? Contact our Customer Care Team anytime at{" "}
            <a
              href="mailto:customer.care@elevatekh.com"
              className="text-blue-600 underline"
            >
              customer.care@elevatekh.com
            </a>{" "}
            or visit our Help Center for FAQs.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About_us;
