import Image from "next/image";

const Serti = [
  {
    image: "/serti1.jpg",
    alt: "Fergie Fakhirusalam"
  },
  {
     image: "/serti2.jpg",
      alt: "Fergie Fakhirusalam"
    
  },
  {
     image: "/serti3.jpg",
      alt: "Fergie Fakhirusalam"
  },
  {
     image: "/serti4.jpg",
      alt: "Fergie Fakhirusalam"
  },
  {
     image: "/serti5.jpg",
    alt: "Fergie Fakhirusalam"
  },
  {
     image: "/serti6.PNG",
    alt: "Fergie Fakhirusalam"
  },
  {
    image: "/softwaretest.jpeg",
    alt: "Fergie Fakhirusalam"

  },
  {
    image: "/mongodb.jpeg",
    alt: "Fergie Fakhirusalam"
  }

]


export default function SertiSection() {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Certificate</h1>
              <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6 w-full">
                <div className="overflow-hidden w-full">
                  <div className="marquee">
                    <div className="marquee__track flex gap-8">
                     {Serti.map((serti, index) => (
                        <Image
                          key={index}
                          src={serti.image}
                          alt={serti.alt}
                          width={200}
                          height={200}
                          className="rounded-2xl border-5 border-blue-300 shadow-md object-cover bg-white"
                          priority
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
        </div>
    );    
}
