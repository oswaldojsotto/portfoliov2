// import StarsBackground from "../../components/stars-background";

const ProjectDetail = ({ params }: { params: { slug: string } }) => {
  return (
    <>
      <div className="absolute w-full h-screen">
        {/* <StarsBackground /> */}
      </div>
      <div className="relative">My Post: {params.slug}</div>
    </>
  );
};

export default ProjectDetail;
