export default function About() {
  return (
    <div className="bg-gray-50">

      {/* 🔷 Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Our School
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Shaping young minds with quality education, discipline, and values.
        </p>
      </section>

      {/* 🏫 About Content */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image */}
        <img
          src="https://images.unsplash.com/photo-1588072432836-e10032774350"
          alt="school"
          className="rounded-xl shadow-lg"
        />

        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-blue-900 mb-4">
            Welcome to Kisaligarh School
          </h2>
          <p className="text-gray-600 mb-4">
            Kisaligarh School is dedicated to providing high-quality education
            that nurtures creativity, critical thinking, and leadership skills.
            Our mission is to empower students to become responsible citizens
            and lifelong learners.
          </p>
          <p className="text-gray-600">
            With experienced faculty, modern infrastructure, and a focus on
            holistic development, we ensure every child reaches their full
            potential.
          </p>
        </div>
      </section>

      {/* 🎯 Mission & Vision */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">

          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To provide a nurturing environment that fosters academic excellence,
              innovation, and moral values in students.
            </p>
          </div>

          <div className="p-6 bg-blue-50 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-800 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be a leading educational institution recognized for excellence
              in education, character building, and global outlook.
            </p>
          </div>

        </div>
      </section>

      {/* 📊 Stats Section */}
      <section className="bg-blue-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">

          <div>
            <h2 className="text-3xl font-bold">500+</h2>
            <p className="text-gray-200">Students</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">50+</h2>
            <p className="text-gray-200">Teachers</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="text-gray-200">Classrooms</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold">10+</h2>
            <p className="text-gray-200">Years Experience</p>
          </div>

        </div>
      </section>

      {/* 👨‍🏫 Principal Message */}
      <section className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Principal’s Message
        </h2>
        <p className="text-gray-600 italic">
          “Education is not just about books, but about building character and
          inspiring young minds to achieve greatness. At Kisaligarh School, we
          strive to create a supportive and inspiring environment for every
          student.”
        </p>
      </section>

    </div>
  );
}