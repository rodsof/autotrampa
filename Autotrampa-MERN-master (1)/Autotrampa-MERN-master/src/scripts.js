/*import { useEffect } from "react";

const useScript = (url) => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = url;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [url]);
};

export default useScript;*/
const loadScript = (url) =>
  new Promise((resolve, reject) => {
    let ready = false;
    if (!document) {
      reject(new Error("Document was not defined"));
    }
    const tag = document.getElementsByTagName("script")[0];
    const script = document.createElement("script");

    /*script.type = "text/javascript";*/
    script.src = url;
    /*script.async = true;*/

    if (tag.parentNode != null) {
      tag.parentNode.insertBefore(script, tag);
    }
  });

export default loadScript;
