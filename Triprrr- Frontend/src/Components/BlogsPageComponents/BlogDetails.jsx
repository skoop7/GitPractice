import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { blogs } from "./blogs";

export function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog not found
          </h2>
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const paragraphs = blog.description.split("\n\n").filter((p) => p.trim());

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[80vh] w-full overflow-hidden">
        <img
          src={blog.imageLink}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />

        <div className="absolute inset-0 flex flex-col justify-end px-6 py-16 sm:px-12 lg:px-24">
          <div className="max-w-4xl mx-auto w-full">
            {/* <button
              onClick={() => navigate(-1)}
              className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </button> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-Poppins text-white mb-6">
              {blog.title}
            </h1>
            <div className="text-white/80 font-Poppins">
              {new Date(blog.createdAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <article className="prose prose-lg max-w-none">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-black font-Lora text-lg leading-relaxed mb-6"
            >
              {paragraph}
            </p>
          ))}
        </article>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-black hover:text-green-600"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Articles
          </button>
        </div>
      </div>
    </div>
  );
}
