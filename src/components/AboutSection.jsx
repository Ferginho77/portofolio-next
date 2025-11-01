import Image from "next/image";

export default function AboutSection() {
    return (
        <div  className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">About Me</h1>
            <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6 w-full">
                <Image
                    src="/about.jpg"
                    alt="Fergie Fakhirusalam"
                    width={140}
                    height={140}
                    className="rounded-full border-4 border-purple-400 shadow-md object-cover bg-white mb-4"
                    priority
                />
                <span className="text-xl font-bold text-blue-700">Fergie Fakhirusalam</span>
                <span className="text-md text-gray-600">Informatics Engineering Student</span>
            </div>
            <p className="text-lg text-gray-700 mb-4 text-center">
                Hello! My name is <span className="font-bold text-blue-600">Fergie Fakhirusalam</span>. I am passionate about technology...
            </p>
            <p className="text-lg text-gray-700 mb-4 text-center">
                I love learning new things, collaborating on projects, and building solutions...
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
                <li><i className="fa-solid fa-gear"></i> Currently learning: <span className="font-semibold text-yellow-500">Next.js</span>, <span className="font-semibold text-red-500">Laravel</span>, and <span className="font-semibold text-indigo-500">Back End Technology</span></li>
                <li><i className="fa-solid fa-code"></i> Interests: Web Development, Cloud Computing, Back End Development</li>
                <li><i className="fa-solid fa-handshake"></i> Open to: Collaboration, Internships, and Networking</li>
            </ul>
        </div>
    );
}
