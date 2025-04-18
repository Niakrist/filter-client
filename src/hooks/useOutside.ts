import {
    type Dispatch,
    type SetStateAction,
    useEffect,
    useRef,
    useState,
  } from "react";
  
  type TypeOut = {
    ref: any;
    isShow: boolean;
    setIsShow: Dispatch<SetStateAction<boolean>>;
  };
  
  export const useOutside = (initialIsVisible: boolean): TypeOut => {
    const [isShow, setIsShow] = useState(initialIsVisible);
    const ref = useRef<any>(null);
  
    const handleClickOutside = (event: Event) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsShow(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    });
  
    return { ref, isShow, setIsShow };
  };
  