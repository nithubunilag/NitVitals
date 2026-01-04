import Plot from "react-plotly.js"
import { FaHeartbeat, FaHeart } from "react-icons/fa";
import { IoWarning, IoCheckmarkSharp } from "react-icons/io5";
import { FaLungs, FaBell, FaPersonWalking, FaBatteryThreeQuarters, FaShieldHalved } from "react-icons/fa6";
import { MdPhoneInTalk } from "react-icons/md";
import { GrCircleAlert } from "react-icons/gr";
import { BsWatch } from "react-icons/bs";

function HeartRateChart() {
  return (
    <div className="h-[300px] w-full">
      <Plot
        data={[
          {
            x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            y: [80, 85, 88, 92, 86, 90, 88],
            type: "scatter",
            mode: "lines",
            line: {
              color: "rgb(16, 185, 129)",
              width: 3,
            },
            fill: "tozeroy",
            fillcolor: "rgba(16, 185, 129, 0.1)",
          },
        ]}
        layout={{
          autosize: true,
          height: 300,
          paper_bgcolor: "rgb(31, 41, 55)",
          plot_bgcolor: "rgb(31, 41, 55)",
          margin: { l: 50, r: 20, t: 20, b: 40 },

          xaxis: {
            tickfont: { color: "rgb(156, 163, 175)" },
            gridcolor: "rgb(55, 65, 81)",
            zeroline: false,
          },

          yaxis: {
            range: [60, 120],
            tickfont: { color: "rgb(156, 163, 175)" },
            gridcolor: "rgb(55, 65, 81)",
            zeroline: false,
          },

          showlegend: false,
        }}
        config={{
          responsive: true,
          displayModeBar: false,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

function SpO2Chart() {
  return (
    <div className="h-[300px] w-full">
      <Plot
        data={[
          {
            x: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            y: [94, 95, 94, 96, 98, 97, 97],
            type: "scatter",
            mode: "lines",
            line: {
              color: "rgb(59, 130, 246)", // blue-500
              width: 3,
            },
            fill: "tozeroy",
            fillcolor: "rgba(59, 130, 246, 0.1)",
          },
        ]}
        layout={{
          autosize: true,
          height: 300,
          paper_bgcolor: "rgb(31, 41, 55)",
          plot_bgcolor: "rgb(31, 41, 55)",
          margin: { l: 50, r: 20, t: 20, b: 40 },

          xaxis: {
            tickfont: { color: "rgb(156, 163, 175)" },
            gridcolor: "rgb(55, 65, 81)",
            zeroline: false,
          },

          yaxis: {
            range: [90, 100],
            tickvals: [90, 92, 94, 96, 98, 100],
            tickfont: { color: "rgb(156, 163, 175)" },
            gridcolor: "rgb(55, 65, 81)",
            zeroline: false,
          },

          showlegend: false,
        }}
        config={{
          responsive: true,
          displayModeBar: false,
        }}
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  )
}

export default function Dashboard() {
  return (
    <div className="flex h-screen text-white">
        <aside id="sidebar" className="md:w-64 bg-gray-800 md:flex flex-col hidden">
            <div className="p-6 border-b border-gray-700">
                <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-br from-red-500 to-pink-500 rounded-lg flex items-center justify-center">
                        <img src="logo.png" className="w-[80%]" />
                    </div>
                    <span className="ml-3 text-xl font-bold font-[inter] hidden md:block">nitVitals</span>
                </div>
            </div>
            
            <nav className="flex-1 md:p-4 p-2">
                <ul className="space-y-2">
                    <li>
                        <a href="#main-content" className="flex items-center md:px-4 py-3 rounded-lg bg-gray-700 text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-house" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="house" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg></i>
                            <span className="ml-3 font-medium hidden md:block">Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="#charts-section" className="flex items-center md:px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-chart-line" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-line" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"></path></svg></i>
                            <span className="ml-3 font-medium hidden md:block">Health Trends</span>
                        </a>
                    </li>
                    <li>
                        <a href="#recent-alerts" className="flex items-center md:px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-bell" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"></path></svg></i>
                            <span className="ml-3 font-medium hidden md:block">Alerts</span>
                            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">2</span>
                        </a>
                    </li>
                    {/* <li>
                        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-users" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z"></path></svg></i>
                            <span className="ml-3 font-medium">Caregivers</span>
                        </a>
                    </li> 
                    <li>
                        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-clock-rotate-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="clock-rotate-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z"></path></svg></i>
                            <span className="ml-3 font-medium">History</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-watch" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="watch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><g className="missing"><path fill="currentColor" d="M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"></path><circle fill="currentColor" cx="256" cy="364" r="28"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="r" values="28;14;28;28;14;28;"></animate><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;1;1;0;1;"></animate></circle><path fill="currentColor" opacity="1" d="M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="1;0;0;0;0;1;"></animate></path><path fill="currentColor" opacity="0" d="M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"><animate attributeType="XML" repeatCount="indefinite" dur="2s" attributeName="opacity" values="0;0;1;1;0;0;"></animate></path></g></svg></i>
                            <span className="ml-3 font-medium">Device</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" className="flex items-center px-4 py-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white">
                            <i className="w-5" data-fa-i2svg=""><svg className="svg-inline--fa fa-gear" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="gear" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"></path></svg></i>
                            <span className="ml-3 font-medium">Settings</span>
                        </a>
                    </li>*/}
                </ul>
            </nav>
            
            <div className="p-4 border-t border-gray-700">
                <div className="flex items-center px-4 py-3 rounded-lg hover:bg-gray-700 cursor-pointer">
                    <img src="logo.png" alt="Nithub" className="w-10 h-10 rounded-full bg-white" />
                    <div className="ml-3">
                        <p className="text-sm font-medium">Nithub</p>
                        <p className="text-xs text-gray-400">Product of PCB LAB</p>
                    </div>
                    <i className="ml-auto text-gray-400" data-fa-i2svg=""><svg className="svg-inline--fa fa-chevron-down" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></i>
                </div>
            </div>
        </aside>

        <div className="flex-1 flex flex-col overflow-hidden">
            <header id="header" className="bg-gray-800 border-b border-gray-700 px-8 py-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-xl md:text-2xl font-bold">Health Dashboard</h1>
                        <p className="text-sm text-gray-400 mt-1">Real-time monitoring • Last updated: NIL</p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <a href="#recent-alerts" className="relative p-3 rounded-lg bg-gray-700 hover:bg-gray-600">
                            <FaBell />
                            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-gray-800"></span>
                        </a>
                        <a href="https://wa.me/911" target="_blank" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-lg font-bold text-lg hover:from-red-600 hover:to-pink-600 flex items-center shadow-lg">
                            <MdPhoneInTalk />
                            SOS
                        </a>
                    </div>
                </div>
            </header>

            <main id="main-content" className="flex-1 overflow-y-auto scroll-smooth bg-gray-900 p-8">
                <div id="alert-banner" className="mb-6 bg-yellow-900 border-l-4 border-yellow-500 p-4 rounded-lg flex items-center">
                    <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                        <IoWarning className="text-[30px] text-black"/>
                    </div>
                    <div className="ml-4 flex-1">
                        <h3 className="font-bold text-yellow-100">Heart Rate Warning</h3>
                        <p className="text-sm text-yellow-200">Heart rate elevated to 115 BPM at 0:00 PM</p>
                    </div>
                    <button className="text-yellow-200 hover:text-yellow-100">
                        <i className="text-xl" data-fa-i2svg=""><svg className="svg-inline--fa fa-xmark" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg></i>
                    </button>
                </div>

                <div id="vital-stats" className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 mb-8">
                    <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#ffffff33] bg-opacity-20 rounded-xl flex items-center justify-center">
                                <FaHeartbeat className="text-[30px]"/>
                            </div>
                            <span className="text-xs bg-[#ffffff33] px-3 py-1 rounded-full">NORMAL</span>
                        </div>
                        <div className="mb-2">
                            <div className="text-5xl font-bold">78</div>
                            <div className="text-sm opacity-90">BPM</div>
                        </div>
                        <div className="text-xs opacity-75">Heart Rate</div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#ffffff33] bg-opacity-20 rounded-xl flex items-center justify-center">
                                <FaLungs className="text-[30px]"/>
                            </div>
                            <span className="text-xs bg-[#ffffff33] bg-opacity-20 px-3 py-1 rounded-full">NORMAL</span>
                        </div>
                        <div className="mb-2">
                            <div className="text-5xl font-bold">98</div>
                            <div className="text-sm opacity-90">%</div>
                        </div>
                        <div className="text-xs opacity-75">Blood Oxygen (SpO₂)</div>
                    </div>

                    <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#ffffff33] bg-opacity-20 rounded-xl flex items-center justify-center">
                                <FaPersonWalking className="text-[30px]"/>
                            </div>
                            <span className="text-xs bg-[#ffffff33] bg-opacity-20 px-3 py-1 rounded-full">ACTIVE</span>
                        </div>
                        <div className="mb-2">
                            <div className="text-5xl font-bold">2,847</div>
                            <div className="text-sm opacity-90">steps</div>
                        </div>
                        <div className="text-xs opacity-75">Daily Activity</div>
                    </div>

                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 shadow-xl">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-12 h-12 bg-[#ffffff33] bg-opacity-20 rounded-xl flex items-center justify-center">
                                <FaBatteryThreeQuarters className="text-[30px]"/>
                            </div>
                            <span className="text-xs bg-[#ffffff33] bg-opacity-20 px-3 py-1 rounded-full">GOOD</span>
                        </div>
                        <div className="mb-2">
                            <div className="text-5xl font-bold">72</div>
                            <div className="text-sm opacity-90">%</div>
                        </div>
                        <div className="text-xs opacity-75">Device Battery</div>
                    </div>
                </div>

                <div id="charts-section" className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8 pt-4">
                    <div className="bg-gray-800 rounded-2xl md:p-6 p-3 border border-gray-700">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">Heart Rate Trend</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg hover:bg-gray-600">24H</button>
                                <button className="px-3 py-1 text-xs bg-blue-500 rounded-lg">7D</button>
                                <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg hover:bg-gray-600">30D</button>
                            </div>
                        </div>
                        {/* <div id="heart-rate-chart" className="h-[300px] js-plotly-plot"><div className="plot-container plotly w-full h-full"><div className="user-select-none svg-container relative w-full h-full"><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300" style="background: rgb(31, 41, 55);"><defs id="defs-645ff3"><g className="clips"><clipPath id="clip645ff3xyplot" className="plotclip"><rect width="369" height="240"></rect></clipPath><clipPath className="axesclip" id="clip645ff3x"><rect x="50" y="0" width="369" height="300"></rect></clipPath><clipPath className="axesclip" id="clip645ff3y"><rect x="0" y="20" width="439" height="240"></rect></clipPath><clipPath className="axesclip" id="clip645ff3xy"><rect x="50" y="20" width="369" height="240"></rect></clipPath></g><g className="gradients"></g><g className="patterns"></g></defs><g className="bglayer"></g><g className="draglayer cursor-crosshair"><g className="xy"><rect className="nsewdrag drag" data-subplot="xy" x="50" y="20" width="369" height="240" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nwdrag drag cursor-nw-resize" data-subplot="xy" x="30" y="0" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nedrag drag cursor-ne-resize" data-subplot="xy" x="419" y="0" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="swdrag drag cursor-sw-resize" data-subplot="xy" x="30" y="260" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="sedrag drag cursor-se-resize" data-subplot="xy" x="419" y="260" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="ewdrag drag cursor-ew-resize" data-subplot="xy" x="86.9" y="260.5" width="295.2" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="wdrag drag cursor-w-resize" data-subplot="xy" x="50" y="260.5" width="36.9" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="edrag drag cursor-e-resize" data-subplot="xy" x="382.1" y="260.5" width="36.9" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nsdrag drag cursor-ns-resize" data-subplot="xy" x="29.5" y="44" width="20" height="192" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="sdrag drag cursor-s-resize" data-subplot="xy" x="29.5" y="236" width="20" height="24" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="ndrag drag cursor-n-resize" data-subplot="xy" x="29.5" y="20" width="20" height="24" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect></g></g><g className="layer-below"><g className="imagelayer"></g><g className="shapelayer"></g></g><g className="cartesianlayer"><g className="subplot xy"><g className="layer-subplot"><g className="shapelayer"></g><g className="imagelayer"></g></g><g className="minor-gridlayer"><g className="x"></g><g className="y"></g></g><g className="gridlayer"><g className="x"><path className="xgrid crisp" transform="translate(111.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(173,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(234.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(296,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(357.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path></g><g className="y"><path className="ygrid crisp" transform="translate(0,220)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,180)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,140)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,100)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,60)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path></g></g><g className="zerolinelayer"></g><g className="layer-between"><g className="shapelayer"></g><g className="imagelayer"></g></g><path className="xlines-below"></path><path className="ylines-below"></path><g className="overlines-below"></g><g className="xaxislayer-below"></g><g className="yaxislayer-below"></g><g className="overaxes-below"></g><g className="overplot"><g className="xy" transform="translate(50,20)" clip-path="url(#clip645ff3xyplot)"><g className="scatterlayer mlayer"><g className="trace scatter trace7dfdb9" style="stroke-miterlimit: 2;"><g className="fills"><g><path className="js-fill" d="M369,480L0,480L0,192L123,168L184.5,152L307.5,176L369,168" style="fill: rgb(16, 185, 129); fill-opacity: 0.1; stroke-width: 0;"></path></g></g><g className="errorbars"></g><g className="lines"><path className="js-line" d="M0,192L123,168L184.5,152L307.5,176L369,168" style="vector-effect: non-scaling-stroke; fill: none; stroke: rgb(16, 185, 129); stroke-opacity: 1; stroke-width: 3px; opacity: 1;"></path></g><g className="points"></g><g className="text"></g></g></g></g></g><g className="zerolinelayer-above"></g><path className="xlines-above crisp" d="M0,0" style="fill: none;"></path><path className="ylines-above crisp" d="M0,0" style="fill: none;"></path><g className="overlines-above"></g><g className="xaxislayer-above"><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Mon" data-math="N" transform="translate(50,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Mon</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Tue" data-math="N" transform="translate(111.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Tue</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Wed" data-math="N" transform="translate(173,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Wed</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Thu" data-math="N" transform="translate(234.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Thu</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Fri" data-math="N" transform="translate(296,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Fri</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Sat" data-math="N" transform="translate(357.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Sat</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Sun" data-math="N" transform="translate(419,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Sun</text></g></g><g className="yaxislayer-above"><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="60" data-math="N" transform="translate(0,260)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">60</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="70" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,220)">70</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="80" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,180)">80</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="90" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,140)">90</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="100" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,100)">100</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="110" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,60)">110</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="120" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,20)">120</text></g></g><g className="overaxes-above"></g></g></g><g className="polarlayer"></g><g className="smithlayer"></g><g className="ternarylayer"></g><g className="geolayer"></g><g className="funnelarealayer"></g><g className="pielayer"></g><g className="iciclelayer"></g><g className="treemaplayer"></g><g className="sunburstlayer"></g><g className="glimages"></g></svg><div className="gl-container"></div><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300"><defs id="topdefs-645ff3"><g className="clips"></g></defs><g className="indicatorlayer"></g><g className="layer-above"><g className="imagelayer"></g><g className="shapelayer"></g></g><g className="selectionlayer"></g><g className="infolayer"><g className="g-gtitle"></g><g className="g-xtitle"></g><g className="g-ytitle"></g></g><g className="menulayer"></g><g className="zoomlayer"></g></svg><div className="modebar-container" style="position: absolute; top: 0px; right: 0px; width: 100%;"></div><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300"><g className="hoverlayer"></g></svg></div></div></div>
                    </div> */}
                    <HeartRateChart />
                    </div>

                    <div className="bg-gray-800 rounded-2xl md:p-6 p-3 border border-gray-700">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold">SpO₂ Levels</h2>
                            <div className="flex space-x-2">
                                <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg hover:bg-gray-600">24H</button>
                                <button className="px-3 py-1 text-xs bg-blue-500 rounded-lg">7D</button>
                                <button className="px-3 py-1 text-xs bg-gray-700 rounded-lg hover:bg-gray-600">30D</button>
                            </div>
                        </div>
                        {/* <div id="spo2-chart" className="h-[300px] js-plotly-plot"><div className="plot-container plotly w-full h-full"><div className="user-select-none svg-container relative w-full h-full"><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300" style="background: rgb(31, 41, 55);"><defs id="defs-b9bd5d"><g className="clips"><clipPath id="clipb9bd5dxyplot" className="plotclip"><rect width="369" height="240"></rect></clipPath><clipPath className="axesclip" id="clipb9bd5dx"><rect x="50" y="0" width="369" height="300"></rect></clipPath><clipPath className="axesclip" id="clipb9bd5dy"><rect x="0" y="20" width="439" height="240"></rect></clipPath><clipPath className="axesclip" id="clipb9bd5dxy"><rect x="50" y="20" width="369" height="240"></rect></clipPath></g><g className="gradients"></g><g className="patterns"></g></defs><g className="bglayer"></g><g className="draglayer cursor-crosshair"><g className="xy"><rect className="nsewdrag drag" data-subplot="xy" x="50" y="20" width="369" height="240" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nwdrag drag cursor-nw-resize" data-subplot="xy" x="30" y="0" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nedrag drag cursor-ne-resize" data-subplot="xy" x="419" y="0" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="swdrag drag cursor-sw-resize" data-subplot="xy" x="30" y="260" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="sedrag drag cursor-se-resize" data-subplot="xy" x="419" y="260" width="20" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="ewdrag drag cursor-ew-resize" data-subplot="xy" x="86.9" y="260.5" width="295.2" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="wdrag drag cursor-w-resize" data-subplot="xy" x="50" y="260.5" width="36.9" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="edrag drag cursor-e-resize" data-subplot="xy" x="382.1" y="260.5" width="36.9" height="20" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="nsdrag drag cursor-ns-resize" data-subplot="xy" x="29.5" y="44" width="20" height="192" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="sdrag drag cursor-s-resize" data-subplot="xy" x="29.5" y="236" width="20" height="24" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect><rect className="ndrag drag cursor-n-resize" data-subplot="xy" x="29.5" y="20" width="20" height="24" style="fill: transparent; stroke-width: 0; pointer-events: all;"></rect></g></g><g className="layer-below"><g className="imagelayer"></g><g className="shapelayer"></g></g><g className="cartesianlayer"><g className="subplot xy"><g className="layer-subplot"><g className="shapelayer"></g><g className="imagelayer"></g></g><g className="minor-gridlayer"><g className="x"></g><g className="y"></g></g><g className="gridlayer"><g className="x"><path className="xgrid crisp" transform="translate(111.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(173,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(234.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(296,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="xgrid crisp" transform="translate(357.5,0)" d="M0,20v240" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path></g><g className="y"><path className="ygrid crisp" transform="translate(0,212)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,164)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,116)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path><path className="ygrid crisp" transform="translate(0,68)" d="M50,0h369" style="stroke: rgb(55, 65, 81); stroke-opacity: 1; stroke-width: 1px;"></path></g></g><g className="zerolinelayer"></g><g className="layer-between"><g className="shapelayer"></g><g className="imagelayer"></g></g><path className="xlines-below"></path><path className="ylines-below"></path><g className="overlines-below"></g><g className="xaxislayer-below"></g><g className="yaxislayer-below"></g><g className="overaxes-below"></g><g className="overplot"><g className="xy" transform="translate(50,20)" clip-path="url(#clipb9bd5dxyplot)"><g className="scatterlayer mlayer"><g className="trace scatter trace7f9880" style="stroke-miterlimit: 2;"><g className="fills"><g><path className="js-fill" d="M369,2400L0,2400L0,72L61.5,48L123,72L246,24L307.5,48L369,48" style="fill: rgb(59, 130, 246); fill-opacity: 0.1; stroke-width: 0;"></path></g></g><g className="errorbars"></g><g className="lines"><path className="js-line" d="M0,72L61.5,48L123,72L246,24L307.5,48L369,48" style="vector-effect: non-scaling-stroke; fill: none; stroke: rgb(59, 130, 246); stroke-opacity: 1; stroke-width: 3px; opacity: 1;"></path></g><g className="points"></g><g className="text"></g></g></g></g></g><g className="zerolinelayer-above"></g><path className="xlines-above crisp" d="M0,0" style="fill: none;"></path><path className="ylines-above crisp" d="M0,0" style="fill: none;"></path><g className="overlines-above"></g><g className="xaxislayer-above"><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Mon" data-math="N" transform="translate(50,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Mon</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Tue" data-math="N" transform="translate(111.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Tue</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Wed" data-math="N" transform="translate(173,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Wed</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Thu" data-math="N" transform="translate(234.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Thu</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Fri" data-math="N" transform="translate(296,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Fri</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Sat" data-math="N" transform="translate(357.5,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Sat</text></g><g className="xtick"><text text-anchor="middle" x="0" y="273" data-unformatted="Sun" data-math="N" transform="translate(419,0)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">Sun</text></g></g><g className="yaxislayer-above"><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="90" data-math="N" transform="translate(0,260)" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;">90</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="92" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,212)">92</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="94" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,164)">94</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="96" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,116)">96</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="98" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,68)">98</text></g><g className="ytick"><text text-anchor="end" x="49" y="4.199999999999999" data-unformatted="100" data-math="N" style="font-family: &quot;Open Sans&quot;, verdana, arial, sans-serif; font-size: 12px; fill: rgb(156, 163, 175); fill-opacity: 1; font-weight: normal; font-style: normal; font-variant: normal; white-space: pre;" transform="translate(0,20)">100</text></g></g><g className="overaxes-above"></g></g></g><g className="polarlayer"></g><g className="smithlayer"></g><g className="ternarylayer"></g><g className="geolayer"></g><g className="funnelarealayer"></g><g className="pielayer"></g><g className="iciclelayer"></g><g className="treemaplayer"></g><g className="sunburstlayer"></g><g className="glimages"></g></svg><div className="gl-container"></div><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300"><defs id="topdefs-b9bd5d"><g className="clips"></g></defs><g className="indicatorlayer"></g><g className="layer-above"><g className="imagelayer"></g><g className="shapelayer"></g></g><g className="selectionlayer"></g><g className="infolayer"><g className="g-gtitle"></g><g className="g-xtitle"></g><g className="g-ytitle"></g></g><g className="menulayer"></g><g className="zoomlayer"></g></svg><div className="modebar-container" style="position: absolute; top: 0px; right: 0px; width: 100%;"></div><svg className="main-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="439" height="300"><g className="hoverlayer"></g></svg></div></div></div>
                    </div> */}
                    <SpO2Chart />
                    </div>
                </div>

                <div id="device-status" className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#2b7fff33] rounded-xl flex items-center justify-center">
                                <BsWatch className="text-[30px] text-blue-500"/>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-bold">Smart Watch</h3>
                                <p className="text-xs text-gray-400">ElderCare Band Pro</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status</span>
                                <span className="text-green-400 font-medium">Connected</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Last Sync</span>
                                <span>0 min ago</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Signal</span>
                                <span>Excellent</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#00c95133] rounded-xl flex items-center justify-center">
                                <FaShieldHalved className="text-[30px] text-green-500"/>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-bold">Fall Detection</h3>
                                <p className="text-xs text-gray-400">Active Monitoring</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Status</span>
                                <span className="text-green-400 font-medium">Active</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Sensitivity</span>
                                <span>Medium</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Last Event</span>
                                <span>None</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-[#ad46ff33] rounded-xl flex items-center justify-center">
                                <GrCircleAlert className="text-[30px] text-purple-500"/>
                            </div>
                            <div className="ml-4">
                                <h3 className="font-bold">Emergency Contact</h3>
                                <p className="text-xs text-gray-400">Primary Caregiver</p>
                            </div>
                        </div>
                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span className="text-gray-400">Name</span>
                                <span>Engr. Aliyu</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Phone</span>
                                <span>+1 555-0123</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-400">Relation</span>
                                <span>Father</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="recent-alerts" className="bg-gray-800 rounded-2xl p-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-bold">Recent Alerts</h2>
                        <button className="text-sm text-blue-400 hover:text-blue-300">View All</button>
                    </div>
                    <div className="space-y-3">
                        <div className="flex items-center p-4 bg-yellow-900 bg-opacity-30 border-l-4 border-yellow-500 rounded-lg">
                            <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                                <FaHeart className="text-[20px]"/>
                            </div>
                            <div className="ml-4 flex-1">
                                <h4 className="font-medium">Elevated Heart Rate</h4>
                                <p className="text-sm text-gray-400">Heart rate reached 115 BPM during rest</p>
                            </div>
                            <span className="text-sm text-gray-400">00:00 PM</span>
                        </div>
                        <div className="flex items-center p-4 bg-gray-700 rounded-lg">
                            <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                <FaLungs className="text-[20px]"/>
                            </div>
                            <div className="ml-4 flex-1">
                                <h4 className="font-medium">SpO₂ Normal</h4>
                                <p className="text-sm text-gray-400">Blood oxygen levels returned to normal range</p>
                            </div>
                            <span className="text-sm text-gray-400">00:00 AM</span>
                        </div>
                        <div className="flex items-center p-4 bg-gray-700 rounded-lg">
                            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                <IoCheckmarkSharp className="text-[20px]"/>
                            </div>
                            <div className="ml-4 flex-1">
                                <h4 className="font-medium">Medication Reminder</h4>
                                <p className="text-sm text-gray-400">Morning medication taken on time</p>
                            </div>
                            <span className="text-sm text-gray-400">00:00 AM</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </div>
  )
};