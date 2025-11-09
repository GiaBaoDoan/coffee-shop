const HeroSection = () => {
  return (
    <div className="relative h-screen bg-[url('https://cafengon.monamedia.net/wp-content/uploads/2024/12/h29-bg-footer2.jpg')] bg-cover bg-center">
      {/* Video nền */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/background-video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay tối */}
      <div className="absolute inset-0 bg-black/50 z-10" />
    </div>
  );
};

export default HeroSection;
