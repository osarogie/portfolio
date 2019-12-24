export function WorkItem({ name, description, image, url }) {
  return (
    <div className="z0Box_ywo3zt z0Box_w8x2v6 z0Box_pq7l2s z0Box_1snu2vi z0Box_mdmmr9 z0Box_mdmmr9">
      <a
        href={url}
        title={name}
        className="z0Link_i2atn7 z0Link_mdmmr9 z0Link_35iemg z0Link_cvl0fu z0Link_1l0da3s"
      >
        <div className="z0AspectRatio_1dte17j z0AspectRatio_1h0a8ja z0AspectRatio_dvi25k z0AspectRatio_leueqe">
          <div
            style={{
              backgroundImage: `url(${image})`
            }}
            className="thumbnail z0AspectRatioObject_mdmmr9 z0AspectRatioObject_w8x2v6 z0AspectRatioObject_mdmmr9 z0AspectRatioObject_dvi25k z0AspectRatioObject_hqpzos"
          />
        </div>
        <h3 className="z0H3_16557ik z0H3_55w3hf z0H3_1u1o96 z0H3_35iemg z0H3_x1yig9 z0H3_mdmmr9">
          {name}
        </h3>
        <p className="z0P_i2atn7 z0P_10plfnz z0P_u9qnin z0P_mdmmr9 z0P_eqnk6o">
          {description}
        </p>
      </a>
      <style jsx>{`
        .thumbnail {
          border: 1px solid #ddd;
        }
        .z0Box_ywo3zt {
          padding-left: 0px;
          padding-right: 0px;
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
        .z0P_i2atn7 {
          font-size: 14px;
        }
        .z0H3_35iemg {
          color: #1d0016;
        }
        .z0AspectRatio_dvi25k {
          border-radius: 0;
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
          margin-top: 16px;
        }
        .z0H3_16557ik {
          font-size: 20px;
        }
        .z0AspectRatioObject_dvi25k {
          border-radius: 0;
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
        .z0AspectRatioObject_mdmmr9 {
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
        .z0Box_mdmmr9 {
        }

        .z0Link_35iemg {
          color: #1d0016;
        }

        .z0Link_cvl0fu {
          border-bottom: 1px solid #aaa;
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
