function ContactForm() {
  return (
    <div className="w-full py-10 max-w-primary-col">
      <div className="max-w-[800px] mx-auto">
        <div>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4">
            <div>
              <label htmlFor="name" className="form-label">
                Your name
              </label>
              <input
                id="name"
                name="name"
                placeholder="Name"
                className="form-input"
              />
            </div>
            <div>
              <label htmlFor="email" className="form-label">
                Your email
              </label>
              <input
                id="email"
                name="email"
                placeholder="example@example.com"
                className="form-input"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="description" className="form-label">
                Your message
              </label>
              <textarea
                id="email"
                name="email"
                placeholder="Tell me about the technology chalanges in your machine shop.  How can I help?"
                className="form-input"
              />
            </div>
            <div className="sm:col-span-2 justify-self-center mt-4">
              <button className="btn-primary" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
