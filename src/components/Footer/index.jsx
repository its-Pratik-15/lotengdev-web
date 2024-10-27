import { Link } from "react-router-dom";

export function Footer() {
    return (
        <footer class="p-4">
            <div class="container mx-auto mt-5 mb-5 flex justify-center items-center">
                <div class="border-t-[1px] rounded-lg border-grey sm:w-full w-[95%]"></div>
            </div>
            <ul class="flex flex-row w-full justify-center items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0">
                <li>
                    <Link to={'/'} class="mr-4 md:mr-6 ">Home</Link>
                </li>
                <li>
                    <Link to={'/event'} class="mr-4 md:mr-6">Events</Link>
                </li>
                <li>
                    <Link to={'/speaker'} class="mr-4 md:mr-6">Speakers</Link>
                </li>
                <li>
                    <Link to={'/about'} class="mr-4 md:mr-6">About</Link>
                </li>
                <li>
                    <a href="https://www.instagram.com/lotengdev/" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
                            alt="Instagram Logo"  
                            style={{ display: 'inline-block', gap: '15px', width: '40px', height: '40px' }}
                        />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/@lotengdev4516" target="_blank" rel="noopener noreferrer">
                        <img 
                            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png" 
                            alt="YouTube Logo" 
                            style={{ display: 'inline-block', gap: '15px', width: '40px', height: '40px', paddingLeft: '4px' }}
                        />
                    </a>
                </li>
            </ul>
        </footer>
    )
}
