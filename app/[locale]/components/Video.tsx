export const Video = () => {
  return (
    <div className="relative w-[100%] max-w-6xl mx-auto mt-8 mb-10 rounded-xl overflow-hidden">
      <video className="w-full"  loop muted autoPlay>
        <source src="/video.mp4" />
      </video>
    </div>
  )
}