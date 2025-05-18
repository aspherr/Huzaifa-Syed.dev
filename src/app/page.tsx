import Button from '@/components/button';

export default function Home() {
  return (
    <main className="scrollbar-hide">
      {/* main title */}
      <div className="flex flex-col h-screen items-center justify-center gap-1">
        <div className="font-mono text-left -translate-x-50 space-y-3">
          <h1 className="font-bold text-6xl">huzaifa<span className="text-blue-600">.syed()</span></h1>
          <h3 className="text-base pl-1">An up-and-coming <span className="text-blue-600">full-stack</span> engineer</h3>
        </div>
      </div>

      {/* social navbar */}
      <div className="flex flex-row fixed gap-4 bottom-4 right-5">
 
      </div>

    </main>      
  );
}
