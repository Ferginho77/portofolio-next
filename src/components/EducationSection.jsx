import Image from "next/image";

export default function EducationSection() {
    return (
         <div className="bg-gradient-to-tr from-blue-400 to-orange-500 max-w-5xl mx-auto mt-16 rounded-3xl shadow-xl p-8 flex flex-col">
  <h2 className="text-2xl font-bold mb-6">Education</h2>

  <div className="border-l-4 border-orange-400 pl-6 space-y-6">
    <div>
       <Image
            src="/ulbi.png"
             alt="PDAM Project"
             width={120}
             height={120}
            className="rounded-2xl shadow-md object-cover mb-2 sm:mb-4"
            priority
            />
      <h3 className="text-lg font-semibold text-gray-800">University Logistic And International Business</h3>
      <p className="">Informatics Engineering</p>
      <span className="">2025 - Present</span>
    </div>
  </div>
</div>
);
}