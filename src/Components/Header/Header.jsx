import { FaStumbleupon } from 'react-icons/fa'

export default function Header() {
  return (
    <div className="text-center mb-8">
      <div className="row w-16 h-16 bg-white rounded-full mb-4 shadow-2xl mx-auto transform hover:scale-110 transition-transform duration-300">
        <FaStumbleupon className="text-5xl text-purple-600" />
      </div>
      <h1 className="text-4xl font-bold text-white mb-3">
        Join MySocial
      </h1>
      <p className="text-gray-300 text-lg font-light">
        Create your account and start connecting with the world
      </p>
    </div>
  );
}

