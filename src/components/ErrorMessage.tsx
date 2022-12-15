
interface ErrorMessageProps {
  error: string
}


const ErrorMessage = ({error}: ErrorMessageProps) => {
  return ( 
    <p className="text-centr text-6xl h-screen flex flex-col justify-center text-red-600">{ error }</p>
   );
}
 
export default ErrorMessage;