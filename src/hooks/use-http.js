import { useState, useCallback } from 'react'

const useHttp = ()=>{
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const sendRequest = useCallback(async (requestConfig,dataProcessor) => {
        setIsLoading(true);
        setError(null);

        try {
          const response = await fetch(
            requestConfig.url,{
                method:requestConfig.method ? requestConfig.method : "GET",
                body:JSON.stringify(requestConfig.body)?requestConfig.body: null,
                header:requestConfig.header ? requestConfig.header : {}
            }
          );
    
          if (!response.ok) {
            throw new Error('Request failed!');
          }
    
          const data = await response.json();
    
          dataProcessor(data)

        } catch (err) {
          setError(err.message || 'Something went wrong!');
        }
        setIsLoading(false);
    },[]);
    return {
        error : error,
        isLoading : isLoading,
        sendRequest : sendRequest
    }
}

export default useHttp