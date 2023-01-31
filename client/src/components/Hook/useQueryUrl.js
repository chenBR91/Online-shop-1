import {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom'

const useQueryUrl = () => {
    const [queryUrlObject, setQueryUrlObject] = useState({});
    let paramSearchObj = {};
    const location = useLocation()
    const locationSearch = location['search'];
    paramSearchObj['pathName'] = location['pathname'];

    useEffect(() => {
        const size = locationSearch.length;
        let objKey = '';
        let objValue = '';
        let isKey = true;
        
        for(let i=1; i<=size; i++) {
            if(locationSearch[i] !== '=' && locationSearch[i] !== '&') {
                if(i==size){
                    //paramSearchObj[objKey] = objValue;
                    setQueryUrlObject(...queryUrlObject, {objKey: objValue})
                }
                if(isKey) {
                    objKey += locationSearch[i];
                } else {
                    objValue += locationSearch[i];
                }
            }
            else if(locationSearch[i] === '=') {
                isKey = false;
            }
            else if(locationSearch[i] === '&') {
                isKey = true;
                //paramSearchObj[objKey] = objValue;
                setQueryUrlObject(...queryUrlObject, {objKey: objValue})
                objKey = '';
                objValue = '';
            }
        }
        //console.log('queryUrlObject', queryUrlObject);
        //return <p>queryUrlObject</p>
       
    },[])
    
}

export default useQueryUrl;


