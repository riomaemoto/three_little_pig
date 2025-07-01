import GlowingLogo from "@/components/GlowingLogo";

// Type definitions
interface Location {
  name: string;
  address: string;
  phone: string;
  hours: Record<string, string>;
  features: string[];
}

interface ContactMethod {
  method: string;
  details: string;
  hours: string;
  iconClass: string;
}

export default function Location() {
  const locations: Location[] = [
    {
      name: "3 Little Pigs Samgyupsal",
      address:
        "1216 Asuncion St, Tondo, City Of Manila, 1012 Metro Manila, Philippines",
      phone: "(02) 8555-1234",
      hours: {
        "Monday - Thursday": "11:00 AM - 10:00 PM",
        "Friday - Sunday": "11:00 AM - 11:00 PM",
      },
      features: [
        "Street Parking Available",
        "Air Conditioned",
        "Authentic Korean BBQ",
        "Family-Friendly",
        "Unlimited Samgyupsal",
        "Fresh Ingredients",
      ],
    },
  ];

  const contactMethods: ContactMethod[] = [
    {
      method: "Phone Reservations",
      details: "(02) 8555-1234",
      hours: "Daily 9:00 AM - 9:00 PM",
      iconClass: "phone",
    },
    {
      method: "Walk-in",
      details: "Subject to availability",
      hours: "During operating hours",
      iconClass: "walk-in",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800">
      {/* Header */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Glowing Logo */}
          <div className="mb-8">
            <GlowingLogo size="small" />
          </div>

          {/* 3LITTLEPIGS Title */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl tracking-wider">
            3 LITTLE PIGS
          </h1>

          {/* LOCATION with decorative lines */}
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-1 bg-orange-300 mr-4"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-orange-100 tracking-widest">
              LOCATION
            </h2>
            <div className="w-16 h-1 bg-orange-300 ml-4"></div>
          </div>

          <p className="text-xl max-w-3xl mx-auto text-orange-100 leading-relaxed">
            Experience authentic Korean BBQ in the heart of Metro Manila.
            <br />
            Premium dining, exceptional service, unforgettable flavors.
          </p>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              Visit Our Restaurant
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Located in the heart of Metro Manila, experience premium Korean
              BBQ
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {locations.map((location, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-yellow-400/20 hover:border-yellow-400/40 transition-all duration-500"
              >
                {/* Restaurant Hero Section */}
                {/* Google Maps Section */}
                <div className="relative h-80 overflow-hidden rounded-t-3xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.2106500704033!2d120.9654505349493!3d14.60804074031149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cb006efbe027%3A0x61e2a23b712c4e03!2s3%20Little%20Pigs%20samgyupsal!5e0!3m2!1sen!2sjp!4v1751338723032!5m2!1sen!2sjp"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>

                  {/* Overlay with restaurant info */}
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-red-800/90 to-orange-600/90 backdrop-blur-sm text-white px-6 py-4 rounded-2xl shadow-lg border border-yellow-400/30">
                    <h3 className="text-xl font-bold mb-1">{location.name}</h3>
                    <p className="text-orange-200 text-sm">📍 Tondo, Manila</p>
                  </div>
                </div>

                <div className="p-8 md:p-12">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Contact Info */}
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="group">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            Address
                          </h4>
                        </div>
                        <p className="text-gray-300 ml-16 leading-relaxed">
                          {location.address}
                        </p>
                      </div>

                      {/* Phone */}
                      <div className="group">
                        <div className="flex items-center mb-3">
                          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            Phone
                          </h4>
                        </div>
                        <a
                          href={`tel:${location.phone}`}
                          className="text-yellow-400 hover:text-yellow-300 text-lg font-medium ml-16 transition-colors hover:underline"
                        >
                          {location.phone}
                        </a>
                      </div>
                    </div>

                    {/* Right Column - Hours & Features */}
                    <div className="space-y-6">
                      {/* Operating Hours */}
                      <div className="group">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            Operating Hours
                          </h4>
                        </div>
                        <div className="ml-16 space-y-2">
                          {Object.entries(location.hours).map(
                            ([days, hours]) => (
                              <div
                                key={days}
                                className="flex justify-between items-center bg-gray-800/50 rounded-lg px-4 py-2"
                              >
                                <span className="text-gray-300 font-medium">
                                  {days}
                                </span>
                                <span className="text-white font-bold">
                                  {hours}
                                </span>
                              </div>
                            )
                          )}
                        </div>
                      </div>

                      {/* Features */}
                      <div className="group">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                            <svg
                              className="w-6 h-6 text-black"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          </div>
                          <h4 className="text-xl font-bold text-white group-hover:text-yellow-400 transition-colors">
                            Premium Features
                          </h4>
                        </div>
                        <div className="ml-16 flex flex-wrap gap-3">
                          {location.features.map((feature, featureIndex) => (
                            <span
                              key={featureIndex}
                              className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-red-500 hover:to-orange-500 transition-all duration-300 transform hover:scale-105"
                            >
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                    <a
                      href={`tel:${location.phone}`}
                      className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-4 px-8 rounded-xl text-center font-bold text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      📞 Call for Reservation
                    </a>
                    <button className="flex-1 border-2 border-yellow-400 text-yellow-400 py-4 px-8 rounded-xl font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                      📍 Get Directions
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
              How to Reach Us
            </h2>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Multiple ways to connect with us for reservations and inquiries
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-yellow-400/5 to-red-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Icon Background */}
                  <div className="w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                    {method.iconClass === "phone" && (
                      <svg
                        className="w-10 h-10 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    )}
                    {method.iconClass === "walk-in" && (
                      <svg
                        className="w-10 h-10 text-black"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-yellow-400 transition-colors duration-300">
                    {method.method}
                  </h3>

                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4">
                    <p className="text-gray-200 text-lg font-medium mb-2">
                      {method.details}
                    </p>
                    <p className="text-yellow-400 text-sm font-semibold uppercase tracking-wider">
                      {method.hours}
                    </p>
                  </div>

                  {method.iconClass === "phone" && (
                    <div className="mt-6">
                      <a
                        href={`tel:${method.details}`}
                        className="inline-flex items-center bg-gradient-to-r from-red-600 to-orange-600 text-white px-6 py-3 rounded-xl font-bold hover:from-red-500 hover:to-orange-500 transition-all duration-300 group-hover:scale-105"
                      >
                        <svg
                          className="w-5 h-5 mr-2"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                        Call Now
                      </a>
                    </div>
                  )}
                </div>

                {/* Border Animation */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-yellow-400/40 transition-all duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl md:text-5xl font-black text-white mb-4">
              Important Information
            </h3>
            <div className="w-16 h-1 bg-yellow-400 mx-auto mb-4"></div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Everything you need to know for the perfect dining experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Reservation Policy */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-red-600/20 rounded-3xl p-8 hover:border-red-600/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-orange-600 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors duration-300">
                  Reservation Policy
                </h4>
              </div>

              <div className="space-y-4">
                {[
                  "Reservations recommended, especially on weekends",
                  "48-hour advance booking for groups of 8+",
                  "Cancellations must be made 24 hours in advance",
                  "Tables held for 15 minutes past reservation time",
                  "Deposit required for special occasion bookings",
                ].map((item, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:bg-red-400 transition-colors"></div>
                    <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Services */}
            <div className="group bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-yellow-400/20 rounded-3xl p-8 hover:border-yellow-400/40 transition-all duration-500 hover:transform hover:scale-105">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-2xl flex items-center justify-center mr-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg
                    className="w-8 h-8 text-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-2xl font-bold text-white group-hover:text-yellow-400 transition-colors duration-300">
                  Premium Services
                </h4>
              </div>

              <div className="space-y-4">
                {[
                  "Birthday celebration packages",
                  "Corporate event catering",
                  "Takeout and delivery options",
                  "Gift certificates available",
                ].map((item, index) => (
                  <div key={index} className="flex items-start group/item">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-3 mr-4 flex-shrink-0 group-hover/item:bg-yellow-400 transition-colors"></div>
                    <p className="text-gray-300 leading-relaxed group-hover/item:text-white transition-colors">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative bg-gradient-to-br from-red-800 via-red-700 to-orange-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <div className="text-6xl mb-6">🎉</div>
            <h3 className="text-4xl md:text-5xl font-black mb-6 text-white drop-shadow-lg">
              Ready for an Unforgettable
              <br />
              <span className="text-yellow-400">Korean BBQ Experience?</span>
            </h3>
            <div className="w-24 h-1 bg-yellow-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Join us for premium Korean BBQ in the heart of Metro Manila.
              <br />
              Perfect for families, friends, and special celebrations!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
            <a
              href="tel:+63285551234"
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-8 py-4 rounded-2xl font-black text-lg hover:from-yellow-300 hover:to-orange-300 transition-all duration-300 transform hover:scale-105 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call Now for Reservation
              </div>
            </a>

            <a
              href="/menu"
              className="group relative border-3 border-white/80 text-white px-8 py-4 rounded-2xl font-black text-lg hover:bg-white hover:text-red-800 transition-all duration-300 transform hover:scale-105 shadow-2xl backdrop-blur-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center justify-center">
                <svg
                  className="w-6 h-6 mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm8 0a1 1 0 011-1h4a1 1 0 011 1v6a1 1 0 01-1 1h-4a1 1 0 01-1-1V8z"
                    clipRule="evenodd"
                  />
                </svg>
                View Our Menu
              </div>
            </a>
          </div>

          <div className="mt-12 text-orange-200">
            <p className="text-sm uppercase tracking-wider font-semibold">
              ✨ Premium Korean BBQ Experience • Since 1999 ✨
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
