import { CustomHead } from "../src/components/CustomHead"
import { WorkItem } from "../src/components/WorkItem"
import { SocialLink } from "../src/components/SocialLink"
import Image from "next/image"

const Index = () => (
  <div>
    <CustomHead
      title="Emmanuel Nosakhare"
      description="Building smarter, more human friendly systems."
    />
    <div className="relative bg-white">
      <Image
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 2000 1500'%3E%3Cdefs%3E%3Crect stroke='%23ffffff' stroke-width='.5' width='1' height='1' id='s'/%3E%3Cpattern id='a' width='3' height='3' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cuse fill='%23fafafa' href='%23s' y='2'/%3E%3Cuse fill='%23fafafa' href='%23s' x='1' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s' x='2' y='2'/%3E%3Cuse fill='%23f5f5f5' href='%23s'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='2'/%3E%3Cuse fill='%23f0f0f0' href='%23s' x='1' y='1'/%3E%3C/pattern%3E%3Cpattern id='b' width='7' height='11' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s'/%3E%3Cuse href='%23s' y='5' /%3E%3Cuse href='%23s' x='1' y='10'/%3E%3Cuse href='%23s' x='2' y='1'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='8'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='5' y='2'/%3E%3Cuse href='%23s' x='5' y='6'/%3E%3Cuse href='%23s' x='6' y='9'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='h' width='5' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ebebeb'%3E%3Cuse href='%23s' y='5'/%3E%3Cuse href='%23s' y='8'/%3E%3Cuse href='%23s' x='1' y='1'/%3E%3Cuse href='%23s' x='1' y='9'/%3E%3Cuse href='%23s' x='1' y='12'/%3E%3Cuse href='%23s' x='2'/%3E%3Cuse href='%23s' x='2' y='4'/%3E%3Cuse href='%23s' x='3' y='2'/%3E%3Cuse href='%23s' x='3' y='6'/%3E%3Cuse href='%23s' x='3' y='11'/%3E%3Cuse href='%23s' x='4' y='3'/%3E%3Cuse href='%23s' x='4' y='7'/%3E%3Cuse href='%23s' x='4' y='10'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='c' width='17' height='13' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23e5e5e5'%3E%3Cuse href='%23s' y='11'/%3E%3Cuse href='%23s' x='2' y='9'/%3E%3Cuse href='%23s' x='5' y='12'/%3E%3Cuse href='%23s' x='9' y='4'/%3E%3Cuse href='%23s' x='12' y='1'/%3E%3Cuse href='%23s' x='16' y='6'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='d' width='19' height='17' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23ffffff'%3E%3Cuse href='%23s' y='9'/%3E%3Cuse href='%23s' x='16' y='5'/%3E%3Cuse href='%23s' x='14' y='2'/%3E%3Cuse href='%23s' x='11' y='11'/%3E%3Cuse href='%23s' x='6' y='14'/%3E%3C/g%3E%3Cg fill='%23e0e0e0'%3E%3Cuse href='%23s' x='3' y='13'/%3E%3Cuse href='%23s' x='9' y='7'/%3E%3Cuse href='%23s' x='13' y='10'/%3E%3Cuse href='%23s' x='15' y='4'/%3E%3Cuse href='%23s' x='18' y='1'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='e' width='47' height='53' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='2' y='5'/%3E%3Cuse href='%23s' x='16' y='38'/%3E%3Cuse href='%23s' x='46' y='42'/%3E%3Cuse href='%23s' x='29' y='20'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='f' width='59' height='71' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='33' y='13'/%3E%3Cuse href='%23s' x='27' y='54'/%3E%3Cuse href='%23s' x='55' y='55'/%3E%3C/g%3E%3C/pattern%3E%3Cpattern id='g' width='139' height='97' patternUnits='userSpaceOnUse' patternTransform='scale(50) translate(-980 -735)'%3E%3Cg fill='%23F60'%3E%3Cuse href='%23s' x='11' y='8'/%3E%3Cuse href='%23s' x='51' y='13'/%3E%3Cuse href='%23s' x='17' y='73'/%3E%3Cuse href='%23s' x='99' y='57'/%3E%3C/g%3E%3C/pattern%3E%3C/defs%3E%3Crect fill='url(%23a)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23b)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23h)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23c)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23d)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23e)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23f)' width='100%25' height='100%25'/%3E%3Crect fill='url(%23g)' width='100%25' height='100%25'/%3E%3C/svg%3E"
        layout="fill"
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
                    <h1 className="z0H1_1o2ezep z0H1_12jqrxu z0H1_ngp8oq z0H1_1bmf5hr z0H1_35iemg z0H1_o856zb">
                      Emmanuel Nosakhare
                    </h1>
                    <h3 className="z0H3_16557ik z0H3_1emnpaq text-gray-800 z0H3_x1yig9 z0H3_mdmmr9">
                      Building smarter, more people friendly systems.
                    </h3>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="z0Box_3ct8mo z0Box_w8x2v6 z0Box_8ctdvs">
            <div className="z0Container_tt19w7 z0Container_1jdd6it z0Container_35iemg z0Container_6osar3">
              <div className="z0Box_ywo3zt">
                <h4
                  id="work"
                  className="z0H4_1ycl9dg z0H4_mdmmr9 z0H4_35iemg z0H4_11gibmt mb-5"
                >
                  Work
                </h4>
              </div>
              <div className="z0Flexbox_mdmmr9 z0Flexbox_mdmmr9 z0Flexbox_155cfuf">
                <WorkItem
                  name="SmartHarvest"
                  url="//smartharvest.africa"
                  description="Driving agricultural innovation"
                  image="/images/smartharvest2.png"
                  links={[
                    {
                      url: "//smartharvest.africa",
                      icon: "language",
                    },
                  ]}
                />
                <WorkItem
                  name="GGivers"
                  description="Offerings paid easy with a seamless click"
                  url="//www.ggivers.net"
                  image="/images/ggivers.png"
                  links={[
                    {
                      url: "//www.ggivers.net",
                      icon: "language",
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
                      icon: "language",
                    },
                    {
                      url: "//play.google.com/store/apps/details?id=ng.thecommunity.kovu",
                      icon: "googleplay",
                    },
                  ]}
                  image="https://img.thecommunity.ng/800x1000/ecaf1b44-3408-448a-b53a-de3183504584"
                />
                <WorkItem
                  name="A Plus - Academic Assistant"
                  url="//apps.osarogie.com/aplus"
                  description="An app to help students keep track of their academicprogress"
                  image="/images/gpa4.png"
                  links={[
                    {
                      url: "//apps.osarogie.com/aplus",
                      icon: "language",
                    },
                    {
                      url: "//play.google.com/store/apps/details?id=ng.nosakhare.aplus",
                      icon: "googleplay",
                    },
                  ]}
                />
                <WorkItem
                  name="Fast Klinik"
                  description="Hospital Management made easy"
                  image="/images/fastklinik1.png"
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
                      href="https://thecommunity.ng/nosa/221/how-i-started-a-company-by-accident"
                      className="z0TextLink_1ycl9dg z0TextLink_9pt98l z0TextLink_zvxvn2 z0TextLink_1kqftbz z0TextLink_35iemg z0TextLink_mdmmr9 z0TextLink_h82a9u z0TextLink_mdmmr9 z0TextLink_43bo14 z0TextLink_mdmmr9 z0TextLink_4kbyf6 z0TextLink_1oi5w5u"
                    >
                      How I started a company (by accident)
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            wrap="true"
            className="z0Flexbox_voqzph z0Flexbox_w8x2v6 z0Flexbox_155cfuf"
          >
            <div className="z0Flexbox_1j8enju z0Flexbox_i86xbc z0Flexbox_mdmmr9 z0Flexbox_155cfuf">
              <SocialLink href="//github.com/osarogie" icon="github" />
              <SocialLink
                href="mailto:nonreactiv@gmail.com"
                icon="mail"
                size={18}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .banner header {
        background-size: 100% 100%;
      }
      .banner .wrap {
        position: absolute;
        width: 100%;
        height: 100%;
      }
      .relative {
        position: relative;
      }
      * {
        box-sizing: border-box;
      }
      .z0Flex_13yk34y {
        padding-left: 64px;
        padding-right: 64px;
        padding-top: 32px;
        padding-bottom: 32px;
      }
      .z0Flex_k206nx {
        align-items: center;
      }
      .z0Flex_6hoen5 {
        justify-content: "left";
      }
      .z0Flex_1agckgk {
        flex-direction: row;
      }
      .z0Flex_1rr4jcp {
        display: flex;
      }
      .z0Box_13yk34y {
        padding-left: 64px;
        padding-right: 64px;
        padding-top: 32px;
        padding-bottom: 32px;
      }
      .z0Svg_f2dgne {
        transition: color 0.25s ease-in;
      }
      .z0Box_1y4iusb {
        margin-right: 32px;
      }
      .z0NavLink_c65ziq {
        padding-left: 32px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0NavLink_1wdoa1p {
        color: black;
      }
      .z0Header_126pkt5 {
        padding-left: 64px;
        padding-right: 64px;
        padding-top: 6px;
        padding-bottom: 6px;
      }
      .z0Container_gx1hqw {
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
      }
      .z0Container_6osar3 {
        max-width: 72rem;
      }
      .z0Box_1vjn2v1 {
        padding-left: 16px;
        padding-right: 16px;
      }
      .z0H3_1emnpaq {
        margin-bottom: 0px;
      }
      .z0H3_1wdoa1p {
        color: black;
      }
      .z0H1_1o2ezep {
        font-size: 32px;
      }
      @media screen and (min-width: 40em) {
        .z0H1_12jqrxu {
          font-size: 48px;
        }
      }
      @media screen and (min-width: 52em) {
        .z0H1_ngp8oq {
          font-size: 64px;
        }
      }
      @media screen and (max-width: 320px) {
        .z0Header_11vhgrl {
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
      }
      .z0H1_1bmf5hr {
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .z0H1_1wdoa1p {
        color: black;
      }
      .z0H1_o856zb {
        line-height: 1.25;
      }
      .z0Box_1rl2r0i {
        padding-left: 64px;
        padding-right: 64px;
      }
      .z0Box_8ctdvs {
        background-color: transparent;
      }
      .z0Container_tt19w7 {
        font-size: 12px;
      }
      .z0Container_ootift {
        margin-left: auto;
        margin-right: auto;
        padding-top: 5px;
        padding-left: 16px;
        padding-right: 16px;
      }
      .z0Container_1wdoa1p {
        color: black;
      }
      .z0H4_1ycl9dg {
        font-size: 16px;
      }
      .z0H4_mdmmr9 {
      }
      .z0H4_1wdoa1p {
        color: black;
      }
      .z0Link_iisq1y {
        padding-left: undefined;
        padding-right: undefined;
        padding-top: undefined;
        padding-bottom: undefined;
      }
      .z0Link_1wdoa1p {
        color: black;
      }
      .z0Link_16bnkq {
        display: block;
        font-weight: bold;
        text-decoration: none;
        transition: opacity 0.2s ease-in;
      }
      .z0AspectRatio_8pfw7x {
        background-color: bg;
      }
      .z0P_1m6kqzy {
        margin-top: 0px;
      }
      .z0P_j8en80 {
        font-weight: 400;
        line-height: 1.5;
        max-width: 28em;
        text-indent: 1em;
        webkit-text-indent: 1em;
      }
      .z0Flex_12zrzid {
        margin-top: 64px;
      }
      .z0Box_12zrzid {
        margin-top: 64px;
      }
      .z0Box_i86xbc {
        width: 50%;
      }
      .z0H4_12s4gt7 {
        margin-top: 5px;
      }
      .z0Ul_w94ir4 {
        margin-bottom: 6px;
        padding-left: 0px;
      }
      .z0Ul_aw2unr {
        list-style: none;
      }
      .z0ListItem_kewhca {
        border-bottom-width: 1px;
        max-width: 800px;
        border-bottom-style: solid;
        border-bottom-color: #444;
      }
      .z0TextLink_1b8l9c0 {
        font-size: 24px;
      }
      .z0TextLink_5jxka6 {
        padding: undefined;
        padding-left: undefined;
        padding-right: undefined;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0TextLink_1wdoa1p {
        color: black;
      }
      .z0TextLink_mdmmr9 {
      }
      .z0TextLink_h82a9u:hover {
        opacity: 0.55;
        transition: opacity 0.125s ease-out;
        webkit-transition: opacity 0.125s ease-out;
      }
      .z0TextLink_43bo14:focus {
        opacity: 0.65;
      }
      .z0TextLink_4kbyf6:active {
      }
      .z0TextLink_1oi5w5u {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        opacity: 1;
        text-decoration: none;
        transition: opacity 0.125s ease-out;
      }
      .z0Flexbox_pgvqhd {
        padding-bottom: 64px;
        padding-top: 64px;
        padding-left: 64px;
        padding-right: 64px;
      }
      .z0Flexbox_w8x2v6 {
        width: 100%;
      }
      .z0Flexbox_2jit5t {
        background-color: black;
      }
      .z0Flexbox_155cfuf {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: initial;
      }
      .z0Flexbox_t948g5 {
        padding-left: 32px;
      }
      .z0Flexbox_i86xbc {
        width: 50%;
      }
      .z0TextLink_i2atn7 {
        font-size: 14px;
      }
      .z0TextLink_11dalxk {
        margin-right: 64px;
        padding-left: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0Img_nw324o {
        display: block;
      }
      .z0TextLink_183tfsc {
        padding-left: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0Flexbox_yq2pvt {
        padding-right: 32px;
      }
      .z0Flexbox_h1xc7s {
        color: white;
      }
      .z0Flexbox_1c3r39f {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .z0Span_tt19w7 {
        font-size: 12px;
      }
      .z0LogoLab_10ybkcb {
        width: 44px;
      }
      .z0LogoLab_nw324o {
        display: block;
      }
      .z0Flex_1dv9ts4 {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .z0Box_1dv9ts4 {
        padding-left: 20px;
        padding-right: 20px;
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .z0Header_11vhgrl {
        padding-left: 8px;
        padding-right: 8px;
        padding-top: 50px;
        padding-bottom: 0px;
      }
      .z0Container_bpfrzz {
        margin-left: auto;
        margin-right: auto;
        padding-left: 8px;
        padding-right: 8px;
      }
      .z0H1_35iemg {
        color: #929292;
      }
      .z0Box_3ct8mo {
        padding-left: 0px;
        padding-right: 0px;
      }
      .z0Container_1jdd6it {
        margin-left: auto;
        margin-right: auto;
        padding-top: 0;
        padding-left: 8px;
        padding-right: 8px;
      }
      .z0Container_35iemg {
        color: #929292;
      }
      .z0H3_1oe3gjs {
        margin-bottom: 0px;
        margin-top: 8px;
      }
      .z0Flex_6dz4ec {
        margin-top: 32px;
      }
      .z0Box_6dz4ec {
        margin-top: 32px;
      }
      .z0Ul_m2eadc {
        padding-left: 0px;
      }
      .z0TextLink_35iemg {
        color: #929292;
      }
      .z0Flexbox_h9zvmj {
        background-color: #929292;
      }
      .z0Flexbox_1j8enju {
        padding-left: 16px;
      }
      .z0TextLink_y2pq1s {
        margin-right: 32px;
        padding-left: 0px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0Flexbox_1lcbbl9 {
        padding-right: 16px;
      }
      .z0Svg_3h4hbk {
        background-color: undefined;
        color: undefined;
      }
      .z0Svg_f2dgne {
        transition: color 0.25s ease-in;
      }
      .z0NavLink_c65ziq {
        padding-left: 32px;
        padding-top: 0px;
        padding-bottom: 0px;
      }
      .z0NavLink_1wdoa1p {
        color: black;
      }
      .z0Header_126pkt5 {
        padding-left: 64px;
        padding-right: 64px;
        padding-top: 6px;
        padding-bottom: 6px;
      }
      .z0Header_1qq5jeq {
        background-color: bg;
        color: black;
      }
      .z0Container_gx1hqw {
        margin-left: auto;
        margin-right: auto;
        padding-left: 16px;
        padding-right: 16px;
      }
      .z0H3_16557ik {
        font-size: 20px;
        margin: 3px;
        opacity: 0.3;
      }
      .z0H3_1emnpaq {
        margin-bottom: 0px;
      }
      .z0H3_1wdoa1p {
        color: black;
      }
      .z0H3_x1yig9 {
        border-width: 0px;
        border-style: solid;
      }
      .z0H1_1o2ezep {
        font-size: 32px;
      }
      @media screen and (min-width: 40em) {
        .z0H1_12jqrxu {
          font-size: 48px;
        }
      }
      @media screen and (min-width: 52em) {
        .z0H1_ngp8oq {
          font-size: 64px;
        }
      }
      .z0H1_1bmf5hr {
        margin-top: 0px;
        margin-bottom: 0px;
      }
      .z0H1_1wdoa1p {
        color: black;
      }
      .z0H1_o856zb {
        line-height: 1.25;
      }
      .z0Container_tt19w7 {
        font-size: 12px;
      }
      .z0Container_ootift {
        margin-left: auto;
        margin-right: auto;
        padding-top: 5px;
        padding-left: 16px;
        padding-right: 16px;
      }
      .z0Container_1wdoa1p {
        color: black;
      }

      .z0H4_1ycl9dg {
        font-size: 20px;
        margin-left: 8px;
      }
      .z0H4_1wdoa1p {
        color: black;
      }
      .z0Flexbox_mdmmr9 {
      }
      .z0Link_mdmmr9 {
      }
      .z0Link_1wdoa1p {
        color: black;
      }
      .z0AspectRatio_8pfw7x {
        background-color: bg;
      }
      .z0H3_3s78ns {
        margin-bottom: 0px;
        margin-top: 32px;
      }
      .z0P_uo73rf {
        margin-top: 0px;
        padding-bottom: 16px;
      }
      .z0Flexbox_1m6kqzy {
        margin-top: 0px;
      }
      @media screen and (min-width: 40em) {
        .z0Flexbox_pswed9 {
          margin-top: 0px;
        }
      }
      @media screen and (min-width: 52em) {
        .z0Flexbox_1tk9jci {
          margin-top: 64px;
        }
      }
      .z0H4_12s4gt7 {
        margin-top: 5px;
      }
      .z0Ul_w94ir4 {
        margin-bottom: 6px;
        padding-left: 0px;
      }
      .z0Ul_mdmmr9 {
      }
      .z0Ul_aw2unr {
        list-style: none;
      }
      .z0ListItem_mdmmr9 {
        margin-left: 8px;
      }
      .z0TextLink_1ycl9dg {
        font-size: 16px;
      }
      @media screen and (min-width: 40em) {
        .z0TextLink_9pt98l {
          font-size: 20px;
        }
      }
      @media screen and (min-width: 52em) {
        .z0TextLink_zvxvn2 {
          font-size: 24px;
        }
      }
      .z0TextLink_1l2q2x1 {
        padding: undefined;
        padding-left: undefined;
        padding-right: undefined;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .z0TextLink_1wdoa1p {
        color: black;
      }
      .z0TextLink_mdmmr9 {
      }
      .z0TextLink_h82a9u:hover {
        opacity: 0.55;
        transition: opacity 0.125s ease-out;
        webkit-transition: opacity 0.125s ease-out;
      }
      .z0TextLink_43bo14:focus {
        opacity: 0.65;
      }
      .z0TextLink_4kbyf6:active {
      }
      .z0TextLink_1oi5w5u {
        cursor: pointer;
        display: inline-block;
        font-weight: bold;
        opacity: 1;
        text-decoration: none;
        transition: opacity 0.125s ease-out;
      }
      .z0Flexbox_pgvqhd {
        padding-bottom: 64px;
        padding-top: 64px;
        padding-left: 64px;
        padding-right: 64px;
      }
      .z0Flexbox_w8x2v6 {
        width: 100%;
      }
      .z0Flexbox_2jit5t {
        background-color: black;
      }
      .z0Flexbox_t948g5 {
        padding-left: 32px;
      }
      .z0Flexbox_i86xbc {
        width: 50%;
      }
      .z0TextLink_17rwie9 {
        margin-right: 64px;
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .z0Img_mdmmr9 {
      }
      .z0Img_nw324o {
        display: block;
      }
      .z0TextLink_1v8bi8y {
        padding-left: 0px;
        padding-top: 16px;
        padding-bottom: 16px;
      }
      .z0Flexbox_yq2pvt {
        padding-right: 32px;
      }
      .z0Flexbox_h1xc7s {
        color: white;
      }
      .z0Flexbox_1c3r39f {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
      }
      .z0Span_tt19w7 {
        font-size: 12px;
      }
      .z0Span_mdmmr9 {
      }
      .z0TextLink_1ri11e7 {
        padding-left: 0px;
        padding-top: 8px;
        padding-bottom: 8px;
      }
      .z0LogoLab_mdmmr9 {
      }
      .z0LogoLab_10ybkcb {
        width: 44px;
      }
      .z0LogoLab_nw324o {
        display: block;
      }
      .z0H1_35iemg {
        color: #929292;
      }
      .z0Container_35iemg {
        color: #929292;
      }
      @media screen and (min-width: 52em) {
        .z0Flexbox_199tkwx {
          margin-top: 32px;
        }
      }
      .z0Ul_m2eadc {
        padding-left: 0px;
      }
      .z0TextLink_1kqftbz {
        padding: undefined;
        padding-left: undefined;
        padding-right: undefined;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      .z0TextLink_35iemg {
        color: #929292;
      }
      .z0Flexbox_voqzph {
        padding-bottom: 32px;
        padding-top: 32px;
      }
      .z0Flexbox_h9zvmj {
        background-color: #929292;
      }
      .z0Flexbox_1j8enju {
        padding-left: 16px;
      }
      .z0Flexbox_1lcbbl9 {
        padding-right: 16px;
      }
      .z0TextLink_7xqnkw {
        padding-left: 0px;
        padding-top: 4px;
        padding-bottom: 4px;
      }
      .z0Box_ywo3zt:last-child {
        margin-bottom: 128px;
      }

      @media screen and (max-width: 500px) {
        .z0Header_11vhgrl {
          padding-left: 11px;
          padding-right: 11px;
          padding-top: 49px;
          padding-bottom: 20px;
        }
        .z0H3_16557ik {
          margin: 1px;
        }
        .z0Box_ywo3zt:last-child {
          margin-bottom: 0;
        }
      }

      @media screen and (min-width: 500px) {
        .z0Flexbox_voqzph {
          padding-left: 32px;
          padding-right: 32px;
        }
      }
    `}</style>
  </div>
)

export default Index
