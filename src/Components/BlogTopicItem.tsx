type topic = {
  topic: string;
  numberOfArticles: number;
};
const BlogTopicItem = ({ topic, numberOfArticles }: topic) => {
  return (
    <li className="px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300">
      <a href="#d" className="flex items-center text-gray-600 cursor-pointer">
        <span className="inline-block h-4 w-4 bg-green-300 mr-3"></span>
        {topic}
        <span className="text-gray-500 ml-auto">
          {numberOfArticles} articles
        </span>
        <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
      </a>
    </li>
  );
};
export default BlogTopicItem;
