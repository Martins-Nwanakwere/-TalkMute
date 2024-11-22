import { AudioLines } from "lucide-react";

const Header = () => {
  return (
    <header className="w-full py-6">
      <div className="container max-w-3xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <AudioLines size={50} color="blue" />
            <h1 className="text-4xl font-bold text-gray-800">TalkMute</h1>
          </div>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">
            Bridging Speech and Sign Language with AI-Powered Translation
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
