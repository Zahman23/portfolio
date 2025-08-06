import { skills } from '@/data/data';
import React from 'react'

interface SkillsProps {
    ref:  React.RefObject<HTMLDivElement | null>;
}

const Skills = ({ref} : SkillsProps) => {
  return (
    <div id='skills' ref={ref} className="space-y-4 min-h-screen px-2">
            <div className="text-green-300 text-xl mb-4">{">"} cat skills.json</div>
            <div className="bg-gray-900 border border-green-400 p-4 rounded">
              <div className="text-gray-300">
                <div className="text-yellow-400">{"{"}</div>
                <div className="ml-4">
                  <span className="text-blue-400">&quot;technologies&quot;</span>: [
                  <div className="ml-4 grid grid-cols-2 md:grid-cols-3 gap-2 my-2">
                    {skills.map((skill, index) => (
                      <div key={index} className="text-green-400">
                        &quot;{skill}&quot;{index < skills.length - 1 ? "," : ""}
                      </div>
                    ))}
                  </div>
                  ],
                  <div className="mt-4">
                    <span className="text-blue-400">&quot;experience_level&quot;</span>:{" "}
                    <span className="text-green-400">&quot;Senior&quot;</span>,
                  </div>
                  <div>
                    <span className="text-blue-400">&quot;years_coding&quot;</span>: <span className="text-green-400">5</span>,
                  </div>
                  <div>
                    <span className="text-blue-400">&quot;favorite_stack&quot;</span>:{" "}
                    <span className="text-green-400">&quot;Next.js + TypeScript + PostgreSQL&quot;</span>
                  </div>
                </div>
                <div className="text-yellow-400">{"}"}</div>
              </div>
            </div>
          </div>
  )
}

export default Skills