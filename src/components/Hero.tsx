import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from './animations/FadeIn';

export function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-7">
            <FadeIn>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-blue-600 hover:text-blue-700 transition-colors">John Doe</span>
                <br />
                Full Stack Developer
              </h1>
            </FadeIn>
            <FadeIn delay="200">
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                I build exceptional digital experiences that make people's lives easier. 
                Focused on creating clean, user-friendly applications with modern technologies.
              </p>
            </FadeIn>
            <FadeIn delay="400">
              <div className="mt-8 flex flex-wrap gap-4">
                <a 
                  href="#projects" 
                  className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-all hover:scale-105"
                >
                  Contact Me
                </a>
              </div>
            </FadeIn>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-5">
            <FadeIn direction="left">
              <div className="aspect-w-5 aspect-h-6">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=687&ixlib=rb-4.0.3"
                  alt="Profile"
                  className="rounded-lg shadow-2xl object-cover transform hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}