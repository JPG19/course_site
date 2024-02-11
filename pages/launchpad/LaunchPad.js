import { useState } from 'react';
import styles from '../../styles/Home.module.css';
import Header from '../../src/components/Header';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const LaunchPad = () => {
    const [showInfo, setShowInfo] = useState(false);

  return (
    <div className={styles.container}>
      <Header />

      {/* Main Content */}
      <main className={styles.main}>
        <section className={styles.topSection}>
          <div>
            <div class='text-title'>VENTURE CAPITAL LAUNCHPAD</div>
            <h1 class='text-h1 animate-fade-in'>
              Dive into the world of venture capital
            </h1>
            <div>
              <p>
                Develop your early-stage investment acumen with the definitive
                guide to venture capital in Southeast Asia. Supercharge your
                investor journey with 30 hours of practical video content and
                high-quality on-demand course material.
              </p>
              <div>
                <button>Enroll now</button>
              </div>
              <div>
                <iframe
                  src='https://www.youtube.com/embed/M1hgkUvVlJA'
                  height='480'
                  width='853'
                  frameborder='0'
                  allowfullscreen=''
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  title='VC Launchpad teaser'
                  class='w-full h-[240px] md:h-[480px] md:w-[853px]'
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.roadmap}>
          
            <div>
              <div class='text-title text-center'>COURSE ROADMAP</div>
              <div class='text-h2 text-center'>WHAT YOU WILL LEARN</div>
              <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
                <div style={{ background: '#2b142b' }} class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem' }}>
                      <span>Module 0: Welcome to the Self-Learning Course</span>
                      <ArrowForwardIosIcon className={`arrow ${showInfo ? styles.arrowDown : ''}`} onClick={() => setShowInfo(!showInfo)} />
                    </div>
                    <div class='text-base text-gray'></div>
                  </div>

                  <div
                    class={`${showInfo ? styles.show : styles.hide}`}
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Get introduced to the self-learning version of Asia’s
                        first experiential Certificate in VC with an orientation
                        on the course and what to expect for your journey to
                        break into VC.
                      </div>
                      <ul class='list-disc pl-4'></ul>
                    </div>
                  </div>
                </div>


                {/* <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>
                        Module 1: Southeast Asia is not Silicon Valley
                      </span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Introduction to Venture Capital
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Begin your journey understanding venture capital through
                        the lens of Southeast Asia’s startup ecosystem. Learn
                        what makes VC such a catalyst for technology market
                        creation: business model, fund lives, and firm
                        structures.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Structure of VC Fund and VC Firm</li>
                        <li class='py-1'>VC Business Model</li>
                        <li class='py-1'>VC Fund Life</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 2: Mapping the Frontiers</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Market Research and Thesis Development
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Every explorer needs their map; for the venture
                        capitalist, that’s their investment thesis. Learn how to
                        dissect markets and develop your own evaluation of where
                        the fund-returners and billion-dollar companies can be
                        found.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>VC Principles</li>
                        <li class='py-1'>Thesis Building Factors</li>
                        <li class='py-1'>Illustrating Investment Theses</li>
                        <li class='py-1'>Deal Flow Process</li>
                        <li class='py-1'>Investment Memos</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 3: Finding Your Alpha</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Developing A Proprietary Sourcing Trajectory
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        The iterative process of finding the next billion dollar
                        companies and fund returners is an art of distinction.
                        How can you as an investor stay ahead of the market or
                        build relationships and bridges where few have? Learn
                        how to develop your own proprietary sourcing trajectory,
                        founded on your continually evolving understanding of
                        the market and many conversations with founders.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Thesis-Driven Sourcing</li>
                        <li class='py-1'>Sourcing Best Practices</li>
                        <li class='py-1'>Sourcing Strategies</li>
                        <li class='py-1'>Developing Sourcing Funnels</li>
                        <li class='py-1'>Handling Founder First Calls</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 4: Making Sense of the Uncertain</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Due Diligence for Early-Stage Venture Capital
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        There’s a reason venture capital is an extremely risky
                        asset class. At the same time, it’s still important to
                        make thoughtful investments. Learn how to approach due
                        diligence, both qualitatively and quantitatively, for
                        early-stage startups that may not have all the answers
                        themselves.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>The Due Diligence Process</li>
                        <li class='py-1'>Data Rooms</li>
                        <li class='py-1'>Pitch Decks</li>
                        <li class='py-1'>
                          Qualitative and Quantitative Analysis
                        </li>
                        <li class='py-1'>Technical Due Diligence</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 5: The Price is (Sometimes) Right</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      A Framework for Valuing Early-Stage Startups
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Valuation is one of the most discussed and yet elusive
                        aspects of early-stage startup investing. Learn some of
                        the common approaches to valuing early-stage companies
                        given the lack of financial data (bye DCF!) and how
                        prices can affect the momentum of a venture-backed
                        startup.{' '}
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Valuation Principles</li>
                        <li class='py-1'>Valuation Methods</li>
                        <li class='py-1'>
                          Considerations for Valuing Early-Stage Tech Companies
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 6: Selling Sunrise</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      One-Pagers and Pitching to Investment Committees
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        From the VC’s perspective, one of the critical points in
                        the process of going from the first call to a portfolio
                        company is Pitching to the Investment Committee (IC).
                        ICs are an important check-and-balance for VC firm
                        investment decision making, and you’ll learn here
                        frameworks and techniques to best present your case for
                        an investment to be made for a specific startup.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>One-Pager Breakdown</li>
                        <li class='py-1'>Pitching to Investment Committees</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 7: Making the Vows</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Term Sheets and Closing Investments
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Once both IC and the founder have said yes, it’s time to
                        execute and close the investment! Learn about the
                        typical vehicles VCs use to invest, the key terms of
                        investment and how they impact ownership for both
                        parties and company valuation, as well as the process
                        and documents involved in kicking off this long-term
                        partnership between investor and startup.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>
                          Financial Instruments For Startup Investing
                        </li>
                        <li class='py-1'>Term Sheets Breakdown</li>
                        <li class='py-1'>Closing Investments</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 8: Building Rockstar Teams </span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Supporting Startups with Hiring and People Development
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        All roads of portfolio management lead back to people.
                        At the same time, hiring and retaining talent continues
                        to be the most challenging aspect of building a company,
                        and all the more so for early-stage startups. Learn
                        about how startups approach building rockstar teams
                        amidst market challenges and how VCs can be valuable
                        partners in this effort.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>
                          Challenges of Hiring in Southeast Asia
                        </li>
                        <li class='py-1'>Hiring Best Practices</li>
                        <li class='py-1'>
                          Advantages of Working with VCs for Hiring
                        </li>
                        <li class='py-1'>
                          How VCs Help with Hiring and People Management
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 9: When Less is More</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Scaling Strategies for Startups in Southeast Asia
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Growth beyond the inflection point of finding initial
                        product-market fit is not just about adding new things
                        but also letting go of others. Learn the various
                        strategies startups in Southeast Asia take to expand
                        market share and mature as an organization, alongside
                        the ways VCs play a critical role on this journey.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>
                          Market Growth Trajectories in Southeast Asia
                        </li>
                        <li class='py-1'>Scaling Strategies</li>
                        <li class='py-1'>How VCs Help with Scaling</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 10: No Point Buying if You Can’t Sell </span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Fundraising as a Tool for Growth
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Having a sufficient runway and substantial war chest can
                        be game-changing for a portfolio company’s momentum in
                        the market, and VCs are often well-positioned and
                        incentivised to sell their portfolio to the right
                        investors and sell them well. Learn how startups can
                        approach fundraising, from targeting investors to
                        developing pitch decks, and how VCs support them, even
                        in the off-season.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Why Startups Fundraise</li>
                        <li class='py-1'>How Startups Fundraise</li>
                        <li class='py-1'>How VCs Help with Capital Strategy</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>Module 11: Balancing the Force</span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Startup Board Management and the Role of Venture
                      Capitalists
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        VCs often support their portfolio through the boards of
                        these companies. Learn how startups approach boards
                        versus much larger companies and the role VCs play as
                        board members vis-a-vis working closely with CEOs.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>
                          Best Practices for Startup Board Formation and
                          Development
                        </li>
                        <li class='py-1'>
                          Considerations for VCs as Board Members
                        </li>
                        <li class='py-1'>Value-Add of a VC Board Member</li>
                        <li class='py-1'>Running Effective Board Meetings</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>
                        Module 12: Driving Fund Returns through Exits{' '}
                      </span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Pathways to Exit and Driving Fund DPI{' '}
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        From a fund perspective, the work VCs do to support
                        their portfolio companies revolves around growing the
                        value of the company and thus their prospective returns
                        from investing in them. Learn the various pathways to
                        exit investments, how these pathways can align with
                        company growth, and how VCs can approach developing
                        iterative exit strategies.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Key Exit Principles</li>
                        <li class='py-1'>How VCs Develop Exit Strategies</li>
                        <li class='py-1'>Exit Pathways</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class='bg-dark-400 py-3 px-6 rounded my-6'>
                  <div class='cursor-pointer'>
                    <div class='text-white font-bold text-[20px] flex items-center justify-between'>
                      <span>
                        Module 13: Finding your place in the ecosystem
                      </span>
                      <span>
                        <svg
                          width='36'
                          height='36'
                          viewBox='0 0 39 39'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          class='duration-500 -rotate-90'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M20.1463 25.4521C19.7893 25.809 19.2106 25.809 18.8537 25.4521L9.5345 16.1329C9.17754 15.7759 9.17754 15.1973 9.5345 14.8403L9.96541 14.4093C10.3224 14.0524 10.9011 14.0524 11.2581 14.4093L19.5 22.6512L27.7419 14.4093C28.0988 14.0524 28.6775 14.0524 29.0345 14.4093L29.4654 14.8403C29.8224 15.1973 29.8224 15.7759 29.4654 16.1329L20.1463 25.4521Z'
                            fill='#E5E5E5'
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div class='text-base text-gray'>
                      Building Brand, Network, and Career in Venture Capital
                    </div>
                  </div>
                  <div
                    class='text-gray duration-500 overflow-hidden text-base transition-all'
                    style='max-height: 0px;'
                  >
                    <div>
                      <div class='w-[100px] h-0.5 bg-[#083331] mb-4'></div>
                      <div>
                        Building a career in VC is a cycle of experience feeding
                        into track record and network and vice-versa, and it’s
                        not a straightforward task getting into this momentum.
                        Learn how you can leverage your own experience and
                        expertise to position yourself as a VC, build a track
                        record, and connect to the right people.
                      </div>
                      <p class='py-4'>
                        Topics discussed in this module include (but are not
                        limited to):
                      </p>
                      <ul class='list-disc pl-4'>
                        <li class='py-1'>Building a Venture Capital Career</li>
                        <li class='py-1'>
                          Features of Venture Capital Profession
                        </li>
                        <li class='py-1'>
                          Constant Evolution of Venture Capital Industry
                        </li>
                      </ul>
                    </div>
                  </div>
                </div> */}


              </div>
            </div>
          
        </section>
      </main>
    </div>
  );
};

export default LaunchPad;
