import Image from "next/image";


export default function ProjectSection() {
    return (
        <div className="bg-white rounded-none shadow-xl p-8 flex flex-col items-center justify-center">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8 text-center">Projects</h1>
            <div className="overflow-x-auto w-full h-full flex-1 flex items-center">
                <div className="flex flex-row gap-8 w-full justify-center items-center">
                    {/* Project 1 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[340px] max-w-sm h-[400px] justify-center">
                        <Image
                            src="/pdam.png"
                            alt="PDAM Project"
                            width={240}
                            height={160}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-4"
                            priority
                        />
                        <h2 className="font-bold text-blue-700 text-xl mb-2">PDAM Dashboard</h2>
                        <p className="text-base text-gray-700 text-center">A web dashboard for water utility management, featuring real-time data and analytics.</p>
                    </div>
                    {/* Project 2 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[340px] max-w-sm h-[400px] justify-center">
                        <Image
                            src="/spbu.png"
                            alt="SPBU Project"
                            width={240}
                            height={160}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-4"
                            priority
                        />
                        <h2 className="font-bold text-red-700 text-xl mb-2">SPBU Pertamina Management</h2>
                        <p className="text-base text-gray-700 text-center">A management system for gas stations, helping track sales and inventory efficiently.</p>
                    </div>
                    {/* Project 3 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[340px] max-w-sm h-[400px] justify-center">
                        <Image
                            src="/perkin.png"
                            alt="Perkin Project"
                            width={240}
                            height={160}
                            className="rounded-2xl border-4 border-blue-300 shadow-md object-cover bg-white mb-4"
                            priority
                        />
                        <h2 className="font-bold text-blue-700 text-xl mb-2">Perkin App</h2>
                        <p className="text-base text-gray-700 text-center">A mobile app for employee attendance and payroll, designed for small businesses.</p>
                    </div>
                    {/* Project 4 */}
                    <div className="bg-gradient-to-tr from-blue-100 to-purple-200 rounded-2xl shadow-lg p-6 flex flex-col items-center min-w-[340px] max-w-sm h-[400px] justify-center">
                        <Image
                            src="/richmusic.png"
                            alt="RichMusic Project"
                            width={240}
                            height={160}
                            className="rounded-2xl border-4 border-gray-300 shadow-md object-cover bg-white mb-4"
                            priority
                        />
                        <h2 className="font-bold text-gray-700 text-xl mb-2">RichMusic</h2>
                        <p className="text-base text-gray-700 text-center">A music streaming platform with curated playlists and user-friendly interface.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}