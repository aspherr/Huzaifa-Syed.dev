import Button from '@/components/button';

export default function Home() {
  return (
    <main className="scrollbar-hide">
      {/* settings navbar */}
      <div className="flex flex-row fixed gap-4 top-4 right-5"> 
        {/* language toggle */}
        <Button Icon={
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:text-blue-600 transition-colors duration-300">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="2" y1="12" x2="22" y2="12"></line>
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
          </svg>
        }/>

        {/* light/dark mode toggle */}
        <Button Icon={
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:text-blue-600 transition-colors duration-300">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        }/>
      </div>

      <div className="relative flex h-screen items-center justify-center gap-20">
        {/* main title */}
        <div className="flex flex-col h-screen items-center justify-center">
          <div className="font-mono text-left -translate-x-50 space-y-3">
            <h1 className="font-bold text-6xl">huzaifa<span className="text-blue-600">.syed()</span></h1>
            <h3 className="text-base pl-1">An up-and-coming <span className="text-blue-600">full-stack</span> engineer</h3>
          </div>
        </div>

        {/* page links */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2">
          <div className="font-mono font-bold text-3xl text-blue-600 text-left -translate-x-50">
            <ul className="space-y-4">
              <li><a href="">.about-me()</a></li>
              <li><a href="">.experience()</a></li>
              <li><a href="">.projects()</a></li>
              <li><a href="">.contact-me()</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* social navbar */}
      <div className="flex flex-row fixed gap-4 bottom-4 right-5">
        {/* github */}
        <Button Icon={
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:text-blue-600 transition-colors duration-300">
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>}

          Link={"https://github.com/aspherr"}/>

        {/* linkedIn */}
        <Button Icon={
          <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="20" 
          height="20" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="group-hover:text-blue-600 transition-colors duration-300">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>}
          
          Link={"https://www.linkedin.com/in/huzaifa-syed-profile/"}/>
      </div>

    </main>      
  );
}
