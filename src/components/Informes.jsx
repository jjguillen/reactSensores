function Informes(){


    return (

        <section className="container">
            <div className="bg-gray-800">
                <div
                    className="rounded-tl-3xl bg-gradient-to-r from-blue-900 to-gray-800 p-4 shadow text-2xl text-white">
                    <h1 className="font-bold pl-2">Informes </h1>
                </div>
            </div>
            <div className="flex flex-col mt-1 mr-2">
                <div className="mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="w-full divide-y divide-gray-200 dark:divide-gray-700">
                                <thead className="bg-gray-50 dark:bg-gray-800">
                                <tr>
                                    <th scope="col"
                                        className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        <div className="flex items-center gap-x-3">
                                            <span>Name</span>
                                        </div>
                                    </th>

                                    <th scope="col"
                                        className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        File size
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Date uploaded
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Last updated
                                    </th>

                                    <th scope="col"
                                        className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                        Uploaded by
                                    </th>

                                    <th scope="col" className="relative py-3.5 px-4">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                                </thead>
                                <tbody
                                    className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24" stroke="currentColor"
                                                         className="w-5 h-5">
                                                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="font-normal text-gray-800 dark:text-white ">Tech
                                                        requirements.pdf</h2>
                                                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400">200
                                                        KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                        200 KB
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        4, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        4, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Lana
                                        Steiner
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         className="w-5 h-5">
                                                        <path  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="font-normal text-gray-800 dark:text-white ">Dashboard
                                                        screenshot.jpg</h2>
                                                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400">720
                                                        KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                        720 KB
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        4, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        4, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Demi
                                        Wilkinson
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         className="w-5 h-5">
                                                        <path d="M12.75 8.25v7.5m6-7.5h-3V12m0 0v3.75m0-3.75H18M9.75 9.348c-1.03-1.464-2.698-1.464-3.728 0-1.03 1.465-1.03 3.84 0 5.304 1.03 1.464 2.699 1.464 3.728 0V12h-1.5M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="font-normal text-gray-800 dark:text-white ">Dashboard
                                                        prototype FINAL.gif</h2>
                                                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400">21
                                                        KB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                        21 KB
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        2, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        2, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Lana
                                        Steiner
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         className="w-5 h-5">
                                                        <path d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="font-normal text-gray-800 dark:text-white ">App
                                                        inspiration.png</h2>
                                                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400">2
                                                        MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                        2 MB
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        8, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        8, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Demi
                                        Wilkinson
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                                    </td>
                                </tr>

                                <tr>
                                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                        <div className="inline-flex items-center gap-x-3">
                                            <div className="flex items-center gap-x-2">
                                                <div
                                                    className="flex items-center justify-center w-8 h-8 text-blue-500 bg-blue-100 rounded-full dark:bg-gray-800">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                                         viewBox="0 0 24 24"
                                                         className="w-5 h-5">
                                                        <path d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0118 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0118 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 016 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"/>
                                                    </svg>
                                                </div>

                                                <div>
                                                    <h2 className="font-normal text-gray-800 dark:text-white ">The
                                                        Absolute Basics.mp4</h2>
                                                    <p className="text-xs font-normal text-gray-500 dark:text-gray-400">720
                                                        MB</p>
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                        720 MB
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        8, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Jan
                                        8, 2022
                                    </td>
                                    <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">Demi
                                        Wilkinson
                                    </td>
                                    <td className="px-4 py-4 text-sm whitespace-nowrap">

                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </section>

    )

}

export default Informes;

