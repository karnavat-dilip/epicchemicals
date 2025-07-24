import React, { useEffect, useRef } from 'react'

function TranslateComponent() {
    const GoogleTranslateRef= useRef(null);

    useEffect(()=>{
        let IntervalId;

        const checkgoogletranslate = ()=>{
                if (window.google && window.google.translate) {
                    clearInterval(IntervalId)
                    new window.google.translate.TranslateElement(
                        {pageLanguage:'en',layout:window.google.translate.TranslateElement.InlineLayout.SIMPLE},
                        GoogleTranslateRef.current
                    )
                }
        }

        IntervalId =setInterval(checkgoogletranslate, 100);
    },[])
  return (
    <div>
        <div ref={GoogleTranslateRef}></div>
    </div>
  )
}

export default TranslateComponent
