import { useEffect } from 'react'

export default (ref,handler) => {
    useEffect(()=>{
        const listener=(e)=>{
            if(!ref.current || ref.current.contains(e.target))
            {
                return;
            }
            handler()
        }
            document.addEventListener("mousedown",listener);
            document.addEventListener("touchstart",listener);


            return ()=>{
                document.removeEventListener("mousedown",listener);
                document.removeEventListener("touchstart",listener);
            }

    },[ref,handler])
}
