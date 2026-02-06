import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Feed() {
  let [userData, setUserData] = useState();
  let [posts, setPosts] = useState([]);
  let [postBox, setPostBox] = useState(false);

  useEffect(() => {
    let postRes = axios.get("http://localhost:5000/api/posts/getAllPost");
    postRes.then((res) => {
      setPosts(res.data);
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
   setUserData(JSON.parse(localStorage.getItem("user")));

  }, []);




  async function handlePostSubmit(e)
  {
    e.preventDefault();
    let postData = {
      postMedia:e.target[0].value,
      postTitle:e.target[1].value,
      postDesc:e.target[2].value,
      uploadedBy:JSON.parse(localStorage.getItem("user"))._id
    }

    let res = await axios.post("http://localhost:5000/api/posts/createPost",postData);
    console.log(res.data)

  }

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center">
      <div className="w-full max-w-3xl px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8 bg-white shadow-md rounded-2xl px-6 py-4">
          <h1 className="text-3xl font-bold text-rose-500 tracking-wide">
            Social Feed
          </h1>

          <button
          disabled={
            JSON.parse(localStorage.getItem("isLogin")) ? false : true
          }

            onClick={() => setPostBox(!postBox)}
            className="bg-rose-500 text-white px-5 py-2 rounded-xl font-semibold hover:bg-rose-600 transition disabled:cursor-not-allowed disabled:bg-red-300"
          >
            {postBox ? "Close Post Form ⬆" : "Post Something ⬇"}
          </button>
        </div>

        {/* Post Section */}
        <div className="w-full flex justify-center mt-10">
          {postBox && (
            <div className="w-full max-w-xl bg-white shadow-xl rounded-3xl border border-gray-200 p-8">
              <h2 className="text-2xl font-extrabold text-rose-500 mb-6 font-serif">
                Create New Post
              </h2>

              <form onSubmit={handlePostSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">
                    Post Media URL
                  </label>
                  <input
                    type="text"
                    placeholder="Post Media Url"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">
                    Post Title
                  </label>
                  <input
                    type="text"
                    placeholder="Post Title"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400"
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold text-gray-800 mb-2">
                    Post Description
                  </label>
                  <textarea
                    placeholder="Post Desc"
                    rows="4"
                    className="w-full px-5 py-3 rounded-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rose-400 resize-none"
                  ></textarea>
                </div>

                <button className="bg-rose-500 text-white py-3 rounded-2xl text-lg font-bold shadow-lg hover:bg-rose-600 hover:scale-[1.02] transition duration-300">
                  Post
                </button>
              </form>
            </div>
          )}
        </div>

        {/* Feed Section */}
        <div
          id="PostFeedSection"
          className="space-y-8 overflow-scroll scrollbar-hide"
        >
          {posts.map((post) => (
            <div
              key={post._id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200"
            >
              {/* Author Section */}
              <div className="flex items-center gap-4 px-5 py-4">
                <img
                  src={post.uploadedBy.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover border-2 border-rose-400"
                />

                <div>
                  <h2 className="font-bold text-lg text-gray-800">
                    {post.uploadedBy.fullName}
                  </h2>
                  <p className="text-sm text-gray-500">Posted just now</p>
                </div>
              </div>

              {/* Post Media */}
              <div className="w-full bg-black">
                <img
                  src={post.postMedia}
                  alt={post.postTitle}
                  className="w-full max-h-[450px] object-cover"
                />
              </div>

              {/* Post Content */}
              <div className="px-5 py-4">
                <h2 className="text-xl font-bold text-gray-900 mb-2">
                  {post.postTitle}
                </h2>

                <p className="text-gray-600 text-base leading-relaxed">
                  {post.postDesc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
