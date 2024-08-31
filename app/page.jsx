import React from 'react'
import Feed from '@/components/Feed'

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>Discover and Share AI prompts
            <br className='max-md:hidden'/>
            <span className='orange_gradient text-center'>AI-powered prompts</span>
        </h1>
        <p className='desc text-center'>Pormptopia is an open source tool for modern world to create creative prompts</p>
        <Feed/>
    </section>
  )
}

export default Home