const About = () => {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-6xl mb-4">GitFinder</h1>
      <p className="mb-4 text-2xl font-light">
        A React app to search GitHub users and see their details.
        <strong>
          <a href="https://github.com/rajanyadav1162"> Rajan Yadav</a>
        </strong>
        .
      </p>
      <p className="text-lg text-gray-400">
        Version <span className="text-white">1.0.0</span>
      </p>
      <p className="text-lg text-gray-400">
        Layout By:
        <a className="text-white" href="https://twitter.com/hassibmoddasser">
          Rajan Yadav
        </a>
      </p>
    </div>
  );
};

export default About;
