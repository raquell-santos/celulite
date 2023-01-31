export default function Titles({children}:any) {
  return (
    <>
      <p className="text-gray-400 mb-4 text-sm font-normal uppercase"> 
        Você é única, a sua solução também!
      </p>
      <h2 className="text-white mb-8 text-2xl font-bold tracking-wide">
        {children}
      </h2>
    </>
  )
}