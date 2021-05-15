export function WorkItem({ name, description, image, url, links = [] }) {
  const ThumbnailContainer = url ? "a" : "div"

  return (
    <div className="z0Box_ywo3zt z0Box_w8x2v6 z0Box_pq7l2s z0Box_1snu2vi">
      <ThumbnailContainer
        href={url}
        title={name}
        className="z0Link_i2atn7 text-[#afaeae] z0Link_cvl0fu z0Link_1l0da3s"
      >
        <div className="z0AspectRatio_1dte17j z0AspectRatio_1h0a8ja rounded-lg z0AspectRatio_leueqe">
          <div
            style={{
              backgroundImage: `url(${image})`,
            }}
            className="z0AspectRatioObject_w8x2v6 z0AspectRatioObject_hqpzos rounded-lg"
          />
        </div>
      </ThumbnailContainer>
      <div className="flex">
        <div className="meta">
          <h3 className="z0H3_16557ik z0H3_55w3hf z0H3_1u1o96 text-gray-900 z0H3_x1yig9 z0H3_mdmmr9 filter drop-shadow-md">
            {name}
          </h3>

          <p className="text-sm text-gray-700 z0P_10plfnz z0P_u9qnin z0P_mdmmr9 z0P_eqnk6o filter drop-shadow-md">
            <i>{description}</i>
          </p>
        </div>
        {links.map(({ url, icon, size = 25 }, i) => (
          <a href={url} className="link" key={i}>
            <img
              alt="link"
              src={`//microicon-bki71i39a.vercel.app/${icon}/888888/${size}`}
              className="z0Img_mdmmr9 z0Img_nw324o"
            />
          </a>
        ))}
      </div>
      <style jsx>{`
        .meta {
          flex: 1;
          margin-left: 16px;
        }
        .link {
          display: block;
          line-height: 50px;
          margin-right: 16px;
          height: 50px;
          width: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 25px;
        }
        .flex {
          display: flex;
          min-height: 140px;
        }
        .z0Box_ywo3zt {
          padding-left: 8px;
          padding-right: 8px;
        }

        .z0P_eqnk6o {
          font-weight: 400;
          line-height: 1.5;
          max-width: 28em;
        }
        .z0P_u9qnin {
          margin-top: 0px;
          padding-bottom: 8px;
        }
        .z0AspectRatio_leueqe {
          height: 0;
          position: relative;
        }

        .z0H3_mdmmr9 {
        }
        .z0H3_x1yig9 {
          border-width: 0px;
          border-style: solid;
        }
        @media screen and (min-width: 40em) {
          .z0H3_55w3hf {
            font-size: 24px;
          }
          .z0P_10plfnz {
            font-size: 16px;
          }
          .z0Box_pq7l2s {
            width: 100%;
          }
        }
        .z0P_mdmmr9 {
        }
        .z0H3_1u1o96 {
          margin-bottom: 0px;
          margin-top: 0px;
        }
        .z0H3_16557ik {
          font-size: 20px;
        }
        .z0AspectRatioObject_hqpzos {
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          bottom: 0;
          height: 100%;
          left: 0;
          position: absolute;
          right: 0;
          top: 0;
          width: 100%;
        }
        .z0AspectRatioObject_w8x2v6 {
          width: 100%;
        }
        .z0AspectRatio_1h0a8ja {
          background-color: #f0f5f8;
        }
        .z0AspectRatio_1dte17j {
          padding-bottom: 56.25%;
        }
        .z0Link_1l0da3s:hover {
          opacity: 0.7;
          transition: opacity 0.2s ease-in-out;
        }
        .z0Box_w8x2v6 {
          width: 100%;
        }
        @media screen and (min-width: 52em) {
          .z0Box_1snu2vi {
            width: 50%;
            box-sizing: border-box;
          }
        }

        .z0Link_i2atn7 {
          font-size: 14px;
        }

        .z0Link_cvl0fu {
          margin-bottom: 20px;
          display: block;
          font-weight: bold;
          text-decoration: none;
          transition: opacity 0.2s ease-in;
        }
      `}</style>
    </div>
  )
}
