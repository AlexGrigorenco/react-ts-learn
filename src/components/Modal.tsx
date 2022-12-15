


interface ModalProps{
  children: React.ReactNode,
  title: string,
  onClose: () => void,
}



const Modal = ({ children, title, onClose }: ModalProps) => {

  return ( 

    <div tabIndex={0} onClick={onClose} className="fixed bg-black/80 top-0 left-0 right-0 bottom-0 flex items-center justify-center">

      <div onClick={(e) => e.stopPropagation()} className="w-1/2 h-1/2 px-10 pt-2 pb-10 bg-white rounded ">

        <h1 className="p-8 w-4/5 text-center text-2xl font-bold" >{ title }</h1>

        { children }

      </div>

    </div>

   );
}
 
export default Modal;