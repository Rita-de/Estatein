import { Facebook, Music2, Youtube } from 'lucide-react'
import  'react'

const Footer = () => {
  return (
    <section className='w-full mt-3 pb-3'>
        <article className="flex flex-col md:flex-row justify-between items-center md:pr-16 bg-[#1A1A1A] h-auto md:h-10 pb-3 pt-3 gap-2 md:gap-0">
            <div className="flex flex-col md:flex-row items-center pl-5">
                <span>
                    <h2 className="text-xs md:text-base">@2025 Estatein. All Rights Reserved.</h2>
                </span>
                <span className="pl-0 md:pl-3 text-xs md:text-base">Terms & Conditions</span>
            </div>
            <div className="flex gap-3 pt-2 md:pt-1">
                <span className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
                    <Facebook className="w-5 h-5" />
                </span>
                <span className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
                    <Music2 className="w-5 h-5" />
                </span>
                <span className="bg-black w-9 h-9 rounded-full flex items-center justify-center">
                    <Youtube className="w-5 h-5" />
                </span>
            </div>
        </article>
    </section>
  )
}

export default Footer