
function Team() {
  return (
   <div className="md:px-32 px-6 md:py-16 py-6 md:h-[1000px] w-full mx-auto text-center">
      <h1 className="text-3xl mb-12 font-semibold italic">Meet the Team</h1>
      
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-4 md:px-8">
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        <div>
          <img src="/team.png" alt="" />
          <p>Jane Doe</p>
        </div>
        
      </div>
    </div>
  )
}

export default Team