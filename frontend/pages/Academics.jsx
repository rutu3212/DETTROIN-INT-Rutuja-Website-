export default function Academics() {
  return (
    <div className="bg-gray-50">

      {/* 🔷 Hero Section */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Academics
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Delivering quality education with a focus on excellence and innovation.
        </p>
      </section>

      {/* 📚 Curriculum Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Our Curriculum
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Primary */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Primary Section
            </h3>
            <p className="text-gray-600">
              Focus on basic literacy, numeracy, and foundational skills with
              interactive learning methods.
            </p>
          </div>

          {/* Middle */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Middle School
            </h3>
            <p className="text-gray-600">
              Encouraging critical thinking, creativity, and subject exploration
              through practical learning.
            </p>
          </div>

          {/* Senior */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-800 mb-3">
              Senior Secondary
            </h3>
            <p className="text-gray-600">
              Preparing students for higher education with specialized subjects
              and career-focused learning.
            </p>
          </div>

        </div>
      </section>

      {/* 🧪 Subjects Section */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-8">
            Subjects Offered
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "Mathematics",
              "Science",
              "English",
              "Social Studies",
              "Computer Science",
              "Physics",
              "Chemistry",
              "Biology",
            ].map((subject, index) => (
              <div
                key={index}
                className="bg-blue-50 p-4 rounded-lg shadow hover:bg-blue-100 transition"
              >
                {subject}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🏫 Facilities Section */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
          Academic Facilities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Smart Classrooms
            </h3>
            <p className="text-gray-600">
              Digital learning tools and smart boards for interactive education.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Science Labs
            </h3>
            <p className="text-gray-600">
              Well-equipped labs for practical experiments and research.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">
              Library
            </h3>
            <p className="text-gray-600">
              A rich collection of books, journals, and digital resources.
            </p>
          </div>

        </div>
      </section>

      {/* 🎯 Teaching Approach */}
      <section className="bg-blue-900 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Our Teaching Approach
        </h2>
        <p className="max-w-3xl mx-auto text-gray-200">
          We focus on experiential learning, critical thinking, and holistic
          development to ensure students are prepared for real-world challenges.
        </p>
      </section>

    </div>
  );
}