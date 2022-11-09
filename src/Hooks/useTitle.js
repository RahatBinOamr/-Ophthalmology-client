import { useEffect } from "react"

const useTitle = title=> {
    useEffect(()=>{
document.title=`${title} - Ophthalmology`
    },[title])
}
export default useTitle