import Image from "next/image";


export default function ProjectSection() {
    return (
        <div className="bg-white rounded-none shadow-xl p-4 sm:p-8 flex flex-col items-center justify-center w-full">
            <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-800 mb-6 sm:mb-8 text-center">Projects</h1>
            <div className="overflow-x-auto w-full">
                <div className="flex flex-row gap-4 sm:gap-8 w-max">
                    {/* Project 1 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-sm h-[340px] sm:h-[400px] justify-center">
                        <Image
                            src="/pdam.png"
                            alt="PDAM Project"
                            width={200}
                            height={120}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-2 sm:mb-4"
                            priority
                        />
                        <h2 className="font-bold text-blue-700 text-lg sm:text-xl mb-1 sm:mb-2">PDAM Dashboard</h2>
                        <p className="text-xs sm:text-base text-gray-700 text-center">office car rental website at PDAM Tirta Raharja company, with Laravel 11 technology</p>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-sm h-[340px] sm:h-[400px] justify-center">
                        <Image
                            src="/spbu.png"
                            alt="SPBU Project"
                            width={200}
                            height={120}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-2 sm:mb-4"
                            priority
                        />
                        <h2 className="font-bold text-red-700 text-lg sm:text-xl mb-1 sm:mb-2">SPBU Pertamina Management</h2>
                        <p className="text-xs sm:text-base text-gray-700 text-center">Pertamina gas station management website spread across 8 regions in West Java, the system includes attendance with fingerprint machines to fuel sales calculations</p>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-sm h-[340px] sm:h-[400px] justify-center">
                        <Image
                            src="/perkin.png"
                            alt="Perkin Project"
                            width={200}
                            height={120}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-2 sm:mb-4"
                            priority
                        />
                        <h2 className="font-bold text-blue-700 text-lg sm:text-xl mb-1 sm:mb-2">Perkin App</h2>
                        <p className="text-xs sm:text-base text-gray-700 text-center">PT. Perkin Indonesia's Web-Based Dog Racing Scoring System Supported by Arduino Device Sensor Technology</p>
                    </div>
                    {/* Project 4 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center min-w-[260px] sm:min-w-[340px] max-w-xs sm:max-w-sm h-[340px] sm:h-[400px] justify-center">
                        <Image
                            src="/richmusic.png"
                            alt="RichMusic Project"
                            width={200}
                            height={120}
                            className="rounded-2xl border-4 border-gray-300 shadow-md object-cover bg-white mb-2 sm:mb-4"
                            priority
                        />
                        <h2 className="font-bold text-gray-700 text-lg sm:text-xl mb-1 sm:mb-2">RichMusic</h2>
                        <p className="text-xs sm:text-base text-gray-700 text-center">Rich Music company profile, to cover the latest news about music and concert ticket info</p>
                    </div>
                </div>
            </div>
        </div>
    );
}