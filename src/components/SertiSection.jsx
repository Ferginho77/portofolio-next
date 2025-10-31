import Image from "next/image";


export default function SertiSection() {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
              <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Certificate</h1>
              <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6 w-full">
                <div className="overflow-hidden w-full">
                  <div className="flex gap-8 animate-marquee">
                    <Image
                      src="/serti1.jpg"
                      alt="Fergie Fakhirusalam"
                      width={200}
                      height={200}
                      className="rounded-2xl border-5 border-blue-300 shadow-md object-cover bg-white"
                      priority
                    />
                    <Image
                      src="/serti2.jpg"
                      alt="Fergie Fakhirusalam"
                      width={200}
                      height={200}
                      className="rounded-2xl border-5 border-blue-400 shadow-md object-cover bg-white"
                      priority
                    />
                    <Image
                      src="/serti3.jpg"
                      alt="Fergie Fakhirusalam"
                      width={200}
                      height={200}
                      className="rounded-2xl border-5 border-blue-400 shadow-md object-cover bg-white"
                      priority
                    />
                    <Image
                      src="/serti4.jpg"
                      alt="Fergie Fakhirusalam"
                      width={200}
                      height={200}
                      className="rounded-2xl border-5 border-blue-400 shadow-md object-cover bg-white"
                      priority
                    />
                    <Image
                      src="/serti5.jpg"
                      alt="Fergie Fakhirusalam"
                      width={200}
                      height={200}
                      className="rounded-2xl border-5 border-red-400 shadow-md object-cover bg-white"
                      priority
                    />
                  </div>
                </div>
              </div>
        </div>
    );    
}