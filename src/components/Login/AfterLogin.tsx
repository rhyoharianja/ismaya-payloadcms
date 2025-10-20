import './index.scss'

const baseClass = 'after-login'

const AfterLogin = () => {
  return (
    <aside className={baseClass}>
      <div className={`${baseClass}__video-wrap`}>
        <video
          autoPlay
          muted
          loop
          className={`${baseClass}__video`}
        >
          <source src="https://8pqxg7bnthg2t2ri.public.blob.vercel-storage.com/homepage-hero.webm" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </aside>
  )
}

export default AfterLogin
