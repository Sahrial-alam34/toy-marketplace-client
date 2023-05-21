import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - House of Toy Cars`;
    },[title])
}

export default useTitle;