import React from 'react'
import './App.css'
import danielImage from './Assets/image-daniel.jpg';
import jonathanImage from './Assets/image-jonathan.jpg';
import jeanetteImage from './Assets/image-jeanette.jpg';
import patrickImage from './Assets/image-patrick.jpg';
import kiraImage from './Assets/image-kira.jpg';

function App() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4  gap-6 p-20 min-h-screen bg-slate-200'>

      <div className='bg-purple-600 p-10 rounded-xl shadow-xl xl:col-span-2'>
        <div className='flex'>
          <img className='rounded-full' src={danielImage} alt="" />
          <div className='ml-4'>
            <h4 className='text-[white]'>Daniel Clifford</h4>
            <h4 className='text-[#ffffffb3]'>Verified Graduate</h4>
          </div>
        </div>
        <h2 className='text-[white] text-xl mt-4'>I received a job offer mid-course, and the subjects I learned were current, if not more so, in the company I joined. I honestly feel I got every penny’s worth.</h2>
        <h2 className='text-[#ffffffb2] text-[17px] mt-4'>"I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a transition and have heard some people who had an amazing experience here. I signed up for the free intro course and found it incredibly fun! I enrolled shortly thereafter. The next 12 weeks was the best - and most grueling - time of my life. Since completing the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup."</h2>
      </div>

      <div className='bg-gray-600 p-10 rounded-xl shadow-xl'>
        <div className='flex'>
          <img className='rounded-full' src={jonathanImage} alt="" />
          <div className='ml-4'>
            <h4 className='text-[white]'>Jonathan Walters</h4>
            <h4 className='text-[#ffffffb3]'>Verified Graduate</h4>
          </div>
        </div>
        <h2 className='text-[white] text-xl mt-4'>The team was very supportive and kept me motivated</h2>
        <h2 className='text-[#ffffffb2] text-[17px] mt-4'>"I started as a total newbie with virtually no coding skills. I now work as a mobile engineer for a big company. This was one of the best investments I’ve made in myself."</h2>
      </div>

      <div className='bg-white p-10 rounded-xl shadow-xl'>
        <div className='flex'>
          <img className='rounded-full' src={jeanetteImage} alt="" />
          <div className='ml-4'>
            <h4 className='text-[#313646] font-semibold'>Jeanette Harmon</h4>
            <h4 className='text-[#313646ce]'>Verified Graduate</h4>
          </div>
        </div>
        <h2 className='text-[#313646] text-xl mt-4'>An overall wonderful and rewarding experience</h2>
        <h2 className='text-[#313646ce] text-[17px] mt-4'>"Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living while doing something I love."</h2>
      </div>

      <div className='bg-gray-800 p-10 rounded-xl shadow-xl xl:col-span-2'>
        <div className='flex'>
          <img className='rounded-full' src={patrickImage} alt="" />
          <div className='ml-4'>
            <h4 className='text-[white]'>Patrick Abrams</h4>
            <h4 className='text-[#ffffffb3]'>Verified Graduate</h4>
          </div>
        </div>
        <h2 className='text-[white] text-xl mt-4'>Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and learning from their experiences was easy.</h2>
        <h2 className='text-[#ffffffb2] text-[17px] mt-4'>"The staff seem genuinely concerned about my progress which I find really refreshing. The program gave me the confidence necessary to be able to go out in the world and present myself as a capable junior developer. The standard is above the rest. You will get the personal attention you need from an incredible community of smart and amazing people."</h2>
      </div>

      <div className='bg-white p-10 rounded-xl shadow-xl xl:col-start-4 xl:row-start-1 xl:row-end-3'>
        <div className='flex'>
          <img className='rounded-full' src={kiraImage} alt="" />
          <div className='ml-4'>
            <h4 className='text-[#313646] font-semibold'>Kira Whittle</h4>
            <h4 className='text-[#313646ce]'>Verified Graduate</h4>
          </div>
        </div>
        <h2 className='text-[#313646] text-xl mt-4'>Such a life-changing experience. Highly recommended!'</h2>
        <h2 className='text-[#313646ce] text-[17px] mt-4'>"Before joining the bootcamp, I’ve never written a line of code. I needed some structure from professionals who can help me learn programming step by step. I was encouraged to enroll by a former student of theirs who can only say wonderful things about the program. The entire curriculum and staff did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial could ever have. In fact, I’ve often referred to it during interviews as an example of my developent experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 100% recommend!"</h2>
      </div>

    </div>
  )
}

export default App