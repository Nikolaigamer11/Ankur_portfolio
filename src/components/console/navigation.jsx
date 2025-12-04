export default function Navigation() {
  return (
    <nav class="flex  w-full items-center ">
      <div class="logo flex-1/5 ">
        <h3 class="m-4 hover:text-green-200 ">
          <a href="#">ANKU</a>R
        </h3>
      </div>
      <div class=" flex flex-4/5 justify-center items-center">
        <div class="m-4 hover:text-green-200">
          <a href="#">Home</a>
        </div>
        <div class="m-4 hover:text-green-200">
          <a href="#">About</a>
        </div>
        <div class="m-4 hover:text-green-200">
          <a href="#">Skills</a>
        </div>
      </div>
      <div class="flex flex-1/5 justify-center items-center">
        <div className="m-4 hover:text-green-200">
          <a href="#">links</a>
        </div>
        <div className="m-4 hover:text-green-200">
          <a href="#">links</a>
        </div>
        <div className="m-4 hover:text-green-200">
          <a href="#">links</a>
        </div>
      </div>
    </nav>
  );
}
