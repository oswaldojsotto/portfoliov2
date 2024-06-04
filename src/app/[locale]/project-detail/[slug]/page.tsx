"use client";
import PreloadWrapper from "../../components/preloading/wrapper";
// import StarsBackground from "../../components/stars-background";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <PreloadWrapper words={[params.slug.toString()]}>
      <div className="absolute w-full h-screen">
        {/* <StarsBackground /> */}
      </div>
      <div className="relative">My Post: {params.slug}</div>
    </PreloadWrapper>
  );
};

export default ProjectDetail;
