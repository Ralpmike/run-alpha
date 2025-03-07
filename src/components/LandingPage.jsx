import Button from "../ui/button";


export default function LandingPage() {
  return (
    <div className="bg-[url('/image.svg')] bg-cover h-dvh">
      <div className="flex flex-col items-center justify-center h-full text-white text-center  gap-6">
        <div className="space-y-3">
          <h1 className="text-[2rem] md:text-4xl lg:text-7xl md:max-w-4xl leading-[1.2] mx-auto font-semibold max-w-sm w-full">
            Redefining Investment with Data & Strategy
          </h1>

          <p className="text-[20px] md:text-[2rem] mx-auto max-w-3xl">Combining institutional expertise with AI-driven insights to maximize returns.</p>
        </div>

        <Button title="Get Started" type="button" className="md:text-[1.75rem]" isWhite={true}/>
         
       
      </div>

    </div>
  )
}
