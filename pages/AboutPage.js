import React from "react";
import { motion } from "framer-motion";

const AboutPage = () => {
  const modelImages = [
   "https://media.istockphoto.com/id/536719063/photo/beautiful-woman.webp?a=1&b=1&s=612x612&w=0&k=20&c=owDV7Lz20bkoe0l8AgDwNoucUmnXkZu__pjk43lN5NQ=",
   "https://images.unsplash.com/photo-1728413272542-8f111669099a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGFyYWIlMjB3b21hbiUyMHdpdGglMjBqZXdlbHN8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1610694955371-d4a3e0ce4b52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmVja2xhY2V8ZW58MHx8MHx8fDA%3D",
   "https://images.unsplash.com/photo-1735924577474-6b9ed4b8139c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG1vZGVscyUyMHdlYXJpbmclMjBqZXdlbHN8ZW58MHx8MHx8fDA%3D",
   "https://plus.unsplash.com/premium_photo-1699389167134-6dd133f0ba57?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vZGVscyUyMHdlYXJpbmclMjBqZXdlbHN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1644613536367-69728d99cad5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVscyUyMHdlYXJpbmclMjBqZXdlbHN8ZW58MHx8MHx8fDA%3D"
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0b1d3a] via-[#12264a] to-[#1a2c52] text-yellow-100 px-6 py-20">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-yellow-300 mb-10 text-center">
          About Eleganza
        </h1>

        <p className="text-lg leading-relaxed mb-8">
          Eleganza is not just a jewelry brand—it's an embodiment of timeless luxury, elegance, and individuality.
          Born from the desire to bring ethereal beauty to everyday life, our pieces celebrate craftsmanship,
          authenticity, and heritage.
        </p>

        <p className="italic text-md text-yellow-200 mb-8">
          "Jewelry is like the perfect spice—it always complements what's already there."
        </p>

        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <motion.img
            src="https://images.unsplash.com/photo-1724313726964-e9419b7cf5a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZWxzJTIwd2VhcmluZyUyMGpld2Vsc3xlbnwwfHwwfHx8MA%3D%3D"
            alt="Model wearing jewelry"
            className="rounded-xl shadow-lg"
            whileHover={{ scale: 1.05 }}
          />

          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-yellow-200 mb-4">
              A Legacy of Elegance
            </h2>
            <p className="text-md mb-2">
              Since our founding, Eleganza has focused on using responsibly sourced materials to craft stunning,
              wearable art. Each piece tells a story—a reflection of the person wearing it.
            </p>
            <p className="text-md">
              Our artisans combine age-old techniques with modern designs to create collections that inspire and empower.
              Whether you're dressing for a celebration or elevating the everyday, Eleganza shines with you.
            </p>
          </div>
        </div>

        <h2 className="text-2xl font-semibold text-yellow-200 mb-6 text-center">The Faces of Eleganza</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {modelImages.map((url, i) => (
            <motion.img
              key={i}
              src={url}
              alt={`Eleganza Model ${i + 1}`}
              className="w-full rounded-xl shadow hover:scale-105 hover:brightness-110 transition duration-300"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>

        <blockquote className="bg-[#1e2d4f] text-yellow-100 italic p-6 rounded-2xl shadow-xl text-center mb-12">
          "Each piece we design is a celebration of femininity, strength, and beauty. Eleganza is not just what you wear—it's how you feel."
        </blockquote>

        <p className="text-lg text-center mb-12">
          Thank you for choosing Eleganza. Your journey into a world of shimmer and sophistication starts here.
        </p>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-yellow-200 mb-4">Our Branches</h2>
          <ul className="space-y-2 text-md">
            <li>📍 Chennai – T Nagar, Velachery</li>
            <li>📍 Bangalore – Indiranagar, Jayanagar</li>
            <li>📍 Mumbai – Bandra, Powai</li>
            <li>📍 Hyderabad – Banjara Hills, Gachibowli</li>
            <li>📍 Delhi – Connaught Place, South Ex</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
