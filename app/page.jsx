// Home Page (app/page.jsx)
"use client"; // เพิ่มบรรทัดนี้ด้านบนสุด

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import Image from "next/image";

const Home = () => {
   return (
      <section className="h-full">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24 gap-8">
            {/* Text Content */}
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span className="text-xl">Software Developer</span>
              <h1 className="text-3xl md:text-4xl xl:text-6xl font-bold mb-6 mt-2">
                Hello I'm <br/>
                <span className="text-accent">Thanchanok Chompootong</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-white/80 text-sm md:text-base">
                Focused and detail-oriented Full-Stack Web Developer with 2+ years of experience building robust enterprise web applications using React, JavaScript, PHP, SQL Server, Java, and modern development tools.
              </p>
              <div className="flex flex-col xl:flex-row items-center gap-4">
              <a href="/ThanchanokChompootong_CV.pdf" download>
                <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                  <span>Download CV</span>
                  <Download className="text-xl"/> {/* เปลี่ยนจาก FiDownload */}
                </Button>
              </a>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <motion.div 
                initial={{ opacity: 0}}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1, ease: "easeOut" }}
                className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[500px]"
              >
                <Image
                  src="/profile.jpg"
                  alt="Thanchanok"
                  fill
                  priority
                  className="object-cover rounded-full border-4 border-accent/50"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Home;