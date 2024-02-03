import { WorkItem } from "./components/WorkItem"
import { SocialLink } from "./components/SocialLink"
import Image from "next/image"
import GlobeEuropeAfricaIcon from "@heroicons/react/24/outline/GlobeEuropeAfricaIcon"
import EnvelopeIcon from "@heroicons/react/24/outline/EnvelopeIcon"
import { GitHubIcon, PlayStoreIcon } from "./components/Icons"

const Index = () => (
  <div>
    <div className="relative bg-white">
      <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E"
        fill
        alt="Overlay"
        className="filter blur-lg absolute"
      />
      <div className="relative z-30 text-white font-koho">
        <div>
          <div className="jumbo">
            <div className="z0Flex_1dv9ts4 z0Flex_k206nx z0Flex_6hoen5 z0Flex_1agckgk z0Flex_1rr4jcp z0Box_1dv9ts4">
              <div className="w-8">
                <div
                  style={{
                    fontSize: 20,
                    height: 48,
                    width: 48,
                    borderRadius: 32,
                    borderWidth: 7,
                    borderStyle: "solid",
                  }}
                  className="text-xl bg-gray-400 bg-opacity-50 opacity-80"
                />
              </div>
            </div>
            <div className="banner relative">
              <div className="wrap">&nbsp;</div>
              <header className="relative z0Header_11vhgrl">
                <div className="z0Container_bpfrzz z0Container_6osar3">
                  <div className="z0Box_ywo3zt">
                    <h1 className="text-black z0H1_1o2ezep z0H1_12jqrxu z0H1_ngp8oq z0H1_1bmf5hr z0H1_o856zb">
                      Emmanuel Nosakhare
                    </h1>
                    <h3 className="z0H3_16557ik z0H3_1emnpaq text-black z0H3_x1yig9">
                      Software Engineer
                    </h3>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="z0Box_3ct8mo z0Box_w8x2v6 z0Box_8ctdvs">
            <div className="z0Container_1jdd6it z0Container_35iemg z0Container_6osar3">
              <div className="z0Box_ywo3zt">
                <div
                  id="work"
                  className="text-2xl mb-10 text-black font-bold uppercase"
                >
                  Some projects I&apos;ve worked on
                </div>
              </div>
              <div className="z0Flexbox_mdmmr9 z0Flexbox_155cfuf">
                <WorkItem
                  name="Solana Pawn Shop"
                  url="//solanapawnstars.com"
                  description="Pawn Your NFTs For Liquidity"
                  image="/images/sps.jpg"
                  links={[
                    {
                      url: "//solanapawnstars.com",
                      icon: GlobeEuropeAfricaIcon,
                      title: "SPS Website",
                    },
                  ]}
                />
                <WorkItem
                  name="SmartHarvest"
                  url="//smartharvest.africa"
                  description="Driving agricultural innovation"
                  image="/images/smartharvest3.png"
                  links={[
                    {
                      url: "//smartharvest.africa",
                      icon: GlobeEuropeAfricaIcon,
                      title: "Website",
                    },
                  ]}
                />
                <WorkItem
                  name="GGivers"
                  description="Offerings paid with a seamless click"
                  url="//www.ggivers.net"
                  image="/images/ggivers.png"
                  links={[
                    {
                      url: "//www.ggivers.net",
                      icon: GlobeEuropeAfricaIcon,
                      title: "Website",
                    },
                  ]}
                />
                <WorkItem
                  name="TheCommunity"
                  url="//thecommunity.ng"
                  description="A storytellling platform"
                  links={[
                    {
                      url: "//thecommunity.ng",
                      icon: GlobeEuropeAfricaIcon,
                      title: "Website",
                    },
                    {
                      url: "//play.google.com/store/apps/details?id=ng.thecommunity.kovu",
                      icon: PlayStoreIcon,
                      title: "PlayStore",
                    },
                  ]}
                  image="/images/tc.jpg"
                />
                <WorkItem
                  name="A Plus - Academic Assistant"
                  url="//apps.osarogie.com/aplus"
                  description="An app to help students keep track of their academicprogress"
                  image="/images/gpa4.png"
                  links={[
                    {
                      url: "//apps.osarogie.com/aplus",
                      icon: GlobeEuropeAfricaIcon,
                      title: "Website",
                    },
                    {
                      url: "//play.google.com/store/apps/details?id=ng.nosakhare.aplus",
                      icon: PlayStoreIcon,
                    },
                  ]}
                />
                <WorkItem
                  name="Fast Klinik"
                  description="Hospital Management made easy"
                  image="/images/fastklinik2.png"
                />
              </div>
            </div>
            <div className="z0Container_bpfrzz z0Container_6osar3">
              <div className="z0Box_ywo3zt">
                <h4
                  id="writing"
                  className="z0H4_1ycl9dg z0H4_12zrzid z0H4_35iemg z0H4_11gibmt"
                >
                  Writing
                </h4>

                <ul className="z0Ul_m2eadc z0Ul_mdmmr9 z0Ul_aw2unr">
                  <li className="z0ListItem_kewhca z0ListItem_mdmmr9">
                    <a
                      href="https://thecommunity.ng/nosa/249/birth"
                      className="z0TextLink_1ycl9dg z0TextLink_9pt98l z0TextLink_zvxvn2 z0TextLink_1kqftbz z0TextLink_35iemg z0TextLink_mdmmr9 z0TextLink_h82a9u z0TextLink_mdmmr9 z0TextLink_43bo14 z0TextLink_mdmmr9 z0TextLink_4kbyf6 z0TextLink_1oi5w5u"
                    >
                      Birth
                    </a>
                  </li>

                  <li className="z0ListItem_kewhca z0ListItem_mdmmr9">
                    <a
                      href="https://medium.com/@osarogie/analysing-flight-data-8411fffa6e6a"
                      className="z0TextLink_1ycl9dg z0TextLink_9pt98l z0TextLink_zvxvn2 z0TextLink_1kqftbz z0TextLink_35iemg z0TextLink_mdmmr9 z0TextLink_h82a9u z0TextLink_mdmmr9 z0TextLink_43bo14 z0TextLink_mdmmr9 z0TextLink_4kbyf6 z0TextLink_1oi5w5u"
                    >
                      Analysing Flight Data
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="z0Flexbox_voqzph z0Flexbox_w8x2v6 z0Flexbox_155cfuf">
            <div className="z0Flexbox_1j8enju z0Flexbox_i86xbc z0Flexbox_mdmmr9 z0Flexbox_155cfuf">
              <SocialLink href="//github.com/osarogie" icon={GitHubIcon} />
              <SocialLink
                href="mailto:hello@osarogie.com"
                icon={EnvelopeIcon}
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Index
