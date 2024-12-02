function Contact() {
  return (
    <div className="flex flex-wrap">
        {/* Map Section */}
        <div className="w-full md:w-1/2 h-[25rem] md:h-[34rem] p-6 flex items-end justify-center">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14477.276043258822!2d67.18732505!3d24. 8870979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb339e2c516a007%3A0xc41b941a59b9ffaa!2sKala%20Board%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh!5e0!3m2!1sen!2s!4v1732992046733!5m2!1sen!2s" 
            width="100%" 
            height="100%"
            className="relative rounded-xl filter grayscale opacity-30 contrast-125">
            </iframe>


          {/* Address Section */}
          <div className="absolute p-1 sm:p-6 rounded-lg bg-gray-900/80 backdrop-blur-sm shadow-xl border border-emerald-500 space-y-3 m-0 sm:m-3">
            {/* Address */}
            <div className="space-y-1">
                <h3 className="text-emerald-500 text-sm font-semibold tracking-wider">ADDRESS</h3>
                <p className="text-gray-300">Malir Kalaboard, Karachi, Pakistan</p>
            </div>

            {/* Email */}
            <div className="space-y-1">
                <h3 className="text-emerald-500 text-sm font-semibold tracking-wider">EMAIL</h3>
                <p className="text-gray-300">hafizibadurrehman363@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="space-y-1">
                <h3 className="text-emerald-500 text-sm font-semibold tracking-wider">PHONE</h3>
                <p className="text-gray-300">03171289624</p>
            </div>
          </div>


        </div>

        {/* Form Section */}
        <div className="w-full md:w-1/2 p-6">
          {/* Heading */}
            <div className="flex flex-col gap-2 items-center md:items-start">
              <h1 className="text-emerald-400 text-2xl md:text-3xl font-bold tracking-wider">Contact</h1>
              <div className="w-16 h-[3px] rounded-lg bg-emerald-400"></div>
            </div>
            <p className="text-gray-300 mt-3 text-center md:text-start">Feel free to reach out. I'd love to hear from you!</p>

            {/* Form */}
            <form action="https://formspree.io/f/xanylgpo" method="POST" className="space-y-4 mt-3">
              {/* Name */}
              <div className="space-y-1  flex flex-col items-center md:items-start">
                <label htmlFor="name" className="text-emerald-400">Name</label>
                <input type="text" name="name" id="name" className="bg-gray-800 rounded-md border-2 border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-gray-300 outline-none w-full sm:w-3/4 md:w-11/12 p-2 tracking-wider transition-colors duration-500" required/>
              </div>

              {/* Email */}
              <div className="space-y-1 flex flex-col items-center md:items-start">
                <label htmlFor="email" className="text-emerald-400">Email</label>
                <input type="email" name="email" id="email" className="bg-gray-800 rounded-md border-2 border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-gray-300 outline-none w-full sm:w-3/4 md:w-11/12 p-2 tracking-wider transition-colors duration-500" required/>
              </div>

              {/* Subject */}
              <div className="space-y-1 flex flex-col items-center md:items-start">
                <label htmlFor="subject" className="text-emerald-400">Subject</label>
                <input type="text" name="subject" id="subject" className="bg-gray-800 rounded-md border-2 border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-gray-300 outline-none w-full sm:w-3/4 md:w-11/12 p-2 tracking-wider transition-colors duration-500" required/>
              </div>

              {/* Message */}
              <div className="space-y-1 flex flex-col items-center md:items-start">
                <label htmlFor="message" className="text-emerald-400">Message</label>
                <textarea id="message" name="message" className="bg-gray-800 rounded-md border-2 border-gray-700 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500 text-gray-300 outline-none w-full sm:w-3/4 md:w-11/12 p-2 tracking-wider transition-colors duration-500 resize-none" required/>
              </div>

              {/* Button */}
              <div className="flex justify-center md:justify-start">
                <button type="submit"  className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-gray-900 text-lg font-semibold rounded-lg py-2 px-6 hover:from-emerald-500 hover:to-cyan-500 transition-all duration-300 focus:outline-none">Send Message</button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default Contact