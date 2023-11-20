
function Contact() {
  return (
    <>
    <footer id="Contact" className="mt-24 text-white flex justify-center py-20 px-20 relative">
<div className="flex-1 uppercase max-w-xl">
<h3 className="text-2xl font-bold capitalize"> Let&apos;s get moving</h3>
<p className="text-gray-300 text-xs">Fill out this form to be contacted</p>
<form action="">
    <label className="flex flex-col mt-8 font-mono" htmlFor="fullname">
        Fullname
        <input className="mt-2 bg-transparent outline-none border-b border-b-indigo-300" type="text" id="fullname" name="name" placeholder="Enter your name" />
    </label>
    <label className="flex flex-col mt-8 font-mono" htmlFor="email">
        Email
        <input className="mt-2 bg-transparent outline-none border-b border-b-indigo-300" type="text" id="email" name="name" placeholder="Enter your email" />
    </label>
    <label className="flex flex-col mt-8 font-mono" htmlFor="phone">
        Phone
        <input className="mt-2 bg-transparent outline-none border-b border-b-indigo-300" type="text" id="phone" name="name" placeholder="Enter your phone" />
    </label>
    <input className="px-8 py-2 hover:brightness-125 hover:cursor-pointer font-mono mt-10 float-right" type="submit" value={"Submit"} />
</form>
</div>
    </footer>
    </>
  )
}

export default Contact
