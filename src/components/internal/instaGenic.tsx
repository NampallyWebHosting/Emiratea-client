import React from "react";
import {
  FiHeart,
  FiMessageCircle,
  FiSend,
} from "react-icons/fi";
import { posts } from "../types/data";


// Reusable Post Component
const InstagramPost: React.FC<{
  username: string;
  userImage: string;
  postImage: string;
  caption: string;
  timePosted: string;
}> = ({ username, userImage, postImage, caption, timePosted }) => {
  return (
    <div className="max-w-xl bg-white border border-gray-300 rounded-2xl shadow-sm mx-2 flex-shrink-0">
      <div className="flex items-center p-4">
        <img
          src={userImage}
          alt={username}
          className="w-10 h-10 rounded-full mr-3"
        />
        <span className="font-semibold">{username}</span>
      </div>
      <img src={postImage} alt="Instagram post" className="w-96 h-96 object-cover" />
      <div className="flex justify-between px-4 py-2 text-xl text-gray-700">
        <div className="flex space-x-4">
          <button><FiHeart /></button>
          <button><FiMessageCircle /></button>
          <button><FiSend /></button>
        </div>
      </div>
      <div className="px-4 pb-2 text-sm">
        <span className="font-semibold mr-2">{username}</span>
        {caption}
      </div>
      <div className="px-4 pb-4 text-xs text-gray-500">{timePosted}</div>
    </div>
  );
};

// Main Feed Component
const InstagramFeed: React.FC = () => {


  return (
    <div className="flex flex-row overflow-x-auto p-4 bg-gray-100">
      {posts.map((post, index) => (
        <InstagramPost key={index} {...post} />
      ))}
    </div>
  );
};

export default InstagramFeed;
