type Props = {
  name: string
  description: string
  image: string
  url?: string
  links?: {
    url: string
    icon: React.FC<React.SVGProps<SVGSVGElement>>
    title?: string
  }[]
}

export const WorkItem: React.FC<Props> = ({
  name,
  description,
  image,
  url = null,
  links = [],
}) => {
  const ThumbnailContainer = url ? "a" : "div"

  return (
    <div className="z0Box_ywo3zt z0Box_w8x2v6 z0Box_pq7l2s z0Box_1snu2vi">
      <ThumbnailContainer
        href={url}
        title={name}
        className="z0Link_i2atn7 text-black z0Link_cvl0fu z0Link_1l0da3s"
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
      <div className="flex min-h-[140px]">
        <div className="flex-1 ml-4">
          <h3 className="z0H3_16557ik z0H3_55w3hf z0H3_1u1o96 text-black z0H3_x1yig9 z0H3_mdmmr9">
            {name}
          </h3>

          <p className="text-sm text-black z0P_10plfnz z0P_u9qnin z0P_mdmmr9 z0P_eqnk6o">
            <i>{description}</i>
          </p>
        </div>
        {links.map(({ url, icon: Icon, title }, i) => (
          <a href={url} className="link" key={i} title={title}>
            <Icon className="z0Img_mdmmr9 z0Img_nw324o h-8 w-8 hover:text-black" />
          </a>
        ))}
      </div>
    </div>
  )
}
