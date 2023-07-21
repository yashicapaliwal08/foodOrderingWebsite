export const Footer = () => {
    return (
        <footer class="bg-red-400">
            <div class="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
                <div>
                    <h2 class="mb-6 text-sm font-semibold  uppercase">Company</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className=" hover:underline">About</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Menu</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <h2 class="mb-6 text-sm font-semibold uppercase">Legal</h2>
                    <ul class="text-gray-300">
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Privacy Policy</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Licensing</a>
                        </li>
                        <li class="mb-4">
                            <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="py-6 px-4 bg-red-500 md:flex md:items-center md:justify-between">
                <span class="text-sm text-gray-300 sm:text-center">© 2023 Food Delivery. All Rights Reserved.
                </span>
            </div>
        </footer>
    )
}