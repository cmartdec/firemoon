import React from 'react'
import Topbar from '../components/Topbar'
import Bank from '../assets/bank.jpg'
import Footer from '../components/Footer'

export default function InterviewPost() {

    const color = "#303030"
    document.body.style.backgroundColor = color;

    return (
      <>
      <Topbar></Topbar>
      <div className="h-[250px] w-full bg-[#212121] flex justify-center">
          <div className="absolute top-36 h-[250px] w-[250px] rounded-full">
            <img className="absolute h-[250px] w-[250px] rounded-full" src={Bank} alt="" />

          </div>
      </div>
      <div className="h-screen w-full flex justify-center mt-[100px]">
          <div className="max-w-[1000px] w-full h-screen">
              <h1 className="font-bold text-4xl text-white mt-12 mb-12">How I Launched and Grew My Startup by 500% During the COVID Crisis</h1>
              <p className="text-gray-300">
              Maybe I should post this in r/finance but figured someone here has prob got some experience in this.

I was in the first 50 hired at a company making ~$40MM. We recently got nearly $1B valuation and will likely unicorn next round. Nasdaq has promoted us publicly and there’s a high chance we’ll IPO in the next couple years.

I have what I believe to be a pretty good amount of options, I advocated for more when I started and recently hired someone to my team and looking at the options package documentation realized I have more than were offered to our new COO, and mine are at a super low exercise price.

The way I calculate it based on our current FMV it’s in the mid 6 figures, but I don’t think the number I’m looking at even accounts for our recent valuation. I did some quick math, admittedly I don’t understand most of this, and if we get the exit value I expect it’ll be in the $3MM to $4MM range.

With that said, I know nothing about dilution, if I’m doing any of this math right, if there’s shady corporate things I should be aware or, AMT tax, etc …

Who should I talk to about this? A financial advisor? Like who consults on this type of stuff.

I just got granted additional options. Very few compared to the initial grant, and at a much higher exercise price. And I have a new 4 year vest period. That’s probably all normal, but I’m hesitant to accept the grant out of fear it might do something to my overall portfolio. We’ve also become much more corporate since I joined so I’m a little wary of the company trying to be sneaky about things. Is it safe to accept or should I also discuss with a professional?

              </p>
              
          </div>
      </div>
      <Footer></Footer>



      </>
  )
}








