import { useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";

const AuthForm = ({ image, data, btnVal }) => {
  const [formData, setFormData] = useState({});
  const [resMessage, setResMessage] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with formData, such as sending it to the server
    try {

      const response = await fetch('http://localhost:3600/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      if (!response.ok) {
        setResMessage('Failed to post data!')
        throw new Error('Failed to post data');
      }

      // Do something with the response, if needed
      const result = await response.json();
      setResMessage(result.msg)

    } catch (error) {
      console.log('Error in posting data', error)
    }
  };

  return (
    <>
      {resMessage && (<div className=" absolute flex flex-row items-center gap-2 p-4 text-sm text-gray-800 rounded-lg bg-gray-200 right-0 mx-4 my-2" role="alert">
        <span>{resMessage}</span>
        <span 
          className=" text-gray-400 text-lg hover:text-gray-800 cursor-pointer"
          onClick={()=>setResMessage(null)}
        ><IoMdCloseCircle /></span>
      </div>)}
      <section className='flex justify-center items-center h-screen w-screen md:justify-around lg:justify-start xl:justify-start'>
        <div className="w-3/5">
          <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
            {data.map((e) => (
              <div key={e.id} className="relative z-0 w-full mb-5 group">
                <input
                  type={e.type}
                  name={e.title}
                  id={e.title}
                  onChange={handleInputChange}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-coral-red peer"
                  placeholder=" "
                  required
                />
                <label
                  htmlFor={e.title}
                  className=" capitalize peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-coral-red peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  {e.title}
                </label>
              </div>
            ))}
            <button
              type="submit"
              className="text-white bg-coral-red font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
            >
              {btnVal}
            </button>
          </form>
        </div>
        <div className="w-[40%] hidden md:flex lg:flex xl:flex">
          <img src={image} alt='vector image' className='h-full w-full' />
        </div>
      </section>
    </>
  );
};

export default AuthForm;
