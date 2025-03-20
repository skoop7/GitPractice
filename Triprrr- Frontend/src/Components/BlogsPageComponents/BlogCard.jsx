import { ArrowRight, Calendar } from "lucide-react";
import { blogs } from "./blogs";
import { Link } from "react-router-dom";

export function BlogCard({ post }) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:-translate-y-2 flex flex-col h-[500px]">
      <div className="relative">
        <img
          src={post.imageLink}
          alt={post.title}
          className="w-full h-64 object-cover"
        />
        <div className="absolute top-4 left-4">
          {/* <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-blue-600 flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(post.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span> */}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-black font-Poppins mb-3 line-clamp-2 hover:text-green-600 transition-colors">
            {post.title}
          </h3>

          <p className="text-black font-Lora line-clamp-3">
            {post.description}
          </p>
        </div>

        <div className="pt-4 mt-auto">
          <Link to={`/blog/${post.id}`}>
            <button className="group flex items-center gap-2 text-[#347928] font-medium hover:text-green-600 transition-colors">
              Read More
              <ArrowRight className="w-4 h-2 transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
