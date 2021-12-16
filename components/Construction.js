import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Image from 'next/image'
import Button from "./Button/PrimaryButton"


function Construction(props){
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }
    return (
        <>
          <Transition appear show={isOpen} as={Fragment}>
            <Dialog
              as="div"
              className="fixed inset-0 z-10 overflow-y-auto"
              onClose={closeModal}
            >
              <div className="min-h-screen px-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Dialog.Overlay className="fixed inset-0" />
                </Transition.Child>
    
                {/* This element is to trick the browser into centering the modal contents. */}
                <span
                  className="inline-block h-screen align-middle"
                  aria-hidden="true"
                >
                  &#8203;
                </span>
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                        <div className='flex flex-col justify-center place-items-center'>
                            <div className='w-48 h-48 md:h-72 md:w-72'>
                                <Image src="/frog_construction.png" layout='responsive' width={400} height={400} priority={true}  />
                            </div>
                            <h1 className='font-sans text-base text-center'>Our website is currently under construction<br/>Some features might not work as expected. Thank you for your patience.</h1>
                        </div>
                    
    
                    <div className="mt-4 retro-btn">
                      <button
                        type="button"
                        className="w-full flex items-center justify-center border-2 border-gray-primary box-border px-6 py-3 md:py-3 md:px-10 text-white bg-green-600 hover:bg-green-700"
                        onClick={closeModal}
                      >
                        Got it, thanks!
                      </button>

                    </div>
                  </div>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition>
        </>
      )
}

export default Construction