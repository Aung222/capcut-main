import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <div className="px-10 py-5">
        <div className="flex justify-between items-center">
          <div className="flex">
            <a href="#"><img src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/75f14ba09bf233ac-255.png" className="me-12 h-5" /></a>
            <ul className="flex gap-5">
              <li className="hover:text-sky-500">Templates</li>
              <li className="hover:text-sky-500">Products</li>
              <li className="hover:text-sky-500">Solutions</li>
              <li className="hover:text-sky-500">Resources</li>
              <li className="hover:text-sky-500">Business</li>
              <li className="hover:text-sky-500">Download</li>
            </ul>
          </div>
          <div className="flex gap-3">
            <div className="rounded-md p-2 hover:bg-slate-500">
              <svg width="1.5em" height="1.5em" viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" fill="none" role="presentation" xmlns="http://www.w3.org/2000/svg" className="lv_feedback-icon"><g><path data-follow-fill="currentColor" d="M11 16.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM12 6a4 4 0 0 0-3.969 3.501c-.034.274.193.499.469.499h1c.276 0 .494-.227.562-.495A2.001 2.001 0 0 1 14 10c0 .566-.135.847-.269 1.025-.162.216-.39.379-.786.643l-.04.026c-.352.235-.85.567-1.236 1.081-.35.466-.573 1.029-.645 1.726-.027.274.2.499.476.499h1c.276 0 .49-.227.544-.497.05-.253.138-.412.225-.528.162-.216.39-.379.786-.643l.04-.026c.352-.235.85-.567 1.236-1.081.43-.572.669-1.29.669-2.225a4 4 0 0 0-4-4Z" fill="currentColor"></path><path data-follow-fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z" fill="currentColor"></path></g></svg>
            </div>
            <button className="p-2 rounded-md font-semibold bg-slate-500 hover:bg-slate-600">Log In</button>
            <button className="p-2 rounded-md font-semibold text-black bg-sky-500 hover:bg-sky-600">Sign Up</button>
          </div>
        </div>
      </div>
      {/* Hero Section */}
      <div className="bg-slate-900">
        <div className="py-8 text-center">
          <p className="text-5xl font-bold">Free all-in-one video editor for everyone to <br />create anything anywhere</p>
          <p className="py-3 text-sm text-gray-500 font-bold">Flexible editing, magical AI tools, team collaboration, and stock assets. Make video creation like never before.</p>
          <div className="my-8 w-1/4 mx-auto">
            <button className="mb-8 w-full py-3 rounded-md font-semibold text-black bg-sky-500 hover:bg-sky-600">Sign Up for free</button>
            
          </div>
        </div>
      </div>
      {/* Trusted by */}
      <div className="bg-slate-800">
        <div className="py-16">
          <p className="text-center font-semibold">Trusted by</p>
          <div className="flex justify-center gap-8 mt-4">
            <img src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/345825e43f9b98b1-205.webp" className="h-8" />
            <img src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/9bd5ab79b9f08f8d-246.webp" className="h-8" />
            <img src="https://lf16-web-buz.capcut.com/obj/capcut-web-buz-sg/ies/lvweb_os_monorepo/platformSSR/6cb68cbb32323aea-153.webp" className="h-8" />
          </div>
        </div>
      </div>
      {/*  */}
      <div className="py-40 text-center">
        <p className="text-5xl font-bold">Use templates to quickly create your <br />own ads!</p>

      </div>
    </div>
  );
}
