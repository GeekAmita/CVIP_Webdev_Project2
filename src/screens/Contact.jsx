function Contact() {
  return (
    <div
      id="contact"
      className="flex justify-between bg-neutral-600 px-32 py-16"
    >
      <ul className="flex flex-col">
        <li className="text-white text-3xl font-bold">Contact</li>
        <li className="text-white text-3xl font-light">LinkedIn</li>
        <li className="text-white text-3xl font-light">GitHub</li>
        <li className="text-white text-3xl font-light">YouTube</li>
        <li className="text-white text-3xl font-light">Twitter</li>
        <li className="text-white text-3xl font-light">Instagram</li>
      </ul>
      <ul className="flex flex-col">
        <li>
          <div className="flex gap-2 justify-start items-center">
            <div className="text-2xl text-white bg-gray-400 rounded-full w-12 h-12 font-bold flex justify-center items-center">
              AS
            </div>
          </div>
        </li>
        <li className="text-white text-3xl font-light">XYZ, Greater Noida</li>
        <li className="text-white text-3xl font-light">
          Uttar Pradesh, 201301
        </li>
        <li className="text-white text-3xl font-light">
          hello@amitasingh.tech
        </li>
        <li className="text-white text-3xl font-light">+91-123-456-7890</li>
      </ul>
    </div>
  );
}

export default Contact;
