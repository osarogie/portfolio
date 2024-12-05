import React from "react"

export default function Index() {
  return (
    <div className="relative z-30 bg-white font-lato p-4">
      <div className="banner relative">
        <header className="relative">
          <h1 className="text-black font-playflair text-2xl font-bold">
            Osarogie
          </h1>
          <h3 className="">software engineer, creator</h3>
        </header>
      </div>
      <div className="mt-10">
        <h4 className="font-bold">Articles</h4>
        <ul className="ms-2">
          <li>
            <a href="https://medium.com/@osarogie/analysing-flight-data-8411fffa6e6a">
              Analysing Flight Data
            </a>
          </li>
          <li>
            <a href="https://thecommunity.ng/nosa/249/birth">Birth</a>
          </li>
        </ul>
      </div>
      <div className="mt-10">
        <h4 className="font-bold">Public projects</h4>
        <div className="ms-2">
          <WorkItem
            name="Solana Pawn Shop"
            description="Pawn Your NFTs For Liquidity"
          />
          <WorkItem
            name="SmartHarvest"
            description="Driving agricultural innovation"
          />
          <WorkItem
            name="GGivers"
            description="Offerings paid with a seamless click"
          />
          <WorkItem
            name="TheCommunity"
            description="A storytellling platform"
          />
          <WorkItem
            name="A Plus - Academic Assistant"
            description="An app to help students keep track of their academicprogress"
          />
          <WorkItem
            name="Fast Klinik"
            description="Hospital Management made easy"
          />
        </div>
      </div>
      <div className="mt-3">
        <a
          href="//github.com/osarogie"
          className="py-2 text-black cursor-pointer inline-block font-bold opacity-100 transition-opacity ease-out duration-150 hover:underline"
        >
          github
        </a>
        <span className="mx-2">&bull;</span>
        <a
          href="mailto:hello@osarogie.com"
          className="pl-0 py-2 text-black cursor-pointer inline-block font-bold opacity-100 transition-opacity ease-out duration-150 hover:underline"
        >
          email me
        </a>
      </div>
    </div>
  )
}

function WorkItem({ name, description }) {
  return (
    <div className="flex-1 mb-2">
      <h3 className="mb-0">{name}</h3>
      <p className="text-sm text-gray-500">
        <i>{description}</i>
      </p>
    </div>
  )
}
