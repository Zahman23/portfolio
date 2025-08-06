import React from 'react'

interface AboutProps {
  ref: React.RefObject<HTMLDivElement | null>;
}

const About = ({ref} : AboutProps) => {
  return (
    <div id='about' ref={ref} className='min-h-screen spac-y-4 px-2'>
        <div className='text-secondary text-xl mb-4'>{'>'} about.txt</div>
        <div className='text-gray-300 space-y-4 leading-relaxed'>
            
                <p>
                Hello! I&apos;m John Doe, a passionate full-stack developer with 5+ years of experience building web
                applications that solve real-world problems.
              </p>
              <p>
                I specialize in modern JavaScript frameworks, cloud technologies, and creating scalable, user-friendly
                applications. When I&apos;m not coding, you can find me contributing to open-source projects or exploring new
                technologies.
              </p>
              <p>
                Currently based in San Francisco, CA, and always excited to work on challenging projects that make a
                difference.
              </p>
            <p>
              In my free time, I enjoy hiking, reading, and experimenting with new technologies.
            </p>
            <div className='mt-8 p-4 border border-primary rounded bg-gray-900'>
            <div className='text-secondary mb-2'>{'>'} Personal.Details</div>
            <div>Location: San Francisco, CA</div>
                  <div>Experience: 5+ years</div>
                  <div>Focus: Full-Stack Development</div>
                  <div>Interests: Open Source, Cloud Technologies</div>
            </div>
        </div>
    </div>
  )
}

export default About