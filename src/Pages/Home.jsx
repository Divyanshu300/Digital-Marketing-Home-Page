import React from 'react'
import Section1 from '../components/Home/Section1'
import Section2 from '../components/Home/Section2'
import Section3 from '../components/Home/Section3'
import Section4 from '../components/Home/Section4'
import Section5 from '../components/Home/Section5'
import Section6 from '../components/Home/Section6'
import Footer from '../components/common/Footer'

const Home = () => {
  return (
    <div className='flex flex-col'>
        
        {/* SECTION 1 */}
        <div className='bg-white'>
          <Section1/>
        </div>

        {/* SECTION 2 */}
        <div className='bg-bgDull'>
          <Section2/>
        </div>
        
        {/* SECTION 3 */}
        <div className='bg-white'>
          <Section3/>
        </div>

        {/* SECTION 4 */}
        <div className='bg-white'>
          <Section4/>
        </div>

        {/* SECTION 5 */}
        <div className='bg-bgDull'>
          <Section5/>
        </div>

        {/* SECTION 6 */}
        <div className='bg-white'>
          <Section6/>
        </div>
        
        <div className='bg-btnRed'>
          <Footer/>
        </div>
    </div>
  )
}

export default Home