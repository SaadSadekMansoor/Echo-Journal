import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { config } from "@/config";
import { signOgImageUrl } from "@/lib/og-image";
import Markdown from "react-markdown";

const content = `# About Me

Hi, I’m Saad — a Computer Science student, aspiring developer, and lifelong learner. I’m passionate about exploring technology, building projects, and sharing what I learn along the way.  

This blog is my space to document experiments, projects, and experiences in tech, coding, and everyday life. From web development tips to personal reflections, I aim to inspire curiosity, creativity, and growth.  

Beyond coding, I enjoy discovering new hobbies, reading, and diving into ideas that challenge my perspective. I believe learning never stops, and this space reflects my journey toward understanding more, building more, and sharing more.  

Whether you’re a fellow student, aspiring developer, or just curious, I hope you find something here that sparks your imagination or motivates you to try something new.  

Thanks for visiting — let’s explore and create together!

— Saad`;

export async function generateMetadata() {
  return {
    title: "About Me",
    description: "Learn more about Saad, his projects, and experiences",
    openGraph: {
      title: "About Me",
      description: "Learn more about Saad, his projects, and experiences",
      images: [
        // Add your images here later if needed
        signOgImageUrl({
          title: "Saad",
          label: "About Me",
          brand: config.blog.name,
        }),
      ],
    },
  };
}

const Page = async () => {
  return (
    <div className="container mx-auto px-5">
      <Header />
      <div className="prose lg:prose-lg dark:prose-invert m-auto mt-20 mb-10 blog-content">
        <Markdown>{content}</Markdown>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
