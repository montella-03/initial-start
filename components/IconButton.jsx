import Image from "next/image"

const IconButton = ({color,icon,text,handleOnclick,alt}) => {
  return (
    
    <button type="button" onClick={handleOnclick}
    className="rounded-full py-2 mt-2 flex justify-center hover:opacity-70 text-white "
    style={{backgroundColor:`${color}`}}>
     <Image
     src={icon}
     alt={alt}
     width={18}
     height={18}
     className="rounded mr-3 py-1"
     /> 
     {text} 
    </button>
    
  )
}

export default IconButton