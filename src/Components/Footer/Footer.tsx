import {
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa"

export function Divisor() {
  return <div className="border border-solid border-white w-full"></div>
}

export function Footer() {
  return (
    <footer className="flex flex-col w-full items-center py-3 mt-8 gap-3">
      <div id="buttons" className="flex gap-5 justify-center items-center mt-4">
        <a target="_blank" href="https://www.instagram.com/pedro_camposm">
          <FaInstagramSquare className="text-[#918E9B] text-5xl" />
        </a>
        <a target="_blank" href="https://github.com/P3DR0DEV">
          <FaGithubSquare className="text-[#918E9B] text-5xl" />
        </a>
        <a target="_blank" href="https://linkedin.com/in/pedro-cmendes/">
          <FaLinkedin className="text-[#918E9B] text-5xl" />
        </a>
        <a target="_blank" href="https://www.twitter.com/esquilolo">
          <FaTwitterSquare className="text-[#918E9B] text-5xl" />
        </a>
      </div>
      <small className="text-sm ">&copy; Pedro Mendes, 2023</small>
    </footer>
  )
}
