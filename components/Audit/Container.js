import { useEffect, useRef } from "react";


function Container(props){

    const refContainer = useRef(null);
    useEffect(()=>{
        const slider = refContainer.current
        let isDown = false;
        let startX;
        let scrollLeft;
        let goback = false

        function inView(element) {
            let windowHeight = window.innerHeight;
            let scrollY = window.scrollY || window.pageYOffset;
            
            let scrollPosition = scrollY + windowHeight;
            let elementPosition = element.getBoundingClientRect().top + scrollY + element.clientHeight;
            
            // is scroll position greater than element position? (is element in view?)
            if (scrollPosition > elementPosition) {
              return true;
            }
            
            return false;
        }

        function checkGoback(){
            if(slider.scrollLeft == 0){
                setTimeout(()=>{   
                    goback = false
                }, 300)
            } else if(slider.scrollLeft + slider.clientWidth >= slider.scrollWidth){
                setTimeout(()=>{   
                    goback = true
                }, 300)
            };
        }

        const handleMousedown = e=>{
            isDown = true;
            slider.classList.add('active');
            startX = e.pageX - slider.offsetLeft;
            scrollLeft = slider.scrollLeft;
        }
        slider.addEventListener("mousedown", handleMousedown);

        const handleMouseleave = () => {
            isDown = false;
            slider.classList.remove('active');
        }
        slider.addEventListener('mouseleave', handleMouseleave);

        const handleMouseup = () => {
            isDown = false;
            
            slider.classList.remove('active');
        }
        slider.addEventListener('mouseup', handleMouseup);

        const handleMousemove = (e) => {
            if(!isDown) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX) * 2;
            slider.scrollLeft = scrollLeft - walk;
            if(walk < 0){
                goback = false
            }else{
                goback = true
            }

            checkGoback()
        }
        slider.addEventListener('mousemove', handleMousemove);

        // autoplay
        // let isFullyScrolled = slider.scrollLeft + slider.clientWidth >= slider.scrollWidth;
        
        function autoplay() {
            if(inView(slider)){
                checkGoback()
                
                if(goback){
                    slider.scrollLeft = slider.scrollLeft - 1;
                }else{
                    slider.scrollLeft = slider.scrollLeft + 1;
                }
            }
            requestAnimationFrame(autoplay);
        }
        requestAnimationFrame(autoplay);

        return(()=>{
            slider.removeEventListener("mousedown", handleMousedown);
            slider.removeEventListener('mouseleave', handleMouseleave);
            slider.removeEventListener('mouseup', handleMouseup);
            slider.removeEventListener('mousemove', handleMousemove);
        });
    })

    return(
        <div ref={refContainer} className="mt-8 overflow-x-hidden inline-flex justify-start gap-x-10 whitespace-nowrap">
            {props.children}
        </div>
    );
}

export default Container