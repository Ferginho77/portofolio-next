import Image from "next/image";

export default function EducationSection() {
    return (
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-2xl w-full flex flex-col items-center">
            <h1 className="text-3xl font-extrabold text-gray-800 mb-4 text-center">Education</h1>
            <div className="bg-gradient-to-tr from-blue-500 to-orange-500 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6 w-full">
                <h2 className="text-2xl font-bold text-white-700 mb-2">University Logistic and International Business (ULBI)</h2>
                <span className="text-md text-white-600">Informatics Engineering</span>
                <span className="text-sm text-white-500 mt-1">2025 - Present</span>
            </div>
            <div className="bg-gradient-to-tr from-red-300 to-blue-200 rounded-2xl shadow-lg p-6 flex flex-col items-center mb-6 w-full">
                <h2 className="text-2xl font-bold text-blue-500 mb-2">SMK Sangkuriang 1 Cimahi</h2>
                <span className="text-md text-blue-600">Software Engineering</span>
                <span className="text-sm text-blue-500 mt-1">2022 - 2025</span>
            </div>
        </div>
);
}