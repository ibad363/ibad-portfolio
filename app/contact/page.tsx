import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="text-gray-300 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map Section */}
          <div className="lg:w-2/3 md:w-1/2 bg-gray-800 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
            <iframe
              width="100%"
              height="100%"
              title="map"
              className="absolute inset-0"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14478.981667936244!2d67.19999716977537!3d24.893431199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33c1f22df5555%3A0x27f12e1d84f4d92e!2sMalir%20Kala%20Board%2C%20Malir%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1710871234567!5m2!1sen!2s"
              style={{ filter: "grayscale(1) contrast(1.2) opacity(0.26)" }}
            />
            <div className="bg-gray-900/80 backdrop-blur-sm relative flex flex-wrap py-6 pr-6 rounded-lg shadow-xl border border-emerald-500/20">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-emerald-400 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1 text-gray-300">
                  Malir Kalaboard, Karachi, Pakistan
                </p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-emerald-400 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-gray-300 leading-relaxed">hafizibadurrehman363@gmail.com</a>
                <h2 className="title-font font-semibold text-emerald-400 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed text-gray-300">03171289624</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
            <h2 className="text-emerald-400 sm:text-4xl text-3xl mb-4 font-bold">
              Contact
            </h2>
            <div className="w-[60px] h-[3px] bg-emerald-400 rounded-xl mb-6"></div>
            <p className="leading-relaxed mb-5 text-gray-300">
              Feel free to reach out. I'd love to hear from you!
            </p>

            <form action="https://formspree.io/f/mkgnbwqn" method="POST">
              <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-emerald-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-emerald-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="subject" className="leading-7 text-sm text-emerald-400">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-base outline-none text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <div className="relative mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-emerald-400">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full bg-gray-800 rounded border border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 h-32 text-base outline-none text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  required
                />
              </div>

              <button className="text-gray-900 bg-gradient-to-r from-emerald-400 to-cyan-400 border-0 py-2 px-8 focus:outline-none hover:from-emerald-500 hover:to-cyan-500 rounded-lg text-lg transition-all duration-300 font-semibold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;