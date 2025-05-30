
function Card(props) {
    console.log("prpos",props)
  return (
    <div class="max-w-sm mx-auto bg-white rounded-2xl shadow-md overflow-hidden p-4">
  <img
    class="w-full h-56 object-cover"
    src="https://th.bing.com/th/id/OIP.pEeKeUoENMqoN-kR8f8XoQHaFj?w=188&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    alt="This is sample image"
  />
  <div class="p-4">
    <h2 class="text-xl font-semibold mb-2">Tailwind</h2>
    <p class="text-gray-600">
      A utility-based CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.
    </p>
  </div>
</div>
  )
}

export default Card
