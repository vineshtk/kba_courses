import React from 'react'

const Footer = () => {
    return (
        <footer class="fixed bottom-0 left-0 z-20 w-full p-4 bg-gray-200 border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 ">
            <span class="text-sm text-gray-700 sm:text-center ">© 2024 <a href="https://flowbite.com/" class="hover:underline">KBA™</a>. All Rights Reserved.
            </span>
            <ul class="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-700  sm:mt-0">
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                    <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                    <a href="#" class="hover:underline">Contact</a>
                </li>
            </ul>
        </footer>

    )
}

export default Footer