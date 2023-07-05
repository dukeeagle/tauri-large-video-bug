import { convertFileSrc } from "@tauri-apps/api/tauri";
import "./App.css";

const VIDEO_PATH = "/Users/lucasigel/Downloads/NOVA.S06E18.Termites.and.Telescopes.1979.VHSRip.AAC2.0.x264-rattera_scale_3x_prob-3(2).mp4";

function App() {
  return (
    <div className="container">
      <h1>Video Bug Demonstration!</h1>

      <div className="mt-0 relative flex-1 px-4 sm:px-1 lg:px-0">
        <div className="flex items-center justify-center">
          <video
            width={1000}
            height={500}
            src={convertFileSrc(VIDEO_PATH) ?? ""}
            controls
            autoPlay
            loop
            crossOrigin="anonymous"
          >
          </video>
          <p>Many large videos on the machine's local filesystem refuse to play or are extremely stuttery</p>
        </div>
      </div>
    </div >
  );
}

export default App;
