function Card({username,btnText = "visit me"}) {
    console.log(username)
  return (
    <div className="max-w-sm mx-auto rounded-2xl shadow-md overflow-hidden p-4">
  <img
    className="w-full h-56 object-cover"
    src="https://th.bing.com/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?w=188&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="This is sample image"
  />
  <div className="p-4">
    <h2 className="text-xl font-semibold mb-2">Tailwind</h2>
    <p className="text-gray-600">
      A utility-based CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </p>
    <button className="bg-amber-500 text-black mt-2 inline-flex cursor-pointer items-center text-sm font-semibold ">
      {btnText}
    </button>
  </div>
</div>
  )
}

export default Card
