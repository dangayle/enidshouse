const Contact = () => {
  return (
    <div className="py-4 px-8 bg-white bg-opacity-75 rounded flex flex-col md:flex-row">
      <div className="p-4 md:w-1/2">
        <h1 className="text-xl md:text-4xl">Get in touch</h1>
        <p className="mt-2">
          Our immediate commitment is to provide resources for alcoholics in
          recovery.
        </p>
        <p className="mt-2">
          Our long-term commitment is to provide housing and resources for
          alcoholics in recovery.
        </p>
        <p className="mt-2">
          Read more about our mission <a href="http://www.google.com">here</a>.
        </p>
      </div>
      <div className="p-4 md:w-1/2">
        <form className="flex flex-col justify-center">
          <div className="flex flex-col">
            <label htmlFor="name" className="hidden">
              Full Name
            </label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="Full Name"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="email" className="hidden">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <div className="flex flex-col mt-2">
            <label htmlFor="tel" className="hidden">
              Number
            </label>
            <input
              type="tel"
              name="tel"
              id="tel"
              placeholder="Telephone Number"
              className="w-100 mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 focus:border-indigo-500 focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
