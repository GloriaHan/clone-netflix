import React from 'react'
import { PopcornIcon, ArrowRight } from '../../img/Icons'
import TV1 from '../../img/TV1.png'
import TV2 from '../../img/TV2.png'
import KidsPicture from '../../img/KidsPicture.png'
import DownloadFilm from '../../img/DownloadFilm.jpg'
import boxshot from '../../img/boxshot.png'

export default function OurStoryCards() {
  return (
    <>
      <div>
        <div>
          <PopcornIcon />
        </div>
        <div>
          <p>The Netflix you love for just $6.99.</p>
          <p>Get the Standard with ads plan</p>
          <div>
            <button>Learn more</button>
            <ArrowRight />
          </div>
        </div>
      </div>
      <div>
        <h2>Enjoy on your TV</h2>
        <p>
          Watch titles on Smart TVs, Playstation, Xbox, Chromecast, Apple TV,
          Blu-ray players and more.
        </p>
        <div>
          <img alt="tv1" src={TV1} />
          <video controls autoplay playsinline loop muted>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div>
        <h2>Watch Netflix everywhere</h2>
        <p>
          Stream unlimited movies and TV shows on your phone, tablet, laptop and
          TV.
        </p>
        <div>
          <img alt="tv2" src={TV2} />
          <video controls autoplay playsinline loop muted>
            <source
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <div>
        <h2>Create profiles for kids</h2>
        <p>
          Send kids on adventures with their favourite characters in a space
          made just for them — free with your membership.
        </p>
        <div>
          <img alt="kids" src={KidsPicture} />
        </div>
      </div>
      <div>
        <h2>Download your shows to watch them offline</h2>
        <p>Only available on ad-free plans.</p>
        <div>
          <img alt="films in Phone " src={DownloadFilm} />
          <div>
            <img alt="a film poster" src={boxshot} />
            <div>
              <p>Stranger Things</p>
              <p>Downloading</p>
              <div
                style={{
                  background:
                    "url('https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif') center center no-repeat",
                }}
              >
                downloading
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2>Frequently Asked Questions</h2>
        <div>
          <ul>
            <li>
              <h3>What is Netflix?</h3>
              <p>
                Netflix is a streaming service that offers a wide variety of
                award-winning TV shows, movies, anime, documentaries and more on
                thousands of internet-connected devices.
              </p>
              <p>
                You can watch as much as you want, whenever you want – all for
                one low monthly price. There's always something new to discover,
                and new TV shows and movies are added every week!
              </p>
            </li>
            <li>
              <h3>How much does Netflix cost?</h3>
              <p>
                Watch Netflix on your smartphone, tablet, Smart TV, laptop or
                streaming device, all for one fixed monthly fee. Plans range
                from $6.99 to $22.99 per month. No extra costs, no contracts.
              </p>
            </li>
            <li>
              <h3>Where can I watch Netflix?</h3>
              <p>
                Watch anywhere, at any time. Sign in with your Netflix account
                to watch instantly on the web at netflix.com from your personal
                computer or on any internet-connected device that offers the
                Netflix app, including smart TVs, smartphones, tablets,
                streaming media players and game consoles.
              </p>
              <p>
                You can also download your favourite shows with the iOS, Android
                or Windows 10 app. Use downloads to watch titles while you're on
                the go and without an internet connection. Take Netflix with you
                anywhere.
              </p>
            </li>
            <li>
              <h3>How do I cancel?</h3>
              <p>
                Netflix is flexible. There are no pesky contracts and no
                commitments. You can easily cancel your account online in two
                clicks. There are no cancellation fees – start or stop your
                account at any time.
              </p>
            </li>
            <li>
              <h3>What can I watch on Netflix?</h3>
              <p>
                Netflix has an extensive library of feature films,
                documentaries, TV shows, anime, award-winning Netflix Originals
                and more. Watch as much as you want, at any time that you want.
              </p>
            </li>
            <li>
              <h3>Is Netflix good for kids</h3>
              <p>
                The Netflix Kids experience is included in your membership to
                give parents control while kids enjoy family-friendly TV shows
                and movies in their own space. Kids profiles come with
                PIN-protected parental controls that let you restrict the
                maturity rating of content kids can watch and block specific
                titles you don’t want kids to see.
              </p>
            </li>
          </ul>
        </div>
        <div>
          <h3>
            Ready to watch Netflix? Enter your email to create or restart your
            membership.
          </h3>
          <form>
            <input placeholder="Email address"></input>
            <button>Get Started</button>
          </form>
        </div>
      </div>
    </>
  )
}
