import ObjectDetection from "@/components/object-detection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="bg-gradient-to-b from-white via-gray-300 to-gray-600 text-transparent bg-clip-text font-extrabold text-3xl md:text-6xl lg:text-8xl tracking-tighter md:px-6 text-center">
        AI Object Detection
      </h1>
      <ObjectDetection />
    </main>
  );
}
