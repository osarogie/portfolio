import Image from "next/image"

export function SocialLink({ href, icon, color = "d6b2b2", size = 16 }) {
  return (
    <a
      href={href}
      className="z0TextLink_hr1it z0TextLink_h1xc7s z0TextLink_mdmmr9 z0TextLink_h82a9u z0TextLink_mdmmr9 z0TextLink_43bo14 z0TextLink_mdmmr9 z0TextLink_4kbyf6 z0TextLink_1oi5w5u"
    >
      <Image
        src={`https://microicon-bki71i39a.vercel.app/${icon}/${color}/${size}`}
        className="z0Img_nw324o"
        width={size}
        height={size}
        alt={icon}
      />
      <style jsx>{`
        .z0TextLink_hr1it {
          margin-right: 32px;
          padding-left: 0px;
          padding-top: 8px;
          padding-bottom: 8px;
        }
        .z0TextLink_h1xc7s {
          color: white;
        }
        .z0TextLink_1oi5w5u {
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          opacity: 1;
          -webkit-text-decoration: none;
          text-decoration: none;
          -webkit-transition: opacity 0.125s ease-out;
          transition: opacity 0.125s ease-out;
        }
        .z0TextLink_h1xc7s {
          color: white;
        }
        .z0TextLink_1oi5w5u {
          cursor: pointer;
          display: inline-block;
          font-weight: bold;
          opacity: 1;
          -webkit-text-decoration: none;
          text-decoration: none;
          -webkit-transition: opacity 0.125s ease-out;
          transition: opacity 0.125s ease-out;
        }
        .z0Img_nw324o {
          display: block;
        }
        .z0Img_nw324o {
          display: block;
        }
      `}</style>
    </a>
  )
}
